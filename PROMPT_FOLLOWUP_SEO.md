# PROMPT 2 — FOLLOW-UP SEO EXPANSION (use after Prompt 1 has been deployed)
# Copy this entire block, fill in the [BRACKETS] placeholders, then send.
# Use this repeatedly — each run should find new gaps and push more pages.

---

This is a follow-up SEO expansion session for my website. The initial revamp has already been done. Now I want you to go deeper: find keyword gaps, build more pages, improve existing pages, and push everything to GitHub.

**Website URL:** [https://YOURSITE.com]
**GitHub repo:** [https://github.com/USERNAME/REPONAME]
**GitHub Personal Access Token (classic):** [ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]
**Cloudflare API Token:** [cfat_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]
**Cloudflare Account ID:** [XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX]

**Target market / language:** [e.g. Norwegian / French / German / English-Canada]

I'm re-attaching the same two files:
- **SEO_STRUCTURE.md** — the SEO framework (follow it for all new and improved pages)
- **KEYWORDS.csv / KEYWORDS.md** — the full keyword list for this site

---

## YOUR MISSION THIS SESSION

Work through all four tasks below without stopping. Push everything to GitHub at the end of the session in a single commit.

---

### TASK 1 — AUDIT THE CURRENT SITE FOR KEYWORD GAPS

Clone the repo and read every existing `.html` file.

For each keyword in the keyword file, check:
- Is there already a page targeting this keyword as its primary keyword?
- Is the keyword mentioned naturally (as a supporting keyword) on an existing page?
- Is there a page that targets a related keyword but doesn't mention this one at all?

Output a gap table:

| Keyword | Volume | Intent | Status | Action |
|---|---|---|---|---|
| [keyword] | [vol] | [intent] | ❌ No page targeting it | Build new page |
| [keyword] | [vol] | [intent] | ⚠️ Mentioned but not targeted | Add to existing page |
| [keyword] | [vol] | [intent] | ✅ Already well-targeted | No action needed |

Focus effort on the ❌ and ⚠️ rows.

---

### TASK 2 — BUILD ALL MISSING PAGES

For every ❌ keyword gap that warrants its own page (distinct intent, significant volume, not covered elsewhere), build a complete HTML landing page.

Apply the full requirements from the SEO_STRUCTURE.md framework:
- Correct title, meta description, canonical, hreflang, OG tags, Twitter cards
- FAQPage + BreadcrumbList JSON-LD schema (minimum — add Product/Article/HowTo as appropriate)
- H1 with primary keyword, H2/H3 for supporting keywords
- Primary keyword in first 80 words
- 3–5 contextual internal links with keyword anchor text
- CTA above the fold + repeated at bottom
- Mobile-responsive using the existing site's CSS variables and design tokens
- "Related guides" section linking to 3–4 other pages
- Written in the target market's language

**There is no page limit — build every page the keyword data justifies.**

---

### TASK 3 — IMPROVE EXISTING PAGES

For every ⚠️ keyword gap (keyword should be on an existing page but isn't well-represented), improve the existing page:

#### 3a — Add missing keywords
- Weave the missing keyword naturally into the body copy (at least once in a heading, at least twice in body text)
- Add it to an existing FAQ Q&A or add a new FAQ item for it

#### 3b — Improve weak meta tags
For any existing page where:
- Title is missing the primary keyword → fix it
- Meta description is over 160 chars → trim it
- Meta description doesn't contain a soft CTA → add one
- Canonical is missing or wrong → fix it

#### 3c — Strengthen internal linking
For any existing page with fewer than 3 contextual internal links:
- Add links to related pages using keyword anchor text
- Ensure every page links back to the homepage or its pillar page

#### 3d — Schema gaps
For any existing page missing:
- FAQPage schema → add it (minimum 4 Q&A pairs targeting real search questions)
- BreadcrumbList schema → add it
- Product schema (pricing/subscription pages) → add it
- Article schema (blog posts) → add it

#### 3e — Content depth
For any existing page with thin content (under 400 words visible body text):
- Add a section expanding on the topic — use supporting keywords from the keyword file
- Add a comparison table, step-by-step section, or device compatibility grid where relevant
- Target 600–900 words for commercial landing pages, 800–1200 for informational pages

---

### TASK 4 — UPDATE INFRASTRUCTURE

After building/improving all pages:

**sitemap.xml:**
- Add every new page with today's date as `<lastmod>`
- Verify all existing URLs are still correct
- Correct any priorities: homepage = 1.0, money pages = 0.95–0.98, informational = 0.80–0.90

**_redirects:**
- Add a clean-URL 200 rewrite for every new `.html` file
- Add 301 keyword-alias redirects for major keyword variants that should resolve to their target page (e.g. `/keyword-variant → /target-page.html 301`)

**robots.txt:**
- Verify it is not accidentally blocking any of the new or existing ranking pages
- Ensure the sitemap URL is declared: `Sitemap: https://YOURSITE.com/sitemap.xml`

---

### COMMIT AND PUSH

When all tasks are complete:

```
git add -A
git commit -m "SEO follow-up: [N] new pages + [N] improved pages + keyword gap fixes

New pages:
- [list key new pages]

Improved pages:
- [list key existing pages improved]

Infrastructure:
- sitemap.xml updated ([total URL count] URLs)
- _redirects updated ([N] new rules)"

git push origin main
```

---

## HARD RULES (same as initial revamp — enforce every time)

1. **One primary keyword per page** — never create a new page for a keyword already targeted by an existing page
2. **No orphan pages** — every new page must receive at least one internal link from another page
3. **Exact design match** — use the existing site's nav, footer, CSS variables, font stack
4. **Content in the target market's language** — no switching to English on a non-English site
5. **FAQPage schema on every page** — no exceptions
6. **Answer-first structure** — direct answer in the first paragraph
7. **All CTAs convert** — every page has a primary CTA pointing to the trial/order/pricing page
8. **No keyword cannibalization** — if a keyword is already targeted, add it as a supporting keyword to that existing page rather than building a duplicate

---

## WHAT A SUCCESSFUL SESSION LOOKS LIKE

After this session, the site should have:
- Fewer uncovered keywords than before (aim to cover 80%+ of the keyword list across the site)
- No existing page left without FAQPage schema
- No existing page left with fewer than 3 internal links
- All new pages deployed, sitemapped, and reachable within 3 clicks from the homepage
- A Git commit message that clearly describes everything that was done

Run this prompt again in future sessions to keep improving — each run should get the site closer to #1 on every keyword.

