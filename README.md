# HLYM Website

Official Hong Leong Yamaha Motor (HLYM) website for the Malaysian market.
React + TypeScript + Vite, styled with `styled-components`.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL printed in the terminal.

## Environment

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

Key variables:

- `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_SUPABASE_ASSET_BUCKET` -
  Supabase project and the public `site-assets` storage bucket.
- `VITE_MAPBOX_ACCESS_TOKEN` - Mapbox GL token for the dealer network map.
- `VITE_CONTACT_ENQUIRY_WEBHOOK_URL` - endpoint that receives contact enquiries.
- `WEBFLOW_*` - credentials for the Webflow code component library.
- Support portal: `AIRTABLE_*`, `N8N_SUPPORT_*`, `SUPPORT_*` - ticket storage,
  notifications, and access control.

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage: hero carousel, model range, featured gallery, news, dealer network CTA |
| `/products` | Product catalogue pages |
| `/contact-us` | Contact page with enquiry form |
| `/yamaha-network` | Interactive dealer locator (Mapbox) with searchable dealer list and routing |
| `/support` | Owner support ticket portal (`/support/access`, `/support/ticket`, `/support/admin`) |
| `/design-system` | Design system component documentation |

## Quality gates

```bash
npm run lint
npm run format:check
npm run typecheck
npm run test:run
npm run build
npm run security:scan
```

## Supabase assets

The site serves its assets (images, video, dealer photos) from the public
`site-assets` Supabase bucket. Source files live under `public/assets/` and are
uploaded with:

```bash
npm run supabase:assets:sync          # everything under public/assets/ and assets/
npm run supabase:dealer-images:sync   # dealer photos
```

`getAssetUrl()` in `src/lib/` resolves `hlym/...` paths to the bucket URL using
`VITE_SUPABASE_URL` and `VITE_SUPABASE_ASSET_BUCKET`, falling back to local
`/assets/` paths when those values are unset.

## Supabase CLI

The repository includes Supabase local development config in `supabase/`.
Install the Supabase CLI locally with Homebrew or another supported installer,
then verify it is available:

```bash
supabase --version
```

Local development commands:

```bash
npm run supabase:start
npm run supabase:status
npm run supabase:db:reset
npm run supabase:assets:sync
npm run supabase:stop
```

The default start command excludes Supabase's local `vector` and `logflare`
containers because they bind-mount the Docker socket. On Colima, that mount can
fail with `operation not supported` while creating
`~/.colima/default/docker.sock`. The database, auth, REST, storage, Studio, and
email testing services still run with the default command.

Use the full logging stack only when your Docker runtime supports that socket
mount:

```bash
npm run supabase:start:full
```

Remote project linking is intentionally not committed. After setting
`SUPABASE_PROJECT_REF` in your local `.env`, link the CLI session with:

```bash
supabase login
supabase link --project-ref "$SUPABASE_PROJECT_REF"
```

Do not commit access tokens, service role keys, local database dumps, or
generated `.temp` Supabase state.

## Structure

- `src/app/` - top-level page composition and routing
- `src/components/` - shared and section components (header, footer, hero,
  models, featured, news, dealer-locator, ui)
- `src/features/` - page-scoped features: `contact-page`, `product-page`,
  `support-portal`, `yamaha-network`
- `src/data/` - typed content models, shared UI copy, and constants
- `src/theme/` - design tokens (color, spacing, typography) and the site theme
- `src/lib/` - utilities (`getAssetUrl`, `toSentenceCase`, ...)
- `src/docs/` - design system documentation
- `scripts/` - asset sync and tooling
- `public/assets/` - runtime images synced to Supabase

## Webflow CLI + DevLink

Create a local env file from `.env.example`, then:

Required variables:

- `WEBFLOW_SITE_ID`: site id for `webflow devlink sync`
- `WEBFLOW_SITE_API_TOKEN`: site API token for `webflow devlink sync`
- `WEBFLOW_WORKSPACE_API_TOKEN`: workspace API token for `webflow library share`

Configured files:

- `webflow.json`: shared manifest for DevLink and the code component library
- `webpack.webflow.cjs`: styled-components bundle config for Webflow builds
- `src/webflow/`: code component source and global decorators
- `devlink/`: generated DevLink output target

Commands:

```bash
npm run webflow:library:bundle
npm run webflow:library:share
npm run webflow:devlink:sync
```

Use `webflow:library:share` when you want React code components to appear in the
Webflow Designer canvas. Use `webflow:devlink:sync` only for the DevLink export
flow that pulls generated components from Webflow into the local `devlink/`
directory.

The sample code component lives in `src/webflow/code-components/promo-card.webflow.tsx`.

See `docs/webflow-cms-integration.md` for the CMS migration workflow and the
product Code Component field contract.

## Dealer network map

The dealer locator (`/yamaha-network`) uses Mapbox GL JS with the Mapbox
Standard style configured for a monochrome basemap and a pitched 3D camera.
Configure `VITE_MAPBOX_ACCESS_TOKEN`; the page falls back to a branded static
stage when the token is absent or the browser cannot initialize the map.

## Deployment

Production is deployed on Vercel and auto-deploys `main`. Every pull request
gets its own preview deployment. Keep changes reviewable: commit small, atomic
changes locally, pull the latest remote before pushing, and push to a dedicated
feature branch rather than directly to `main`.
