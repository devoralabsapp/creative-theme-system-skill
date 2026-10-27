---
name: creative-theme-system
description: Create or extend selectable website themes, including monochrome terminal, app-inspired workspaces, retro neo-brutalism, and holiday styles. Use for multi-theme UI systems or recreating this twenty-eight-theme collection while preserving an existing application.
---

# Creative Theme System

Build selectable visual themes that preserve the user's application, default theme, content and business logic. This package includes twenty-eight working reference themes and a dependency-free demo. Brand names describe visual inspiration, not those applications' capabilities.

## Choose the implementation path

- **Existing application:** inspect its theme registry/provider, root selector, CSS tokens, persistence, SSR/bootstrap strategy, localization and selector UI. Extend those mechanisms. Read [integration.md](references/integration.md) before adapting the references. Do not replace a working provider with the starter controller.
- **New demo or starting point:** run `node scripts/create_demo.mjs <new-empty-directory>` from this skill folder. Serve it with `node scripts/serve.mjs <directory> --port 4173`. No package installation or build step is needed.
- **Requested styles:** read the relevant entries in [theme-recipes.md](references/theme-recipes.md). For “these themes,” include all twenty-eight; for a bounded addition, add only the requested themes.

For the four theme families and workspace subgroups, see the [classification](README.md#theme-classification). The Creative Lab family adds material-led compositions; treat originality as a design aim, not a claim that no similar work exists.

For the SẮC / 01 personal signature, read [sac-01.md](references/sac-01.md) for its palette, host adaptation and original standalone showcase.

## Visual and integration rules

Use semantic surface, foreground, muted, border, accent, radius and shadow tokens. Scope new overrides beneath the selected theme attribute, for example `html[data-theme="retro"]`. Keep intentionally shared gallery/chrome rules distinct from theme-specific overrides. The bundled CSS targets the starter DOM; map it to the real application's components instead of importing it blindly.

Preserve defaults, URLs, filters, sorting, forms, checkout destinations, localization and data access. Theme selection must not reset application state. Apply themes to secondary screens, dialogs, empty/error states, inputs and focus rings, not only the hero.

**Command line means black/white/gray in this collection.** Use black canvas, dark gray panels, fine gray borders, light monospace text and monochrome controls. Do not introduce green terminal accents unless requested. Product images retain their original color unless grayscale artwork is requested.

Retro uses cream plus yellow/pink/blue/mint, 2–3px black borders, `4px 4px 0` hard shadows, rounded cards and pill controls. Keep hover/pressed effects subtle and respect reduced motion. Workspace decorations are presentation-only and must not look like unsupported functional controls.

Holiday themes are explicit user selections. Preserve the current theme until the user changes it; do not switch automatically based on the calendar. Tết uses Vietnamese New Year styling with red/gold, apricot/peach blossoms and correctly accented Vietnamese greetings. Avoid inventing holiday dates, promotions or current-year claims.

Use supplied or verified product content. Starter products and SVGs are fictional visual-testing samples; do not turn sample prices, ratings, counts or statements into real business claims.

## Validate

For the starter, run `node scripts/validate_demo.mjs <directory>`. This checks assets, registry consistency and script syntax; it does not prove visual quality. For an existing app, run relevant existing checks.

Use supported browser tooling to inspect requested themes on desktop and narrow screens. Read [verification.md](references/verification.md) for the regression checklist. Verify persistence, URL selection, keyboard access, old themes, secondary screens, overflow and unchanged business behavior. If no browser capability exists, report that limit; do not claim static checks replace visual QA.

## Optional publishing

Invoking this skill does not authorize creating a repository, changing visibility, deploying or posting messages. When the user requests GitHub/Vercel delivery, read [publishing.md](references/publishing.md), verify the selected account/repository/project, and confirm the deployed SHA and URL. A successful Git push is not deployment proof.
