## Local development

```bash
npm install
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser. The app uses the Next.js App Router, Tailwind CSS v4, and Framer Motion.

## Production build

```bash
npm run build
npm run start
```

## Cloudflare Pages deployment

1. Commit and push your changes to GitHub/GitLab/Bitbucket.
2. In Cloudflare Pages choose **Framework preset: Next.js**.
3. Use these build settings:

| Field                 | Value                     |
| --------------------- | ------------------------- |
| Build command         | `npm run cf-build`        |
| Build output directory| `.vercel/output/static`   |

4. (Optional, recommended) Add environment variable `NODE_VERSION` matching your local Node (e.g. `20.17.0`).
5. Click **Save and Deploy**. The Next on Pages builder creates `.vercel/output/static`, and static assets under `public/` (e.g. `/images/*`) deploy automatically.

After deployment visit the provided `*.pages.dev` URL to verify the site, then add a custom domain from the Pages dashboard if desired.
