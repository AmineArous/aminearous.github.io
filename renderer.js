// ============ STATE ============
let currentLang = 'en';

const sections = ['hero', 'story', 'feature', 'work', 'contact'];

// Chapter index → PRO_APPS index. CH.01 (Smartfingers) and CH.06 (indie) have no related.
const CH_RELATED = {
    2: [3],   // STIME → Intermarché
    3: [2],   // PagesJaunes
    4: [1],   // Meetic
    5: [0]    // Accor
};

// ============ I18N HELPERS ============
function t(key) {
    const dict = translations[currentLang] || translations.en;
    return dict[key] !== undefined ? dict[key] : key;
}

function substitute(str) {
    if (!str) return '';
    const now = new Date();
    const monthKey = `month-${now.getMonth() + 1}`;
    return str
        .replace(/\{count\}/g, apps.length)
        .replace(/\{month\}/g, t(monthKey))
        .replace(/\{year\}/g, now.getFullYear());
}

// ============ APPS MARQUEE ============
function initials(name) {
    return name.split(/[\s—-]+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function buildAppsMarquee() {
    const indie = apps.map(a => ({ kind: 'indie', name: a.name, ctx: a.c, icon: a.icon }));
    const pro   = PRO_APPS.map(a => ({ kind: 'pro', name: a.n, ctx: a.c, icon: null, color: a.color, query: a.q }));

    // mix: 2 indie, 1 pro, repeat
    const mixed = [];
    let i = 0, p = 0;
    while (i < indie.length || p < pro.length) {
        if (i < indie.length) mixed.push(indie[i++]);
        if (i < indie.length) mixed.push(indie[i++]);
        if (p < pro.length)   mixed.push(pro[p++]);
    }

    const html = mixed.map((a, idx) => {
        const visual = a.icon
            ? `<img src="${a.icon}" alt="${a.name}"/>`
            : `<div class="m-fallback" style="background:${a.color}">${initials(a.name)}</div>`;
        return `<a class="m-icon" data-kind="${a.kind}" data-mix-idx="${idx}" href="#" aria-label="${a.name}">
            ${visual}
            <span class="m-label">${a.name}<span class="m-tag">${a.ctx}</span></span>
        </a>`;
    }).join('');

    const track = document.getElementById('marquee-apps');
    track.innerHTML = html + html;

    // Lazy-load real App Store icons for pro apps via iTunes Search API
    mixed.forEach((a, idx) => {
        if (a.kind !== 'pro' || !a.query) return;
        fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(a.query)}&country=fr&media=software&limit=1`)
            .then(r => r.json())
            .then(data => {
                if (!data.results || !data.results.length) return;
                const url = (data.results[0].artworkUrl100 || data.results[0].artworkUrl60 || '').replace(/\/\d+x\d+bb\./, '/256x256bb.');
                if (!url) return;
                const probe = new Image();
                probe.onload = () => {
                    document.querySelectorAll(`#marquee-apps [data-mix-idx="${idx}"] .m-fallback`).forEach(fb => {
                        const img = document.createElement('img');
                        img.src = url; img.alt = a.name;
                        fb.replaceWith(img);
                    });
                    const pIdx = PRO_APPS.findIndex(p => p.q === a.query);
                    if (pIdx >= 0) {
                        PRO_APPS[pIdx].icon = url;
                        const trackUrl = data.results[0].trackViewUrl;
                        if (trackUrl) {
                            PRO_APPS[pIdx].url = trackUrl;
                            document.querySelectorAll(`.ch-r-cta[data-pro-cta="${pIdx}"]`).forEach(node => {
                                if (node.tagName === 'A') {
                                    node.setAttribute('href', trackUrl);
                                } else {
                                    const a2 = document.createElement('a');
                                    a2.className = 'ch-r-cta';
                                    a2.href = trackUrl; a2.target = '_blank'; a2.rel = 'noopener';
                                    a2.setAttribute('data-pro-cta', pIdx);
                                    a2.innerHTML = node.innerHTML;
                                    node.replaceWith(a2);
                                }
                            });
                        }
                        document.querySelectorAll(`.ch-related-app[data-pro-idx="${pIdx}"] .ch-fallback`).forEach(fb => {
                            const img = document.createElement('img');
                            img.src = url; img.alt = a.name;
                            fb.replaceWith(img);
                        });
                    }
                };
                probe.src = url;
            })
            .catch(() => {});
    });
}

// ============ APPS GRID ============
function buildAppsGrid() {
    const grid = document.getElementById('apps-grid');
    grid.innerHTML = '';
    apps.forEach(a => {
        const card = document.createElement('a');
        card.className = 'app-card reveal';
        card.href = '#';
        card.innerHTML = `<img src="${a.icon}" alt="${a.name}"/><div class="name">${a.name}</div><div class="cat">${a.c}</div>`;
        card.addEventListener('click', (e) => { e.preventDefault(); openAppModal(a); });
        grid.appendChild(card);
    });
}

// ============ APP MODAL ============
const modalEl = () => document.getElementById('app-modal');
const backdropEl = () => document.getElementById('app-modal-backdrop');

