# Mokshda Sharma Portfolio

Production-style personal portfolio for an ML Engineer, Data Scientist, and GenAI Developer built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark, recruiter-focused design with glassmorphism cards and AI gradient accents
- Animated typing hero and scroll-based reveal effects
- Detailed experience timeline
- Separate case-study pages for every project
- Publication detail page
- Responsive contact section and reusable UI components
- SEO metadata, sitemap, and robots support

## Folder Structure

```text
app/
  layout.tsx
  page.tsx
  projects/
    page.tsx
    [slug]/page.tsx
  publications/
    boom-in-data-science/page.tsx
components/
  sections/
  ui/
lib/
public/
```

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
npm run start
```

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Leave the build command as `npm run build`.
4. Leave the output directory defaulted to `.next`.
5. Add any environment variables you need for a real contact backend later.

## Resume Placeholder

The current download link points to `public/resume-placeholder.txt`. Replace it with the final resume PDF or update the route before going live.

## Notes

- Update `metadataBase` in `app/layout.tsx` to your real domain before deployment.
- Replace placeholder GitHub and live demo URLs in `lib/site.ts` with real project links.
- If you want contact form submissions to persist, connect the form to Resend, Formspree, or a custom API endpoint.