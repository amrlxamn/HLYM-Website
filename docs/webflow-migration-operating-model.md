# Webflow Migration Operating Model

## Goal

The public website will move to Webflow as the primary hosting and editing
platform. This repository remains the source for advanced React code
components, integration contracts, tests, and developer-owned workflows.

The v1 backend boundary is n8n. Do not add a Node backend unless n8n can no
longer meet the integration requirement.

## Target Architecture

```txt
Webflow native pages/forms -> n8n webhook -> GenCode CRM or other CRM
Webflow Code Components -> n8n/API endpoints only when external data is needed
Codebase -> source of advanced components, tests, and integration contracts
```

Webflow owns the editable website surface. n8n owns secrets and automation.
GenCode CRM remains a separate project outside this repository.

## Support Levels

### L1: Webflow Platform

L1 handles day-to-day website support inside Webflow:

- Edit copy, images, SEO fields, CMS records, and simple page sections.
- Publish routine Webflow content changes.
- Review native form submissions and visible form behavior.
- Escalate if a form reaches n8n but CRM handoff fails.

L1 does not edit this repository, n8n workflow logic, CRM schema, or API keys.

### L2: Webflow and Codebase

L2 handles implementation support that spans Webflow and this repository:

- Maintain Webflow Code Component props and CMS field mappings.
- Publish Code Component updates through the Webflow library workflow.
- Update n8n payload mappings when the Webflow form changes.
- Diagnose integration failures using Webflow form data and n8n executions.

L2 can change repo code and n8n workflow templates, but does not own CRM
infrastructure or production secrets.

### L3: Integration and Infrastructure

L3 owns the production integration layer:

- Manage n8n hosting, webhook URLs, credentials, logs, and backups.
- Manage GenCode CRM API keys, workspace schema, and CRM endpoint validation.
- Own security reviews for webhook, CRM, and automation changes.
- Decide whether a dedicated backend is needed after n8n limits are proven.

## Backend Decision

Use n8n only for v1.

A separate backend becomes justified only when the website needs authenticated
customer features, long-lived app state outside Webflow/CRM, complex
transactional logic, high-volume API controls, or audit/reporting needs that
n8n cannot support cleanly.

## Contact Enquiry Flow

The Webflow enquiry form posts to:

```txt
POST https://<n8n-host>/webhook/webflow-contact-enquiry
```

The n8n workflow template lives at:

```txt
docs/n8n/webflow-contact-to-crm.workflow.json
```

n8n validates the payload, stores CRM credentials, normalizes the CRM body, and
sends the request to `CRM_LEAD_ENDPOINT_URL`.

## Required Webflow Payload

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

## Release Checklist

Before publishing a Webflow-backed feature:

1. Confirm whether the section is native Webflow, CMS-backed, or a Code
   Component.
2. Confirm L1 can update routine content without repository changes.
3. Run repository checks for Code Component changes.
4. Test the Webflow form against the n8n test webhook.
5. Test the n8n production webhook against the selected CRM endpoint.
6. Confirm no CRM credentials are exposed in Webflow custom code.

## Developer Commands

```bash
npm run lint
npm run typecheck
npm run test:run
npm run webflow:library:bundle
npm run webflow:library:share
```
