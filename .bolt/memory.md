# Project memory

## Product intent & audience

- Landing page for "StreamX", a global IPTV & streaming subscription provider.
- Target audience: German-speaking consumers seeking live TV, VOD movies/series, and multi-device streaming with anti-freeze reliability.
- Conversion-focused: pricing tiers, CTAs, testimonials, FAQ to drive sign-ups.
- All user-facing content now in fluent, professional German.

## Brand personality & voice

- Bold, energetic, marketing-driven; emphasizes scale (20K+ channels, 80K+ VOD) and reliability (99.9% uptime, anti-freeze).
- Copy uses punchy uppercase badges, feature highlights, and urgency cues (savings badges, instant activation).
- German copy maintains professional tone; marketing terms localized naturally (e.g., "Kanäle", "Filme & Serien", "Sofortige Aktivierung").

## Visual design & UX direction

- Dark theme: pure black background (`#000000`), white text, red accent (`#FF1E38` / Tailwind `red-600`).
- Signature glow effects: `glow-red` box-shadow, `glow-text` text-shadow with red rgba.
- Vertical marquee background: three columns scrolling up/down at different speeds, low opacity behind content — fully active.
- Rounded-2xl cards with `border-red-600/30`, gradient fills (`from-neutral-900 to-black`).
- Inter / system-ui sans-serif font stack.
- Sections: sticky header, hero with animated stat counters, 8-card features grid, content showcase, 3-tier pricing with billing toggle + highlighted middle plan, devices grid, testimonials, expandable FAQ, footer with newsletter + link columns.
- Responsive across mobile→desktop; hover animations throughout.

## Decisions, constraints & rationale

- Framework: Vite + React; Tailwind CSS; Lucide React for icons; `@/` path alias maps to `src/`.
- Marquee animation via CSS keyframes (no external library).
- Full German translation applied to all components: navigation, hero, features, pricing, devices, testimonials, FAQ, footer, marquee text.
- Design, black background, red accents, and marquee animation explicitly left untouched per user request.
- Build verified clean after translation.
- Stock imagery used for content showcase category cards.

## Open questions & assumptions

- No real backend or auth; pricing/checkout links are placeholder CTAs.
- Channel/VOD counts, uptime stats, and testimonials are marketing copy, not verified data.
- Brand name "StreamX" inferred from assistant build — not explicitly confirmed by user.
- German translations are assistant-generated; not reviewed by a native-speaking copywriter.
- No routing needed yet; single-page landing.