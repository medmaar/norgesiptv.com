# PROMPT 1 — INITIAL WEBSITE SEO REVAMP
# Copy this entire block, fill in the placeholders marked with [BRACKETS], then send.

---

I want you to fully revamp my website with aggressive SEO to rank number one on Google for all the keywords I've gathered. I'm attaching two files:
- **SEO_STRUCTURE.md** — the full SEO framework and checklist to follow for every page you build
- **KEYWORDS.csv / KEYWORDS.md** — the keyword research I've done for this specific website (keyword, monthly volume, intent)

Here are the project details:

**Website URL:** [https://YOURSITE.com]
**GitHub repo:** [https://github.com/USERNAME/REPONAME]
**GitHub Personal Access Token (classic):** [ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]
**Cloudflare API Token:** [cfat_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]
**Cloudflare Account ID:** [XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]

**Target market / language:** [e.g. Norwegian / French / German / English-Canada]
**Site stack:** Cloudflare Pages with GitHub Actions deployments (static HTML site)

---

## YOUR MISSION

Work through the following steps **without stopping to ask for confirmation** — complete everything in one run and push to GitHub at the end.

### STEP 1 — Clone and audit the repo
- Clone the GitHub repo using the provided token
- Read the existing `index.html`, `_redirects`, `sitemap.xml`, and any existing pages to understand the current design system (CSS variables, fonts, color palette, nav/footer HTML, component patterns)
- Do NOT change the visual design — match it exactly in every new page you build

### STEP 2 — Process the keyword file (follow SEO_STRUCTURE.md Step 0)
- Read every keyword, classify by intent (Transactional / Commercial / Informational / Navigational)
- Group into topic clusters (1 pillar page + 3–8 cluster pages per cluster)
- Assign every keyword to exactly one page — eliminate cannibalization
- Prioritize: Tier 1 (Transactional + Commercial, highest volume) → Tier 2 (Informational, high volume) → Tier 3 (depth/authority pages)
- Map every keyword cluster to a URL slug

### STEP 3 — Build ALL the pages
For every cluster and every keyword group, build a complete HTML page. **Be aggressive — build as many pages as the keyword list warrants.** Minimum 15 new pages; there is no upper limit.

Every page MUST have:
- Correct `<title>` (50–60 chars, primary keyword near start, unique)
- Correct `<meta name="description">` (150–160 chars, keyword + soft CTA)
- `<link rel="canonical">` with the clean URL (no .html)
- hreflang tags matching the target market
- Full Open Graph block (og:title, og:description, og:url, og:type, og:image, og:locale, og:site_name)
- Twitter card tags
- BreadcrumbList JSON-LD schema
- FAQPage JSON-LD schema with 4–6 Q&A pairs (answer real search intent questions)
- Appropriate additional schema: Product, Organization, Article, or HowTo depending on page type
- H1 containing the primary keyword (one H1 only)
- H2/H3 hierarchy covering all supporting keywords naturally
- Primary keyword in the first 80 words of body copy
- 3–5 contextual internal links per page using descriptive anchor text (keyword as anchor)
- At least one link back to the homepage or pillar page
- A clear CTA section above the fold and repeated at the bottom
- Step-by-step setup section where relevant (transactional/device pages)
- Compatibility grid or comparison table where relevant
- A "Related guides" section at the bottom linking to 3–4 other pages on the site
- Mobile-responsive layout using the site's existing CSS variables and design tokens

### STEP 4 — Create a shared CSS file if needed
If the site does not already have a shared landing-page stylesheet, create one at `/assets/css/lp.css` (or equivalent). It must use the exact same CSS variables (colors, fonts, breakpoints) as the existing site.

### STEP 5 — Update infrastructure files
- `sitemap.xml` — include every page (old + new), correct `<lastmod>` (today's date), correct `<priority>` values (homepage 1.0, money pages 0.95–0.98, informational 0.80–0.90)
- `_redirects` — add a clean-URL rewrite for every new `.html` file (e.g. `/tivimate → /tivimate.html 200`), plus keyword-alias 301 redirects for major keyword variants that should point to their target page

### STEP 6 — Git commit and push
```
git add -A
git commit -m "SEO expansion: [N] new landing pages targeting [total keyword count] keywords

[Brief list of pages added and keyword clusters targeted]"
git push origin main
```

---

## HARD RULES — APPLY TO EVERY PAGE

1. **One primary keyword per page** — never target the same primary keyword on two different pages
2. **No orphan pages** — every new page must be linked from at least one other page (footer, related guides section, or pillar page)
3. **Every page reachable within 3 clicks** from the homepage
4. **Exact design match** — use the same nav, footer, CSS variables, font stack, and color tokens as the existing site. No new fonts, no new color palettes.
5. **Content language matches market** — write all body copy in the target market's language
6. **Answer-first** — put the direct answer to the user's search intent in the first paragraph, before any context
7. **FAQPage schema required** on every page — minimum 4 questions, maximum 8
8. **BreadcrumbList schema required** on every inner page
9. **Internal links use keyword anchor text** — never "click here" or "read more"
10. **All CTAs point to the trial/pricing/order page** — funnel every page toward conversion

---

## QUALITY BAR

Before pushing, verify:
- [ ] Every new page has a unique `<title>` and `<meta description>`
- [ ] No two pages target the same primary keyword
- [ ] `sitemap.xml` includes all new URLs
- [ ] `_redirects` has a clean-URL entry for every new `.html` file
- [ ] Every page has at least 3 internal links (in + out)
- [ ] FAQPage schema present on every page
- [ ] Pages load without JavaScript errors (static HTML, no broken references)

Push to GitHub when everything passes. The Cloudflare Pages CI will deploy automatically.

