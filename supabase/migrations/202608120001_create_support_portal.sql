create type public.support_staff_role as enum ('agent', 'manager', 'administrator', 'viewer');

create table public.support_staff (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  display_name text not null default '',
  role public.support_staff_role not null default 'agent',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.support_access_tokens (
  id uuid primary key default gen_random_uuid(),
  ticket_reference text not null,
  customer_email_hash text not null,
  token_hash text not null unique,
  expires_at timestamptz not null,
  consumed_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.support_sessions (
  id uuid primary key default gen_random_uuid(),
  ticket_reference text not null,
  session_hash text not null unique,
  expires_at timestamptz not null,
  last_accessed_at timestamptz not null default now(),
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.support_attachment_objects (
  id uuid primary key default gen_random_uuid(),
  ticket_reference text not null,
  message_id text,
  storage_path text not null unique,
  original_filename text not null,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes > 0 and size_bytes <= 10485760),
  uploaded_by_type text not null check (uploaded_by_type in ('customer', 'staff')),
  scan_status text not null default 'pending' check (scan_status in ('pending', 'clean', 'rejected')),
  created_at timestamptz not null default now()
);

create table public.support_audit_events (
  id bigint generated always as identity primary key,
  event_type text not null,
  ticket_reference text,
  actor_type text not null,
  actor_id text,
  request_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.support_staff enable row level security;
alter table public.support_access_tokens enable row level security;
alter table public.support_sessions enable row level security;
alter table public.support_attachment_objects enable row level security;
alter table public.support_audit_events enable row level security;

create policy "staff can read own profile"
on public.support_staff for select
to authenticated
using (user_id = auth.uid() and is_active);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'support-attachments',
  'support-attachments',
  false,
  10485760,
  array['application/pdf', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create index support_access_tokens_ticket_reference_idx
on public.support_access_tokens (ticket_reference);

create index support_sessions_ticket_reference_idx
on public.support_sessions (ticket_reference);

create index support_attachment_objects_ticket_reference_idx
on public.support_attachment_objects (ticket_reference);

create index support_audit_events_ticket_reference_created_at_idx
on public.support_audit_events (ticket_reference, created_at desc);