function renderShotPlaceholder(label) {
    return `<div class="modal-shot modal-shot-placeholder" aria-label="${label}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
        </svg>
    </div>`;
}

function openAppModal(a) {
    const m = modalEl();
    m.style.setProperty('--app-accent', a.accent || 'var(--orange)');

    const featuresHTML = (a.features || []).map(f => `
        <div class="modal-feature">
            <div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
            <span>${f}</span>
        </div>`).join('');

    const techHTML = (a.tech || []).map(tch => `<span class="chip">${tch}</span>`).join('');

    const ctaHTML = a.url
        ? `<a class="modal-cta" href="${a.url}" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <span>${t('modal-cta-store')}</span>
            </a>
            <a class="modal-cta ghost" href="#" onclick="closeAppModal();return false;">${t('modal-close')}</a>`
        : `<button class="modal-cta ghost" disabled style="opacity:0.5;cursor:default">—</button>`;

    const shots = a.screenshots && a.screenshots.length ? a.screenshots : [];
    const shotsHTML = shots.length
        ? shots.map(src => `<img class="modal-shot" src="${src}" alt="${a.name} screenshot" loading="lazy" onclick="openShotLightbox(this.src)" onerror="replaceShotWithPlaceholder(this)"/>`).join('')
        : Array.from({length: 3}, () => renderShotPlaceholder(a.name + ' screenshot')).join('');

    const statsHTML = `
        <div class="s"><div class="s-label">${t('modal-stat-year')}</div><div class="s-value"><em>${a.y || '—'}</em></div></div>
        <div class="s"><div class="s-label">${t('modal-stat-cat')}</div><div class="s-value">${a.c}</div></div>
        <div class="s"><div class="s-label">${t('modal-stat-by')}</div><div class="s-value">${t('modal-stat-by-value')}</div></div>`;

    m.querySelector('.modal-scroll').innerHTML = `
        <div class="modal-hero">
            <div class="modal-hero-inner">
                <img class="modal-icon" src="${a.icon}" alt="${a.name}"/>
                <div class="modal-meta">
                    <span class="modal-cat"><span class="dot"></span>${a.c}</span>
                    <h2 class="modal-name">${a.name}</h2>
                    <p class="modal-tagline">${a.tagline || ''}</p>
                    <div class="modal-actions">${ctaHTML}</div>
                </div>
            </div>
        </div>

        <div class="modal-body">
            <div class="modal-section">
                <div class="modal-eyebrow">${t('modal-screenshots')}</div>
                <div class="modal-gallery-wrap">
                    <div class="modal-gallery">${shotsHTML}</div>
                </div>
            </div>

            ${a.desc ? `<div class="modal-section">
                <div class="modal-eyebrow">${t('modal-about')}</div>
                <p>${a.desc}</p>
            </div>` : ''}

            ${a.features && a.features.length ? `<div class="modal-section">
                <h4>${t('modal-features')}</h4>
                <div class="modal-features">${featuresHTML}</div>
            </div>` : ''}

            ${a.tech && a.tech.length ? `<div class="modal-section">
                <h4>${t('modal-built')}</h4>
                <div class="modal-tech">${techHTML}</div>
            </div>` : ''}

            <div class="modal-section">
                <div class="modal-stats">${statsHTML}</div>
            </div>
        </div>
    `;

    requestAnimationFrame(() => {
        m.classList.add('open');
        backdropEl().classList.add('open');
        document.body.classList.add('modal-open');
    });
}

function closeAppModal() {
    modalEl().classList.remove('open');
    backdropEl().classList.remove('open');
    document.body.classList.remove('modal-open');
}
window.closeAppModal = closeAppModal;

// ============ SHOT LIGHTBOX ============
function openShotLightbox(src) {
    const lb = document.getElementById('shot-lightbox');
    if (!lb) return;
    lb.querySelector('img').src = src;
    lb.classList.add('open');
}
function closeShotLightbox() {
    const lb = document.getElementById('shot-lightbox');
    if (!lb) return;
    lb.classList.remove('open');
}
window.openShotLightbox = openShotLightbox;
window.closeShotLightbox = closeShotLightbox;

window.replaceShotWithPlaceholder = function(img) {
    const wrap = document.createElement('div');
    wrap.innerHTML = renderShotPlaceholder(img.alt || 'screenshot');
    img.replaceWith(wrap.firstElementChild);
};

// ============ CHAPTERS ============
function appStoreUrl(a) {
    return a.url || (a.bundle ? `https://apps.apple.com/fr/app/id?bundleId=${a.bundle}` : null);
}

