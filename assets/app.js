import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

const VGEN_URL = 'https://vgen.co/Kuro_Neko_10';
const ARTIST_EMAIL = 'hanasaki.yumi1412@gmail.com';
const ARTIST_SLUG = 'kuroi-neko';
const ASSET = {
  hero: './assets/artworks/05-blue-outfit-illustration.webp',
  night: './assets/artworks/01-blue-night-illustration.webp',
  portrait: './assets/artworks/02-character-portrait.webp',
  group: './assets/artworks/03-group-illustration.webp',
  chibi: './assets/artworks/04-chibi-character.webp',
  blueOutfit: './assets/artworks/05-blue-outfit-illustration.webp',
  mucha: './assets/artworks/06-mucha-green-frame.webp',
  chibiCouple: './assets/artworks/07-chibi-couple.webp',
  redSuit: './assets/artworks/08-red-suit-character.webp',
  floral: './assets/artworks/09-floral-character-illustration.webp'
};

const defaultRules = [
  {
    category: 'accepted',
    title: 'What I can draw',
    body: 'Original characters (OCs)\nOC × canon\nFanart from anime, comics and films\nSemi-human characters\nCheek, hand or forehead kisses only'
  },
  {
    category: 'not_accepted',
    title: "What I don't draw",
    body: 'NSFW content\nGore (blood splashes are okay)\nFurry or mecha\nBL / GL\nOverly detailed armor'
  },
  {
    category: 'terms',
    title: 'Important notes',
    body: 'Please provide clear character references and describe the requested expression, pose and other important details.\n\nThe artist is not a native English speaker, so replies and understanding requests may take a little extra time. Thank you for your patience.\n\nUsing AI to generate the commissioned result is strictly prohibited.'
  },
  {
    category: 'terms',
    title: 'Payment',
    body: 'Payment is required upfront before work begins. Please confirm the final quote and payment method directly with the artist before the commission starts.'
  },
  {
    category: 'terms',
    title: 'Revisions',
    body: 'Three (3) major revisions are included free of charge. Each additional major revision after the included three costs USD 8.\n\nMinor revisions and corrections for details the artist omitted from the information you had already provided are free.\n\nA major revision means changing or redrawing an overall composition that was previously approved, or adding/removing assets that were not mentioned at the beginning.'
  },
  {
    category: 'terms',
    title: 'Deadline & delivery',
    body: 'Completion usually takes 3 days to 1 month, depending on the complexity of the request and the artist’s current workload. Please inform the artist of any personal deadline before the commission begins.'
  },
  {
    category: 'terms',
    title: 'Personal & commercial use',
    body: 'All listed prices are for personal use. Please tell the artist in advance if you intend to use the artwork commercially. Commercial use, including streaming and song covers, requires an additional 100% of the total commission price.'
  },
  {
    category: 'terms',
    title: 'Refunds & cancellation',
    body: 'If the artist cancels the commission while it is in progress, the client receives a 100% refund of the amount paid. If the client cancels the commission while it is in progress, no refund is provided.'
  },
  {
    category: 'terms',
    title: 'Copyright & artwork use',
    body: 'All copyrights belong to the artist. Completed commissions may be posted in the artist’s social media portfolio. Please tell the artist in advance if you do not want the artwork published or if you need it to be published on a specific date.\n\nClients may use the commissioned artwork for personal profile pictures, headers, banners and printed personal items such as keychains, stickers or acrylic stands, provided those items are not sold for profit.'
  }
];

const defaultData = {
  profile: {
    slug: ARTIST_SLUG,
    display_name: 'Kuroi Neko',
    username: '@Kuro_Neko_10',
    contact_email: ARTIST_EMAIL,
    greeting: "HELLO, I'M",
    bio: 'Character illustrator creating original characters, fanart, chibi art and expressive illustrations. SFW commissions only.',
    status: 'Available for new projects',
    commission_status: 'OPEN',
    hero_art_url: ASSET.hero,
    is_public: true
  },
  socials: [
    { platform: 'VGen', url: VGEN_URL },
    { platform: 'Ko-fi', url: 'https://ko-fi.com/kuroineko7344' },
    { platform: 'ACG Goods', url: 'https://kuroi-neko.acggoods.com/' },
    { platform: 'Kirke', url: 'https://kirke.social/kuroi_neko_10/portfolio' },
    { platform: 'X', url: 'https://x.com/Kuroi_Neko10' },
    { platform: 'TikTok', url: 'https://www.tiktok.com/@kuroi_neko10' },
    { platform: 'Instagram', url: 'https://www.instagram.com/kuroi_neko10' }
  ],
  artworks: [
    { title: 'Blue Night', category: 'Full Render', image_url: ASSET.night, description: 'Artwork provided by the artist.' },
    { title: 'Character Portrait', category: 'Full Render', image_url: ASSET.portrait, description: 'Artwork provided by the artist.' },
    { title: 'Group Illustration', category: 'Illustration', image_url: ASSET.group, description: 'Artwork provided by the artist.' },
    { title: 'Chibi Character', category: 'Chibi', image_url: ASSET.chibi, description: 'Artwork provided by the artist.' },
    { title: 'Blue Outfit', category: 'Full Render', image_url: ASSET.blueOutfit, description: 'Artwork provided by the artist.' },
    { title: 'Mucha Style', category: 'Mucha Style', image_url: ASSET.mucha, description: 'Artwork provided by the artist.' },
    { title: 'Chibi Couple', category: 'Chibi', image_url: ASSET.chibiCouple, description: 'Artwork provided by the artist.' },
    { title: 'Red Suit Character', category: 'Full Render', image_url: ASSET.redSuit, description: 'Artwork provided by the artist.' },
    { title: 'Floral Character', category: 'Special Illustration', image_url: ASSET.floral, description: 'Artwork provided by the artist.' }
  ],
  services: [
    {
      title: 'Full Render', category: 'FULL RENDER',
      description: 'Character illustration with a detailed render and your choice of crop.',
      cover_url: ASSET.portrait,
      price_options: [
        { label: 'Bust Up', idr: 70000, usd: 37 },
        { label: 'Half Body', idr: 120000, usd: 45 },
        { label: 'Knee Up', idr: 140000, usd: 52 },
        { label: 'Full Body', idr: 190000, usd: 58 }
      ],
      details: ['Personal-use pricing. Commercial use is quoted separately.']
    },
    {
      title: 'Chibi — Simple Shading', category: 'CHIBI · SIMPLE SHADING',
      description: 'Cute chibi character with simple shading.', cover_url: ASSET.chibi,
      price_options: [
        { label: 'Head Only', idr: 35000, usd: null },
        { label: 'Half Body', idr: 45000, usd: null },
        { label: 'Full Body', idr: 65000, usd: null }
      ],
      details: []
    },
    {
      title: 'Chibi — Base Color', category: 'CHIBI · BASE COLOR',
      description: 'Chibi illustration with a clean base-color finish.', cover_url: ASSET.chibiCouple,
      price_options: [
        { label: 'Headshot', idr: 15000, usd: null },
        { label: 'Half Body', idr: 35000, usd: null },
        { label: 'Full Body', idr: 50000, usd: null }
      ],
      details: []
    },
    {
      title: 'Genshin Summertime Odyssey Style', category: 'SPECIAL ILLUSTRATION',
      description: 'Themed character illustration inspired by the Genshin Summertime Odyssey style.', cover_url: ASSET.floral,
      price_options: [{ label: 'Starting price', idr: 120000, usd: 35 }],
      details: ['Starting price. Final quote depends on the requested composition.']
    },
    {
      title: 'Mucha Style — Body + Background', category: 'SPECIAL ILLUSTRATION',
      description: 'Decorative character illustration with a designed background.', cover_url: ASSET.mucha,
      price_options: [{ label: 'Starting price', idr: 200000, usd: 60 }],
      details: ['Starting price for body + background. Final quote depends on complexity.']
    }
  ],
  addons: [
    { title: 'Simple gradient background', description: 'Simple color-gradation backgrounds are included at no extra cost.', price_label: 'FREE' },
    { title: 'Additional character in the same canvas', description: 'For a couple or two-character composition, the additional character is charged at one additional single-character price. Please confirm the final quote before payment.', price_label: '+1×' }
  ],
  rules: defaultRules
};

