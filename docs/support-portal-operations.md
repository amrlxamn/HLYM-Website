# HLYM Support Portal Operations

## Preview

- Public portal: `https://hlym-support-preview.vercel.app/support`
- Customer access: `https://hlym-support-preview.vercel.app/support/access`
- Staff portal: `https://hlym-support-preview.vercel.app/support/admin`

The preview is protected by Vercel Authentication. Use `vercel curl` for automated API checks.

## Airtable

- Base: `appWNfQB1s9OPWLaT`
- Tickets: `tbliyrDjEMzAdEXMF`
- Messages: `tblKBy4gXv45so3vI`
- Attachments: `tblDeYTXLaMSh2gNr`
- Settings: `tbl89qnTl8C9zFlmK`
- FAQ: `tblbEo0TgMZCzfHyR`

The starter `Table 1` remains untouched. Runtime credentials are server-only.

## Supabase

Migration `202608120001_create_support_portal.sql` is applied to the HLYM Supabase project. It
creates staff, customer-access, session, attachment, and audit tables plus the private
`support-attachments` bucket.

Initial administrator: `dev23gencode@gmail.com`.

## n8n

The isolated local instance is available at `http://localhost:5678`. The owner password is stored
only in the ignored `n8n-docker/.env` file. Two workflows automate portal email:
`HLYM Support Notifications` (signed events from the Vercel API) and
`HLYM Airtable Reply Sync` (Airtable Automation webhook for replies made in Airtable).
Both ship with Gmail nodes and stay inactive until an approved Gmail OAuth credential is
connected. See `docs/n8n/hlym-support-notifications-runbook.md`.

## Security

Cloudflare Turnstile protects anonymous ticket creation, customer access requests, and
staff auth requests. The widget renders when `VITE_TURNSTILE_SITE_KEY` is set; the Vercel
functions verify the token against `TURNSTILE_SECRET_KEY`. See
`docs/support-portal-airtable-schema.md` for the full env contract.

## Launch blockers

1. Connect an approved Gmail OAuth credential in n8n and activate both workflows.
2. Configure `N8N_SUPPORT_WEBHOOK_URL`, `N8N_SUPPORT_WEBHOOK_SECRET`, `SUPPORT_PUBLIC_BASE_URL`,
   `SUPPORT_INBOX_EMAIL`, `VITE_TURNSTILE_SITE_KEY`, and `TURNSTILE_SECRET_KEY` in Vercel.
3. Create the Airtable Automation that posts staff replies to `hlym-airtable-reply-sync`.
4. Configure production support URL and production-only secrets.
5. Complete malware scanning before allowing downloaded customer attachments in staff workflows.
6. Run user acceptance testing before adding the server variables to Production.
