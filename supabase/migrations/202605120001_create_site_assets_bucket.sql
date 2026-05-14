insert into storage.buckets (id, name, public, file_size_limit)
values ('site-assets', 'site-assets', true, 52428800)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit;

drop policy if exists "Public site assets are readable" on storage.objects;

create policy "Public site assets are readable"
on storage.objects
for select
to public
using (bucket_id = 'site-assets');
