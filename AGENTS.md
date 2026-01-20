# AGENTS.md

This file provides context and guidelines for AI agents and developers working on this repository.
It outlines the build process, code style, and architectural standards to ensure consistency and quality.

## 1. Project Overview

- **Type**: Web Application (Resume)
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Bun (indicated by `bun.lockb`)

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
  Configuration is in `prettier.config.js` and includes `prettier-plugin-tailwindcss`.

### Testing
*Note: No testing framework is currently configured in `package.json`.*

If/when testing is added (Vitest is recommended for this stack):
- **Run All Tests**:
  ```bash
  bun test
  ```
- **Run Single Test**:
  ```bash
  bun test <path/to/test-file>
  # Example: bun test src/components/Header.test.tsx
  ```

## 3. Code Style Guidelines

### General
- **Clarity**: Write self-documenting code. Variable and function names should be descriptive.
- **Comments**: Use comments to explain *why* complex logic exists, not *what* it does.
- **DRY (Don't Repeat Yourself)**: Extract common logic into custom hooks or utility functions.

### TypeScript
- **Strict Mode**: `strict: true` is enabled in `tsconfig.json`. Handle all types explicitly.
- **No Any**: Avoid using `any`. Use `unknown` if the type is truly uncertain, then narrow it.
- **Interfaces vs Types**: Prefer `interface` for object definitions and component props. Use `type` for unions/intersections.
  ```typescript
  // Good
  interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  ```
- **Explicit Returns**: Define return types for complex functions to ensure contract safety.

### React & Next.js (App Router)
- **Component Structure**:
  - Use Functional Components.
  - Place components in `src/components`.
  - Use named exports for components: `export const MyComponent = ...` (avoids default export refactoring issues).
- **Server vs Client Components**:
  - Default to **Server Components**.
  - Add `"use client"` directive at the top of the file *only* when necessary (hooks, event listeners).
- **Hooks**:
  - Use built-in hooks (`useState`, `useEffect`) appropriately.
  - Create custom hooks for reusable logic in `src/hooks`.
- **Props**:
  - Destructure props in the function signature.
  - Use optional props `?` where appropriate.

### Tailwind CSS
- **Utility First**: Use standard Tailwind utility classes.
- **Ordering**: Classes are automatically sorted by the Prettier plugin. Do not manually reorder.
- **Arbitrary Values**: Minimize use of arbitrary values (e.g., `w-[123px]`). Use theme values or extend the theme in `tailwind.config.ts`.
- **Responsive Design**:
  - Build mobile-first.
  - Use prefixes: `sm:`, `md:`, `lg:`, `xl:`.
  - Example: `className="w-full md:w-1/2"` (Full width on mobile, half on desktop).
- **Dynamic Classes**: Use `clsx` or `tailwind-merge` if complex conditional class logic is required (check if installed, otherwise template literals).

### Imports
- **Path Aliases**: ALWAYS use the `@/` alias for imports from the `src` directory.
  ```typescript
  // Correct
  import { Button } from "@/components/Button";
  
  // Incorrect
  import { Button } from "../../components/Button";
  ```
- **Order**:
  1. External libraries (React, Next.js, etc.)
  2. Internal components (`@/components/...`)
  3. Internal utilities/hooks (`@/lib/...`, `@/hooks/...`)
  4. Styles (if any CSS modules used)
- **Unused Imports**: Remove all unused imports.

### Naming Conventions
- **Files/Directories**:
  - Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
  - Utilities: `camelCase.ts` (e.g., `dateFormatter.ts`)
  - Pages (Next.js): `page.tsx`, `layout.tsx`
- **Variables/Functions**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE` for true constants (e.g., `MAX_RETRIES`).
- **Components**: `PascalCase`

## 4. Error Handling
- Use `try/catch` blocks for async operations.
- Handle API errors gracefully and provide UI feedback (e.g., toast notifications or error states).
- Use React Error Boundaries (`error.tsx` in Next.js App Router) for handling runtime errors in route segments.

## 5. Directory Structure (Standardized)
```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
│   ├── ui/              # Basic UI primitives (buttons, inputs)
│   └── sections/        # Larger page sections (Hero, About)
├── lib/                 # Utility functions and shared logic
├── types/               # Global TypeScript definitions
└── styles/              # Global styles (globals.css)
```

## 6. Git Workflow
- **Commit Messages**: Use conventional commits (e.g., `feat: add hero section`, `fix: header alignment`, `chore: update deps`).
- **Clean Working Tree**: Ensure `bun run lint` and build pass before committing.

## 7. Agents & AI Interaction
- When generating code, prioritize modern Next.js 14+ patterns.
- If dependencies are missing for a requested feature, check `package.json` first, then suggest installation.
- Always respect the `prettier` configuration; the agent should output formatted code or run the formatter.
