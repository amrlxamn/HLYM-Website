# Contact n8n Control

## Purpose

Use this document to start, stop, and verify the local n8n workflow that sends
contact enquiry submissions to GenCode CRM.

## Start n8n

Use port `5679` for this project because another local n8n already uses
`5678`.

```bash
N8N_PORT=5679 sh scripts/start-contact-n8n.sh
```

Expected output:

```txt
n8n contact workflow is running at http://localhost:5679
```

Open:

```txt
http://127.0.0.1:5679
```

If `localhost` does not resolve correctly in the browser, use `127.0.0.1`.

## Stop n8n

```bash
docker stop hlym-contact-n8n
```

The container uses `--rm`, so Docker removes the stopped container. The local
n8n data remains in `.n8n-contact/`.

## Check Status

```bash
docker ps --filter name=hlym-contact-n8n
```

n8n is on when the output includes:

```txt
hlym-contact-n8n
0.0.0.0:5679->5678/tcp
```

## Check Logs

```bash
docker logs --tail 60 hlym-contact-n8n
```

Healthy startup includes:

```txt
Editor is now accessible via:
http://localhost:5679
```

## Run React Against n8n

Start the React dev server with the same n8n port:

```bash
N8N_PORT=5679 npm run dev
```

The local request path is:

```txt
React -> /api/contact-enquiries -> Vite proxy -> n8n -> GenCode CRM
```

## Reset Local n8n Login

Only do this when nobody knows the local n8n owner login.

```bash
docker stop hlym-contact-n8n
```

Then remove the local n8n data directory manually and start again:

```bash
N8N_PORT=5679 sh scripts/start-contact-n8n.sh
```

Create a new local owner account at:

```txt
http://127.0.0.1:5679
```

## Smoke Test

With n8n running:

```bash
curl -X POST http://127.0.0.1:5679/webhook/webflow-contact-enquiry \
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
    "consent": true
  }'
```

Expected result:

```txt
HTTP 202
success: true
```