const state = structuredClone(defaultData);
let supabase = null;
let currentUser = null;
let adminData = { profile: null, socials: [], artworks: [], services: [], addons: [], rules: [] };
let activeGalleryFilter = 'All';
let restoreFocusTo = null;
let lightboxReturnFocus = null;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const configured = /^https:\/\//i.test(SUPABASE_URL) && !SUPABASE_URL.includes('YOUR_') && SUPABASE_ANON_KEY.length > 20 && !SUPABASE_ANON_KEY.includes('YOUR_');

if (configured) {
  try {
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
  } catch (error) {
    console.error('Supabase client could not be loaded:', error);
  }
}

function notify(message, duration = 3600) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(notify.timer);
  notify.timer = window.setTimeout(() => toast.classList.remove('show'), duration);
}

function safeExternalUrl(value) {
  try {
    const url = new URL(String(value || '').trim());
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '#';
  } catch { return '#'; }
}

function isSafeImageReference(value) {
  const url = String(value || '').trim();
  if (/^https:\/\//i.test(url)) return true;
  return /^(\.\/|assets\/)[a-zA-Z0-9_./-]+$/.test(url) && !url.includes('..');
}

function safeImageUrl(value) {
  const url = String(value || '').trim();
  return isSafeImageReference(url) ? url : ASSET.hero;
}

function formatIDR(value) {
  if (value === null || value === undefined || value === '') return '—';
  return `Rp${Number(value).toLocaleString('id-ID')}`;
}

function formatUSD(value) {
  if (value === null || value === undefined || value === '') return '—';
  const number = Number(value);
  return `$${Number.isInteger(number) ? number : number.toFixed(2)}`;
}

function getPriceOptions(service) {
  if (Array.isArray(service.price_options) && service.price_options.length) return service.price_options;
  const hasIdr = service.price_idr !== null && service.price_idr !== undefined && service.price_idr !== '';
  const hasUsd = service.from_usd !== null && service.from_usd !== undefined && service.from_usd !== '';
  return [{ label: 'Starting price', idr: hasIdr ? Number(service.price_idr) : null, usd: hasUsd ? Number(service.from_usd) : null }];
}

function renderProfile() {
  const profile = { ...defaultData.profile, ...(state.profile || {}) };
  const displayName = profile.display_name || 'Kuroi Neko';
  $('#brand-name').textContent = displayName;
  $('#footer-name').textContent = displayName;
  $('#footer-artist').textContent = displayName;
  const parts = displayName.trim().split(/\s+/);
  $('#hero-name').innerHTML = `${esc(parts.shift() || 'Artist')} <em>${esc(parts.join(' '))}</em><span class="hero-star" aria-hidden="true">✳</span>`;
  $('#greeting').textContent = profile.greeting || "HELLO, I'M";
  $('#hero-bio').textContent = profile.bio || '';
  $('#about-title').textContent = `Hello, I'm ${(displayName || 'the artist').split(' ')[0]}!`;
  $('#about-bio').textContent = profile.bio || '';
  const isOpen = String(profile.commission_status || 'OPEN').toUpperCase() === 'OPEN';
  $('#availability-label').textContent = isOpen ? 'OPEN FOR COMMISSIONS' : 'COMMISSIONS CURRENTLY CLOSED';
  const availabilityNote = $('.availability-note');
  if (availabilityNote) availabilityNote.textContent = isOpen ? 'Taking new requests' : 'Not taking new requests';
  $('#commission-status').textContent = isOpen ? 'OPEN' : 'CLOSED';
  $('#about-status').textContent = profile.status || (isOpen ? 'Available for new projects' : 'Not taking new projects at the moment');
  $('#about-status-note').textContent = isOpen ? 'Check the commission menu and contact the artist to confirm a slot.' : 'Please check back later or contact the artist for updates.';
  $('#hero-art').src = safeImageUrl(profile.hero_art_url || ASSET.hero);
  $('#hero-art').alt = `${displayName} featured character illustration`;
  const candidateEmail = String(profile.contact_email || ARTIST_EMAIL).trim();
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidateEmail) ? candidateEmail : ARTIST_EMAIL;
  const contactAction = $('#contact-email-action');
  const contactEmail = $('#contact-email');
  if (contactAction) contactAction.href = `mailto:${email}`;
  if (contactEmail) { contactEmail.href = `mailto:${email}`; contactEmail.textContent = email; }
  const status = $('.status-live');
  if (status) status.innerHTML = isOpen ? '<i></i> OPEN' : '<i class="is-closed"></i> CLOSED';
  const openPill = $('.open-status');
  if (openPill) openPill.classList.toggle('is-closed', !isOpen);
  $('#current-year').textContent = String(new Date().getFullYear());
}

