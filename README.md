# Mariano Crosetti - Personal Website

A static personal website: https://new.marianocrosetti.com

## How it's organized

All styling lives in `styles.css` via classes — there is no inline CSS in the HTML.
You never need to touch CSS to add or edit content; you only edit repetitive HTML blocks in `index.html`.

The layout is responsive: desktop shows the photo on the left column, mobile (≤750px)
shows title → circular photo → subtitles → buttons, mirroring the Wix original.

## Adding a link button

Each button (WORK, LEARN, ...) is a 4-line block inside `<div class="links">` in `index.html`:

```html
<div class="link-row">
    <img class="icon" src="assets/logos/my-icon.png" alt="Description">
    <a href="https://..." target="_blank" class="link-button">MY LABEL</a>
</div>
```

## Other editable content
See `TITLES` constant in `site.js`

## Interstitial pages (/resume, /bookme, /feedback)

Pages that show the heading, the shared subtitles, an icon and a
"(redirecting to X ...)" notice, then redirect after 2 seconds.

The `index.html` inside each folder is an identical stub (GitHub Pages needs a
physical file per path); everything page-specific — title, icon, redirect label
and target URL — lives in the `INTERSTITIALS` map in `site.js`, keyed by path.

To add a new one: copy any of the three folders and add an entry to `INTERSTITIALS`.

## Contact form

Already wired to Formspree (`https://formspree.io/f/xwlewzev`), free tier: 50 submissions/month.
Submissions arrive at marianojosecrosetti@gmail.com with subject "Nuevo mensaje desde marianocrosetti.com".
