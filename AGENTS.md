# Roast (Linus Torvald's Style)

If your code looks like spaghetti, stop pushing commits.
If you need comments to explain five layers of nested callbacks, you've already failed.
If your pull request requires a small novel to justify itself, rewrite the damn thing.
And if you think "clever" is better than "readable," congratulations - you're the reason we have bugs.

---

# JS/TS Adaptation Guide (Frontend & Node.js)

This section adapts the Linux kernel coding style principles to modern JavaScript/TypeScript for web apps (React/Next.js, Node.js/Express/Fastify). Treat this as the authoritative layer for our project.

## 1) Indentation & Layout

- Rule: 2 spaces, no tabs in source (tabs only for Makefiles/legacy).
- Keep nesting shallow.
- Limit JSX nesting to ~3 levels. Extract subcomponents early.
- Break long prop lists and parameter lists across lines.

Do:

```ts
function canActivate(user: User | null) {
  if (!user) return false;
  if (!user.isActive) return false;
  return user.roles.includes("admin");
}
```

Don't:

```ts
function canActivate(user) {
  if (!user) return false;
  if (!user.isActive) return false;
  return user.roles.includes("admin");
}
```

## 2) Line Length

- Target <= 100 chars.
- Wrap at logical boundaries.
- In JSX, use one prop per line when too long.

## 3) Braces & Control Flow (K&R)

- Same-line opening brace.
- Always use braces, including single statements.
- Prefer early returns over deep `if/else` ladders.

Do:

```ts
if (!token) {
  throw new UnauthorizedError("Missing token");
}
```

Don't:

```ts
if (!token) throw new UnauthorizedError("Missing token");
```

## 4) Naming

- `camelCase` for variables/functions.
- `PascalCase` for React components/classes.
- `CONSTANT_CASE` for constants.
- `kebab-case` for file names.
- Use nouns for data and verbs for actions.
- Avoid names like `data`, `tmp`, `foo`.

## 5) Comments & Docs

- Comment why, not what.
- Use JSDoc/TSDoc for exported APIs.

```ts
/**
 * Generates a signed URL for private assets.
 * @throws {UnauthorizedError} when caller lacks scope.
 */
export function createSignedUrl(...) { ... }
```

## 6) Functions

- Keep functions small and focused (target <= 20-30 LOC).
- One responsibility per function.
- Prefer pure functions; isolate side effects at edges.
- Avoid behavior flags that create multi-mode functions.
- Hard project rule: one function declaration per file.

## 7) Modules & Structure

- Frontend: one component per file; separate hooks (`useX.ts`) from UI.
- Backend: `routes -> controllers -> services -> repositories`.
- Avoid cyclic dependencies.
- Co-locate tests (`*.test.ts`) with code.
- Hard project rule: split files aggressively; do not create long files.

## 8) Types (TS First)

- No `any` unless a documented temporary escape hatch.
- Prefer type aliases for data shapes and interfaces for contracts.
- Use discriminated unions over boolean mode flags.

```ts
type Payment = { kind: "card"; last4: string } | { kind: "bank"; iban: string };
```

## 9) Errors & Logging

- Throw typed errors (`extends Error`).
- Use centralized error middleware.
- Never swallow errors.
- Add contextual metadata to logs.
- Use structured logs (JSON) in backend.

```ts
log.error({ orderId, err }, "Failed to charge card");
```

## 10) Async & Resources

- Prefer `async/await`.
- Avoid long raw `.then()` chains.
- Always cancel/cleanup resources (AbortController, timers, listeners).

```ts
try {
  const res = await fetch(url, { signal });
  ...
} finally {
  controller.abort();
}
```

## 11) Data & Immutability

- Treat React state as immutable.
- Do not mutate props/state directly.
- In Node, avoid shared mutable singletons.

## 12) Conditions & Expressions

- Avoid cleverness.
- Avoid chained ternaries.
- Extract complex conditions into named booleans.

```ts
const hasAccess = isAdmin || (isEditor && ownsResource);
```

## 13) Formatting & Tooling