function renderSocials() {
  const links = state.socials || [];
  const rendered = links.map(item => {
    const href = safeExternalUrl(item.url);
    if (href === '#') return '';
    const name = item.platform || item.label || 'Social';
    return `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(name)} <span aria-hidden="true">↗</span></a>`;
  }).join('');
  $('#social-list').innerHTML = rendered || '<span class="admin-empty">Social links will be added soon.</span>';
}

function renderGalleryFilters(items) {
  const categories = [...new Set(items.map(item => String(item.category || 'Artwork').trim()).filter(Boolean))];
  const options = ['All', ...categories];
  if (!options.includes(activeGalleryFilter)) activeGalleryFilter = 'All';
  $('#gallery-filters').innerHTML = options.map(category => `<button class="gallery-filter${category === activeGalleryFilter ? ' is-active' : ''}" type="button" data-filter="${esc(category)}" aria-pressed="${category === activeGalleryFilter}">${esc(category)}</button>`).join('');
  $$('.gallery-filter', $('#gallery-filters')).forEach(button => button.addEventListener('click', () => {
    activeGalleryFilter = button.dataset.filter;
    renderGallery();
  }));
}

function renderGallery() {
  const allItems = state.artworks || [];
  renderGalleryFilters(allItems);
  const items = activeGalleryFilter === 'All' ? allItems : allItems.filter(item => (item.category || 'Artwork') === activeGalleryFilter);
  $('#gallery-grid').innerHTML = items.length ? items.map((item, index) => {
    const originalIndex = allItems.indexOf(item);
    const featureClass = index === 0 ? 'art-card-featured' : '';
    return `<button class="art-card ${featureClass}" type="button" data-art-index="${originalIndex}" aria-label="View ${esc(item.title || 'artwork')} in larger preview">
      <img loading="lazy" decoding="async" src="${esc(safeImageUrl(item.image_url))}" alt="${esc(item.title || 'Artwork by Kuroi Neko')}" ${index === 0 ? 'fetchpriority="high"' : ''}>
      <span class="art-caption"><b>${esc(item.title || 'Artwork')}</b><small>${esc(item.category || 'Artwork')}</small></span>
    </button>`;
  }).join('') : '<div class="gallery-empty">No artwork in this category yet.</div>';
  $$('.art-card', $('#gallery-grid')).forEach(button => button.addEventListener('click', () => openLightbox(Number(button.dataset.artIndex))));
}

function renderServices() {
  const items = state.services || [];
  $('#service-grid').innerHTML = items.length ? items.map((item, index) => {
    const details = Array.isArray(item.details) ? item.details : (typeof item.details === 'string' ? item.details.split('\n').filter(Boolean) : []);
    const options = getPriceOptions(item);
    const hasMissingUSD = options.some(option => option.usd === null || option.usd === undefined || option.usd === '');
    const rows = options.map(option => `<tr><th scope="row">${esc(option.label || 'Option')}</th><td>${esc(formatIDR(option.idr))}</td><td>${esc(formatUSD(option.usd))}</td></tr>`).join('');
    return `<article class="service-card">
      <div class="service-cover"><img loading="lazy" decoding="async" src="${esc(safeImageUrl(item.cover_url || ASSET.hero))}" alt="${esc(item.title || 'Commission sample')} sample"></div>
      <div class="service-content">
        <span class="service-type">${esc(item.category || `COMMISSION ${String(index + 1).padStart(2, '0')}`)}</span>
        <h3>${esc(item.title || 'Commission')}</h3>
        <p class="service-description">${esc(item.description || '')}</p>
        <div class="price-table-wrap"><table class="price-table"><thead><tr><th>Option</th><th>IDR</th><th>USD</th></tr></thead><tbody>${rows}</tbody></table></div>
        ${hasMissingUSD ? '<p class="price-footnote">— USD pricing has not been listed for every option. Please request a quote.</p>' : ''}
        ${details.length ? `<ul class="service-details">${details.map(detail => `<li>${esc(detail)}</li>`).join('')}</ul>` : ''}
        <a class="service-action" href="${VGEN_URL}" target="_blank" rel="noopener noreferrer">Request this style on VGen <span aria-hidden="true">↗</span></a>
      </div>
    </article>`;
  }).join('') : '<div class="gallery-empty">Commission services will be added soon.</div>';
}

function renderAddons() {
  const items = state.addons || [];
  $('#addon-list').innerHTML = items.length ? items.map(item => `<article class="addon-item"><div class="addon-icon" aria-hidden="true">✧</div><div><h3>${esc(item.title || 'Add-on')}</h3><p>${esc(item.description || '')}</p></div><span class="addon-price${String(item.price_label || '').toUpperCase() === 'FREE' ? ' free' : ''}">${esc(item.price_label || 'ASK')}</span></article>`).join('') : '<p class="admin-empty">No add-ons are listed at the moment.</p>';
}

function renderRules() {
  const items = state.rules || [];
  const accepted = items.find(item => item.category === 'accepted');
  const notAccepted = items.find(item => item.category === 'not_accepted');
  const asList = value => String(value || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => `<li>${esc(line)}</li>`).join('');
  $('#accepted-list').innerHTML = asList(accepted?.body);
  $('#not-accepted-list').innerHTML = asList(notAccepted?.body);
  $('#terms-list').innerHTML = items.filter(item => !['accepted', 'not_accepted'].includes(item.category || 'terms')).map((item, index) => `<article class="terms-item"><h3><span class="terms-number">${String(index + 1).padStart(2, '0')}</span>${esc(item.title)}</h3><p>${esc(item.body || item.content || '')}</p></article>`).join('') || '<div class="terms-empty">Please contact the artist to confirm the latest commission terms before ordering.</div>';
}

