// Single source of truth for the subtitle lines shown on every page.
// Edit this array and all pages (home + interstitials) update together.
const TITLES = [
    'Research Engineer',
    'Applied AI @ Aleph (YC S21)',
    'ICPC Coach & LATAM Champion',
];

document.querySelectorAll('[data-titles]').forEach(el => {
    el.innerHTML = TITLES.map(t => `<p class="title">${t}</p>`).join('');
});

// Interstitial pages declare their two inputs as data attributes on <main>:
//   data-icon / data-icon-width / data-icon-height  -> the logo shown
//   data-redirect                                   -> fills "(redirecting to <X> ...)"
// The redirect target itself lives in each page's <meta http-equiv="refresh">.
const interstitial = document.querySelector('.interstitial');
if (interstitial) {
    const { icon, iconWidth, iconHeight, redirect } = interstitial.dataset;
    interstitial.insertAdjacentHTML('beforeend', `
        <img class="interstitial-icon" src="${icon}" alt="" width="${iconWidth}" height="${iconHeight}">
        <p class="title">(redirecting to ${redirect} ...)</p>
    `);
}
