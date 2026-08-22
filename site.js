// Single source of truth for the subtitle lines shown on every page.
// Edit this array and all pages (home + interstitials) update together.
const TITLES = [
    'Research Engineer',
    'Applied AI @ Aleph (YC S21)',
    'ICPC Coach & LATAM Champion',
];

// Interstitial pages: URL path -> page config.
// The index.html files inside these folders are identical stubs;
// everything page-specific (title, icon, redirect) lives here.
// To add a new interstitial: copy any of the folders and add an entry here.
const INTERSTITIALS = {
    '/resume/': {
        title: 'Resume | Mariano Crosetti',
        icon: { src: '/assets/logos/resume.avif', width: 147, height: 150 },
        redirectLabel: 'resume',
        redirectUrl: 'https://b5a745c0-d004-424f-b8eb-8f7314ace9ed.usrfiles.com/ugd/b5a745_32fd08cf262c4e71b292e445b77995e0.pdf',
    },
    '/bookme/': {
        title: 'bookme | Mariano Crosetti',
        icon: { src: '/assets/logos/book-me.avif', width: 217, height: 132 },
        redirectLabel: 'calendar',
        redirectUrl: 'https://calendly.com/marianojosecrosetti/chat-with-mariano-crosetti',
    },
    '/feedback/': {
        title: 'Give me feedback | Mariano Crosetti',
        icon: { src: '/assets/logos/feedback.avif', width: 147, height: 150 },
        redirectLabel: 'feedback form',
        redirectUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfXQfX_PICUN2XXdv9Cm9RURPsmha02120gk6J210BABWLQBA/viewform',
    },
};

const REDIRECT_DELAY_MS = 2000;

document.querySelectorAll('[data-titles]').forEach(el => {
    el.innerHTML = TITLES.map(t => `<p class="title">${t}</p>`).join('');
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