function renderAll() {
  renderProfile();
  renderSocials();
  renderGallery();
  renderServices();
  renderAddons();
  renderRules();
}

function openLightbox(index) {
  const item = (state.artworks || [])[index];
  if (!item) return;
  lightboxReturnFocus = document.activeElement;
  $('#lightbox-image').src = safeImageUrl(item.image_url);
  $('#lightbox-image').alt = item.title || 'Artwork preview';
  $('#lightbox-caption').textContent = `${item.title || 'Artwork'}${item.category ? ` · ${item.category}` : ''}`;
  $('#lightbox').classList.add('is-open');
  $('#lightbox').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  $('#lightbox-close').focus();
}

function closeLightbox() {
  $('#lightbox').classList.remove('is-open');
  $('#lightbox').setAttribute('aria-hidden', 'true');
  $('#lightbox-image').src = '';
  document.body.style.overflow = '';
  if (lightboxReturnFocus && typeof lightboxReturnFocus.focus === 'function') lightboxReturnFocus.focus();
  lightboxReturnFocus = null;
}

async function loadPublicData() {
  if (!supabase) { renderAll(); return; }
  try {
    const profileResult = await supabase.from('kn_artist_profiles').select('*').eq('slug', ARTIST_SLUG).eq('is_public', true).maybeSingle();
    if (profileResult.error) throw profileResult.error;
    if (!profileResult.data) { renderAll(); return; }
    const owner = profileResult.data.owner_id;
    const [socialResult, artworkResult, serviceResult, addonResult, rulesResult] = await Promise.all([
      supabase.from('kn_social_links').select('*').eq('owner_id', owner).eq('is_active', true).order('sort_order'),
      supabase.from('kn_artworks').select('*').eq('owner_id', owner).eq('is_published', true).order('sort_order'),
      supabase.from('kn_commission_services').select('*').eq('owner_id', owner).eq('is_active', true).order('sort_order'),
      supabase.from('kn_commission_addons').select('*').eq('owner_id', owner).eq('is_active', true).order('sort_order'),
      supabase.from('kn_commission_rules').select('*').eq('owner_id', owner).eq('is_active', true).order('sort_order')
    ]);
    for (const result of [socialResult, artworkResult, serviceResult, addonResult, rulesResult]) if (result.error) throw result.error;
    state.profile = { ...defaultData.profile, ...profileResult.data };
    state.socials = socialResult.data || [];
    state.artworks = artworkResult.data || [];
    state.services = serviceResult.data || [];
    state.addons = addonResult.data || [];
    state.rules = rulesResult.data || [];
  } catch (error) {
    console.warn('Supabase public content could not be loaded; bundled preview content is shown.', error);
  }
  renderAll();
}

function openAdmin() {
  restoreFocusTo = document.activeElement;
  $('#admin-modal').classList.add('is-open');
  $('#admin-modal').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (!supabase) {
    $('#admin-content').innerHTML = `<div class="admin-loading"><b>Supabase is not configured.</b><p>Set the Project URL and anon/publishable key in <code>assets/config.js</code>, apply <code>supabase/kuroi-neko-addon.sql</code>, and create the artist account in Supabase Authentication.</p></div>`;
    return;
  }
  checkSession();
  $('.admin-dialog').focus();
}

function closeAdmin() {
  $('#admin-modal').classList.remove('is-open');
  $('#admin-modal').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (restoreFocusTo && typeof restoreFocusTo.focus === 'function') restoreFocusTo.focus();
}

async function checkSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) { showLogin(error.message); return; }
  currentUser = data.session?.user || null;
  if (currentUser) await showDashboard(); else showLogin();
}

function showLogin(errorMessage = '') {
  $('#admin-content').innerHTML = `<form class="admin-login" id="login-form"><h3>Artist dashboard</h3><p>Sign in with the artist account that has been created in Supabase Authentication.</p>${errorMessage ? `<p class="error-text">${esc(errorMessage)}</p>` : ''}<div class="admin-field"><label for="admin-email">Email address</label><input id="admin-email" type="email" autocomplete="username" required></div><div class="admin-field"><label for="admin-password">Password</label><input id="admin-password" type="password" autocomplete="current-password" required></div><button class="admin-submit" type="submit">Sign in to dashboard</button></form>`;
  $('#login-form').addEventListener('submit', async event => {
    event.preventDefault();
    const button = $('button[type="submit"]', event.currentTarget);
    button.disabled = true;
    button.textContent = 'Signing in…';
    const email = $('#admin-email').value.trim();
    const password = $('#admin-password').value;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { showLogin(error.message); return; }
    currentUser = data.user;
    try {
      await ensureDefaultRows();
      await showDashboard();
      notify('Signed in successfully.');
      await loadPublicData();
    } catch (seedError) {
      showLogin(`Could not initialize the artist data: ${seedError.message}`);
    }
  });
}

async function ensureDefaultRows() {
  if (!currentUser) return;
  const owner = currentUser.id;
  const { data: profile, error: profileError } = await supabase.from('kn_artist_profiles').select('id').eq('owner_id', owner).maybeSingle();
  if (profileError) throw profileError;
  if (!profile) {
    const { error } = await supabase.from('kn_artist_profiles').insert({ owner_id: owner, ...defaultData.profile });
    if (error) throw error;
  }
  const seeds = [
    ['kn_social_links', defaultData.socials.map((item, index) => ({ owner_id: owner, platform: item.platform, url: item.url, sort_order: index, is_active: true }))],
    ['kn_artworks', defaultData.artworks.map((item, index) => ({ owner_id: owner, ...item, sort_order: index, is_published: true }))],
    ['kn_commission_services', defaultData.services.map((item, index) => ({ owner_id: owner, ...item, sort_order: index, is_active: true }))],
    ['kn_commission_addons', defaultData.addons.map((item, index) => ({ owner_id: owner, ...item, sort_order: index, is_active: true }))]
  ];
  for (const [table, rows] of seeds) {
    const { data, error } = await supabase.from(table).select('id').eq('owner_id', owner).limit(1);
    if (error) throw error;
    if (!data?.length && rows.length) {
      const { error: insertError } = await supabase.from(table).insert(rows);
      if (insertError) throw insertError;
    }
  }

  // Existing installations may already contain the earlier seven Terms rows.
  // Add the two categorized subject lists without duplicating or replacing those rows.
  const { data: ruleRows, error: ruleError } = await supabase.from('kn_commission_rules').select('category').eq('owner_id', owner);
  if (ruleError) throw ruleError;
  if (!ruleRows?.length) {
    const { error } = await supabase.from('kn_commission_rules').insert(
      defaultData.rules.map((item, index) => ({ owner_id: owner, ...item, sort_order: index, is_active: true }))
    );
    if (error) throw error;
  } else {
    const existingCategories = new Set(ruleRows.map(item => item.category || 'terms'));
    const missingSubjectRules = defaultData.rules.filter(item => ['accepted', 'not_accepted'].includes(item.category) && !existingCategories.has(item.category));
    if (missingSubjectRules.length) {
      const { error } = await supabase.from('kn_commission_rules').insert(
        missingSubjectRules.map((item, index) => ({ owner_id: owner, ...item, sort_order: -2 + index, is_active: true }))
      );
      if (error) throw error;
    }
  }
}

