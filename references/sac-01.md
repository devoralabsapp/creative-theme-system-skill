# SẮC / 01 — Paper / Brutalist

Use when the user selects `sac-01` or asks for the paper-and-window personal signature. This is the approved restrained palette, not the earlier saturated red/cobalt/lime exploration.

## Identity

- Paper `#F3F2EE`, black `#111111`, white `#FFFFFF`, gray `#D8D8D5`.
- Accent red `#E3322B` is a small visual marker. Red body text uses `#B92721` on light backgrounds. Black `#000000` text is used on the red badge for contrast.
- Rough visual balance: 80% neutral surfaces, 15% black structure, 5% red. Do not turn it into a full red page.
- Zero radius; 2px principal borders, 1px secondary rules; 3–6px hard offset shadows with no blur. Use 4px spacing increments.
- Arial Black / Manrope 800 for headlines, Manrope for text, monospace for small secondary labels.
- Retro window frames, black title bars and the original stepped mark carry the identity. Use contemporary spacing, legible text and responsive reflow.

## Resources

`assets/starter/sac-theme.css` is the theme-scoped adaptation to the shared sample catalog. It uses the existing registry, selector and storage. Artwork stays in its original colors.

`assets/sac-01/` contains the six-file original standalone showcase, plus a short usage note. Serve that directory with the skill's `scripts/serve.mjs`. The note form stores only an explicit local draft; it has no backend. Do not copy its form into a storefront or replace a host app's business actions with the showcase behavior.

For a host app, map its semantic tokens to this palette, extend its existing registry/provider, and style its real controls. Decorative window glyphs are hidden from assistive technology; never make fake window controls appear functional. Keep real links, images, forms, filters, checkout and data access intact. Never force product images to grayscale merely to match the surrounding UI.

## Interaction and verification

Buttons have clear hover and pressed states; 120ms feedback and reduced-motion support. Focus uses a dark red 3px outline. Check mobile navigation, dialogs, inputs, error/empty states, root overflow and text bounds at 320/390/768px and desktop. Switch back to an existing theme and verify that window styling disappears while catalog state survives.

## Inspiration

The user selected [Brutalist web design elements on Pinterest](https://www.pinterest.com/pin/1020628334323738700/). Its public primary image was inspected. Borrowed principles are monochrome utility UI, square windows and hard shadows. SẮC has original layout, copy and CSS graphics, replacing the reference's neon accent with restrained red. Reference artwork, screenshots, logos and icon packs are not included.