- ESLint + Prettier are mandatory.
- CI treats lint errors as build-breaking.
- Use project-wide config; local overrides require review.

## 14) Security

- Validate all boundary inputs (HTTP, queue, worker, cron).
- Escape/encode for HTML, URL, SQL contexts.
- Use parameterized queries/ORM safely.
- Never interpolate unsanitized user data into HTML.

### 14A) Security Review Checklist (Mandatory)

Run this checklist before merging any auth, API, webhook, billing, dashboard, or Docker change.
If one item fails, the change is not done.

#### 01. Secrets & Config

- No hardcoded secrets, tokens, API keys, webhook secrets, or database passwords in source.
- No secrets in client bundles; server-only values stay server-only.
- `.env*` files committed to git must contain examples only, never live credentials.
- Do not log secrets, bearer tokens, cookies, OAuth codes, or raw webhook payloads with PII.
- Health checks, error responses, and debug endpoints must not leak stack traces, SQL errors, or infra details.
- CORS must be explicit; no wildcard production policy without written approval.
- Docker, Compose, and local scripts must use dev-only defaults only for local development.
- Production startup must fail fast on missing required secrets; do not silently disable critical auth or billing paths.
- Keep dependency versions intentional and review auth, crypto, and framework upgrades with extra scrutiny.
- Remove default credentials, example passwords, and placeholder auth secrets before production exposure.

#### 02. Access & API

- Every page, route, tRPC procedure, webhook, and background entrypoint must define its auth model explicitly.
- Authentication is not authorization; enforce tenant ownership, roles, and resource scoping on every sensitive read/write.
- Never trust client-provided IDs for tenant or user access; verify ownership on the server.
- Add rate limiting to auth, ingestion, webhook, and mutation-heavy endpoints.
- Return minimal error detail to clients; keep internal diagnostics in server logs only.
- Endpoints must return only the fields the caller needs; no accidental overfetch of user, account, or dispute data.
- Sensitive actions such as email change, key rotation, dispute submission, and billing updates need explicit confirmation or a safe server-side workflow.
- Admin or internal routes must be protected by server-side checks, not hidden links or unlinked URLs.
- Webhooks must verify signatures, enforce idempotency, and reject replayed or malformed events.
- API keys must be scoped, hashed at rest where possible, rotatable, and auditable.

#### 03. User Input, Files, and Data Flow

- Validate all external input with schemas at the boundary (`zod`, request parsers, webhook validators).
- Treat all rich text, markdown, filenames, query params, headers, and webhook fields as untrusted.
- Prevent XSS in rendered content and never inject unsanitized HTML into React or templates.
- Prevent SQL injection by using Prisma/query parameterization only; no raw string-built SQL.
- File uploads must enforce type, size, and storage rules before processing.
- Billing, entitlement, and dispute-decision logic must execute server-side; never trust client-side gating.
- Store only the minimum PII needed for disputes, evidence, and analytics.
- Encrypt or otherwise protect sensitive tokens, external account IDs, and evidence artifacts at rest and in transit.
- Add audit logs for sensitive actions: sign-in, API key creation, Stripe connection, webhook receipt, evidence generation, and dispute submission.
- Test failure paths explicitly: invalid auth, cross-tenant access attempts, malformed payloads, replayed webhooks, and oversized uploads.

## 15) Performance

- Measure before optimizing.
- Use browser profiling and Node `perf_hooks`.
- Memoize React only when profiling proves benefit.

## 16) API Design

- Prefer clear REST (plural nouns) or typed GraphQL schemas.
- Use precise HTTP status codes.
- Return error JSON with `code`, `message`, optional `details`.

## 17) Testing

- Unit-test pure logic.
- Integration-test IO boundaries.
- E2E-test user-critical flows.
- Keep tests deterministic, isolated, and fast.
- Never use production secrets in tests.

## 18) Git Hygiene

- One branch per change.
- Keep PRs reviewable (target < ~300 LOC changed).
- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `refactor:`.

## 19) File/Dir Conventions

```txt
/src
  /components
  /hooks
  /pages or /routes
  /services
  /lib
  /tests
```