async function fetchAdminData() {
  const owner = currentUser.id;
  const [profileResult, socialResult, artworkResult, serviceResult, addonResult, ruleResult] = await Promise.all([
    supabase.from('kn_artist_profiles').select('*').eq('owner_id', owner).maybeSingle(),
    supabase.from('kn_social_links').select('*').eq('owner_id', owner).order('sort_order'),
    supabase.from('kn_artworks').select('*').eq('owner_id', owner).order('sort_order'),
    supabase.from('kn_commission_services').select('*').eq('owner_id', owner).order('sort_order'),
    supabase.from('kn_commission_addons').select('*').eq('owner_id', owner).order('sort_order'),
    supabase.from('kn_commission_rules').select('*').eq('owner_id', owner).order('sort_order')
  ]);
  for (const result of [profileResult, socialResult, artworkResult, serviceResult, addonResult, ruleResult]) if (result.error) throw result.error;
  adminData = {
    profile: profileResult.data || defaultData.profile,
    socials: socialResult.data || [],
    artworks: artworkResult.data || [],
    services: serviceResult.data || [],
    addons: addonResult.data || [],
    rules: ruleResult.data || []
  };
  state.profile = { ...defaultData.profile, ...adminData.profile };
  state.socials = adminData.socials;
  state.artworks = adminData.artworks;
  state.services = adminData.services;
  state.addons = adminData.addons;
  state.rules = adminData.rules;
  renderAll();
}

function listMarkup(items, table, labelFn) {
  if (!items.length) return '<p class="admin-empty">No entries yet.</p>';
  return items.map(item => `<div class="admin-list-row"><span>${esc(labelFn(item))}</span><div class="admin-actions"><button class="edit-btn" type="button" data-edit-table="${table}" data-id="${esc(item.id)}">Edit</button><button class="delete-btn" type="button" data-delete-table="${table}" data-id="${esc(item.id)}">Delete</button></div></div>`).join('');
}

function parsePriceOptions(text) {
  return String(text || '').split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    const [label, idrRaw = '-', usdRaw = '-'] = line.split('|').map(part => part.trim());
    const idr = idrRaw !== '-' && idrRaw !== '' ? Number(idrRaw.replace(/[^0-9.]/g, '')) : null;
    const usd = usdRaw !== '-' && usdRaw !== '' ? Number(usdRaw.replace(/[^0-9.]/g, '')) : null;
    if (!label || (idr !== null && (!Number.isFinite(idr) || idr < 0)) || (usd !== null && (!Number.isFinite(usd) || usd < 0))) {
      throw new Error(`Invalid price row: ${line}. Use: Option | IDR | USD`);
    }
    return { label, idr, usd };
  });
}

function priceOptionsText(service) {
  return getPriceOptions(service).map(option => `${option.label} | ${option.idr ?? '-'} | ${option.usd ?? '-'}`).join('\n');
}

function lineListText(value) {
  if (Array.isArray(value)) return value.join('\n');
  return String(value || '');
}

function bindEditForm(formId, item, values) {
  const form = $(`#${formId}`);
  if (!form) return;
  Object.entries(values).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (!field) return;
    if (field.type === 'checkbox') field.checked = Boolean(value);
    else field.value = value ?? '';
  });
  form.dataset.editId = item.id || '';
  const submit = $('button[type="submit"]', form);
  if (submit) submit.textContent = 'Save changes';
  const cancel = $('.cancel-edit', form);
  if (cancel) cancel.hidden = false;
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetEditForm(form) {
  form.reset();
  delete form.dataset.editId;
  const submit = $('button[type="submit"]', form);
  if (submit) {
    const defaults = {
      'social-form': 'Add social link',
      'artwork-form': 'Add artwork',
      'service-form': 'Add commission service',
      'addon-form': 'Add commission add-on',
      'rule-form': 'Add guideline'
    };
    submit.textContent = defaults[form.id] || 'Save';
  }
  const cancel = $('.cancel-edit', form);
  if (cancel) cancel.hidden = true;
}

function adminFormSection(title, formId, inner, list) {
  return `<section class="admin-section"><h3>${title}</h3><form id="${formId}" class="admin-form-grid">${inner}<div class="admin-field full"><div class="admin-actions"><button class="admin-submit" type="submit">${formId === 'social-form' ? 'Add social link' : formId === 'artwork-form' ? 'Add artwork' : formId === 'service-form' ? 'Add commission service' : formId === 'addon-form' ? 'Add commission add-on' : 'Add guideline'}</button><button class="admin-secondary cancel-edit" type="button" hidden>Cancel edit</button></div></div></form><div class="admin-list">${list}</div></section>`;
}

