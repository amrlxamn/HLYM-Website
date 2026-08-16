# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Prospective motorcycle buyers in Malaysia** researching the Yamaha lineup (mopeds, automatics, street, big bikes): comparing models, checking specs and prices, and finding authorized dealers.
- **Existing Yamaha owners in Malaysia** seeking dealer/service locations, support resources, warranty information, and the owner support portal.

## Product Purpose

The official digital presence of Hong Leong Yamaha Motor (HLYM) for the Malaysian market. It carries the full customer lifecycle: showcase the lineup and drive dealer discovery and enquiries, capture contact/CRM enquiries, publish news and brand content, and provide an owner support portal.

## Positioning

The authorized Yamaha Malaysia source for the lineup, dealers, and support — every model, spec, price, dealer, and support path is official HLYM/Yamaha data rather than aggregated third-party content.

## Operating Context

- Malaysian market: Malaysian-specific model lineup, RM pricing, dealer network across Malaysian regions, EN/BM language options.
- Core journeys: browse hero carousel → compare models (sticky scroll showcase with 360 views) → featured gallery/video → dealer locator (Mapbox) → contact forms feeding a CRM → support ticket portal.
- Separate features: Yamaha network dealer directory, news/stories, design-system documentation page.

## Capabilities and Constraints

- **Confirmed capabilities:** hero carousel; model catalog with 360 rotation views and spec data; featured gallery with cinematic video and banner; dealer locator with region filters and routing; Yamaha network dealer pages; news section; contact enquiry forms (Airtable CRM); support ticket portal (Supabase); design-system docs page; Webflow integration for deployment.
- **Stack (evidence from repo):** Vite + React + TypeScript, styled-components, framer-motion, Vitest, Supabase (asset storage + support portal), Mapbox, Airtable.
- **Assets:** all site imagery lives in the Supabase `site-assets` bucket (homepage assets must come from Supabase, not local paths).
- **Undecided:** none recorded.

## Brand Commitments

- Official Yamaha identity: logo, brand red, and official product imagery.
- Hong Leong Yamaha Motor Sdn. Bhd. (HLYM) as the operating entity — legal text, address, copyright.
- Malaysia-first: lineup, dealers, RM pricing, EN/BM language options.
- Product truth: official specs (engine, power, weight), prices, and model claims from Yamaha/HLYM sources.

## Evidence on Hand

- Official dealer directory data (`src/features/yamaha-network/yamaha-dealers.json`).
- Official model specs/prices in `src/data/` constants.
- Official product assets in the Supabase `site-assets` bucket and `public/assets/`.
- News imagery sourced from the official Yamaha Malaysia WordPress site.
- **Absent:** no invented testimonials, benchmarks, or promotional claims exist; future work must not fabricate them.

## Product Principles

1. Official truth only — specs, prices, dealers, and claims come from Yamaha/HLYM sources.
2. Support the full lifecycle — every surface either sells (lineup, dealers, enquiries) or serves (support portal, servicing, warranty).
3. Malaysia-first — lineup, pricing, dealers, and language always reflect the Malaysian market.
4. Homepage assets live in Supabase, never local-only.
5. Interaction polish with accessibility by default (focus states, aria labels, WCAG 2.2 AA target).

## Accessibility & Inclusion

- Keyboard-first navigation with focus-visible states across interactive components; WCAG 2.2 AA is the project's stated target (AGENTS.md).
