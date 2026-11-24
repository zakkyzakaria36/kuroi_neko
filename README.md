# Kuroi Neko — Artist Portfolio & Commission Website

A responsive, light-blue/white artist portfolio and commission catalogue using Nunito throughout, a soft blue-to-white hero gradient, a more compact arched artwork cover, larger readable typography, and restrained editorial accents. The UI is an original implementation informed by the content hierarchy of artist marketplaces (profile, samples, commission services, prices, add-ons and guidelines); it does not copy VGen's interface or assets.

## Project contents

- Responsive single-page portfolio (desktop, tablet and mobile layouts).
- Kuroi Neko's supplied circular logo and nine approved artwork samples from the provided Drive archive.
- Artwork gallery with category filters and an accessible lightbox preview.
- Five commission service categories with price options.
- Artist social / marketplace links and editable public email contact.
- Add-ons, commission process, accepted / not accepted subjects, and complete terms derived from `16.docx`.
- Supabase Auth sign-in and an owner dashboard for editing the artist profile, social links, artwork, commission services, add-ons, accepted / not-accepted subjects, and terms.
- Supabase Storage uploads for new artwork, with a unique-path fallback for preview/local browser contexts.
- Additive SQL migration with owner-scoped Row Level Security (RLS).

> The original `16.docx` is intentionally not included in the public project bundle because it contains a private chat export. Its approved brief details have been implemented in the website.

## Artwork assets

All nine image files provided in the Drive archive have been optimized as WebP for web use:

1. `01-blue-night-illustration.webp`
2. `02-character-portrait.webp`
3. `03-group-illustration.webp`
4. `04-chibi-character.webp`
5. `05-blue-outfit-illustration.webp`
6. `06-mucha-green-frame.webp`
7. `07-chibi-couple.webp`
8. `08-red-suit-character.webp`
9. `09-floral-character-illustration.webp`

The original PNG files are not altered. The portfolio uses the optimized WebP copies. The artist logo supplied in the brief is available in several treatments under `assets/`.

## Commission prices

Prices are entered as supplied by the artist. IDR and USD are not converted into each other.

### Full Render

| Option | IDR | USD |
|---|---:|---:|
| Bust Up | Rp70,000 | $37 |
| Half Body | Rp120,000 | $45 |
| Knee Up | Rp140,000 | $52 |
| Full Body | Rp190,000 | $58 |

The Bust Up USD price uses the later correction in the earlier price-list conversation, not the older $40 value shown in the first image.

### Chibi — Simple Shading

| Option | IDR | USD |
|---|---:|---:|
| Head Only | Rp35,000 | Not provided |
| Half Body | Rp45,000 | Not provided |
| Full Body | Rp65,000 | Not provided |

### Chibi — Base Color

| Option | IDR | USD |
|---|---:|---:|
| Headshot | Rp15,000 | Not provided |
| Half Body | Rp35,000 | Not provided |
| Full Body | Rp50,000 | Not provided |

### Special illustration

- Genshin Summertime Odyssey Style: starting at Rp120,000 / $35 (using the later price update supplied by the artist).
- Mucha Style — Body + Background: starting at Rp200,000 / $60.

USD is shown as an em dash where the artist has not supplied a value. No exchange-rate conversion is performed.

## Brief requirements implemented from `16.docx`

- Contact email: `hanasaki.yumi1412@gmail.com`.
- Simple color-gradient background: free.
- Additional character in the same canvas: presented as `+1×` the single-character price. This interprets the artist's phrase “charge +1 to the single price” as an additional single-character price; please confirm this wording with the artist before publishing the policy.
- Accepted subjects: original characters, OC × canon, fanart from anime/comics/films, and semi-human characters. Cheek, hand and forehead kisses are allowed.
- Not accepted: NSFW, gore (blood splashes are okay), furry, mecha, BL/GL, and overly detailed armor.
- Clients should give clear character references and describe expression / depiction details.
- AI generation of the commissioned result is prohibited.
- Payment is required upfront. The page tells customers to confirm the exact quote and payment method directly with the artist; the brief does not specify a payment processor or accepted payment methods.
- Three major revisions are free. Each additional major revision is shown as USD 8. Minor revisions and corrections for details the artist omitted from information already supplied are free.
- Major revisions include redrawing an already-approved overall composition or adding/removing assets not mentioned at the beginning.
- Turnaround: 3 days to 1 month depending on complexity and workload; personal deadlines must be communicated before the work starts.
- Listed prices are personal-use prices. Commercial use (including streaming and song covers) carries an additional 100% of the total commission price.
- If the artist cancels during the work, the client receives a 100% refund. If the client cancels during the work, no refund is provided.
- Copyright remains with the artist. Completed work may be shared in the artist's social-media portfolio; clients should state in advance if they do not want publication or need a specific publication date.
- Clients may use the art as personal profile pictures, headers, banners and printed personal items (e.g. keychains, stickers and acrylic stands) provided those items are not sold for profit.
- The site explains that English is not the artist's native language and asks customers to be patient with replies and clarification.

