# Theme expansion progress

## Phase 0 — audit and planning

Status: completed, committed and pushed as `65d80a6`. Production verified: 50 themes, matching registry, All + original/latest deep links in both views; see [release evidence](expansion/release-0.json).

- Existing registry: 50 themes; all fifty actual token/composition samples captured.
- Candidate matrix: 170 entries across A–M, fully classified.
- Plan: 51 additions, seven implementation phases; potential final count 101.
- Validation: metadata inventory and duplicate ID checks; no executable theme changes yet.
- Next: Phase 1, eight retro/experimental identities and shared scoped expansion primitives.

## Continuation

Read this file, the master plan, `expansion/designs.json` and the registry. Determine actual counts dynamically. Completed phases are recorded below with concrete validation and deployment evidence. Do not assume a push proves deployment.

## Phase 1 — Retro and experimental

Status: implementation and local validation completed; commit/push and production attestation follow in the next record.

- Themes added: Xerox Club (`xerox-club`), Groove Cabinet (`groove-cabinet`), Bubble Web (`bubble-web`), Sunset Disk (`sunset-disk`), Memphis Workshop (`memphis-workshop`), Aero Garden (`aero-garden`), Cassette Desk (`cassette-desk`), Deconstruct Studio (`deconstruct-studio`).
- Actual registered count: **58**.
- Files: scoped canonical palettes, explicit Lab compositions/record grammars, original vector studies, catalog adaptations, real thumbnails, complete phase recipes, generated catalog/README/skill routing.
- Static: `node scripts/validate_demo.mjs assets/starter` and `node scripts/validate_expansion.mjs` passed.
- Browser: `node scripts/verify_expansion.cjs 1` — 80 responsive cases, both views at 320/390/768/1024/1440px; 17 interaction records; no overflow, missing assets, console errors or sampled text-contrast findings. See [portable evidence](expansion/qa-phase-1.json).
- Shared explorer regression: `node scripts/verify_explorer.cjs` — create/validation/escaping, retained state, real keyboard picker, All search, original-theme switch and first-wheel parent scrolling passed.
- Visual review: actual Lab and Website screenshots inspected; fixed any recorded issues before release.
- Limits: static bounded CSS/SVG depth, optional font fallbacks; sampled text contrast is not a full accessibility certification.
- Next: Phase 2.
