# Kohlgruber Lab Website (Astro + Tailwind + Decap CMS)

Production-ready academic lab website for translational immunology.

## Tech stack
- Astro + TypeScript
- Tailwind CSS
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
4. CMS admin is at `http://localhost:4321/admin`.

## Deploy to Netlify (click-by-click)
1. Push this branch/repo to GitHub.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Select GitHub and choose `kohlgruber-lab/lab-website`.
4. Netlify build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.

## Enable Decap CMS (Identity + Git Gateway)
1. In Netlify site dashboard, open **Identity**.
2. Click **Enable Identity**.
3. Under **Registration preferences**, choose invite-only or open (recommended invite-only).
4. Under **Services**, click **Enable Git Gateway**.
5. (Optional) Set external providers if needed.

## Invite admin + log into `/admin`
1. In Netlify → **Identity** → **Invite users**.
2. Enter admin email and send invite.
3. Accept invite from email and set password.
4. Visit `https://<your-site>.netlify.app/admin`.
5. Log in; Decap now edits repository files directly through Git Gateway.

## How to edit content collections
In `/admin`, use the left panel collections:
- **Site Settings**: lab name, PI, mission, contact info, social links, funding logos.
- **Home Page Content**: hero text, research previews, featured team/mentoring slugs.
- **Research Page Content**: three research theme paragraphs.
- **Team Members**: profile cards and optional links.
- **Mentoring Page Settings**: mentoring philosophy markdown + trainee resources.
- **Mentoring Items**: mentoring programs and featured toggles.
- **Lab News**: post metadata + markdown body.
- **Lab Fun**: gallery tiles.
- **Join Page**: recruiting copy, bullets, suggested subject, open positions.

## Forms (Netlify Forms)
- Contact forms exist on homepage and contact page.
- Netlify detects form name `contact` during deploy.
- Submissions appear in Netlify dashboard under **Forms**.

## Troubleshooting
### `/admin` shows blank or cannot save
- Confirm **Identity** and **Git Gateway** are enabled.
- Verify logged-in user has access.
- Check browser console for blocked third-party scripts.

### Images not displaying
- Ensure uploads are in `public/uploads`.
- Ensure saved image paths begin with `/uploads/...`.

### Form submissions not appearing
- Trigger a fresh deploy after form markup changes.
- Ensure `name="contact"`, `data-netlify="true"`, and hidden `form-name` are present.

### Build fails on content
- Validate frontmatter fields in `src/content/*` against `src/content.config.ts` schemas.
- Ensure dates are valid `YYYY-MM-DD` when required.
