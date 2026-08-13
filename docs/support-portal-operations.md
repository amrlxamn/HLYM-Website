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
only in the ignored `n8n-docker/.env` file. Workflow `HLYM Support Notifications` is imported but
must remain inactive until an approved Gmail or Microsoft 365 credential is connected and the
email node is added.

## Launch blockers

1. Connect an approved email credential in n8n and activate the notification workflow.
2. Configure `N8N_SUPPORT_WEBHOOK_URL` and `N8N_SUPPORT_WEBHOOK_SECRET` in Vercel.
3. Add Cloudflare Turnstile to anonymous ticket creation and access requests.
4. Configure production support URL and production-only secrets.
5. Complete malware scanning before allowing downloaded customer attachments in staff workflows.
6. Run user acceptance testing before adding the server variables to Production.
