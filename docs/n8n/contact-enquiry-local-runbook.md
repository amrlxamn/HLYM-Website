# Contact Enquiry Local n8n Runbook

## Purpose

Use this setup while Webflow is not ready. The React app submits to:

```txt
POST /api/contact-enquiries
```

Vite proxies that request to local n8n:

```txt
http://localhost:5679/webhook/webflow-contact-enquiry
```

n8n then sends the normalized contact payload to GenCode CRM.

## Prerequisites

- Docker is running.
- GenCode CRM is running and reachable from Docker.
- A scoped GenCode CRM API key exists.
- The GenCode CRM REST schema exposes `POST /rest/people`.

If GenCode CRM is running on your host machine, Docker usually reaches it with:

```txt
http://host.docker.internal:<crm-port>/rest/people
```

## Configure n8n

Create the local env file:

```bash
cp docs/n8n/webflow-contact-to-crm.env.example \
  docs/n8n/webflow-contact-to-crm.local.env
```

Edit `docs/n8n/webflow-contact-to-crm.local.env`:

```txt
CRM_PROVIDER=gencode-crm
CRM_LEAD_ENDPOINT_URL=http://host.docker.internal:<crm-port>/rest/people
CRM_API_KEY=<scoped-gencode-crm-api-key>
CRM_DEFAULT_SOURCE=webflow-contact-page
```

Do not commit `webflow-contact-to-crm.local.env`.

## Start n8n

For daily start, stop, status, and log commands, use:

```txt
docs/n8n/contact-n8n-control.md
```

```bash
sh scripts/start-contact-n8n.sh
```

Then open:

```txt
http://localhost:5679
```

The script:

- creates `.n8n-contact/` for local n8n data,
- imports `docs/n8n/webflow-contact-to-crm.workflow.json`,
- starts n8n in Docker at `http://localhost:<N8N_PORT>`.

To stop the local contact workflow container:

```bash
docker stop hlym-contact-n8n
```

Open n8n and activate the imported workflow if it is not already active:

```txt
http://localhost:<N8N_PORT>
```

Current n8n versions require a local owner account. This is not an n8n cloud
subscription. Create a local-only owner when the setup screen appears, then use
that email and password for future local logins.

If n8n shows a login screen but nobody knows the local credentials, stop the
script, delete the local `.n8n-contact/` directory, and rerun the script. The
workflow is imported again from `docs/n8n/webflow-contact-to-crm.workflow.json`.

## Run React

In another terminal:

```bash
npm run dev
```

If n8n is running on a non-default port, pass the same port to Vite:

```bash
N8N_PORT=5679 npm run dev
```

Confirm `.env` or `.env.local` contains:

```txt
VITE_CONTACT_ENQUIRY_WEBHOOK_URL=/api/contact-enquiries
```

Submit the contact enquiry drawer. The request path is:

```txt
React -> /api/contact-enquiries -> Vite proxy -> n8n -> GenCode CRM
```

## Smoke Test

With n8n running, you can test the webhook directly:

```bash
curl -X POST http://localhost:5679/webhook/webflow-contact-enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Aina Rahman",
    "email": "aina@example.com",
    "phone": "+60123456789",
    "topic": "General",
    "message": "Testing contact handoff",
    "preferredBranch": "selangor",
    "source": "webflow-contact-page",
    "submissionId": "local-smoke-test-001",
    "consent": true,
    "title": "Mr.",
    "ownerType": "owner",
    "vehicleModel": "Yamaha NVX",
    "yearOfPurchase": "2025"
  }'
```

Expected result:

- n8n execution succeeds,
- GenCode CRM receives or creates the contact record,
- response is HTTP `202` with `success: true`.

## Troubleshooting

- If n8n reports `EACCES: permission denied, open '/home/node/.n8n/config'`,
  rerun `sh scripts/start-contact-n8n.sh`. The script fixes ownership for the
  local `.n8n-contact/` mount before importing the workflow.
- If n8n redirects to `/signin` and nobody created a local account for this
  workflow, confirm you are not opening an older n8n container on port `5678`.
  Run this workflow on `5679` with `N8N_PORT=5679 sh scripts/start-contact-n8n.sh`.
- If React shows `Submission failed`, check the n8n execution log first.
- If n8n cannot reach GenCode CRM, verify `CRM_LEAD_ENDPOINT_URL` from inside
  Docker. For a host service, use `host.docker.internal`.
- If GenCode CRM returns `401`, rotate or replace `CRM_API_KEY`.
- If GenCode CRM returns `404`, confirm the live OpenAPI schema exposes
  `/rest/people`.