function renderChapters() {
    document.querySelectorAll('.chapter').forEach(chapterEl => {
        const idx = chapterEl.getAttribute('data-ch');
        const titleKey = `ch${idx}-title`;
        const bodyKey = `ch${idx}-body`;
        const detailsKey = `ch${idx}-details`;

        const titleNode = chapterEl.querySelector('h3');
        const bodyNode = chapterEl.querySelector('p.body');
        if (titleNode) titleNode.textContent = substitute(t(titleKey));
        if (bodyNode) bodyNode.textContent = substitute(t(bodyKey));

        const detailsEl = chapterEl.querySelector('.ch-details');
        if (detailsEl) {
            const inner = detailsEl.querySelector('.ch-details-inner');
            const detailsRaw = substitute(t(detailsKey));
            const items = detailsRaw.split('\n').map(s => s.replace(/^[•·\-]\s*/, '').trim()).filter(Boolean);
            inner.innerHTML = `<ul>${items.map(b => `<li>${b}</li>`).join('')}</ul>`;

            // Remove existing related block
            chapterEl.querySelectorAll('.ch-related').forEach(n => n.remove());

            // Related apps tile
            const related = CH_RELATED[idx] || [];
            if (related.length) {
                const appsHTML = related.map(i => {
                    const pa = PRO_APPS[i];
                    if (!pa) return '';
                    const init = initials(pa.n);
                    const url = appStoreUrl(pa);
                    const ctaInner = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg><span>${t('ch-download-label')}</span>`;
                    const cta = url
                        ? `<a class="ch-r-cta" href="${url}" target="_blank" rel="noopener" data-pro-cta="${i}">${ctaInner}</a>`
                        : `<span class="ch-r-cta disabled" data-pro-cta="${i}">${ctaInner}</span>`;
                    const visual = pa.icon
                        ? `<img src="${pa.icon}" alt="${pa.n}"/>`
                        : `<div class="ch-fallback" style="background:${pa.color}">${init}</div>`;
                    return `<div class="ch-related-app" data-pro-idx="${i}">
                        ${visual}
                        <div class="ch-r-meta">
                            <span class="ch-r-name">${pa.n}</span>
                            <span class="ch-r-tag">${pa.c}</span>
                        </div>
                        ${cta}
                    </div>`;
                }).join('');
                const block = document.createElement('div');
                block.className = 'ch-related';
                block.innerHTML = `<div class="ch-related-label">${t('ch-related-label')}</div><div class="ch-related-grid">${appsHTML}</div>`;
                detailsEl.parentNode.insertBefore(block, detailsEl.nextSibling);
            }
        }
    });
}

function reverseChapters() {
    const sec = document.getElementById('story');
    if (!sec) return;
    const chapters = Array.from(sec.querySelectorAll('.chapter'));
    chapters.reverse().forEach(ch => sec.appendChild(ch));
}

// ============ I18N RENDER ============
function applyI18n() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = substitute(t(key));
        el.textContent = value;
    });
}

function setLang(lang) {
    currentLang = lang;
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = lang.toUpperCase();
    applyI18n();
    renderChapters();
    localStorage.setItem('preferred-lang', lang);
}

function getDefaultLang() {
    const saved = localStorage.getItem('preferred-lang');
    if (saved) return saved;
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
}

// ============ THEME ============
function setTheme(theme) {
    const moon = document.getElementById('icon-moon');
    const sun = document.getElementById('icon-sun');
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (moon) moon.style.display = 'none';
        if (sun) sun.style.display = '';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (moon) moon.style.display = '';
        if (sun) sun.style.display = 'none';
    }
    localStorage.setItem('preferred-theme', theme);
}

// ============ DYNAMIC STATS ============
function updateStats() {
    const num = document.getElementById('stat-num-2');
    if (num) num.textContent = apps.length;
}

// ============ CUSTOM CURSOR ============
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2, tx = cx, ty = cy;
    window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    function loop() {
        cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
        cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
        requestAnimationFrame(loop);
    }
    loop();
    document.querySelectorAll('a, button, .app-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ============ SCROLL REVEAL ============
function initRevealObserver() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                if (e.target.querySelectorAll) {
                    e.target.querySelectorAll('.word-reveal').forEach(w => w.classList.add('in'));
                }
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ============ PROGRESS NAV ============
function initProgressNav() {
    const items = document.querySelectorAll('#progress .item');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const idx = sections.indexOf(e.target.id);
                items.forEach((it, i) => it.classList.toggle('active', i === idx));
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
    });
}

// ============ LIVE TIME ============
function updateParisTime() {
    const el = document.getElementById('paris-time');
    if (!el) return;
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', hour12: false });
    el.textContent = `Paris · ${time}`;
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
    buildAppsMarquee();
    buildAppsGrid();
    updateStats();
    reverseChapters();

    setTheme(localStorage.getItem('preferred-theme') || 'dark');
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.onclick = () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        setTheme(isLight ? 'dark' : 'light');
    };

    setLang(getDefaultLang());
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.onclick = () => setLang(currentLang === 'en' ? 'fr' : 'en');

    const bd = backdropEl();
    if (bd) bd.addEventListener('click', closeAppModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAppModal();
            closeShotLightbox();
        }
    });
    const lb = document.getElementById('shot-lightbox');
    if (lb) lb.addEventListener('click', (e) => {
        if (e.target === lb) closeShotLightbox();
    });

    initCursor();
    initRevealObserver();
    initProgressNav();

    window.addEventListener('load', () => {
        document.querySelectorAll('#hero-title .word-reveal').forEach(w => w.classList.add('in'));
    });

    updateParisTime();
    setInterval(updateParisTime, 30000);
});
