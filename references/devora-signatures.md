# Devora Signal and Devora Folio

Two personal signature themes in **white, red and black**, with neutral grays for hierarchy. All new showcase copy, controls, status messages and instructions are in English. These are separate design directions, not recolors of Devora Press or SẮC / 01.

| Decision | Devora Signal | Devora Folio |
| --- | --- | --- |
| ID | `devora-signal` | `devora-folio` |
| Character | Precise, direct, tool-like | Considered, editorial, personal |
| Canvas / ink | `#FFFFFF` / `#141414` | `#FFFFFF` / `#141414` |
| Signature red | `#C81E32` with white text | `#B91C30` with white text |
| Navigation | Dark rail, red active rule | Top navigation, red underline |
| Main structure | Ruled rows and an indexed focus module | Open page, notebook spine and a collection grid |
| Corners | 0px | 6px controls, 12px panels |
| Elevation | Flat, no shadows | Flat, no shadows |
| Type | Be Vietnam Pro 800 headings, 400 body | Be Vietnam Pro 600 headings, 400 body |
| Best fit | Productivity, project tools, developer utilities | Notes, reading, personal libraries, creative collections |

## Identity rules

Both use a two-part D mark: a red vertical stem next to an ink bracket. It is an original working concept for the Devoralabs wordmark, not a legal trademark claim. Keep the wordmark next to it. The mark can be built in CSS; do not replace a user's established product logo without request.

### Signal

Keep white as the main work canvas. Use a black navigation rail or a small dark utility band only when the host has navigation to support it. A slim red edge and a square numbered tab identify the current focus. Main lists use horizontal rules, aligned metadata and square controls. Use 1px structural rules, 2px major section rules and 0px corners. Prefer compact, deliberate spacing over ornamental layers.

Do not import SẮC's faux window title bars, hard offset shadows, stepped logo, or paper beige. Signal should feel like a current working tool, not a desktop-window illustration. The standalone showcase demonstrates a rail; the catalog adaptation keeps its existing navigation and uses the red index edge instead.

### Folio

Keep most of the page white. Use a top navigation and generous editorial spacing. A thin red notebook spine, a small red dot and a short section label carry the identity. Headlines use sentence case, medium weight and a spacious line height. Cards have quiet 1px borders, 12px corners and no shadow. A single black featured strip can support a white secondary action. Do not add a dark sidebar, multiple black banners or dense ruled tables merely to match Signal.

Folio's showcase uses three collection cards; the catalog uses two columns to give real product artwork room. Layout is adapted to actual content rather than forcing the demo's columns onto a host app.

## Portable resources

- `assets/devora-signal/tokens.css` and `assets/devora-folio/tokens.css` contain the canonical per-theme tokens. Both are opt-in through the matching `data-theme` attribute; neither affects another theme.
- `assets/devora-signatures/components.css` contains shared button, input, badge, error and focus examples using `--dv-*` semantic variables. Map them to the host's actual components.
- `assets/devora-signal/index.html` and `assets/devora-folio/index.html` are the original interactive showcases. Serve the repository root and open the appropriate file; each loads shared files in the sibling `devora-signatures/` directory. Preserve those relative paths when copying a showcase.
- `assets/devora-signatures/showcase.css` and `showcase.js` are demo layout and local interactions, not application business logic.
- `assets/starter/devora-duo-theme.css` maps the two identities to the shared catalog without replacing its controller, theme selection, content or actions.

These are fixed light themes with optional black structural areas, not automatic light/dark systems. Preserve the current theme until explicit selection. Do not infer night mode from time or OS appearance.

## Tokens and interaction

Map `--dv-canvas`, `surface`, `ink`, `muted`, `line`, `line-soft`, `red`, `on-red`, `red-soft`, `inverse`, `on-inverse` and `inverse-muted` to existing semantic roles. Red is the main action and active navigation; black/white carry reading text. Never introduce green, blue, orange or pink as an unrelated status color. The pale red token is a low-tint state surface, not a new accent.

Color-independent labels are essential in a restricted palette: `✓ Ready`, `◇ Needs review`, `! Connection error`. Errors use an explicit message and `aria-invalid`; red alone must not signal failure because red is also the brand. Preserve real app data meanings. Images and user artwork retain their original colors unless the user asks for monochrome media.

Controls are at least 44px high. Use a 3px red focus outline with 3px offset on white; use the white focus token for controls on a dark area. Avoid placing white small text on an unverified lighter red. Use the provided red/white pair. Red primary buttons turn black on hover and move only 1px on press. Remove motion under reduced-motion preferences. Disabled controls use dedicated neutral tokens and native semantics.

Use 4/8/12/16/24/32/48px spacing. Body text should be 16px in real reading/form areas; 13–14px is suitable for compact UI labels and 11–12px for short metadata. Inputs remain 16px on narrow screens. Be Vietnam Pro is loaded optionally in the demo, with system fallbacks; integrate fonts using the host's own strategy and CSP. Avoid full-page background grids and decorative gradients.

Dialogs use opaque white, ink borders and the theme's radius. Support Escape, focus containment, return focus and visible close/cancel actions. Empty, loading and error states follow the same type and border hierarchy. Never copy fictional showcase project creation into a real app as a substitute for persistence or a backend.

## Host integration

Extend the existing registry/provider and map semantic tokens. Keep defaults, storage keys, URLs, locale, search, sorting, forms and data access intact. Do not add a second theme provider or turn existing content into English as a side effect; the English requirement applies to these newly supplied theme examples. Theme IDs are stable and labels are `Devora Signal` and `Devora Folio`.

Suggested agent request:

```text
Read SKILL.md and references/devora-signatures.md. Apply Devora Signal
(or Devora Folio) to my existing app with its current theme provider.
Preserve the app's behavior, content and locale. Use the white/red/black
palette, component states and the selected theme's own layout principles.
```

Verify desktop and 320/390/768px layouts, text bounds, long names, keyboard focus, dialogs, invalid/empty states, reduced motion and switching back to old themes. Check search/filter/sort and stored selection across theme changes. Report observable checks; a token palette alone does not prove accessibility on arbitrary host backgrounds.
