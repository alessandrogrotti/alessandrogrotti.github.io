# alessandrogrotti.github.io

This repository contains a modern personal homepage scaffold built with Next.js, TailwindCSS, framer-motion and i18n-ready configuration.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build & export static site (produces `out/`):

```bash
npm run build
```

Deployment to GitHub Pages

This project is configured to export a static site. After running `npm run build`, the static files are in `out/` and can be deployed to GitHub Pages. You can use GitHub Actions or `gh-pages` to publish `out/` to the `gh-pages` branch.

Notes

- Replace the placeholder PDFs in `public/CV.pdf` and `public/Thesis.pdf` with your actual files.
- Update `next.config.js` `basePath` if you deploy to `https://username.github.io/repo-name`.