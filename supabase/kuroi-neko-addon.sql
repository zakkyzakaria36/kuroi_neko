-- KUROI NEKO ARTIST PORTFOLIO — ADDITIVE SUPABASE MIGRATION
-- Apply this in the EXISTING Supabase project after reviewing it.
-- This script does NOT drop, rename, or modify the existing personal-portfolio tables:
-- portfolio_items, profiles, or the portfolio-assets bucket.
--
-- Each artist owns their content through auth.uid(). This lets multiple artist sites
-- share one Supabase project without exposing another artist's private/admin records.

create extension if not exists pgcrypto;

-- 1) Artist profile / public site identity
create table if not exists public.kn_artist_profiles (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null unique references auth.users(id) on delete cascade,
  slug text not null unique check (slug ~ '^[a-z0-9-]{2,50}$'),
  display_name text not null default 'Kuroi Neko',
  username text not null default '@Kuro_Neko_10',
  greeting text not null default 'Hello, I''m',
  bio text not null default '',
  status text not null default 'Available for new projects',
  commission_status text not null default 'OPEN',
  hero_art_url text,
  is_public boolean not null default true,
  updated_at timestamptz not null default now()
);

-- Public artist email is managed from the dashboard and displayed in the contact section.
alter table public.kn_artist_profiles
  add column if not exists contact_email text not null default '';

-- 2) Social media / marketplace links
create table if not exists public.kn_social_links (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  platform text not null,
  url text not null check (url ~ '^https?://'),
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- 3) Artwork gallery
create table if not exists public.kn_artworks (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) <= 100),
  category text not null default 'Artwork',
  description text not null default '',
  image_url text not null,
  sort_order integer not null default 0,
  is_featured boolean not null default false,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

-- 4) Commission catalogue / price lists
create table if not exists public.kn_commission_services (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  category text not null default 'Commission',
  description text not null default '',
  from_usd numeric(10,2),
  price_idr bigint,
  price_options jsonb not null default '[]'::jsonb,
  cover_url text,
  details jsonb not null default '[]'::jsonb,
  addons jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  constraint kn_price_options_array check (jsonb_typeof(price_options) = 'array'),
  constraint kn_details_array check (jsonb_typeof(details) = 'array'),
  constraint kn_addons_array check (jsonb_typeof(addons) = 'array')
);

-- 5) Commission rules / Terms of Service sections
create table if not exists public.kn_commission_rules (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  category text not null default 'terms',
  title text not null,
  body text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Safe to re-run if an earlier draft of the rules table already exists.
alter table public.kn_commission_rules
  add column if not exists category text not null default 'terms';

-- Commission add-ons, editable from the artist dashboard.
create table if not exists public.kn_commission_addons (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text not null default '',
  price_label text not null default 'ASK',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- 6) Enable RLS on every Kuroi-prefixed table
alter table public.kn_artist_profiles enable row level security;
alter table public.kn_social_links enable row level security;
alter table public.kn_artworks enable row level security;
alter table public.kn_commission_services enable row level security;
alter table public.kn_commission_addons enable row level security;
alter table public.kn_commission_rules enable row level security;

-- Public visitors can see profiles explicitly marked public.
drop policy if exists "kn public read artist profiles" on public.kn_artist_profiles;
create policy "kn public read artist profiles"
  on public.kn_artist_profiles for select to anon, authenticated
  using (is_public = true);

-- Artist owner can read and manage their own profile.
drop policy if exists "kn owner manage artist profiles" on public.kn_artist_profiles;
create policy "kn owner manage artist profiles"
  on public.kn_artist_profiles for all to authenticated
  using (owner_id = auth.uid())
  with check (owner_id = auth.uid());

-- Public read is limited to active/published content whose owner has a public profile.
drop policy if exists "kn public read social links" on public.kn_social_links;
create policy "kn public read social links"
  on public.kn_social_links for select to anon, authenticated
  using (
    is_active = true and owner_id in (
      select owner_id from public.kn_artist_profiles where is_public = true
    )
  );

drop policy if exists "kn public read artworks" on public.kn_artworks;
create policy "kn public read artworks"
  on public.kn_artworks for select to anon, authenticated
  using (
    is_published = true and owner_id in (
      select owner_id from public.kn_artist_profiles where is_public = true
    )
  );

drop policy if exists "kn public read commission services" on public.kn_commission_services;
create policy "kn public read commission services"
  on public.kn_commission_services for select to anon, authenticated
  using (
    is_active = true and owner_id in (
      select owner_id from public.kn_artist_profiles where is_public = true
    )
  );

drop policy if exists "kn public read commission add-ons" on public.kn_commission_addons;
create policy "kn public read commission add-ons"
  on public.kn_commission_addons for select to anon, authenticated
  using (
    is_active = true and owner_id in (
      select owner_id from public.kn_artist_profiles where is_public = true
    )
  );

drop policy if exists "kn public read commission rules" on public.kn_commission_rules;
create policy "kn public read commission rules"
  on public.kn_commission_rules for select to anon, authenticated
  using (
    is_active = true and owner_id in (
      select owner_id from public.kn_artist_profiles where is_public = true
    )
  );

-- Owner-only management policies (separate per table; public policies remain read-only).
do $$
declare
  tbl text;
begin
  foreach tbl in array array[
    'kn_social_links',
    'kn_artworks',
    'kn_commission_services',
    'kn_commission_addons',
    'kn_commission_rules'
  ] loop
    execute format('drop policy if exists %I on public.%I', 'kn owner manage ' || tbl, tbl);
    execute format(
      'create policy %I on public.%I for all to authenticated using (owner_id = auth.uid()) with check (owner_id = auth.uid())',
      'kn owner manage ' || tbl, tbl
    );
  end loop;
end $$;

-- Explicit grants for Supabase API roles.
grant usage on schema public to anon, authenticated;
grant select on public.kn_artist_profiles, public.kn_social_links, public.kn_artworks,
  public.kn_commission_services, public.kn_commission_addons, public.kn_commission_rules to anon;
grant select, insert, update, delete on public.kn_artist_profiles, public.kn_social_links,
  public.kn_artworks, public.kn_commission_services, public.kn_commission_addons, public.kn_commission_rules to authenticated;

-- 7) Dedicated public artwork bucket; existing portfolio-assets bucket is untouched.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'kn-artist-assets',
  'kn-artist-assets',
  true,
  10485760,
  array['image/png','image/jpeg','image/webp','image/gif']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 10485760,
  allowed_mime_types = array['image/png','image/jpeg','image/webp','image/gif'];

-- Anyone can view files in this public portfolio bucket.
drop policy if exists "kn public view artist assets" on storage.objects;
create policy "kn public view artist assets"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'kn-artist-assets');

-- Authenticated artist can upload/update/delete only inside their own auth UID folder.
drop policy if exists "kn owner upload artist assets" on storage.objects;
create policy "kn owner upload artist assets"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'kn-artist-assets'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "kn owner update artist assets" on storage.objects;
create policy "kn owner update artist assets"
  on storage.objects for update to authenticated
  using (
    bucket_id = 'kn-artist-assets'
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'kn-artist-assets'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "kn owner delete artist assets" on storage.objects;
create policy "kn owner delete artist assets"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'kn-artist-assets'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- IMPORTANT:
-- 1. Create an Auth user for Kuroi Neko before signing in to the website admin.
-- 2. The first successful admin sign-in inserts the default Kuroi content from assets/app.js.
-- 3. Do not run supabase-multitenant.sql as provided for the old site: that file drops
--    public.portfolio_items. This add-on is intentionally non-destructive.