- React components: `kebab-case.tsx`
- Hooks: `use-thing.ts`
- Services: `thing.service.ts`

## 20) Internationalization & Text

- Keep user-visible strings in i18n resources.
- No hardcoded UI text in business logic.
- Use ASCII-only prompts for CLI/agents.
- Avoid smart quotes and emoji in automation prompts.

## 21) CLI/Agent Prompt Rules (Claude/Codex)

- Use plain ASCII and fenced code blocks.
- Keep instructions deterministic and explicit.
- Prefer numbered steps and clear constraints.
- Provide input/output schemas when possible.
- Reject malformed input with actionable errors.

Do:

```txt
You are a refactor agent.
1) Input: JSON with { files: File[] }
2) Output: JSON with { diffs: Diff[] }
Rules: Use TypeScript, no any, max line length 100.
```

Don't:

```txt
Hey! Be creative and do whatever looks right.
```

## 22) Dependency Discipline

- Prefer stdlib/small utilities over heavy dependencies.
- Audit dependencies regularly.
- Commit lockfiles.
- Pin major versions intentionally.

## 23) Accessibility & UI Quality

- Target WCAG 2.2 AA.
- Ensure focus states, labels, and contrast.
- Support keyboard-first usage.
- Add loading, empty, and error states for async UI.

## Do & Don't Summary

Do:

- Keep functions small.
- Keep names clear.
- Keep logs structured and contextual.
- Validate all inputs.
- Keep tests reliable.

Don't:

- Hide complexity behind clever one-liners.
- Leak architecture layers.
- Depend on `any`.
- Stack nested ternaries.
- Ignore CI failures.

---

## Project Enforcement Addendum (Mandatory)

These are strict repository rules on top of the style guide above.

### A) One Function Per File (Absolute)

- No file may declare more than one function.
- No helper functions in the same file.
- No nested function declarations.
- If a callback is complex, move it into its own file.
- If logic needs helpers, each helper gets its own file.

Allowed non-function files:

- `*.types.ts`
- `*.constants.ts`
- `*.schema.ts`
- `*.config.ts`
- `index.ts` (exports only)

### B) File Size Limits

- Target 60-80 LOC for logic files.
- Hard max 120 LOC for logic files.
- Hard max 180 LOC for page/screen composition files.
- Hard max 220 LOC for test files.
- If over limit, split before merge.

### C) Styling Rule for Tailwind vs styled-components

- Use one styling system per component file.
- Do not mix Tailwind utility classes and styled-components in the same component.
- Keep tokens centralized (color, spacing, radius, type, motion).

### D) CI Gates (No Bypass)

Every PR must pass:

- `lint`
- `typecheck`
- `test`
- `build`
- `security scan`

PRs that violate one-function-per-file, file-size limits, or CI gates are rejected.

### E) Definition of Done

A change is done only when:

- Architecture boundaries are respected.
- One-function-per-file rule is respected.
- File-size limits are respected.
- Tests pass for changed behavior.
- CI passes fully.

### F) Current HLYM Website Findings (Mandatory)

These are not suggestions. These are current repo problems that must be corrected over time
and must not be made worse by new work.

- Styling is fragmented. Stop hardcoding colors, spacing, shadows, and gradients per section.
- Add and use a real token layer for color, spacing, typography, radius, shadow, and motion.
- If a section invents its own visual rules instead of using shared tokens, it is wrong.
- `src/data/site-content.constants.ts` is too large and acts like a dumping ground.
- Split content by section or domain. Do not keep stuffing unrelated page content into one giant constants file.
- Large style files are already out of control. Split oversized `*.styles.ts` files before adding more code to them.
- Remove dead or duplicate code paths instead of keeping backup implementations around "just in case".
- The dealer locator must have one live Mapbox path only. Delete stale loaders, marker builders, and legacy map code when replaced.
- Do not build "content blob + thin renderer" sections where a huge constants file feeds a mostly dumb component tree.
- Move repeated UI patterns into shared primitives instead of cloning slightly different section-specific markup.
- Tests must cover real behavior for interactive sections. Smoke tests with everything mocked are not enough.
- Add stronger lint enforcement for hardcoded colors, oversized files, and structural drift.

