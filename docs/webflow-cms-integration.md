# Webflow CMS Integration

This repo supports a hybrid Webflow workflow:

1. Developers keep React, TypeScript, tests, and styled-components in this repo.
2. Webflow hosts the editable website and CMS.
3. Admins manage product content in Webflow CMS.
4. Developers publish advanced React sections as Webflow Code Components.
5. n8n handles form and CRM handoffs so Webflow does not store API secrets.

This is not a one-click import of the Vite app into native Webflow elements. Webflow pages and
Collection templates still need to be assembled in Webflow, then bound to CMS fields and Code
Component props.

## Supported Integration Path

Use Code Components for interaction-heavy sections:

- `HLYM Product Hero Video`
- `HLYM Product Showcase`
- `HLYM Product Colors`
- `HLYM Promo Card`

The current Webflow prop package supports scalar props such as text, rich text, links, images,
numbers, variants, booleans, and slots. It does not pass nested product arrays directly. For that
reason, product Code Components expose explicit fields such as `Frame 01`, `Spec 1 Value`, and
`Color 1 Image`.

## Recommended CMS Collections

- `Motorcycles`
- `Motorcycle Versions`
- `Product Colors`
- `Product Specs`
- `Product Media`
- `Product Downloads`
- `News`
- `Dealers`
- `Footer Links`

Use `Motorcycle Versions` as the main Collection page source for product detail pages. Bind fields
from that CMS item into the Code Components on the template.

## Product Page Field Mapping

Hero video:

- copy
- aria label
- video alt text
- video source URL
- video source type
- poster image

Product showcase:

- brand label
- product name
- poster label
- category
- price
- CTA label/link
- image alt text
- primary image
- show 360 rotation
- frame images 01-08
- four spec label/value pairs

Product colors:

- visible color count
- color labels
- color alt text
- color images
- color swatches

## Limits To Respect

- Product showcase currently supports 8 360-frame props.
- Product colors currently supports up to 4 colors.
- Webflow API tokens must not be used in browser code.
- CRM API tokens must stay in n8n or another server-only boundary.
- Heavy interaction logic stays in code; admins edit content and media only.
- For products that need more than 8 frames or more than 4 colors, extend the Code Component prop
  contract first and publish a new component version.

## Support Model

- L1 works in Webflow for content, CMS, SEO, and simple form checks.
- L2 works across Webflow and this repository for Code Components, CMS mapping,
  and n8n workflow templates.
- L3 owns n8n hosting, CRM credentials, GenCode CRM endpoint validation, and
  production integration incidents.

Use `docs/webflow-migration-operating-model.md` as the source of truth for the
support split and backend decision.

## Developer Workflow

```bash
npm run lint
npm run typecheck
npm run test:run
npm run webflow:library:bundle
npm run webflow:library:share
```

The `webflow:library:share` command publishes Code Components to the connected Webflow workspace.
After publishing, bind the component props to CMS fields in the Webflow Designer.

## Admin Workflow

1. Create or edit a `Motorcycle Version` CMS item.
2. Fill all required product copy, specs, media, SEO fields, and downloads.
3. Open the product Collection page preview.
4. Confirm the Code Components render the bound fields correctly.
5. Publish the CMS item and site.
