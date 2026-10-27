# Devora Press · v1.0

## Identity

**Positioning:** a small independent product studio with an editorial eye. Warm, clear, confident, slightly tactile. The name “Press” refers to assembling ideas into useful products. Devoralabs is the working wordmark, inferred from the user's repository; this does not assert a legal brand name.

The reference images supply broad principles: outlined modules, hard shadows, confident type, and clear blocks of color. Their photography, names, layouts, icons, pink/lime/violet palette, and poster composition are not reused. The repository's existing SẮC / 01 theme remains separate: Devora Press avoids its black window title bars, zero-radius windows, stepped mark, and red-only accent treatment. Originality here means an independently composed design, not a trademark clearance or a claim that nobody has used these visual ideas before.

## Visual grammar

- Paper is the canvas; lighter paper is the working surface. No paper texture on text areas.
- A small **cut-corner D tile** is the working signature: an ink square with a clipped upper-right corner and an orange letter D. Keep the wordmark adjacent until the symbol is familiar. It is a concept mark, not a pre-existing personal logo.
- A **cobalt chapter rule** is the secondary signature: a short 20–32px rule beside a small section label. Use it sparingly and consistently; never mistake it for a progress indicator.
- Use one dominant orange action per action group. Cobalt labels identify active navigation and text links. Sage supports a calm featured module, with the dedicated on-sage text color.
- Aim for roughly 75% paper, 15% ink/neutral structure, and 10% combined color in ordinary work screens. These are visual guides, not pixel quotas. Promotional areas may be more expressive.
- Border hierarchy: 2px principal panels and controls; 1px quiet dividers; no borders around nested text blocks. Shadow hierarchy: flat by default; 4px hard offset for the current featured panel and main action; never blur, glow, or shadow every item.

## Type and spacing

Load Be Vietnam Pro from a trusted font source or self-host it according to the host app's policy. CSS includes fallbacks and makes no network request. Use 400 regular, 500 medium, 650 semibold, and 800 display (a variable font may be used).

| Role | Desktop | Narrow screens | Line height |
| --- | --- | --- | --- |
| Brand statement | 48px / 800 | 32px / 800 | 1.2 |
| Page title | 32px / 800 | 26px / 800 | 1.3 |
| Section title | 20px / 700 | 20px / 700 | 1.4 |
| Body / editable fields | 16px / 400 | 16px / 400 | 1.6 |
| UI label | 14px / 500–650 | 14px / 500–650 | 1.5 |
| Metadata | 12px / 400–500 | 12px / 400–500 | 1.5 |

Letter spacing may tighten to -0.03em on large display text, not on body copy. Test actual Vietnamese words such as “ý tưởng”, “ứng dụng”, and “trải nghiệm”. Use 4/8/12/16/24/32/48/64px spacing. Main work areas use 24–32px padding, 16px on mobile. Let columns wrap with `minmax(0,1fr)` and titles break naturally.

## Color roles

Canonical values and all night-mode pairs live in `assets/devora-press/tokens.css`.

| Token | Light | Use |
| --- | --- | --- |
| paper | #F4F1E8 | App canvas |
| surface | #FFFDF7 | Cards, dialogs, fields |
| ink | #202A30 | Reading text, principal borders |
| muted | #5D6669 | Supporting text |
| orange | #F36643 | Primary fill with ink text |
| blue | #2D4CF3 | Links, selection, focus; white text on blue fills |
| sage | #CAD9C9 | Featured quiet area with on-sage text |
| yellow | #F2CF69 | Small editorial highlight, ink text only |

Do not put white small text on orange. Do not use orange as body text; use orange-text when that identity color is needed in text. Semantic states have separate success/warning/danger foreground/background pairs. Keep status text visible; color alone is insufficient. Do not assume these tested pairs make every arbitrary combination accessible.

Night mode uses blue-gray paper, lighter orange and periwinkle accents, and muted light borders. The hard shadow becomes deep ink. Photos keep their colors. Yellow decoration must use dark ink text in either mode. Sage must use on-sage, not generic ink, across modes.

## Components and states

Buttons have a 44px minimum height; the orange primary has a 4px shadow, secondary is flat paper. Hover shifts primary by -1px with 5px shadow; press shifts it by 3px with 1px shadow. Feedback lasts 120ms and is disabled for reduced motion. Disabled controls use explicit disabled tokens and native disabled semantics, without shadows.

Inputs use a persistent label, 2px outline, no shadow. Focus uses a 3px cobalt outline with 3px offset. Invalid fields use danger border, `aria-invalid`, and a linked error message. Placeholder is never the sole label. Checkbox/radio color can follow cobalt, retaining native behavior.

Selected navigation combines a cobalt-tinted surface, text, and an indicator or `aria-current`; do not depend on color alone. Flat table/list rows use quiet rules and 16–20px vertical padding. Right-align numerical columns and use tabular numbers where appropriate.

Dialogs use opaque surfaces, strong outline, one shadow, a quiet dimmed backdrop, and correctly managed focus. Provide Escape and a visible close action. Keep drawers inside the viewport without clipping text. Toasts use semantic text plus a label; do not put ordinary success feedback in a modal.

Empty state: one short message and one relevant action. Error state: the failure and a real recovery action. Loading state: indicate busy status without invented metrics. For charts, reserve cobalt for the main series, direct-label data, and use patterns or shapes for additional series.

## Adapting across products

**Productivity/SaaS:** calm paper app shell, flat navigation, two or three outlined working modules. Keep the signature in the wordmark and one featured panel.

**Reading/note-taking:** increase reading width discipline, reduce visible borders and monospace labels; keep orange action and cobalt text selection.

**Mobile capture:** one-column flow, bottom or top native navigation, 44px actions and no hover-dependent controls. Reuse the same type, paper, ink, radius, and accent roles.

**Marketing:** stronger type scale and a large sage or orange editorial section are allowed, while keeping a readable paper-based body. Do not transplant the sample portfolio's split pink hero or framed portrait.

## Repository resources

The shared catalog uses `assets/starter/devora-press-theme.css`. The portable tokens, component examples, and interactive showcase live in `assets/devora-press/`. Serve that folder and open `showcase.html` to inspect both modes. The starter registers only the light appearance and uses its existing theme controller. Do not copy showcase demo logic into a production app.
