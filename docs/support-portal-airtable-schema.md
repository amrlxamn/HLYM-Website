# HLYM Support Portal - Airtable Schema

This document is the field contract between the portal (Vercel functions), n8n, and
Airtable. Field names are exact; do not rename a field without updating the code and
this document together.

## Base

- Base ID: `appWNfQB1s9OPWLaT`

## Tickets (`tbliyrDjEMzAdEXMF`)

| Field | Type | Notes |
| --- | --- | --- |
| `Ticket Reference` | Single line text | Unique `HLYM-YYYY-XXXXXX`. Created by the portal. |
| `Submission ID` | Single line text | Idempotency key from the contact form. Prevents duplicate tickets. |
| `Customer Name` | Single line text | |
| `Customer Email` | Email | Used for notifications and access lookups. |
| `Primary Phone` | Single line text | |
| `Alternate Phone` | Single line text | Optional. |
| `Title` | Single line text | Mr. / Ms. / etc. |
| `Owner Type` | Single line text | Owner / non-owner. |
| `Vehicle Model` | Single line text | Optional. |
| `Year of Purchase` | Single line text | Optional. |
| `Registration Number` | Single line text | Optional. |
| `Mileage` | Single line text | Optional. |
| `Dealer Shop` | Single line text | Optional. |
| `Preferred Branch` | Single line text | |
| `Topic` | Single line text | Contact topic. |
| `Subject` | Single line text | Display subject for the portal. |
| `Status` | Single select | `Submitted`, `In Progress`, `Awaiting Customer`, `Resolved`, `Closed`. |
| `Priority` | Single select | `Normal` (default). Extendable. |
| `Source` | Single line text | `webflow-contact-page`. |
| `Consent Timestamp` | Date | ISO timestamp when consent was given. |
| `Created At` | Date | ISO timestamp. |
| `Updated At` | Date | ISO timestamp, updated on status change. |

## Messages (`tblKBy4gXv45so3vI`)

| Field | Type | Notes |
| --- | --- | --- |
| `Message ID` | Single line text | UUID, created by the portal. |
| `Ticket Reference` | Single line text | Links to Tickets. |
| `Author Name` | Single line text | Customer name or staff display name. |
| `Author Email` | Email | Customer or staff email. |
| `Author Type` | Single select | `Customer` or `Staff`. |
| `Body` | Long text | Message content. |
| `Channel` | Single select | `Contact Form`, `Customer Portal`, `Staff Portal`, `Airtable`. |
| `Visibility` | Single select | `Public` (visible to customer) or `Internal` (staff only). |
| `Notification Status` | Single select | `Pending`, `Sent`, `Not Required`. See notifications below. |
| `Idempotency Key` | Single line text | UUID to make message creation retry-safe. |
| `Created At` | Date | ISO timestamp. |

### Notification Status lifecycle

- Portal-created customer messages: `Pending`.
- Portal-created public staff messages: `Pending`; internal staff messages: `Not Required`.
- n8n sends the email and flips `Pending` to `Sent`.
- Messages created directly in Airtable (admin replies) should set
  `Channel = Airtable`, `Visibility = Public`, and `Notification Status = Pending`;
  the Airtable Automation webhook then emails the customer.

## Attachments (`tblDeYTXLaMSh2gNr`)

| Field | Type | Notes |
| --- | --- | --- |
| `Message ID` | Single line text | Links to Messages. |
| `Ticket Reference` | Single line text | |
| `Storage Path` | Single line text | Object key inside the `support-attachments` Supabase bucket. |
| `File Name` | Single line text | Original file name. |
| `MIME Type` | Single line text | |
| `Size Bytes` | Number | |
| `Created At` | Date | ISO timestamp. |

## Settings (`tbl89qnTl8C9zFlmK`)

| Field | Type | Notes |
| --- | --- | --- |
| `Key` | Single line text | e.g. `admin-portal-enabled`. |
| `Value` | Single line text | e.g. `true` / `false`. |

## FAQ (`tblbEo0TgMZCzfHyR`)

Used by the support landing page. Field names follow the public FAQ content keys
(`question`, `answer`, `topic`).

## Environment variables (server / n8n)

| Variable | Used by | Purpose |
| --- | --- | --- |
| `AIRTABLE_ACCESS_TOKEN` | Vercel functions | Personal access token for the base. |
| `AIRTABLE_BASE_ID` | Vercel functions / n8n | Base ID above. |
| `AIRTABLE_TICKETS_TABLE_ID` | Vercel functions / n8n | Tickets table ID. |
| `AIRTABLE_MESSAGES_TABLE_ID` | Vercel functions / n8n | Messages table ID. |
| `N8N_SUPPORT_WEBHOOK_URL` | Vercel functions | Notification webhook URL. |
| `N8N_SUPPORT_WEBHOOK_SECRET` | Vercel functions / n8n | Shared secret header (`X-Support-Webhook-Secret`). |
| `SUPPORT_PUBLIC_BASE_URL` | Vercel functions / n8n | Public portal origin for magic links. |
| `SUPPORT_INBOX_EMAIL` | Vercel functions | Staff inbox that receives customer-reply alerts. |
| `TURNSTILE_SECRET_KEY` | Vercel functions | Cloudflare Turnstile server-side secret. |
