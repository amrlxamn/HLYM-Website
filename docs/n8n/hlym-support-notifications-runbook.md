# HLYM Support Notifications

## Local owner

- URL: `http://localhost:5678`
- Owner email: `dev23gencode@gmail.com`
- The generated password is stored only in the ignored file
  `/Volumes/SSD 480G B/MacBook Air/Documents/n8n-docker/.env` under
  `N8N_OWNER_PASSWORD`.

## Import

```bash
docker compose exec -T n8n n8n import:workflow \
  --input=/tmp/hlym-support-notifications.workflow.json
```

The workflow initially validates signed events and returns `202`. Before activation:

1. Add `N8N_SUPPORT_WEBHOOK_SECRET` to the n8n container environment.
2. Connect an approved Gmail OAuth or Microsoft 365 credential.
3. Add an email node after `Validate Event`.
4. Select the subject and body from the `event` value.
5. Activate the workflow.
6. Configure the website server with the production webhook URL and the same secret.

Do not activate the workflow without a real email node. A successful webhook response must mean
the notification has been accepted by the email provider, not merely received by n8n.
