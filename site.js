// Rendering logic. All editable data (TITLES, INTERSTITIALS, ...) lives in
// constants.js, which must be loaded before this script.

document.querySelectorAll('[data-titles]').forEach(el => {
    el.innerHTML = TITLES.map(t => `<p class="title">${t}</p>`).join('');
});

document.querySelectorAll('[data-links]').forEach(el => {
    el.innerHTML = LINKS.map(l => `
        <div class="link-row">
            <img class="icon${l.lg ? ' icon-lg' : ''}" src="${l.icon}" alt="${l.alt}">
            <a href="${l.href}"${l.href.startsWith('http') ? ' target="_blank"' : ''} class="link-button${l.filled ? ' filled' : ''}">${l.label}</a>
        </div>`).join('');
});

const path = location.pathname.replace(/index\.html$/, '').replace(/\/?$/, '/');
const page = INTERSTITIALS[path];
const interstitial = document.querySelector('.interstitial');
if (page && interstitial) {
    document.title = page.title;
    interstitial.insertAdjacentHTML('beforeend', `
        <img class="interstitial-icon" src="${page.icon.src}" alt="" width="${page.icon.width}" height="${page.icon.height}">
        <p class="title">(redirecting to ${page.redirectLabel} ...)</p>
    `);
    setTimeout(() => { location.href = page.redirectUrl; }, REDIRECT_DELAY_MS);
}
