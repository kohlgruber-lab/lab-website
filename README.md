# Kohlgruber Lab Website (Astro + Tailwind + Decap CMS)

A production-ready academic lab website with a clean, modern visual system and CMS-backed content editing.

## Stack
- Astro + TypeScript
- Tailwind CSS
- Netlify static deploy
- Decap CMS (`/admin`) with Netlify Identity + Git Gateway
- Netlify Forms for contact submissions

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:4321`.
4. Open CMS at `http://localhost:4321/admin`.

## Deploy to Netlify (click-by-click)
1. Push this repository to GitHub.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Select your GitHub repo.
4. Build settings are auto-provided by `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.

## Enable Identity + Git Gateway (required for CMS)
1. In Netlify site dashboard, open **Identity**.
2. Click **Enable Identity**.
3. Go to **Identity → Settings and usage**:
   - Set registration mode (recommend **Invite only**).
4. Under **Services**, click **Enable Git Gateway**.
5. Confirm deploy is complete, then visit `/admin`.

## Invite your first CMS user
1. In Netlify, go to **Identity**.
2. Click **Invite users**.
3. Enter email and send invite.
4. User accepts invite via email and sets password.
5. User logs in at `https://<your-site>.netlify.app/admin`.

## CMS collections included
- **Site Settings** (single file)
- **Welcome Page Content** (single file)
- **Research Page Content** (single file)
- **Team Members** (folder)
- **News** (folder)
- **Culture Items** (folder)
- **Join Page** (single file)
- **Contact Page** (single file)

Uploads are stored in `public/uploads` and served from `/uploads`.

## Content editing workflow
1. Open `/admin` and log in.
2. Choose a collection from the sidebar.
3. Edit fields and click **Publish**.
4. Decap commits content changes to the connected Git repo via Git Gateway.
5. Netlify rebuilds and publishes the updated site.

## Netlify auth and `/admin` reliability defaults
This repo includes the common auth fixes by default:
- Identity widget loaded in `public/admin/index.html`
- Decap script loaded in `public/admin/index.html`
- `window.netlifyIdentity.init()` call in admin page
- Client-side token forwarding to `/admin/#...` in the global layout
- Netlify redirect: `/admin/* -> /admin/index.html (200)`


## lab-website-v2 compatibility
This repo includes a compatibility adapter at `src/lib/labWebsiteV2.ts` so templates can read either:
- v2-style data files (`welcome.json`, `research-page.json`, `contact-page.json`), or
- legacy files (`home.json`, `research.json`) when needed.

This keeps page rendering stable while migrating content schemas.

## Forms (Netlify Forms)
- Contact form is configured with `name="contact"`, `data-netlify="true"`, and hidden `form-name`.
- Submissions appear in Netlify dashboard under **Forms**.

## Troubleshooting
### `/admin` login link lands on homepage
- Confirm token-forwarding script is present in layout and unchanged.
- Ensure URL retains hash tokens (`invite_token`, `recovery_token`, `confirmation_token`).

### `/admin` returns 404
- Confirm redirect exists in `netlify.toml`:
  - `/admin/*  /admin/index.html  200`
- Trigger a fresh deploy.

### CMS can't save content
- Ensure **Identity** and **Git Gateway** are enabled.
- Ensure invited user has accepted invite.
- Check browser console/network for blocked scripts.

### Images don't render
- Confirm image lives in `public/uploads`.
- Confirm path begins with `/uploads/...`.

### Build fails
- Validate frontmatter/schema alignment in `src/content.config.ts`.
- Ensure date fields are valid where required.
