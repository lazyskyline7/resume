# AGENTS.md

Agent and contributor operating guide for this repository.

## 1) Project Overview

- **App**: Interactive resume / portfolio
- **Framework**: Next.js **16** (App Router)
- **Language**: TypeScript (strict)
- **Runtime/Package manager**: Bun
- **Styling**: Tailwind CSS **v4** (CSS-first config in `src/app/globals.css`)
- **Notable libs**: `clsx`, `react-icons`

## 2) Commands (build / lint / format / test)

### Install

```bash
bun install
```

### Dev server

```bash
bun run dev
```

### Production build

```bash
bun run build
```

Notes:

- `next.config.mjs` sets `output: 'export'` (static export).

### Start (production)

```bash
bun run start
```

This runs the standalone server at `.next/standalone/server.js`.

### Lint

```bash
bun run lint
```

ESLint config: `eslint.config.mjs` (flat config) using:

- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`
- `eslint-config-prettier/flat`

### Format

```bash
bun run prettier
```

Prettier config: `prettier.config.js` (includes `prettier-plugin-tailwindcss`).

### Tests

There is **no** `test` script in `package.json` today. If/when tests are added, use Bun’s runner:

Run all tests:

```bash
bun test
```

Run a **single test file**:

```bash
bun test path/to/file.test.ts
bun test path/to/file.test.tsx
```

## 3) Repo Structure (current)

```text
src/
  app/              # Next.js App Router
    layout.tsx
    page.tsx
    globals.css
  components/       # UI components (folder-per-component is common)
  data/             # Resume data (JSONC + schema)
    data.jsonc
    data.schema.json
    index.ts
  theme/            # Theme presets + CSS var helpers
  types.ts          # Global types
  ga.ts             # gtag helper
```

## 4) Code Style (TypeScript / React / Next.js)

### TypeScript

- `strict: true` in `tsconfig.json`.
- Prefer explicit types at module boundaries (props, exported functions, data parsing).
- **No `any`**. Avoid `unknown` casts unless there is a clear reason; localize the cast.
- Prefer `type` for unions/records and `interface` for object shapes used as props.

### React components

- Components are commonly typed as `FC<Props>` and exported via `export default`.
- Props are named `ComponentNameProps` and use `interface`.
- Use `"use client"` only when needed (hooks, event handlers, browser APIs).
- Keep client components small; push data shaping to server components / utilities when possible.

### Server vs Client boundaries

- Files that use `window`, `localStorage`, `matchMedia`, or DOM events must be client components.
- Avoid importing client-only modules into server-only modules.

### Imports

Use the `@/*` alias (configured in `tsconfig.json`) for `src/*`.

Import order (follow existing files):

1. External (`react`, `next/*`, `clsx`, etc.)
2. Internal absolute (`@/types`, `@/data`, `@/theme`, ...)
3. Internal relative (`./...`, `../...`)

Prefer `import type { ... }` for type-only imports.

### Naming

- Components / exported types / interfaces: `PascalCase`
- Variables / functions: `camelCase`
- Constants / maps: `SCREAMING_SNAKE_CASE` (e.g. `COMPANY_NAME_MAP`)
- Files:
  - Components: `PascalCase.tsx` or `index.tsx` in a component folder
  - Utilities: `camelCase.ts` (e.g. `ga.ts`)

## 5) Styling (Tailwind v4)

- Tailwind is imported in `src/app/globals.css` via `@import 'tailwindcss';`.
- Dark mode uses the `.dark` class selector via `@custom-variant dark`.
- Prefer utility classes; use `clsx` when classes are conditional or composed.
- Let Prettier + Tailwind plugin sort class order.

## 6) Data & schemas

- Resume content lives in `./data.jsonc`.
- Keep `src/types.ts` as the source of truth for data shapes.
- JSONC is supported via `jsonc-loader` (see `next.config.mjs`).

Current usage: server components import `./data.jsonc` directly and pass slices via props.

### Build-time data fetch (GitHub API)

This repo can fetch `src/data/data.jsonc` **at build time** from another (private) GitHub repo.

- Script: `bun run fetch:data` (downloads and overwrites `src/data/data.jsonc`)
- Build: `bun run build` runs `fetch:data` first
- Optional dev: `bun run dev:remote` (fetch then `next dev`)

Env vars:

- `RESUME_DATA_REPO` (required to enable fetch): `owner/repo`
- `RESUME_DATA_REF` (optional): branch/tag/sha (default: `main`)
- `RESUME_DATA_PATH` (optional): path in repo (default: `data.jsonc`)
- `RESUME_DATA_OUT` (optional): output path (default: `src/data/data.jsonc`)
- `RESUME_GITHUB_TOKEN` (required for private repos; `GITHUB_TOKEN` also works)

If `RESUME_DATA_REPO` is not set:

- If `src/data/data.jsonc` exists locally, the fetch step is a no-op.
- If it does **not** exist (fresh clone), `fetch:data` fails with instructions.

Recommended workflow (private data): keep `src/data/data.jsonc` **uncommitted** and generated via `fetch:data`.

## 7) Error handling & safety

- Do not introduce empty `catch {}` blocks. If you must swallow (rare), add a comment explaining why.
- Prefer early returns and narrow types rather than deeply nested conditionals.
- Don’t “refactor while fixing” unless explicitly requested.

## 8) Git hygiene

- Before committing: run `bun run lint` and `bun run build`.
- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `docs:`...).

## 9) Cursor / Copilot rules

- No Cursor rules found (`.cursor/rules/` or `.cursorrules` not present).
- No Copilot instructions found (`.github/copilot-instructions.md` not present).
