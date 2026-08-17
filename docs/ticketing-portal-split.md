# Ticketing Portal Split - Shared Knowledge

The support portal was split out of this repo on `feat/contact-hero-layout` (commit
`2c80a03`) into its own repository: `amrlxamn/Ticketing-Portal`.

## What moved out (do not re-add here)

- `src/features/support-portal/` - all portal pages, styles, hooks, utils, types
- `api/support-*.ts` - the 8 portal API routes
- Portal-only `server/support/` files (admin queue, staff auth, attachments, sessions,
  public ticket, status updates, magic links, reply notifications)
- `src/lib/support-supabase-client.ts`
- `docs/support-portal-operations.md`, `docs/support-portal-airtable-schema.md`,
  `docs/n8n/hlym-support-notifications*`, `docs/n8n/hlym-airtable-reply-sync*`

## What stays here (ticket intake for the contact form)

- `api/contact-enquiries.ts` - contact form -> Airtable ticket creation
- `server/support/` intake closure: `create-support-ticket.ts`, `create-customer-access-token.ts`,
  `notify-support-access-link.ts`, `post-support-notification.ts`, Airtable/Supabase helpers,
  `support-ticket.schema.ts` (moved from `src/features/support-portal/schemas/`), Turnstile verify
- `src/components/ui/turnstile/` - used by the contact form
- Env: `VITE_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `AIRTABLE_*`, `SUPPORT_*`,
  `N8N_SUPPORT_WEBHOOK_*`, `SUPABASE_*`

## Shared design system

Both repos own a copy of the same design system: `src/theme/`, `src/styles/global-style.ts`,
`src/components/ui/`. This repo is the origin. If tokens or UI primitives change here,
copy the changed files into the portal repo (`Ticketing-Portal`) and vice versa - never
import across repos. See `Ticketing-Portal/docs/handoff-checklist.md` for the full
portal-side checklist and design rules.
