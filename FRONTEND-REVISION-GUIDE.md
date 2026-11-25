# Frontend revision guide — Kuroi Neko

## Safe places to change the appearance

- `index.html`: section layout, accessible labels, text and page metadata.
- `assets/styles.css`: colors, typography, spacing, shapes, responsive layout, hover states and CSS animation.
- `assets/app.js`: rendering functions for profile/social/gallery/services/rules. Keep data field names and Supabase queries unchanged unless the database migration is intentionally reviewed.

## Do not change for a visual-only redesign

- `assets/config.js`: contains the existing Supabase project URL and browser publishable key. Do not replace them with a secret/service-role key.
- `supabase/kuroi-neko-addon.sql`: schema, grants and RLS policies. A frontend-only visual update does not require re-running or editing this SQL.
- Supabase query table names (`kn_artist_profiles`, `kn_social_links`, `kn_artworks`, `kn_commission_services`, `kn_commission_addons`, `kn_commission_rules`) and column names used in `assets/app.js`.
- Auth, ownership filters, Storage bucket name (`kn-artist-assets`), upload paths and owner checks.

## Social icons

Social icons are rendered locally as lightweight inline SVG / monograms from the platform name. This avoids icon-font downloads and extra runtime dependencies. VGen is represented by a neutral `VG` monogram rather than the official VGen logo: VGen's published brand-assets terms state that assets may not be used for profit and require links to VGen when applicable. If the artist wants the official asset on a commission-promoting website, ask VGen for permission first.

## Animation strategy

This project is vanilla HTML/CSS/JavaScript, not React. The current animations use CSS transforms/opacity and `IntersectionObserver`, with `prefers-reduced-motion` support. No React or animation package was added, so the Supabase integration remains on its current code path and the page does not gain a React runtime.

If the site is deliberately migrated to React later, use Motion for React via `LazyMotion` + `m` with a small feature set, not the full `motion` component by default. Do not migrate merely to add hover/reveal effects.

## After any frontend change

1. Run the site locally with `python -m http.server 5500`.
2. Test desktop and mobile navigation, gallery filters, lightbox, social links and contact buttons.
3. Sign in to the admin panel and test profile, social links, artworks, services, add-ons and guidelines.
4. Confirm no SQL/schema/config changes were introduced by the visual commit.
