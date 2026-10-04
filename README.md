# Sadhna Foundation — Next.js + Cloudflare-ready NGO website

Original NGO website implementation for **Sadhna Foundation (साधना फाउंडेशन)**. The information architecture takes inspiration from established nonprofit UX patterns such as strong mission-first navigation, programme pillars, impact storytelling, transparency, campaigns and get-involved journeys. It does **not** copy Akshaya Patra source code, proprietary content or visual assets.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Local image assets
- Static export for Cloudflare Pages

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
```
The static website is generated into `out/`.

## Cloudflare Pages — easiest option
Cloudflare's current documentation supports a Next.js static export on Pages. In Cloudflare: **Workers & Pages → Create application → Pages → Import an existing Git repository**.

Build settings:
- Production branch: `main`
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Build directory: `out`

Reference: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## GitHub
Create a repository, then:
```bash
git init
git add .
git commit -m "Initial Sadhna Foundation website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sadhna-foundation.git
git push -u origin main
```

## Important before launch
1. Replace placeholder/illustrative impact figures with verified Sadhna Foundation figures.
2. Add the real logo if available; the current mark is an original placeholder icon.
3. Connect the real Razorpay/UPI donation destination.
4. Add verified 80G/12A/FCRA/CSR documents only if applicable and confirmed.
5. Connect volunteer/contact forms to a real form endpoint, CRM, email service or Cloudflare Worker.
6. Replace social `#` links with official accounts.
7. Confirm the legal registration details and addresses before publishing.
8. Add cookie/privacy/terms pages appropriate to your data collection.

## Pages
- `/`
- `/about`
- `/initiatives/education`
- `/initiatives/women`
- `/initiatives/healthcare`
- `/initiatives/environment`
- `/initiatives/sports`
- `/impact`
- `/transparency`
- `/donate`
- `/volunteer`
- `/contact`

## Cloudflare Workers
For a full server-side Next.js application, Cloudflare currently recommends its Workers/vinext path. This project intentionally uses a static export because it is lightweight, easy to host, and appropriate for this brochure/donation/volunteer front end. If you later need server-side payment webhooks, authenticated dashboards, dynamic forms or CMS functionality, add a Cloudflare Worker/API or migrate the application to the Workers deployment path.
