# Mariano Crosetti - Personal Website

A static personal website (copy of marianocrosetti.com), live at **https://new.marianocrosetti.com**.
HTML + CSS + one tiny shared JS (`site.js`) — no build step, no backend.

## How it's organized

All styling lives in `styles.css` via classes — there is no inline CSS in the HTML.
You never need to touch CSS to add or edit content; you only edit repetitive HTML blocks in `index.html`.

The layout is responsive: desktop shows the photo on the left column, mobile (≤750px)
shows title → circular photo → subtitles → buttons, mirroring the Wix original.

## Adding a link button

Each button (WORK, LEARN, ...) is a 4-line block inside `<div class="links">`:

```html
<div class="link-row">
    <img class="icon" src="assets/logos/my-icon.png" alt="Description">
    <a href="https://..." target="_blank" class="link-button">MY LABEL</a>
</div>
```

Copy the block and change three things: icon `src`, `href` and the label.

- Bigger icon (like Calendar/Feedback/Resume): use `class="icon icon-lg"`.
- Filled black style (like MY RESUME): use `class="link-button filled"`.

Alignment, hover and borders come from the classes — nothing else to do.

## Other editable content

- **Subtitles** (Research Engineer / Applied AI @ Aleph / ...): single source of truth
  in the `TITLES` array at the top of `site.js` — edit it once and the home page and
  every interstitial page update together.
- **Form fields**: each is a `<div class="form-group">` with a label + input.
- **Profile photo**: replace `assets/profile.jpg` (desktop crops it to 622:465 with
  rounded corners; mobile crops it to a circle — both automatic via CSS).

## Interstitial pages (/resume, /bookme, /feedback)

Pages that show the heading, the shared subtitles, an icon and a
"(redirecting to X ...)" notice, then redirect after 2 seconds.
They all share the same structure, rendered by `site.js`; each page declares
only its own inputs:

- **Icon and placeholder**: data attributes on `<main class="interstitial">`:
  `data-icon` / `data-icon-width` / `data-icon-height` and `data-redirect`
  (fills "(redirecting to <X> ...)").
- **Redirect target and delay**: the `<meta http-equiv="refresh">` tag in the page's
  `<head>` — works even without JavaScript.

To add a new one: copy any of the three folders, adjust the meta refresh URL,
the `<title>` and the data attributes.

## Contact form

Already wired to Formspree (`https://formspree.io/f/xwlewzev`), free tier: 50 submissions/month.
Submissions arrive at marianojosecrosetti@gmail.com with subject "Nuevo mensaje desde marianocrosetti.com".

- Submits via AJAX: the visitor stays on the page and sees an inline confirmation.
- Includes a honeypot field (`_gotcha`) for spam protection.
- Optional hardening: in the Formspree dashboard, Settings → Restrict to Domain.

If the 50/month free tier ever falls short, alternatives explored: Web3Forms (250/month),
FormSubmit (no signup), or Netlify Forms (requires hosting on Netlify).

## Deployment (already live)

- **Repo**: https://github.com/marianocrosetti/web-marianocrosetti-com (this folder is a
  nested git repo inside personal-hq, gitignored there — commit from here, not from the HQ root).
- **Hosting**: GitHub Pages, serving branch `main` / root. **Deploying = `git push`**;
  Pages rebuilds automatically in ~30s.
- **Domain**: `new.marianocrosetti.com` via the `CNAME` file + a CNAME DNS record
  (`new` → `marianocrosetti.github.io`) in the Wix DNS panel (marianocrosetti.com's
  nameservers are Wix). HTTPS enforced (cert auto-provisioned by GitHub/Let's Encrypt).

Note: the /resume interstitial redirects to the PDF still hosted on Wix. If the Wix
site is ever taken down, upload the PDF here (e.g. `assets/resume.pdf`) and update
the meta refresh URL in `resume/index.html`.

## File Structure

```
.
├── index.html      # Main HTML file (includes the small form-submit script)
├── styles.css      # All styling, including the mobile breakpoint (≤750px)
├── site.js         # TITLES source of truth + interstitial renderer
├── resume/         # Interstitial -> resume PDF
├── bookme/         # Interstitial -> Calendly
├── feedback/       # Interstitial -> Google feedback form
├── CNAME           # Custom domain for GitHub Pages (new.marianocrosetti.com)
├── assets/
│   ├── profile.jpg # Profile photo
│   ├── logos/      # Button icons (downloaded from the original Wix site)
│   └── mobile/     # Reference screenshots of the original mobile layout (local only, gitignored)
├── task/           # Reference screenshot of the original desktop layout (local only, gitignored)
└── README.md       # This file
```
