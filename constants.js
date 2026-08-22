// All editable site data lives here. site.js only contains rendering logic.

// Subtitle lines shown on every page (home + interstitials).
const TITLES = [
    'Research Engineer',
    'Applied AI @ Aleph (YC S21)',
    'ICPC Coach & LATAM Champion',
];

// Link buttons on the home page, in display order.
// `lg` = bigger icon; `filled` = black filled button style.
// External hrefs (http...) open in a new tab automatically.
const LINKS = [
    { label: 'WORK',      href: 'https://www.linkedin.com/in/marianocrosetti/',  icon: '/assets/logos/6ea5b4a88f0b4f91945b40499aa0af00.png',            alt: 'LinkedIn' },
    { label: 'LEARN',     href: 'https://mcrosetti.medium.com/',                 icon: '/assets/logos/b5a745_aa29714ecf004f14a2adea9c9ab2e087~mv2.png', alt: 'Medium' },
    { label: 'REFLECT',   href: 'https://twitter.com/MarianoCrosetti',           icon: '/assets/logos/c7d035ba85f6486680c2facedecdcf4d.png',            alt: 'Twitter' },
    { label: 'CHILL',     href: 'https://www.instagram.com/mariano.crosetti/',   icon: '/assets/logos/01c3aff52f2a4dffa526d7a9843d46ea.png',            alt: 'Instagram' },
    { label: 'MEET',      href: '/bookme/',                                      icon: '/assets/logos/b5a745_e87f3761dc3b4a7ca138c30750b12415~mv2.jpg', alt: 'Calendar', lg: true },
    { label: 'FEEDBACK',  href: '/feedback/',                                    icon: '/assets/logos/b5a745_0609482640e140ea82282eb1321ba157~mv2.jpg', alt: 'Feedback', lg: true },
    { label: 'MY RESUME', href: '/resume/',                                      icon: '/assets/logos/b5a745_a855af44139e4768b407a8042f9d9670~mv2.png', alt: 'Resume',   lg: true, filled: true },
];

// Interstitial pages: URL path -> page config. They show the heading, the
// shared TITLES, an icon and a "(redirecting to <label> ...)" notice, then
// redirect to redirectUrl after REDIRECT_DELAY_MS.
// The index.html inside each folder is an identical stub — GitHub Pages needs
// a physical file per path — so everything page-specific lives here.
// To add a new interstitial: copy any of the three folders (e.g. resume/)
// and add an entry here keyed by its path.
const INTERSTITIALS = {
    '/resume/': {
        title: 'Resume | Mariano Crosetti',
        icon: { src: '/assets/logos/resume.avif', width: 147, height: 150 },
        redirectLabel: 'resume',
        redirectUrl: '/assets/resume.pdf',
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
