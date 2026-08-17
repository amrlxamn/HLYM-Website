# HLYM Support Notifications

## Local owner

- URL: `http://localhost:5678`
- Owner email: `dev23gencode@gmail.com`
- The generated password is stored only in the ignored file
  `/Volumes/SSD 480G B/MacBook Air/Documents/n8n-docker/.env` under
  `N8N_OWNER_PASSWORD`.

## Workflows

Two n8n workflows drive portal email automation:

1. **HLYM Support Notifications** — receives signed events from the Vercel API
   (`support.access.requested`, `support.staff.magic-link`, `support.ticket.created`,
   `support.customer.replied`, `support.staff.replied`, `support.status.changed`) and
   sends the matching email.
2. **HLYM Airtable Reply Sync** — webhook called by an Airtable Automation when a
   staff reply is created directly inside Airtable, so the customer still gets the
   "new reply" email.

## Import

```bash
docker compose exec -T n8n n8n import:workflow \
  --input=/tmp/hlym-support-notifications.workflow.json
```

Repeat with `docs/n8n/hlym-airtable-reply-sync.workflow.json`.

## Before activation

1. Add `N8N_SUPPORT_WEBHOOK_SECRET` and `SUPPORT_PUBLIC_BASE_URL` to the n8n
   container environment. The same secret must be set on the website server.
2. Connect an approved Gmail OAuth credential and assign it to every
   `n8n-nodes-base.gmail` node (six in the notifications workflow, one in the reply
   sync workflow). The JSON references a placeholder credential.
3. Activate both workflows.
4. Configure the website server with the production webhook URL and the same secret.

Do not activate the workflows without a real email node. A successful webhook response
must mean the notification has been accepted by the email provider, not merely received
by n8n. Each workflow responds `202` only after the Gmail node succeeds.

## Airtable Automation (reply sync)

In Airtable, create an Automation on the **Messages** table:

- Trigger: **When record created** where `Author Type` is `Staff` and
  `Visibility` is `Public` and `Channel` is `Airtable`.
- Step: **Send webhook** to
  `https://<n8n-host>/webhook/hlym-airtable-reply-sync`
  with header `X-Support-Webhook-Secret: <same secret>` and JSON body:

```json
{
  "ticketReference": "{{ticket reference}}",
  "email": "{{customer email}}",
  "body": "{{body}}",
  "visibility": "{{visibility}}"
}
```

The Automation must resolve the customer email from the linked ticket. After the
webhook succeeds, optionally update `Notification Status` to `Sent`.

## Smoke test

With n8n running, post a signed event:

```bash
curl -X POST http://localhost:5678/webhook/hlym-support-notifications \
  -H "Content-Type: application/json" \
  -H "X-Support-Webhook-Secret: $N8N_SUPPORT_WEBHOOK_SECRET" \
  -d '{
    "event": "support.access.requested",
    "email": "customer@example.com",
    "ticketReference": "HLYM-2026-ABCDEF",
    "magicLink": "http://localhost:5173/support/access?token=test"
  }'
```

Expected: HTTP `202` and the email lands in the Gmail inbox.
