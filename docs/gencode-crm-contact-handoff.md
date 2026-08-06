# GenCode CRM Contact Handoff

## Project Boundary

GenCode CRM is a separate project at:

```txt
/Volumes/SSD 480G B/MacBook Air/Documents/gencode-crm
```

Do not keep the CRM source inside this website repository. The website should
only contain the contact UI, Webflow integration notes, and the n8n/API
boundary that sends validated enquiries to GenCode CRM or another CRM.

## Current Contact Page

The contact page currently has:

- Branch cards for Selangor, Johor, Pahang, Penang, and Perak.
- A support search input for article discovery.
- A featured enquiry card that links to `#contact-form`.

The page includes the enquiry drawer UI. When this project is rebuilt in
Webflow, the Webflow form must submit to n8n instead of directly to GenCode
CRM.

The React implementation submits to the same n8n boundary while Webflow is not
ready. For local development, keep the browser-facing value pointed at the
same-origin API path:

```txt
VITE_CONTACT_ENQUIRY_WEBHOOK_URL=/api/contact-enquiries
```

In Vite dev, that path is proxied to:

```txt
http://localhost:5679/webhook/webflow-contact-enquiry
```

In Vercel or another hosted deployment, keep the `VITE_*` value as
`/api/contact-enquiries` and configure the server-side function instead:

```txt
CONTACT_ENQUIRY_WEBHOOK_URL=https://<n8n-host>/webhook/webflow-contact-enquiry
```

This keeps the n8n URL out of the client bundle. CRM credentials still belong
in n8n only.

## Integration Boundary

Use n8n as the first server-side boundary:

```txt
Webflow form -> n8n webhook -> CRM REST API
```

Webflow must not know CRM credentials. n8n owns validation, rate limits,
idempotency, CRM credentials, and provider routing.

Import this n8n workflow template:

```txt
docs/n8n/webflow-contact-to-crm.workflow.json
```

## Webflow Submit Target

Configure the Webflow form action to the production n8n webhook URL:

```txt
POST https://<n8n-host>/webhook/webflow-contact-enquiry
Content-Type: application/json
```

For local n8n testing, use:

```txt
POST http://localhost:5679/webhook-test/webflow-contact-enquiry
```

For the React development server after the workflow is active in n8n, use:

```txt
POST /api/contact-enquiries
```

For hosted React deployments, `/api/contact-enquiries` is handled by the
Vercel serverless route in `api/contact-enquiries.ts`.

## Payload Contract

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "topic": "string",
  "message": "string",
  "preferredBranch": "selangor | johor | pahang | penang | perak | unknown",
  "source": "webflow-contact-page",
  "submissionId": "uuid",
  "consent": true
}
```

Optional fields supported by the n8n workflow:

```json
{
  "title": "string",
  "ownerType": "owner | non-owner | prospect",
  "vehicleModel": "string",
  "yearOfPurchase": "string"
}
```

## n8n Environment

```txt
CRM_PROVIDER=gencode-crm
CRM_LEAD_ENDPOINT_URL=https://<crm-host>/rest/people
CRM_API_KEY=<scoped-server-side-api-key>
CRM_DEFAULT_SOURCE=webflow-contact-page
```

For another CRM, keep the Webflow payload unchanged and point
`CRM_LEAD_ENDPOINT_URL` at that CRM's lead/contact endpoint. If the target CRM
needs a different body shape, update only the n8n normalization node.

## GenCode CRM API Notes

The GenCode CRM fork exposes generated OpenAPI schemas at:

```txt
GET /open-api/core
GET /open-api/metadata
```

The REST controller is mounted at `/rest`, and object paths use the object
plural name. For people/contact creation, confirm the live schema includes the
`people` path, then use:

```txt
POST /rest/people
Authorization: Bearer <api-key>
```

The n8n template currently maps the enquiry into the standard Twenty/GenCode
person fields: `name`, `emails`, `phones`, `city`, and `jobTitle`.

## Security Requirements

- Keep `CRM_API_KEY` server-only in n8n.
- Do not add CRM secrets to `VITE_*` variables.
- Do not point `VITE_CONTACT_ENQUIRY_WEBHOOK_URL` directly at n8n in hosted
  deployments; use the same-origin `/api/contact-enquiries` route.
- Validate and rate limit the n8n webhook.
- Log `submissionId` and CRM record IDs only, not raw personal data.
- Treat support-search input as search behavior only; it must not create CRM
  records.
- Restrict CORS/origin access to the final Webflow domains.
- Add bot protection on the Webflow form before public launch.

## Next Steps

1. Start GenCode CRM and create a scoped API key for contact creation.
2. Open `GET /open-api/core` on the live CRM and verify the people path and
   request body fields.
3. Import `docs/n8n/webflow-contact-to-crm.workflow.json` into n8n.
4. Set `CRM_PROVIDER`, `CRM_LEAD_ENDPOINT_URL`, and `CRM_API_KEY` in n8n.
5. Point the Webflow enquiry form to the n8n production webhook.
6. Submit one test enquiry and verify the CRM record plus n8n execution log.
