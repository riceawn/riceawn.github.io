# Rice Awn LLC website

Static, dependency-free website for https://riceawn.com. All public contact links use contact@riceawn.com.

## Edit and preview

- `content/apps.json`: app names and stable URL slugs.
- `content/privacy/` and `content/support/`: editable website documents.
- `content/source/` and `content/sources.json`: untouched Gist snapshots and original revision URLs, downloaded October 31, 2026. These are internal source records, not displayed on the website.
- `scripts/build.mjs`: page templates and site copy.
- `assets/site.css`: shared responsive design.
- `docs/`: complete deployable website. No runtime server or JavaScript is required.

Run `npm run build`, `npm run check`, then `npm run dev`. Open http://127.0.0.1:4173.

Do not run `scripts/prepare-content.mjs` after editing the website documents unless deliberately redoing the migration: it regenerates them from the original snapshots.

## GitHub Pages

Repository: `tianyulu1013/tianyulu1013.github.io`. Keep its root `app-ads.txt` intact. The same record is included in `docs/app-ads.txt`.

Use Settings → Pages → Deploy from a branch → `main` → `/docs`. Set custom domain to `riceawn.com`, then enable HTTPS when GitHub finishes issuing the certificate.

DNS for the apex (`@`) uses GitHub Pages A records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Set `www` CNAME to `tianyulu1013.github.io`. Preserve all MX and email-related TXT records for contact@riceawn.com. Do not change nameservers or delete the email-forwarding setup. Remove or replace only conflicting website A/AAAA/CNAME records after checking current values. Domain verification in GitHub is recommended before switching DNS.

Official references:
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Migration

Existing Gists remain unchanged and available. `MIGRATION.csv` lists old document URLs and new permanent website URLs. Update app builds, App Store Connect, Google Play and relevant consent configurations gradually after the domain and HTTPS are verified. Do not retire old URLs while existing app versions still use them.

The website policies retain the app-specific behavior described by the original public policies; this migration does not independently verify every released app's SDK configuration. Known Android/iOS differences, including Jelly Mingle's different feature sets, should be checked when migrating each app's URL. Store titles may differ from policy titles.

## Ownership and changes

The user identified all imported Gist documents as their own material and authorized reuse for Rice Awn LLC. No separate open-source license is granted. Original website templates, CSS and inline SVG were written for this project. No downloaded images, fonts, third-party scripts or runtime packages are included.

Document migration changes: company name and public contact unified; internal privacy links moved to this website; policy revision date updated; GitHub Gist hosting references adjusted to GitHub Pages; Bubble Level support's overly broad “No” answer narrowed to local sensor processing. Original backups remain unchanged. Five apps without a separate help document receive a basic contact/support page.
