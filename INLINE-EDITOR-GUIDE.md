# Kuroi Neko — Inline Portfolio Editing Guide

## What changed

The public portfolio is now also the artist's editing workspace. The visual language stays consistent: Nunito, white / pale-blue surfaces, soft blue accents, rounded controls and restrained shadows.

## How the artist uses it

1. Open the public website.
2. Select **Artist admin** in the footer and sign in with the existing Supabase Auth artist account.
3. After successful authentication, the login/editor modal closes and the page enters **Edit mode**.
4. Small contextual buttons appear next to the sections that can be edited:
   - Hero / introduction → Artist profile
   - Social links → Social links
   - About → Artist profile
   - Artworks → Artworks
   - Commission menu → Prices & services
   - Add-ons → Add-ons
   - Guidelines → Guidelines
   - Contact details → Artist profile
5. Select a contextual edit button. The editor opens directly on the matching category.
6. Use the tabs to switch categories. The editor only shows one category at a time so the form does not become a long, confusing page.
7. Save a change. The public page and editor data refresh from Supabase.
8. Select **Back to website** to close the editor and continue working in Edit mode.
9. Select **Exit** in the floating Edit Mode toolbar or **Exit edit mode** in the footer to hide edit controls. This keeps the Supabase session active.
10. To end the session, open the editor and select **Sign out**.

## Existing backend preserved

This revision is frontend-only. It does not change:

- `assets/config.js`
- `supabase/kuroi-neko-addon.sql`
- Existing `kn_` table names or columns
- Supabase Auth session handling / sign-in / sign-out methods
- RLS ownership conditions
- `kn-artist-assets` Storage bucket or upload path rules
- Existing create, read, update and delete operations

No SQL migration is required for this revision.

## Changed files

- `index.html` — editor heading adjusted to match the portfolio identity.
- `assets/app.js` — post-login Edit Mode, contextual section buttons, focused editor tabs and editor navigation.
- `assets/styles.css` — contextual Edit buttons, floating Edit Mode toolbar, and portfolio-matched editor styling.
- `README.md` — documentation for the inline editing workflow.

## Verification

The package was checked for JavaScript syntax, HTML parsing, duplicate IDs, in-page anchor targets, CSS parsing, required admin / Supabase function references, and all nine artwork assets. The Supabase config and SQL migration hashes were compared with the previous source archive and are unchanged.

A live Supabase sign-in / CRUD session was not performed in this environment. Verify sign-in, upload, edit and delete against the deployed Supabase project before production handover.