async function showDashboard() {
  $('#admin-content').innerHTML = '<div class="admin-loading">Loading artist content…</div>';
  try { await fetchAdminData(); }
  catch (error) {
    $('#admin-content').innerHTML = `<div class="admin-loading">Could not load admin data: ${esc(error.message)}<br>Check that the SQL migration has been applied and that Row Level Security policies are active.</div>`;
    return;
  }
  const profile = adminData.profile || defaultData.profile;
  $('#admin-content').innerHTML = `
    <div class="admin-topline"><span>Signed in as ${esc(currentUser.email || 'artist administrator')}</span><button class="admin-secondary" id="logout-button" type="button">Sign out</button></div>
    <section class="admin-section"><h3>Artist profile</h3><form id="profile-form" class="admin-form-grid">
      <div class="admin-field"><label for="profile-name">Display name</label><input id="profile-name" name="display_name" value="${esc(profile.display_name || '')}" maxlength="80" required></div>
      <div class="admin-field"><label for="profile-username">Username</label><input id="profile-username" name="username" value="${esc(profile.username || '')}" maxlength="60"></div>
      <div class="admin-field"><label for="profile-email">Public contact email</label><input id="profile-email" name="contact_email" type="email" value="${esc(profile.contact_email || ARTIST_EMAIL)}" maxlength="160"></div>
      <div class="admin-field"><label for="profile-greeting">Greeting</label><input id="profile-greeting" name="greeting" value="${esc(profile.greeting || '')}" maxlength="50"></div>
      <div class="admin-field"><label for="profile-status">Availability text</label><input id="profile-status" name="status" value="${esc(profile.status || '')}" maxlength="100"></div>
      <div class="admin-field"><label for="profile-commission-status">Commission status</label><select id="profile-commission-status" name="commission_status"><option value="OPEN" ${String(profile.commission_status).toUpperCase() === 'OPEN' ? 'selected' : ''}>OPEN</option><option value="CLOSED" ${String(profile.commission_status).toUpperCase() !== 'OPEN' ? 'selected' : ''}>CLOSED</option></select></div>
      <div class="admin-field"><label for="profile-hero-art">Hero image URL / local path</label><input id="profile-hero-art" name="hero_art_url" value="${esc(profile.hero_art_url || '')}"></div>
      <div class="admin-field"><label for="profile-hero-file">Or upload a new hero image</label><input id="profile-hero-file" name="hero_file" type="file" accept="image/png,image/jpeg,image/webp,image/gif"></div>
      <div class="admin-field full"><label for="profile-bio">Artist bio</label><textarea id="profile-bio" name="bio" maxlength="500">${esc(profile.bio || '')}</textarea></div>
      <div class="admin-field full"><label class="admin-checkbox"><input type="checkbox" name="is_public" ${profile.is_public ? 'checked' : ''}> Make this portfolio publicly visible</label></div>
      <div class="admin-field full"><button class="admin-submit" type="submit">Save profile</button></div>
    </form></section>
    ${adminFormSection('Social media & marketplaces', 'social-form', `
      <input type="hidden" name="id"><div class="admin-field"><label for="social-platform">Platform name</label><input id="social-platform" name="platform" placeholder="Instagram" required maxlength="40"></div>
      <div class="admin-field"><label for="social-url">Profile URL</label><input id="social-url" name="url" type="url" placeholder="https://..." required></div>
      <div class="admin-field full"><label class="admin-checkbox"><input type="checkbox" name="is_active" checked> Show this link publicly</label></div>`, listMarkup(adminData.socials, 'kn_social_links', item => `${item.platform} — ${item.url}`))}
    ${adminFormSection('Artwork gallery', 'artwork-form', `
      <input type="hidden" name="id"><div class="admin-field"><label for="artwork-title">Artwork title</label><input id="artwork-title" name="title" required maxlength="100"></div>
      <div class="admin-field"><label for="artwork-category">Category</label><input id="artwork-category" name="category" placeholder="Full Render" maxlength="60"></div>
      <div class="admin-field full"><label for="artwork-file">Artwork image file (max 10 MB)</label><input id="artwork-file" name="image_file" type="file" accept="image/png,image/jpeg,image/webp,image/gif"></div>
      <div class="admin-field full"><label for="artwork-url">Or use image URL / local path</label><input id="artwork-url" name="image_url" placeholder="./assets/artworks/... or https://..."></div>
      <div class="admin-field full"><label for="artwork-description">Description</label><textarea id="artwork-description" name="description" maxlength="500"></textarea></div>
      <div class="admin-field full"><label class="admin-checkbox"><input type="checkbox" name="is_published" checked> Publish this artwork in the gallery</label></div>`, listMarkup(adminData.artworks, 'kn_artworks', item => `${item.title} · ${item.category || 'Artwork'}`))}
    ${adminFormSection('Commission services & price lists', 'service-form', `
      <input type="hidden" name="id"><div class="admin-field"><label for="service-title">Service title</label><input id="service-title" name="title" required maxlength="100"></div>
      <div class="admin-field"><label for="service-category">Category / label</label><input id="service-category" name="category" placeholder="FULL RENDER" maxlength="60"></div>
      <div class="admin-field full"><label for="service-cover">Cover image URL / local path</label><input id="service-cover" name="cover_url" placeholder="./assets/artworks/... or https://..."></div>
      <div class="admin-field full"><label for="service-description">Description</label><textarea id="service-description" name="description" maxlength="500"></textarea></div>
      <div class="admin-field full"><label for="service-prices">Price options (one per line)</label><textarea id="service-prices" name="price_options" placeholder="Bust Up | 70000 | 37&#10;Half Body | 120000 | 45&#10;Head Only | 35000 | -"></textarea></div>
      <div class="admin-field full"><label for="service-details">Notes (one item per line)</label><textarea id="service-details" name="details" placeholder="Personal-use pricing"></textarea></div>
      <div class="admin-field full"><label class="admin-checkbox"><input type="checkbox" name="is_active" checked> Show this service publicly</label></div>`, listMarkup(adminData.services, 'kn_commission_services', item => `${item.category ? `${item.category} / ` : ''}${item.title}`))}
    ${adminFormSection('Commission add-ons', 'addon-form', `
      <input type="hidden" name="id"><div class="admin-field"><label for="addon-title">Add-on title</label><input id="addon-title" name="title" required maxlength="100" placeholder="Additional character"></div>
      <div class="admin-field"><label for="addon-price">Price label</label><input id="addon-price" name="price_label" required maxlength="30" placeholder="FREE or +1×"></div>
      <div class="admin-field full"><label for="addon-description">Description</label><textarea id="addon-description" name="description" required maxlength="500"></textarea></div>
      <div class="admin-field full"><label class="admin-checkbox"><input type="checkbox" name="is_active" checked> Show this add-on publicly</label></div>`, listMarkup(adminData.addons, 'kn_commission_addons', item => `${item.title} — ${item.price_label}`))}
    ${adminFormSection('Commission guidelines & terms', 'rule-form', `
      <input type="hidden" name="id"><div class="admin-field"><label for="rule-category">Section type</label><select id="rule-category" name="category"><option value="terms">Terms & conditions</option><option value="accepted">What I can draw</option><option value="not_accepted">What I don't draw</option></select></div><div class="admin-field"><label for="rule-title">Section title</label><input id="rule-title" name="title" required maxlength="100" placeholder="Payment & revisions"></div>
      <div class="admin-field full"><label for="rule-body">Guideline text (one list item per line for subject lists)</label><textarea id="rule-body" name="body" required maxlength="3000"></textarea></div>
      <div class="admin-field full"><label class="admin-checkbox"><input type="checkbox" name="is_active" checked> Show this guideline publicly</label></div>`, listMarkup(adminData.rules, 'kn_commission_rules', item => `${item.category || 'terms'} — ${item.title}`))}
  `;

  $('#logout-button').addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return notify(error.message);
    currentUser = null;
    showLogin();
    notify('Signed out.');
  });
  $('#profile-form').addEventListener('submit', saveProfile);
  $('#social-form').addEventListener('submit', saveSocial);
  $('#artwork-form').addEventListener('submit', saveArtwork);
  $('#service-form').addEventListener('submit', saveService);
  $('#addon-form').addEventListener('submit', saveAddon);
  $('#rule-form').addEventListener('submit', saveRule);
  $$('.cancel-edit', $('#admin-content')).forEach(button => button.addEventListener('click', () => resetEditForm(button.closest('form'))));
  $$('.edit-btn', $('#admin-content')).forEach(button => button.addEventListener('click', () => editRecord(button.dataset.editTable, button.dataset.id)));
  $$('.delete-btn', $('#admin-content')).forEach(button => button.addEventListener('click', () => deleteRecord(button.dataset.deleteTable, button.dataset.id)));
}

