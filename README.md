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

`supabase:assets:sync` uploads everything under `public/assets/` and `assets/`
to the public `site-assets` bucket. The frontend reads asset URLs from
`VITE_SUPABASE_URL` and `VITE_SUPABASE_ASSET_BUCKET`; when those values are not
set it falls back to local `/assets/` paths for development safety.

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
- `VITE_SUPABASE_URL`: Supabase API URL for local or hosted environments
- `VITE_SUPABASE_ANON_KEY`: public anon key for browser-side Supabase clients
- `VITE_SUPABASE_ASSET_BUCKET`: public storage bucket used by site assets
- `SUPABASE_ASSET_BUCKET`: storage bucket targeted by the asset sync script
- `SUPABASE_SERVICE_ROLE_KEY`: local-only key used by the asset sync script
- `SUPABASE_PROJECT_REF`: local-only project ref used by `supabase link`

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