### G) Reference Project Rule: Clinic-CRM

`Clinic-CRM` is a reference for discipline, not a template to copy blindly.

- Copy the discipline: shared tokens, modular boundaries, reusable UI primitives, stronger lint rules, layered testing.
- Do not copy the infrastructure: Nx, Docker, NestJS, GraphQL, Apollo, Recoil, workers, `n8n`, or CRM-specific provider stacks.
- This repository is a website, not a platform. If you add platform complexity without a real requirement, you are writing future garbage.
- Pick one styling system and keep it consistent.
- Prefer a small, strict architecture over a large, fashionable mess.

---

## Linux Kernel Reference Note

The Linux kernel coding style text is used here as philosophy/reference, while this JS/TS adaptation guide is the operational standard for this project.

---

## Commit Workflow Protocol (Mandatory)

This repository uses a built-in commit workflow policy. Treat this as globally configured behavior for the agent. No separate `commit.md` is required.

### Trigger

Use `$commit-conventions` whenever asked to commit changes, including requests like:

- "commit changes"
- "commit all current work"
- "create conventional commit(s)"
- "group and commit working tree"

If the user says "configure only" or "do not commit now", do not create commits.

### Required Constraints

- Include modified, deleted, staged, and untracked files in the working tree review.
- Group files by coherent intent; never mix unrelated changes in one commit.
- If all changes are one logical unit, create exactly one commit.
- If changes span multiple logical units, create multiple commits.
- Use Conventional Commits only:
  - `feat`
  - `fix`
  - `refactor`
  - `build`
  - `ci`
  - `chore`
  - `docs`
  - `style`
  - `perf`
  - `test`
- Keep commit subjects concise and <= 72 characters.
- Add a commit body only when needed for context.
- Use scope only for monorepos with multiple targets; otherwise omit scope.

### Execution Sequence (Non-Negotiable)

1. Show a proposed commit plan first, using:
   - `group -> commit message`
2. Stage and commit each group sequentially until all intended changes are committed.
3. Finish with:
   - `git status --short`
   - one-line summary per created commit

### Safety Rules

- Do not rewrite history (`--amend`, rebase, reset) unless explicitly requested.
- Do not include secrets or generated artifacts unless explicitly intended.
- If repository context is ambiguous, ask one concise clarification question before committing.

<!-- headroom:rtk-instructions -->

# RTK (Rust Token Killer) - Token-Optimized Commands

When running shell commands, **always prefix with `rtk`**. This reduces context
usage by 60-90% with zero behavior change. If rtk has no filter for a command,
it passes through unchanged — so it is always safe to use.

## Key Commands

```bash
# Git (59-80% savings)
rtk git status          rtk git diff            rtk git log

# Files & Search (60-75% savings)
rtk ls <path>           rtk read <file>         rtk grep <pattern>
rtk find <pattern>      rtk diff <file>

# Test (90-99% savings) — shows failures only
rtk pytest tests/       rtk cargo test          rtk test <cmd>

# Build & Lint (80-90% savings) — shows errors only
rtk tsc                 rtk lint                rtk cargo build
rtk prettier --check    rtk mypy                rtk ruff check

# Analysis (70-90% savings)
rtk err <cmd>           rtk log <file>          rtk json <file>
rtk summary <cmd>       rtk deps                rtk env

# GitHub (26-87% savings)
rtk gh pr view <n>      rtk gh run list         rtk gh issue list

# Infrastructure (85% savings)
rtk docker ps           rtk kubectl get         rtk docker logs <c>

# Package managers (70-90% savings)
rtk pip list            rtk pnpm install        rtk npm run <script>
```

## Rules

- In command chains, prefix each segment: `rtk git add . && rtk git commit -m "msg"`
- For debugging, use raw command without rtk prefix
- `rtk proxy <cmd>` runs command without filtering but tracks usage
<!-- /headroom:rtk-instructions -->