async function saveProfile(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  values.is_public = form.elements.namedItem('is_public').checked;
  values.owner_id = currentUser.id;
  if (!values.display_name.trim()) return notify('Please enter an artist name.');
  const heroFile = form.elements.namedItem('hero_file').files?.[0];
  const previousHero = adminData.profile?.hero_art_url || '';
  try { if (heroFile) values.hero_art_url = await uploadImage(heroFile, 'profile'); }
  catch (error) { return notify(`Hero upload failed: ${error.message}`); }
  if (values.hero_art_url && !isSafeImageReference(values.hero_art_url)) return notify('Hero image must be an HTTPS URL or local assets path.');
  delete values.hero_file;
  const { error } = await supabase.from('kn_artist_profiles').upsert(values, { onConflict: 'owner_id' });
  if (error) return notify(error.message);
  if (heroFile && previousHero !== values.hero_art_url) await removeOwnedStorageImage(previousHero);
  await showDashboard();
  await loadPublicData();
  notify('Artist profile saved.');
}

async function saveSocial(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const url = safeExternalUrl(values.url);
  if (url === '#') return notify('Please enter a valid HTTPS or HTTP profile URL.');
  const payload = {
    owner_id: currentUser.id,
    platform: String(values.platform || '').trim(),
    url,
    is_active: form.elements.namedItem('is_active').checked,
    sort_order: values.id ? (adminData.socials.find(item => item.id === values.id)?.sort_order ?? adminData.socials.length) : adminData.socials.length
  };
  if (values.id) payload.id = values.id;
  const { error } = await supabase.from('kn_social_links').upsert(payload);
  if (error) return notify(error.message);
  await refreshAdminAndPublic('Social link saved.');
}

function makeStorageToken() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  if (globalThis.crypto?.getRandomValues) {
    const bytes = new Uint8Array(16);
    globalThis.crypto.getRandomValues(bytes);
    return [...bytes].map(value => value.toString(16).padStart(2, '0')).join('');
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

async function uploadImage(file, folder = 'artworks') {
  if (!file || !file.size) throw new Error('Please select an image file.');
  if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)) throw new Error('Use PNG, JPG, WEBP or GIF images.');
  if (file.size > 10 * 1024 * 1024) throw new Error('Image size must be 10 MB or less.');
  const extension = (file.name.split('.').pop() || 'png').toLowerCase().replace(/[^a-z0-9]/g, '');
  const path = `${currentUser.id}/${folder}/${Date.now()}-${makeStorageToken()}.${extension}`;
  const { error } = await supabase.storage.from('kn-artist-assets').upload(path, file, { cacheControl: '3600', upsert: false });
  if (error) throw error;
  return supabase.storage.from('kn-artist-assets').getPublicUrl(path).data.publicUrl;
}

async function saveArtwork(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const existing = values.id ? adminData.artworks.find(item => item.id === values.id) : null;
  let imageUrl = String(values.image_url || existing?.image_url || '').trim();
  const previousImage = existing?.image_url || '';
  const file = form.elements.namedItem('image_file').files?.[0];
  try { if (file) imageUrl = await uploadImage(file, 'artworks'); }
  catch (error) { return notify(`Image upload failed: ${error.message}`); }
  if (!imageUrl || !isSafeImageReference(imageUrl)) return notify('Choose an image file or enter a valid HTTPS/local image path.');
  const payload = {
    owner_id: currentUser.id,
    title: String(values.title || '').trim(),
    category: String(values.category || 'Artwork').trim(),
    description: String(values.description || '').trim(),
    image_url: imageUrl,
    is_published: form.elements.namedItem('is_published').checked,
    sort_order: existing?.sort_order ?? adminData.artworks.length
  };
  if (values.id) payload.id = values.id;
  const { error } = await supabase.from('kn_artworks').upsert(payload);
  if (error) { if (file) await removeOwnedStorageImage(imageUrl); return notify(error.message); }
  if (file && previousImage !== imageUrl) await removeOwnedStorageImage(previousImage);
  await refreshAdminAndPublic('Artwork saved.');
}

