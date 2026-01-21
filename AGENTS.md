# AGENTS.md

This file provides context and guidelines for AI agents and developers working on this repository.
It outlines the build process, code style, and architectural standards to ensure consistency and quality.

## 1. Project Overview

- **Type**: Web Application (Resume)
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Bun
- **Icon Set**: React Icons

## 2. Build, Lint, and Test Commands

### Build & Run

- **Development Server**:

  ```bash
  bun run dev
  ```

  Runs the app on `http://localhost:3000`.

- **Production Build**:

  ```bash
  bun run build
  ```

  Creates an optimized production build in the `.next` folder.

- **Start Production Server**:
  ```bash
  bun run start
  ```

### Linting & Formatting

- **Lint Code**:

  ```bash
  bun run lint
  ```

  Uses ESLint with `eslint-config-next` and `eslint-config-prettier`.
  Ensure 0 linting errors before committing.

- **Format Code**:
  ```bash
  bun run prettier
  ```
  Runs Prettier on `./src` and automatically fixes formatting issues.
  Configuration is in `prettier.config.js` and includes `prettier-plugin-tailwindcss` for class sorting.

### Testing

_Note: No testing framework is explicitly configured in `package.json` scripts._

However, since `bun` is used, the built-in test runner is available if test files are added.

- **Run All Tests**:
  ```bash
  bun test
  ```
- **Run Single Test**:
  ```bash
  bun test <path/to/test-file>
  # Example: bun test src/app/components/Profile/Bios.test.tsx
  ```

## 3. Code Style Guidelines

### General

- **Clarity**: Write self-documenting code. Variable and function names should be descriptive.
- **DRY**: Extract common logic into custom hooks or utility functions.
- **Data Driven**: Resume data is centralized in `src/data.ts`.

### TypeScript

- **Strict Mode**: `strict: true` is enabled. Handle all types explicitly.
- **Component Types**: usage of `FC` (Function Component) type is observed and accepted.
  ```typescript
  // Example found in codebase
  const MyComponent: FC<Props> = ({ prop }) => ...
  ```
- **Interfaces**: Use `interface` for prop definitions.
- **No Any**: Avoid `any`.

### React & Next.js (App Router)

- **Component Structure**:
  - Components are currently located in `src/app/components`.
  - Directory structure often uses a folder per component with an `index.ts` for exports.
  - **Exports**: Files often use `export default`, but index files re-export them as named exports.
- **Server vs Client**:
  - Default to **Server Components**.
  - Use `"use client"` only when necessary (state, effects, event listeners).

### Tailwind CSS

- **Utility First**: Use standard Tailwind utility classes.
- **Ordering**: Relies on Prettier plugin to sort classes.
- **Responsive**: Mobile-first (`sm:`, `md:` prefixes).
- **Theme**: Custom theme colors defined in `tailwind.config.ts`.

### Imports

- **Path Aliases**: Use `@/` alias for imports from `src` root (e.g., `@/data`, `@/types`).
  ```typescript
  import DATA from '@/data';
  import { ProfileData } from '@/types';
  ```
- **Relative Imports**: Used for sibling components or styles within the same module.
- **Order**:
  1. External libraries (React, Next.js)
  2. Internal absolute imports (`@/...`)
  3. Internal relative imports (`./...`)

## 4. Directory Structure

```
src/
├── app/                 # Next.js App Router
│   ├── components/      # UI Components (colocated here)
│   │   ├── Profile/     # Component folders with index.ts
│   │   ├── SettingMenu/
│   │   └── ...
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── data.ts              # Centralized resume data
├── ga.ts                # Google Analytics
├── theme/               # Theme definitions
├── types.ts             # Global TypeScript definitions
└── styles/              # Global styles
```

## 5. Git Workflow

- **Commit Messages**: Use conventional commits (e.g., `feat: ...`, `fix: ...`, `chore: ...`).
- **Verification**: Run `bun run lint` and `bun run build` before committing.

## 6. Agents & AI Interaction

- **Context**: Always check `src/data.ts` when modifying resume content.
- **Patterns**: Follow the existing pattern of `FC` usage and folder-based components with `index.ts` re-exports.
- **Dependencies**: Use `bun add` or `bun add -d` for new packages.
- **Formatting**: Always apply `bun run prettier` after code generation.
