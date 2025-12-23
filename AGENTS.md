# Agent Instructions for git-stats

## Build & Lint
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Dev**: `npm run dev`
- **Tests**: No test framework currently configured.

## Code Style
- **Tech Stack**: Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS.
- **Components**: Functional components with PascalCase. Prefer `export default`.
- **Naming**: PascalCase for components/types/interfaces; camelCase for functions/variables/hooks.
- **Imports**: Order: React/Next.js, external libs, internal components, assets/styles. Use absolute imports with `@/` prefix for internal files.
- **Formatting**: Double quotes, semicolons, 2-space indentation.
- **Types**: Use TypeScript for all files. Prefer `interface` for object shapes. Use `Readonly` for component props.
- **Error Handling**: Use `try-catch` for async operations and Next.js error boundaries (`error.tsx`).
- **Styles**: Use Tailwind utility classes. Maintain consistent class ordering (layout, spacing, typography, colors).

## Standards
- Follow `eslint.config.mjs` and `tsconfig.json` settings.
- Avoid large components; break them down into smaller pieces in the `components/` directory.
