# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: the Vietnamese-speaking general public — parents, drivers, family members.** Not the production crew. They arrive with no prior knowledge of Child Presence Detection and no stake in how the film was made. Their job is to understand a danger they may not believe applies to them, and to understand what the technology does about it.

They encounter the piece in three confirmed contexts:

- **A link shared on a phone.** Zalo, Facebook, Messenger. Mid-range Android, possibly mobile data, sound almost certainly off.
- **An auto show or event booth.** Large display, ambient noise, standing viewers, very short attention windows, often unattended.
- **Embedded in a product marketing site**, as the story section of a larger sales page.

**Secondary, internal: the production crew** (director, AI-video operator, CapCut/DaVinci editor) who use the script, prompts and cue sheet to actually produce the film. They are a real audience but not an audience for this surface — see Capabilities and Constraints.

## Product Purpose

An eight-scene cinematic narrative — a child left sleeping in a car on a scorching afternoon, and the detection system that escalates until someone reaches them — paired with an explainer of the five-layer CPD architecture.

It exists to make an abstract safety feature *felt* before it is explained, and to sell the real CPD product it represents. Success is a parent who finishes it understanding what CPD does, believing it could matter to them, and wanting it in their own car.

## Positioning

The escalation ladder itself, dramatized beat by beat. A neighboring product can claim a radar sensor; this one narrates twenty minutes of escalating consequence — silent arming, in-cabin chime, an ignored phone, thermal venting at threshold, an external horn, and finally a stranger's face at a two-centimeter gap. The mechanism is the story, and the story is the argument.

## Operating Context

- Vietnamese-primary interface and voiceover, with a bilingual VN/EN subtitle track.
- Eight scenes, 1:45 total runtime, 16:9 with an optional 2.39:1 cinema-scope framing.
- Playback is autonomous once started: timed scene advance, Ken Burns motion, a telemetry HUD that changes state per scene, and a phone-alert modal at scene 3.
- Audio is synthesized at runtime (Web Audio API) rather than shipped as files; the Vietnamese voiceover uses browser `speechSynthesis`. Both are user-toggleable and off-by-default in practice.
- Image assets are eight JPG stills, roughly 700–800 KB each, ~5.9 MB total.

## Capabilities and Constraints

**Confirmed functionality (public-facing):** storyboard player with autoplay and per-scene timing; timeline scrubber with eight scene markers; thumbnail strip navigation; toggleable telemetry HUD overlay; scene-3 phone-alert simulation; bilingual subtitles with language and size toggles; playback speed control; fullscreen; keyboard shortcuts (space, arrows, F11); the five-layer CPD explainer; copy-to-clipboard toast.

**Technical constraints:** plain static HTML/CSS/JS. No build step, no framework, no package manager, no server. Google Fonts loaded from CDN. Web Audio and `speechSynthesis` are browser-dependent, and a Vietnamese TTS voice is not guaranteed to exist on any given device.

**Decided:** the "Prompt AI Video" tab (eight Runway / Kling / Luma / Sora / Midjourney prompts) and the SFX & foley cue sheet are production-crew scaffolding that leaked into the shipped surface. They are **cut from the public-facing experience.** The public artifact is the story plus the CPD explainer.

**Open decisions — record, do not resolve by guessing:**

- Product name. "CPD Safety Shield" is a working title, explicitly **not binding**; the real name is TBD.
- The manufacturer / company behind the product is not established.
- **The commercial primary CTA is blocked on the two decisions above.** Until a real name and maker exist there is nothing truthful to link to, so the final sheet's primary action is the "Xe của bạn có CPD không?" self-check, with sharing secondary. No placeholder ships to the public surface; when the name and maker land, the commercial action takes the primary slot and the self-check moves below it.
- The public surface's `og:url`, `og:image` and `twitter:image` are relative and must become absolute once the production hostname is known — Zalo and several other scrapers reject relative paths, and Zalo is the confirmed primary channel.
- Whether the script and scene copy themselves remain visible to the public, or only the finished film and explainer.

**Resolved since this file was written:** the cut production tooling lives at `production.html`, an internal `noindex` surface reading `production-data.js`; that crew payload no longer ships in the public bundle.

## Brand Commitments

- **Vietnamese first.** Vietnamese is the primary language of interface, narration and subtitle; English is a secondary subtitle track, never a replacement.
- **Tone: direct, urgent, factual — never lurid.** The shipped copy dramatizes a child in danger with gravity rather than spectacle. This is a binding voice constraint.
- No confirmed logo, wordmark, palette, or typeface commitment exists. The "CPD" monogram badge and the current type stack are provisional, not brand assets.

## Evidence on Hand

**Real assets:** eight scene stills at `assets/images/scene1.jpg` … `scene8.jpg`. A complete eight-scene Vietnamese script with dialogue, voiceover text, and bilingual subtitles, in `app.js`.

**Verified specifications — user-confirmed as researched and correct. Preserve exactly; never reword, round, or restate them approximately:**

- Euro NCAP & NHTSA 2025 safety standards
- 60 GHz mmWave radar with in-cabin AI camera; micro-respiration detection
- 38 °C cabin-temperature mitigation threshold
- 2 cm window venting, with a 6–8 °C immediate reduction
- 30-second in-cabin chime; 2-minute silence; 20-minute escalation protocol; mitigation at the 5th warning cycle
- The five-layer architecture exactly as stated in the Tech tab

**Absent — future work must not fabricate any of these:** company or manufacturer name, customers, testimonials, deployment or installation claims, pricing, certification or test results, crash statistics, rescue counts, partner or OEM logos.

## Product Principles

1. **The public is the user.** Anything only a director, editor, or prompt operator would need does not belong on this surface.
2. **The escalation ladder is the argument.** Its order and its timing are the spine of both the film and the explainer; nothing may reorder or compress it for visual convenience.
3. **Locked specs stay verbatim.** Dramatize the scene, never the specification. The numbers are verified and are not creative material.
4. **Sound is an enhancement, never a requirement.** In all three confirmed encounter contexts audio is muted, unavailable, or drowned out. The piece must land in silence.
5. **Urgency without exploitation.** A child in danger is the subject. Handle it with weight, not with shock.

## Accessibility & Inclusion

- **Silence is the default condition, not an edge case.** A shared phone link opens muted and a booth is noisy, so subtitles are the primary information channel rather than an accessory. No meaning may exist only in audio.
- Vietnamese TTS voice availability varies by device and cannot be assumed; the voiceover must never be the sole carrier of any fact.
- Bilingual VN/EN subtitle track, with a user-controlled size toggle already present.
- A skip link and ARIA roles/labels exist in the current implementation and are a floor to preserve, not a ceiling.
- Mid-range Android on mobile data is a confirmed target device; performance is an accessibility concern here, not only a technical one.
- No formal conformance standard (WCAG level, etc.) has been established as a requirement — open.
