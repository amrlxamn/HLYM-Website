# HLYM Website

React + TypeScript + Vite rebuild of the original HLYM static mockup, now
styled with `styled-components`.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL printed in the terminal.

## Quality gates

```bash
npm run lint
npm run format:check
npm run typecheck
npm run test:run
npm run build
npm run security:scan
```

## Structure

- `src/app/`: top-level application composition
- `src/components/`: small React components split by section
- `src/data/`: typed content models, shared UI copy, and constants
- `src/styles/`: styled-components global styles
- `src/test/`: Vitest setup
- `public/assets/`: runtime images copied from the original mockup

## Webflow CLI + DevLink

Install dependencies with `npm install`, then create a local env file from
`.env.example`.

```bash
cp .env.example .env
```

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

## Dealer Locator Stage

The dealer locator uses Mapbox GL JS with the Mapbox Standard style configured
for a monochrome basemap and a pitched 3D camera inside
`src/components/dealer-locator/`. Configure:

- `VITE_MAPBOX_ACCESS_TOKEN`

The section still falls back to the branded static stage when the token is
absent or the browser cannot initialize the map.
