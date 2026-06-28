# GAIB Agro Equipment Website

Production-ready React website for GAIB Agro Equipment Private Limited.

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion
- SwiperJS
- React Icons

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is generated in `dist`.

## Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Build output directory: `dist`

The `public/_redirects` file is included so direct visits to React Router pages work on Cloudflare Pages.

## Product Data

Products are managed in `src/data/products.js`. Add product images under `public/images/products`, hero images under `public/images/hero`, and gallery images under `public/images/gallery`.
