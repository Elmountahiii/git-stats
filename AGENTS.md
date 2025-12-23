# Agent Instructions for git-stats

## Commands
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Dev**: `npm run dev`
- **Test**: No test framework configured.

## Code Style & Standards
- **Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- **Styling**: Use Tailwind v4. **CRITICAL**: Use semantic CSS variables (e.g., `bg-surface`, `text-text-secondary`, `border-border-dark`) defined in `globals.css` instead of hardcoded hex values.
- **Components**: Functional components, PascalCase naming. Prefer `export default`. Break large components into smaller chunks in `components/`.
- **Naming**: PascalCase for components/interfaces; camelCase for functions/vars.
- **Imports**: Absolute imports with `@/`. Group: React/Next -> 3rd Party -> Internal -> Styles.
- **Types**: Strict TypeScript. Use `interface` for props/state. Avoid `any`.
- **Formatting**: 2 spaces, double quotes, semicolons. Follow `eslint.config.mjs`.
- **Error Handling**: Use `try-catch` and Next.js `error.tsx` boundaries.