## Run locally

This is a static frontend with ES modules. Do not open `index.html` directly with `file://`.

1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open a terminal in the project folder and run:

   ```bash
   python -m http.server 5500
   ```

4. Visit `http://localhost:5500`.

## Supabase setup

The included `assets/config.js` is prefilled with the Supabase project URL and a publishable/anon browser key from the previously supplied project configuration. Confirm that these still point to the intended Supabase project before deployment. Never put a `service_role` or secret key in frontend code.

### 1. Apply the additive migration

1. Open the intended Supabase project.
2. Go to **SQL Editor**.
3. Open `supabase/kuroi-neko-addon.sql` from this project.
4. Review the SQL and run it once.

The migration creates these Kuroi-specific tables:

- `kn_artist_profiles` (including public contact email)
- `kn_social_links`
- `kn_artworks`
- `kn_commission_services`
- `kn_commission_addons`
- `kn_commission_rules` (with categories for Terms, accepted subjects and not-accepted subjects)

It creates a separate Storage bucket named `kn-artist-assets` and owner-scoped RLS policies. It does not drop, rename or alter the old personal-portfolio tables (`portfolio_items`, `profiles`) or the old `portfolio-assets` bucket. The migration is additive and safe to re-run: it adds the `category` field to `kn_commission_rules` when updating an earlier draft and creates the add-ons table if it is not present.

**Do not run the earlier `supabase-multitenant.sql` file as-is.** It contains `DROP TABLE public.portfolio_items CASCADE`, which can remove the original portfolio table and dependent objects.

### 2. Create the artist administrator

1. In Supabase, open **Authentication → Users**.
2. Create a dedicated account for Kuroi Neko with the email agreed by the artist.
3. Open the website and select **Artist admin** in the footer.
4. Sign in with that account.
5. On the first sign-in, the dashboard seeds the default artist profile, social links, nine artworks, commission catalogue and guideline sections for that account if the corresponding tables are empty.

The administrator should be a dedicated account. Do not share the owner's personal account/password with the artist or other clients.

### 3. Dashboard features

After signing in, the administrator can:

- Edit display name, username, greeting, bio, availability, commission status, hero art URL and public visibility.
- Add, edit and delete social links.
- Add, edit and delete artwork; upload an image to the dedicated Supabase Storage bucket or use a public HTTPS image URL.
- Add, edit and delete commission services and price rows.
- Add, edit and delete commission add-ons.
- Add, edit and delete Terms & Conditions, accepted subjects, and not-accepted subjects.

For price rows, use one option per line in the format:

```text
Option | IDR | USD
Bust Up | 70000 | 37
Half Body | 120000 | 45
Head Only | 35000 | -
```

Use `-` when the artist has not provided a price for that currency.

### Security notes

- RLS is enabled on all `kn_` tables.
- Public visitors can read only active/published content associated with a public artist profile.
- Authenticated management is limited to rows whose `owner_id` equals `auth.uid()`.
- Storage write access is restricted to the signed-in owner's own UID folder.
- The public bucket allows public image viewing; never upload private documents or client-only reference images to it.
- The browser key is a publishable key. Keep all secret/service-role keys out of the frontend.

## Deploy to Vercel

1. Commit the project folder to a Git repository.
2. Import that repository into Vercel.
3. Select the **Other** / static-site setup, leave the build command empty, and make sure the project root points to this folder (the folder containing `index.html`).
4. After deployment, test the public page, mobile layout, social links, image gallery, Supabase sign-in, upload, edit and delete flows.

## Verification and known limits

- JavaScript module syntax and HTML structure are checked before packaging.
- Browser rendering and interaction checks were run at desktop (1440px), tablet (768px), and mobile (390px) widths. Navigation, gallery filtering, lightbox, and mobile menu passed; no page-level JavaScript errors or horizontal page overflow were detected.
- The dashboard was exercised with a Supabase mock: first-login seeding, profile/social/service/add-on/guideline edits, artwork upload and storage cleanup, and sign-out passed. This checks frontend logic but is not a substitute for a live project test.
- The actual Supabase migration has not been applied remotely, because the project integration is not connected in this workspace. After applying the SQL and creating the dedicated Auth user, test the same admin flows against the live project before launch.
- The additional-character `+1×` label is displayed as one additional single-character price; confirm that exact pricing wording with Kuroi before treating it as final.
- A WhatsApp Channel URL was not supplied (the provided field repeated the Instagram URL), so no WhatsApp button is invented or displayed.
- The site is a deployment-ready code package, not a live deployment. The SQL migration still needs to be run in the chosen Supabase project and the dedicated artist admin user must be created.


## Typography

The site uses the rounded **Nunito** type family to match the friendly, bold typography in the supplied visual reference. Headlines and display text use heavier weights (800–900); body and navigation use 500–700. Nunito is loaded through Google Fonts with local system fallbacks.
