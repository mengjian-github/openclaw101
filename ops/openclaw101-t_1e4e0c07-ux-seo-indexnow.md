# t_1e4e0c07 — openclaw101 UX/SEO + IndexNow repair

Site: https://openclaw101.dev
Repo: /root/projects/openclaw101
Task: t_1e4e0c07

## Scope

- Reframe homepage Hero around the P0 UX/SEO intent: 10-minute setup / first assistant onboarding.
- Add answer-first CTA path for first-time users.
- Add setup tutorial routes.
- Repair IndexNow key file 404 by adding the key-named file requested by crawlers.
- Build, commit, push, deploy, and production smoke.

## Code changes

- `src/components/Hero.tsx`
  - H1 now targets first assistant setup in 10 minutes.
  - Primary CTA now goes to `/start` or `/zh/start`.
  - Secondary CTA goes directly to Day 2 setup guide.
  - Added answer-first panel: Windows does not require WSL2; native Windows is supported.
- `src/components/Navbar.tsx`
  - Added `Start` / `10 分钟上手` top-nav entry.
- `src/components/StartSetupPage.tsx`
  - New bilingual setup landing component.
- `src/app/start/page.tsx`
  - New canonical English 10-minute setup route.
- `src/app/zh/start/page.tsx`
  - New Chinese 10-minute setup route.
- `src/app/openclaw-setup-tutorial/page.tsx`
  - New noindex alias route for the requested SEO/tutorial slug, canonicalized to `/start`.
- `src/app/page.tsx`, `src/app/zh/page.tsx`
  - Homepage metadata updated toward 10-minute setup intent.
- `scripts/postbuild-seo.mjs`
  - Sitemap now includes `/start` and `/zh/start`.
- `public/486ab0a1e54b04dba01f26151adc51839c681521.txt`
  - Added key-named IndexNow verification file with matching content.

## Verification before commit

- `npm run build`: PASS.
- Static export generated 24 routes, including `/start`, `/zh/start`, and `/openclaw-setup-tutorial`.
- Local output checks:
  - `out/start.html` contains first-assistant setup content.
  - `out/zh/start.html` contains Chinese setup content.
  - `out/openclaw-setup-tutorial.html` exists.
  - `out/index.html` contains `/start` CTA.
  - `out/zh.html` contains `/zh/start` CTA.
  - `out/sitemap.xml` contains `/start` and `/zh/start`.
  - `out/486ab0a1e54b04dba01f26151adc51839c681521.txt` exists and contains the matching key.
  - Generated HTML has no `href="#"` placeholders.

## Browser / production evidence

Pending until deploy in this run.

## Remaining manual required

None expected for this internal code closure. Backend dashboard items from the parent task remain outside this card unless a separate browser-first task handles them.
