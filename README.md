# SST INNOVATION Website

Premium bilingual marketing site for SST INNOVATION, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
src/
  app/
    api/contact/route.ts
    layout.tsx
    page.tsx
  components/
    Footer.tsx
    Navbar.tsx
    PackageCard.tsx
    PlatformCard.tsx
  lib/
    i18n.ts
```

## Deploy to Vercel (GitHub)

1) Push this repository to GitHub.
2) Create a new project in Vercel and import the repo.
3) Add environment variables from `.env.example` in the Vercel dashboard.
4) Deploy.

## Environment variables

Do not commit `.env` or `.env.local` files. Use `.env.example` for reference only.