async function saveService(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const existing = values.id ? adminData.services.find(item => item.id === values.id) : null;
  const cover = String(values.cover_url || '').trim();
  if (cover && !isSafeImageReference(cover)) return notify('Cover image must be an HTTPS URL or local assets path.');
  let priceOptions;
  try { priceOptions = parsePriceOptions(values.price_options); }
  catch (error) { return notify(error.message); }
  const payload = {
    owner_id: currentUser.id,
    title: String(values.title || '').trim(),
    category: String(values.category || '').trim(),
    description: String(values.description || '').trim(),
    cover_url: cover || null,
    price_options: priceOptions,
    details: String(values.details || '').split('\n').map(line => line.trim()).filter(Boolean),
    addons: existing?.addons || [],
    sort_order: existing?.sort_order ?? adminData.services.length,
    is_active: form.elements.namedItem('is_active').checked
  };
  if (values.id) payload.id = values.id;
  const { error } = await supabase.from('kn_commission_services').upsert(payload);
  if (error) return notify(error.message);
  await refreshAdminAndPublic('Commission service saved.');
}

async function saveAddon(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const existing = values.id ? adminData.addons.find(item => item.id === values.id) : null;
  const payload = {
    owner_id: currentUser.id,
    title: String(values.title || '').trim(),
    description: String(values.description || '').trim(),
    price_label: String(values.price_label || '').trim(),
    sort_order: existing?.sort_order ?? adminData.addons.length,
    is_active: form.elements.namedItem('is_active').checked
  };
  if (!payload.title || !payload.description || !payload.price_label) return notify('Complete all add-on fields.');
  if (values.id) payload.id = values.id;
  const { error } = await supabase.from('kn_commission_addons').upsert(payload);
  if (error) return notify(error.message);
  await refreshAdminAndPublic('Commission add-on saved.');
}

async function saveRule(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const existing = values.id ? adminData.rules.find(item => item.id === values.id) : null;
  const payload = {
    owner_id: currentUser.id,
    category: String(values.category || 'terms'),
    title: String(values.title || '').trim(),
    body: String(values.body || '').trim(),
    sort_order: existing?.sort_order ?? adminData.rules.length,
    is_active: form.elements.namedItem('is_active').checked
  };
  if (values.id) payload.id = values.id;
  const { error } = await supabase.from('kn_commission_rules').upsert(payload);
  if (error) return notify(error.message);
  await refreshAdminAndPublic('Guideline saved.');
}

async function refreshAdminAndPublic(message) {
  await showDashboard();
  await loadPublicData();
  notify(message);
}

function editRecord(table, id) {
  const mapping = {
    kn_social_links: ['social-form', adminData.socials, item => ({ id: item.id, platform: item.platform, url: item.url, is_active: item.is_active })],
    kn_artworks: ['artwork-form', adminData.artworks, item => ({ id: item.id, title: item.title, category: item.category, image_url: item.image_url, description: item.description, is_published: item.is_published })],
    kn_commission_services: ['service-form', adminData.services, item => ({ id: item.id, title: item.title, category: item.category, cover_url: item.cover_url, description: item.description, price_options: priceOptionsText(item), details: lineListText(item.details), is_active: item.is_active })],
    kn_commission_addons: ['addon-form', adminData.addons, item => ({ id: item.id, title: item.title, description: item.description, price_label: item.price_label, is_active: item.is_active })],
    kn_commission_rules: ['rule-form', adminData.rules, item => ({ id: item.id, category: item.category || 'terms', title: item.title, body: item.body, is_active: item.is_active })]
  };
  const selected = mapping[table];
  if (!selected) return;
  const item = selected[1].find(record => record.id === id);
  if (!item) return notify('That record could not be found.');
  bindEditForm(selected[0], item, selected[2](item));
}

async function removeOwnedStorageImage(imageUrl) {
  const value = String(imageUrl || '');
  const marker = '/storage/v1/object/public/kn-artist-assets/';
  const markerIndex = value.indexOf(marker);
  if (markerIndex < 0) return;
  const encodedPath = value.slice(markerIndex + marker.length).split('?')[0];
  let path;
  try { path = decodeURIComponent(encodedPath); } catch { return; }
  if (!path.startsWith(`${currentUser.id}/`)) return;
  const { error } = await supabase.storage.from('kn-artist-assets').remove([path]);
  if (error) console.warn('Could not remove old portfolio image from Storage:', error.message);
}

async function deleteRecord(table, id) {
  const allowed = ['kn_social_links', 'kn_artworks', 'kn_commission_services', 'kn_commission_addons', 'kn_commission_rules'];
  if (!allowed.includes(table) || !window.confirm('Delete this item? This cannot be undone.')) return;
  const artwork = table === 'kn_artworks' ? adminData.artworks.find(item => item.id === id) : null;
  const { error } = await supabase.from(table).delete().eq('id', id).eq('owner_id', currentUser.id);
  if (error) return notify(error.message);
  if (artwork?.image_url) await removeOwnedStorageImage(artwork.image_url);
  await refreshAdminAndPublic('Item deleted.');
}

$('#admin-trigger').addEventListener('click', openAdmin);
$('#close-admin').addEventListener('click', closeAdmin);
$('#admin-modal').addEventListener('click', event => { if (event.target === $('#admin-modal')) closeAdmin(); });
$('#lightbox-close').addEventListener('click', closeLightbox);
$('#lightbox').addEventListener('click', event => { if (event.target === $('#lightbox')) closeLightbox(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if ($('#lightbox').classList.contains('is-open')) closeLightbox();
    if ($('#admin-modal').classList.contains('is-open')) closeAdmin();
  }
});
$('#menu-toggle').addEventListener('click', () => {
  const nav = $('#main-nav');
  const isOpen = nav.classList.toggle('is-open');
  $('#menu-toggle').setAttribute('aria-expanded', String(isOpen));
  $('#menu-toggle').setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
$$('#main-nav a').forEach(link => link.addEventListener('click', () => {
  $('#main-nav').classList.remove('is-open');
  $('#menu-toggle').setAttribute('aria-expanded', 'false');
  $('#menu-toggle').setAttribute('aria-label', 'Open navigation');
}));

renderAll();
await loadPublicData();
