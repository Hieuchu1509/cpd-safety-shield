---
name: 20 phút — Lịch Bloc
description: A Vietnamese tear-off day calendar as a scrollable story surface; twenty minutes leaving the stack one sheet at a time.
colors:
  do-32: "#9C4A22"
  do-34: "#B03A18"
  do-35: "#B4351A"
  do-36: "#BE2812"
  do-38: "#C8100A"
  giay: "#F2E7D3"
  muc: "#1A1512"
  muc-mo: "#574A3C"
  vang: "#F2B233"
typography:
  display:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "calc(clamp(4.5rem, 19vw, 11rem) * var(--co))"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.04em"
    fontFeature: "tnum 1"
  headline:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 6vw, 3.6rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.8vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 2.4vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.82rem, 1.7vw, 0.95rem)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "0.1em"
  datum:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(0.95rem, 2vw, 1.08rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
    fontFeature: "tnum 1"
rounded:
  none: "0"
  focus: "2px"
  dot: "50%"
spacing:
  le: "clamp(1.25rem, 5vw, 3.5rem)"
  nhip: "clamp(1rem, 2.5vw, 1.75rem)"
  cao-dieu-khien: "7.5rem"
components:
  sheet:
    backgroundColor: "{colors.do-32}"
    textColor: "{colors.giay}"
    rounded: "{rounded.none}"
    padding: "calc({spacing.le} + 1.25rem) {spacing.le} calc({spacing.le} + {spacing.cao-dieu-khien})"
  sheet-final:
    backgroundColor: "{colors.giay}"
    textColor: "{colors.muc}"
    rounded: "{rounded.none}"
  numeral:
    typography: "{typography.display}"
    textColor: "{colors.giay}"
  numeral-acting:
    typography: "{typography.display}"
    textColor: "{colors.vang}"
  almanac-cell:
    backgroundColor: "{colors.do-32}"
    textColor: "{colors.giay}"
    rounded: "{rounded.none}"
    padding: "0.85rem clamp(0.6rem, 1.6vw, 1.1rem)"
  almanac-label-acting:
    backgroundColor: "{colors.vang}"
    textColor: "{colors.muc}"
    padding: "0.18em 0.5em"
  button-share:
    backgroundColor: "{colors.do-38}"
    textColor: "{colors.giay}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.4rem"
    height: "56px"
  button-share-hover:
    backgroundColor: "{colors.do-36}"
    textColor: "{colors.giay}"
  button-control:
    backgroundColor: "{colors.giay}"
    textColor: "{colors.muc}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.05rem"
    height: "48px"
  button-control-active:
    backgroundColor: "{colors.muc}"
    textColor: "{colors.giay}"
  skip-link:
    backgroundColor: "{colors.giay}"
    textColor: "{colors.muc}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.5rem"
    height: "44px"
---

# Design System: 20 phút — Lịch Bloc

Seed key `3f8625cb` · Form: **Lịch bloc** (candidate 6 of the grounded list) · Visitor mode: Persuade · Platform: static HTML/CSS/JS, no build step.

## Overview

**Creative North Star: "The Lịch Bloc — the tear-off day calendar you cannot put back"**

The surface is a Vietnamese wall calendar block. Every screen is one sheet that was pulled off the sheet above it: punched binding holes at the top, a torn perforation edge, a dateline, and a colossal tabular numeral that dominates the page the way a calendar's date does. Time is the material. The reader tears through twenty minutes and the sheets get hotter as they go.

Colour arrives as a flood field, never as a tint or an overlay. A sheet is one solid ochre-to-vermilion ground with newsprint type on it; there is no gradient, no glass, no scrim, no card floating on a background. Depth exists in exactly two places — the illustration block, which sits on the sheet with a soft double shadow, and the fixed controls, which use the same shadow to sit above the stack. Everything else is flat by construction.

The system is deliberately austere in inventory: one type family in three weights, nine colours, one animation, square corners everywhere. The escalation the story needs is carried by four coordinated channels rather than by adding new components — the ground steps up the heat ramp, the numeral grows via `--co`, the torn edge coarsens, and the acting sheet reverses its almanac labels into gold.

**Key Characteristics:**
- Full-bleed single-colour sheet grounds; no cards, no panels, no overlays
- Square corners as an absolute (0 radius everywhere except the 2px focus ring and the circular binding holes)
- One family (Be Vietnam Pro) at 400 / 700 / 900, chosen for complete Vietnamese diacritic coverage
- A colossal tabular numeral as the fixed anchor of every sheet
- Gold reserved for one meaning only
- One authored motion moment; the resolved state is the default

## Colors

A five-step heat ramp built to rise in chroma while holding luminance nearly flat, plus a newsprint/ink neutral pair and a single reserved gold.

### Primary

The heat ramp. Relative luminance runs 0.1208 → 0.1267 across all five steps (a 4.9% spread) while chroma climbs, so the ramp reads as *heating* without the contrast collapsing at the hot end. Measured against newsprint: **5.02 / 4.95 / 4.95 / 4.90 / 4.85 : 1**. Every step clears 4.5:1 for full-strength body type.

- **Sun-Baked Ochre** (`do-32`): the resting sheet. Also the document's default ground (`--nen-trang`) and the shipped `theme-color`.
- **Scorched Terracotta** (`do-34`): first escalation.
- **Kiln Red** (`do-35`): the sheet where the alarm goes outward.
- **Signal Vermilion** (`do-36`): the sheet where humans start moving. Also the share button's hover ground.
- **Emergency Red** (`do-38`): 38°C, the threshold where the car acts. Also the share button's rest ground, the favicon field, and the final sheet's numeral and list markers.

Assignment is data-driven, not decorative: a sheet's numeric cabin temperature selects its step (`>=38 → do-38`, `>=36 → do-36`, `>=35 → do-35`, `>=34 → do-34`, `>=30 → do-32`).

### Tertiary

- **Warning Gold** (`vang`): the single reserved semantic. Gold means *the car is acting on its own*. It appears on the acting sheet's numeral, on the acting sheet's reversed almanac labels, and on the two browser surfaces that stand for the reader's own presence — text selection and the caret — plus the outer half of the focus ring.

### Neutral

- **Newsprint** (`giay`): sheet type on every ochre ground, the ground of the final sheet, and the ground of the controls.
- **Ink** (`muc`): all type on newsprint grounds (14.78:1); the inner half of the focus ring; the active-control ground.
- **Ink Secondary** (`muc-mo`): the final sheet's dateline, unit label, colophon, and the English track in the `<noscript>` fallback. 7.00:1 on newsprint.

### Named Rules

**The No-Alpha-Type Rule.** Sheet type is never alpha-mixed. Hierarchy comes from weight and size only. An earlier build tinted secondary copy and measured 3.36:1 on the hottest sheet; opacity on type is banned outright on a sheet ground. (Opacity remains available for non-type material — hairlines, binding holes, the illustration block's placeholder ground — and for the stopped numeral's deliberate `.72` dimming, which is checked against its own ground.)

**The Flood Field Rule.** Colour is a field, never a tint. A sheet has exactly one ground colour edge to edge. No gradients, no scrims, no colour overlays on imagery.

**The Gold-Means-Acting Rule.** Gold marks only the moment the car acts, and only in two forms: as large-text colour on the numeral (3.17:1, clearing the 3:1 large-text floor) or as a solid field behind ink (9.65:1). Gold is never used as small text on a sheet ground, where it measures 1.53:1.

## Typography

**One family:** Be Vietnam Pro (fallback `ui-sans-serif, system-ui, sans-serif`), weights 400 / 700 / 900. Chosen for full Vietnamese diacritic coverage — stacked tone marks over circumflexes render correctly at display size, which is the whole reason there is no second family.

**Character:** Contemporary Vietnamese grotesque. The 900 weight is where the personality lives: tightly tracked, huge, almost printed-block. Body copy at 400 is plain and unstyled, so the numeral and the statement are the only things asking for attention.

### Hierarchy

- **Display** — the colossal numeral (`.chu-so`). 900 weight, `line-height: .82`, `-.04em` tracking, tabular figures forced with both `font-variant-numeric: tabular-nums` and `font-feature-settings: "tnum" 1`. Its size is the clamp multiplied by `--co`, the escalation multiplier: 1 → 1.05 (34°) → 1.08 (35°) → 1.12 (36°) → 1.22 (38°). Paired with a small tracked uppercase unit label (`.don-vi`, `.16em`) on a shared baseline.
- **Headline** — the final sheet's closing statement (`.tieu-de-cuoi`), capped at 16ch, `text-wrap: balance`.
- **Title** — the sheet statement (`.tieu-de-to`), capped at 26ch. The `h1` on sheet 1 steps up to 900 / `-.03em`; the pivot sheet narrows to 20ch at a larger size; layer sheets widen to 28ch.
- **Body** — cue text (`.loi-thoai`), the closing paragraph, and the self-check steps. Max measure 68ch (`--do-rong`). The cue paragraph reserves `min-height: 3.4em` (5.2em under 620px) so cue changes never reflow the sheet.
- **Label** — the dateline (`.ngay-thang`), the unit marker, and almanac keys. 700 weight, uppercase, tracked `.09em`–`.16em`.
- **Datum** — almanac values (`.lich-nien dd`), 700 weight with tabular figures so temperatures align down the column.

### Named Rules

**The Tracking Floor Rule.** Negative tracking is reserved for the 900-weight display sizes and stops at `-.04em`. Anything uppercase or under ~1rem tracks positive (`.04em` to `.16em`); nothing small is ever tracked tighter than normal, because Vietnamese diacritics need the sidebearings.

**The Tabular Numerals Rule.** Every figure that can change between sheets — the colossal numeral and every almanac value — is set with tabular figures. Numbers must not shift horizontally when a sheet advances.

**The Clock Tells The Truth Rule.** The numeral stays on the clock for all eight story sheets and visibly stops at `20:00` once the car acts, rather than inventing times the specs never set. Stopped sheets dim the numeral to `.72` and append `· đã dừng` to the unit. Layer sheets count layers (`1..5 tầng`), not minutes — the clock slot is never reused for a second meaning.

## Layout

One sheet per viewport. Each sheet is `min-height: 100svh` with content in a centred column (`.to-giay`, max 78ch; 90ch on large fine-pointer screens). Vertical rhythm inside the sheet is a single grid `gap` of `--nhip` — `clamp(1rem, 2.5vw, 1.75rem)`. Page inset is `--le` — `clamp(1.25rem, 5vw, 3.5rem)` — with an extra 1.25rem at the top for the perforation and a reserved bottom band of `--cao-dieu-khien` (7.5rem, 9.5rem under 620px) so the fixed controls never sit on top of cue text.

Scroll snapping lives on `html`, which is the actual scroll container: `y proximity` by default, upgraded to `y mandatory` at `(min-width: 901px) and (pointer: fine)`. On that same breakpoint sheets switch to `align-content: safe center`, so a sheet taller than the viewport still starts at a reachable edge instead of overflowing past the container's start.

Breakpoints, in full: `max-width: 620px` (single-column almanac with right-aligned values, tighter controls, taller cue reserve), `min-width: 901px and pointer: fine` (mandatory snap, safe centring, wider column), `hover: none` (hover states neutralised), plus `prefers-reduced-motion` in both directions, and `print` (controls and skip link hidden, sheets black-on-white with a page break each).

**The Nothing Hides Rule.** No breakpoint removes meaning. The almanac reflows from an auto-fit grid to a two-column key/value list, but all four rows survive at every width and the occupant row stays first. The only things that disappear are the fixed controls and the skip link, and only in print.

## Elevation & Depth

The system is flat by construction. Sheets have no shadow: depth between sheets is the torn perforation and the colour step, not a shadow. There is exactly one shadow token, `--bong` (`0 2px 4px rgba(26,21,18,.16), 0 14px 34px rgba(26,21,18,.24)`), used in exactly two places — the illustration block and the fixed control buttons — both of which are physically *on top of* the sheet in the calendar metaphor.

### Shadow Vocabulary

- **Sheet-lift** (`--bong`): the double-stop ink shadow, one tight contact stop and one wide ambient stop. Applies to `.khoi-hinh` and `.nut-tron`. Nothing else takes a shadow.

### Named Rules

**The Two-Shadow Rule.** `--bong` is the only shadow in the system, and only two components carry it. Anything that is *part of* a sheet is flat; only things sitting *on* a sheet cast.

**The Perforation Rule.** The top of every sheet is a repeated radial-gradient mask over a `brightness(.82)` copy of the sheet ground — the tear. It coarsens with heat: 14px tall on 14px pitch at 32°, then 15/13, 16/12, 17/11, and 19px tall on 9px pitch at 38°. The final sheet's perforation is removed entirely, because it is the sheet that does not tear.

## Shapes

Zero radius everywhere. Buttons, the almanac grid, the illustration block, the share button, the skip link, the noscript panel: all hard-cornered. The two exceptions are semantic, not stylistic — the binding holes are true circles (9px, `border-radius: 50%`, with an inset highlight so they read as punched), and the focus ring carries a 2px radius so the outline reads as a ring rather than a box.

Borders are hairlines only, and they are alpha-mixed newsprint or ink rather than a separate colour: `--vien` (`1px solid rgba(242,231,211,.34)`) frames the almanac; the dateline sits on a 1px newsprint hairline; the final sheet's call to action is separated by a `3px solid` ink rule, the heaviest line in the system, and its colophon by a 1px ink hairline. The almanac's internal grid lines are a 1px grid `gap` showing the container's own background through — no per-cell borders.

Icons are inline SVG paths at 20px (controls) or 22px (share), `stroke: currentColor`, `stroke-width: 2`, round caps and joins. No icon font, no glyph characters.

## Components

### The Sheet (`.to` / `.to-giay`) — the signature component

Everything in this system is a sheet. Anatomy is fixed and always in this order:

1. **Binding holes** (`.dinh-ghim`) — eight 9px punched dots, centred, `aria-hidden`.
2. **Dateline** (`.ngay-thang`) — the calendar's own masthead line: where and when, uppercase, tracked, on a hairline.
3. **Colossal numeral** (`.con-so`) — the value and its unit on a shared baseline.
4. **Statement** (`.tieu-de-to` / `.tieu-de-cuoi`) — one sentence, balanced, capped measure.
5. **Illustration block** (`.khoi-hinh`) — 16:9, `object-fit: cover`, never covered by type. If the image fails to load, the figure becomes `.hinh-loi` and renders the scene's alt text as centred copy, so a failed fetch cannot take the story with it.
6. **Almanac** (`.lich-nien`) — the calendar's ephemeris block.
7. **Cue text** (`.loi-thoai`) — the live subtitle channel, with an optional English track beneath.

Variants: story sheet (default), pivot sheet (`.to-ban-le`, no image, no almanac, tighter statement), layer sheet (`.to-tang`, numeral counts layers), final sheet (`.to-cuoi`).

**The Anatomy Order Rule.** Sheet parts appear in the order above or not at all. A sheet may omit an image or an almanac; it may not reorder them. The numeral is never below the statement.

### Almanac (`.lich-nien`)

Auto-fit grid, `minmax(11rem, 1fr)`, cells separated by a 1px gap that shows the newsprint-alpha container through. Keys are small tracked uppercase; values are 700-weight tabular. On the acting sheet (`.xe-hanh-dong`) the keys reverse into a solid gold field with ink type, using negative margins so the badge bleeds into the cell padding.

**The Occupant-First Rule.** The almanac's first row always names who is in the cabin. It is the row that says a child is in there; it is never dropped, never reordered, and never collapsed at any breakpoint.

### Final sheet (`.to-cuoi`)

The one sheet that does not tear: no perforation, newsprint ground, ink type, and the heat ramp present only as the numeral and list markers in Emergency Red. Carries the primary action (a self-check ordered list under a 3px ink rule), the share button, a "start over" text link (underlined, `.28em` offset, 2px thickness, 44px target), and the colophon.

### Buttons

- **Share (`.nut-chia-se`)** — the primary action. Emergency Red ground, newsprint type, square, 56px min height, inline SVG plus label. Hover steps *down* the ramp to Signal Vermilion; active presses 2px down. Its label doubles as its status channel: on copy success or failure it swaps to a message for 3200ms and restores.
- **Controls (`.nut-tron`)** — fixed bottom-right stack: English subtitles, sound, autoplay (autoplay stays `hidden` unless the large fine-pointer contract is active). Newsprint ground, ink type, `--bong`, 48px min height. Hover lifts to `#fff`; the on-state (`.dang-bat`) inverts to ink ground with newsprint type, always paired with `aria-pressed`.
- **Skip link (`.bo-qua`)** — newsprint ground, ink type, translated off-screen and slid in on `:focus`, 44px min height.

**The Press-Down Rule.** Buttons respond to `:active` with `translateY(2px)` and a background step, never with a shadow change. Under `hover: none`, hover backgrounds are reverted to their rest values so a tap does not leave a stuck state.

### Focus ring

Two-tone by necessity: a 3px ink outline at 2px offset, wrapped in a 6px gold halo. One half always clears 3:1 — gold carries the ochre sheets, ink carries the newsprint sheet where gold measures only 1.53:1. Applied to `:where(a, button, [tabindex]):focus-visible`.

### Browser surfaces

The parts not drawn still carry the world: `::selection` is gold ground with ink type; `caret-color` is gold everywhere; the scrollbar is a 10px newsprint-alpha thumb on an ink-alpha track, square, with `scrollbar-color` behind an `@supports` guard; `theme-color` ships as Sun-Baked Ochre and is rewritten live from the active sheet's computed background; the favicon is an inline SVG data URI — Emergency Red field, 900-weight newsprint "20".

### Motion

One authored moment, and only one. A sheet becoming live (`.dang-doc`) plays `dat-to` on its content (`translateY(-1.4%) rotate(-.45deg)` → none, 950ms) while its perforation plays `xe-giay` (`scaleY(2.1)` at `.45` opacity → none, 800ms, origin `top center`): the sheet has just been torn off and settles onto the stack. Easing everywhere is `--ra` (`cubic-bezier(.16, 1, .3, 1)`). State transitions run 180ms; ground-colour crossfades run 700ms.

**The Resolved-Default Rule.** The whole keyframe block sits inside `@media (prefers-reduced-motion: no-preference)`, and both keyframes end at the untransformed state. A sheet that never animates is still correct. Reduced motion is honoured twice — CSS collapses animation and transition durations to `.01ms` and drops smooth scrolling, and JS reads the same media query to switch programmatic scrolling to `auto` and to suppress autoplay entirely.

### Delivery contracts

Two, selected by capability rather than by device name:

- **Phone / coarse pointer** — scroll-driven. The reader advances sheets; proximity snap assists. No timer.
- **`min-width: 901px and pointer: fine`, motion allowed** — timed autoplay with loop. The autoplay control unhides, mandatory snap engages, and the deck advances itself and wraps from the last sheet back to the first.

Which sheet is live is decided by an `IntersectionObserver` with `rootMargin: -45% 0px -45% 0px` and `threshold: 0` — a band across the middle of the viewport, because a ratio threshold can never be met by a sheet taller than the viewport. Becoming live sets the sheet's animation, its ground on `html`, `theme-color`, the cue timer, and audio.

**The Reader Wins Rule.** Autoplay yields on the first user scroll. A `wheel` or `touchstart` the engine did not itself cause turns autoplay off and updates the control's label and `aria-pressed`. Autoplay never re-arms itself.

**The Cue-Derived Duration Rule.** A sheet's dwell time is computed from its cue reading time, never from the authored film duration. Cues run at 15 characters per second with a 2800ms floor, and a sheet holds the sum of its cues plus 1200ms. The authored `duration` field in the scene data is not used for timing.

### Cue system

Authored subtitles are split into cues **without altering a character**. A sentence break is recognised only where a terminator is followed by whitespace and a capital or opening quote, so the script's own ellipses (`ting... ting...`, `51H-...`) stay inside their sentence. Closing quotes and brackets ride with the sentence they close. Anything over 84 characters breaks again at its own clause punctuation — commas, colons and semicolons included, because several sentences here have no comma at all. The cue element is `role="status"` / `aria-live="polite"` / `aria-atomic="true"`, so cue changes are announced. The English track renders in a sibling span, revealed by a body class, clamped to the last available English cue when the two tracks split unevenly.

### Accessibility floor

Non-negotiable, all present in the build: skip link to the main content; per-scene Vietnamese alt text authored in the scene data and reused as the image-failure caption; the `aria-live` cue channel; a full keyboard map (Arrow and Page Up/Down, Home, End) that defers to form fields; reduced motion in CSS *and* JS; 44px+ targets everywhere (44px skip link, 48px controls, 56px share); and a static `<noscript>` panel carrying all eight scenes in Vietnamese and English with the colophon, so the story is fully readable with JS off.

### Assets

Eight 16:9 stills, WebP with JPEG fallback via `<picture>`, `width`/`height` always declared to reserve layout. Sheet 1's image is preloaded and `fetchpriority="high"`; every other sheet is `loading="lazy"`. Measured on disk: 6.05 MB of JPEG down to ~561 KB of WebP for the eight stills (~660 KB including the 1200×630 share card). The stills are AI-generated and the surface says so — the colophon (`.cot-in`) ships on the final sheet *and* in the `<noscript>` fallback.

## Do's and Don'ts

### Do:
- **Do** ground every new surface in one flood colour from the heat ramp, edge to edge, chosen from the data rather than picked by eye.
- **Do** give any new sheet the full anatomy in order: binding holes, dateline, numeral, statement, illustration, almanac, cue.
- **Do** put every changeable figure in tabular numerals.
- **Do** carry hierarchy with weight (400/700/900) and size, never with opacity on type.
- **Do** reserve space for anything that changes in place — the cue paragraph's `min-height` and the images' intrinsic dimensions exist so nothing reflows mid-read.
- **Do** keep new corners square, and new borders to 1px alpha hairlines (or the 3px ink rule when a section break must be loud).
- **Do** honour reduced motion in both layers: any new animation goes inside `@media (prefers-reduced-motion: no-preference)` and must end at the untransformed state.
- **Do** pair every toggle's visual on-state with `aria-pressed` and a label that changes with it.

### Don't:
- **Don't** alpha-mix type on a sheet ground. Ever.
- **Don't** use gold for anything but the car acting, and never as small text on a sheet ground.
- **Don't** add a second type family; the Vietnamese diacritic coverage is why there is one.
- **Don't** add a shadow to anything that is part of a sheet. `--bong` belongs to the illustration block and the controls only.
- **Don't** hide a row, a label, or a value at a narrow breakpoint. Reflow it.
- **Don't** invent a time, a temperature, or a telemetry value. The numeral stops at 20:00 rather than filling in numbers the specs never set.
- **Don't** put a second meaning in the numeral slot. Minutes or layers, declared by the sheet type — never both.
- **Don't** let a colour ground ship without also setting the type colour it requires (see Known Gaps).

## Known Gaps

Recorded as observed. None of these is a rule; they are places the build is inconsistent or only partly systematised.

- **The 25° sheet is unreadable.** Story sheet 8 carries `nhiet: 25`, and the ramp selector returns newsprint below 30°. The sheet therefore paints a newsprint ground while its type inherits newsprint from `body` — newsprint on newsprint. Only `.to-cuoi` flips type to ink, and sheet 8 is not `.to-cuoi`. Either the ramp needs a floor at Sun-Baked Ochre for story sheets, or the newsprint ground must carry its ink recolour as a rule rather than as a class on one sheet. Fix it; do not copy it.
- **The escalation channels have two sources of truth.** `--co` and the perforation coarsening are keyed off `data-nhiet` attribute selectors for 34/35/36/38 only, while the ground colour is chosen in JS by numeric threshold. A temperature outside those five values gets a correct ground but a default numeral size and a default tear.
- **`thumb1..8.webp` ship but nothing references them.** Eight orphan files (~72 KB) in `assets/images/`.
- **`og:url` and both share-image URLs are relative.** The markup says so in a comment; they must become absolute on the real host or several link scrapers, Zalo's included, will refuse them.
- **Sheet dwell time is not uniformly derived.** Story sheets compute duration from cue reading time; the pivot sheet is a literal 8s, the final sheet a literal 12s, and layer sheets use `max(7, body length / 15 + 2)`. Three formulas for one concept.
- **No conformance target is set.** The contrast work is measured and deliberate, but no WCAG level has been adopted as a requirement, so "clears 4.5:1" is a house standard here, not a stated conformance claim.

## Separate Surface: Production (non-inheriting)

`production.html` + `production-data.js` are internal crew tooling and are **deliberately outside this world**. The surface is `noindex, nofollow`, styles itself from its own inline `:root`, and is never loaded by the public surface — `app.js` does not reference `production-data.js`, and the crew-only fields (`aiPrompt`, `sfxCue`) were moved out of `scenes.js` so they cannot leak.

It shares exactly three things with the public world, and only because breaking them would be gratuitous: the type family, the newsprint/ink/ink-secondary neutrals, and Emergency Red as its single accent. Everything else is plain document styling — ink-on-newsprint body text at a 78ch measure, uppercase ruled section headings, a hairline-ruled table, a `#D8C9AC` border token that exists only here, an ink-ground button with a red hover, ink-on-newsprint selection, and a single-tone red focus ring.

**The Non-Inheriting Rule.** Nothing in this section is a system rule for the public world. The production surface must never adopt sheets, perforations, colossal numerals, the heat ramp, or gold — and the public surface must never adopt its tables, its `#D8C9AC` border, or its plain-document layout. If the two ever converge, one of them is wrong.

## Contract Divergences

Where the shipped code and the direction contract at the top of `index.html` disagree, the code is what is documented above. For traceability:

- **Numeral / dateline order.** The FIRST VIEWPORT line reads "Colossal 00:00 over the dateline". The build places the dateline first and the numeral beneath it, matching the printed calendar it is imitating (masthead, then date). Documented as built.
- **"Flood colour as a field" has exceptions in the shipped code.** The OWN-WORLD line commits to the ochre-to-vermilion field. Two sheets ship with a newsprint field instead: the final sheet (intentional — the sheet that does not tear) and story sheet 8 (unintentional; see Known Gaps).
- **Constant-luminance claim, verified.** The stylesheet's opening comment states the ramp holds a 0.1208 → 0.1267 luminance spread and 5.02 / 4.95 / 4.95 / 4.90 / 4.85 : 1 against newsprint. Those values were re-verified for this document and are recorded as measured, not as intended.

### Elevation, addendum

`--bong-cao` (`0 4px 8px rgba(26,21,18,.2), 0 22px 48px rgba(26,21,18,.3)`) is the lifted counterpart of `--bong`, used only for the hover state of `.nut-tron`.

**Paper Lifts.** A control on paper responds by lifting, never by bleaching. Hover raises the element 2px and swaps `--bong` for `--bong-cao`; it never changes the background. This keeps the newsprint ground literal — newsprint has no pure white — and pairs with Press-Down, which drives the element back down on `:active`. On `hover: none` the lift is suppressed and `--bong` is restored.
