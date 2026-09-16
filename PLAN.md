# SAA Bangla Study Site — Implementation Plan

**Status:** Phases 0–5 complete and published (v0.1.0 tag, GitHub Pages live, all routes HTTP 200). Standard-Bangla proofread pass finished across shell pages, components and all 20 lessons; build/links/contrast checks green. Phase 6 (exam-guide theme) and Phase 7 (blue/green deployments theme) are planned, not started.

## Objective

Build a learning-friendly, theme-based Bangla preview site for the growing AWS Solutions Architect
Associate resource library. Start with one active folder/theme page, **Microservices on AWS**,
translated as study notes from the supplied AWS whitepaper PDF. The site must expose:

- all active lessons and visible per-page reading progress;
- per-theme percent progress plus lesson completion tracking in `localStorage`;
- a searchable keyword glossary;
- exam traps and revision tables;
- Mermaid diagrams for architecture patterns;
- source/page attribution and content-license/removal safeguards;
- clean CCAR-F-style Astro/Starlight presentation without copying CCAR-F content.

## Source coverage rule

The active theme covers the supplied PDF page-by-page. The whitepaper print pages are the page
numbers shown at the PDF footers; scanner/physical PDF pages add two. Lessons may not skip source
content. Front and back matter are covered by a study-recap lesson. Every page from print `1`
through `41` must be represented by exactly one active lesson.

## Guiding constraints

- Use standard Bengali; keep AWS service names, protocols, and identifiers in Latin script.
- Translate concepts into concise, keyword-first study notes—not a word-for-word reproduction.
- Keep links resilient under `/aws-solution-architect-associate-resources`; use `siteUrl()` outside
  Starlight frontmatter and explicit base paths inside it.
- Keep progress state compatible with `saa:aws:v1` and ids `microservices-1...microservices-20`.
- Never commit extracted copyrighted source text or the downloaded PDF.
- Build the content model so the next resource can be added as another theme without reworking this one.

## Content architecture

Use a `theme folder → lesson slug` model:

```text
src/content/docs/learn/microservices/
  index.mdx
  1-introduction.mdx
  ...
  20-glossary-recap.mdx
```

The homepage and `/learn` page render active theme cards and later "coming soon" cards. The theme
folder contains an overview plus the ordered lesson list. Lesson frontmatter stores title, English
title, theme, task, order, validated page range, source URL, source label, 8–12 lesson keywords, and
the source attribution array.

## Lesson shape

Each lesson provides:

1. reader-facing learning objective;
2. concept explanation or keyword-centered section summary;
3. one Mermaid diagram where useful;
4. `KeywordTable` for rapid revision;
5. `ExamTrap` for common misconceptions;
6. source page range;
7. `Attribution`;
8. `MarkComplete`.

## Execution phases

### Phase 0 — Controls and planning

**Goal:** make the build repeatable and remove stale assumptions.

1. Add and maintain this plan file.
2. Keep extracted whitepaper text only under the ignored `tools/.source/` path.
3. Reconcile the 20-lesson metadata with the confirmed source page ranges.
4. Update project-facing metadata, contributor docs, and stale link tooling assumptions.
5. Fix shared frontmatter/type defects before adding lesson content.

**Acceptance:** metadata names, paths, descriptions, and source references are project-specific.

### Phase 1 — Corrected 20-lesson content map

**Goal:** establish page-complete learning order before writing MDX.

The source segments are:

| Lesson | Slug | Source pages | Coverage |
| ---: | --- | ---: | --- |
| 1 | `1-introduction` | 1–3 | Introduction, Well-Architected, modernizing |
| 2 | `2-architecture-user-interface` | 4 | Architecture overview and user interface |
| 3 | `3-microservices-implementations` | 5 | Lambda, ECS, EKS, Fargate, App Runner, ECR |
| 4 | `4-cicd-networking-datastore` | 6 | CI/CD, private networking, data stores |
| 5 | `5-simplifying-operations` | 7 | Cache, relational/NoSQL choices, DynamoDB |
| 6 | `6-lambda-deployment` | 8 | SAM, CDK, Layers, SnapStart |
| 7 | `7-multi-tenancy-api-management` | 9–10 | Multi-tenancy and API Gateway/load balancers |
| 8 | `8-serverless-architecture` | 11–12 | Lambda/Fargate serverless patterns |
| 9 | `9-dr-ha` | 13–14 | Disaster recovery and high availability |
| 10 | `10-distributed-systems-components` | 15–17 | Service discovery and VPC Lattice |
| 11 | `11-distributed-data-management` | 18 | Saga, event sourcing, CQRS |
| 12 | `12-configuration-secrets` | 19 | AppConfig, Parameter Store, Secrets Manager |
| 13 | `13-cost-sustainability` | 20 | Spot, Graviton, Carbon Footprint Tool |
| 14 | `14-communication-mechanisms` | 21–22 | REST, GraphQL, gRPC, async messaging |
| 15 | `15-orchestration-state` | 23–25 | Step Functions, MWAA, state patterns |
| 16 | `16-observability` | 26–32 | CloudWatch, logs, tracing, analytics |
| 17 | `17-managing-communication` | 33 | Chattiness, protocols, caching |
| 18 | `18-auditing` | 34–35 | CloudTrail, Config, EventBridge |
| 19 | `19-conclusion` | 36 | Conclusion and decision framing |
| 20 | `20-glossary-recap` | 37–41 | Contributors, history, notices, AWS glossary |

Tasks:

1. Replace `src/lib/lessons.ts` with the mapping above.
2. Keep completion ids exactly `microservices-1...microservices-20`.
3. Make the sidebar derive from theme metadata and only list files that exist.

### Phase 2 — Author all 20 Bangla study lessons

**Goal:** provide every source page in the active lesson set.

Write MDX files in four verified batches:

- A — lessons 1–5;
- B — lessons 6–10;
- C — lessons 11–15;
- D — lessons 16–20.

Requirements:

1. Each lesson has required frontmatter and at least eight catalogued keywords.
2. Every source range in the mapping is stated in the lesson body and `Attribution`.
3. Core architecture and decision flows get Mermaid diagrams.
4. End every page with source attribution and its exactly matching `MarkComplete` id.
5. Keep technical vocabulary in English.

### Phase 3 — Glossary and learning meta

**Goal:** make keyword lookup fast and consistent.

1. Add `src/content/glossary-terms.json`.
2. Aggregate all lesson keywords under the `microservices` theme.
3. Update overview and learning pages.
4. Verify spelling and Bengali orthography.

### Phase 4 — Validation and static preview

**Goal:** catch output problems before publishing.

Run in order:

1. `pnpm install --frozen-lockfile`;
2. `pnpm check`;
3. `pnpm build`;
4. `pnpm check:links`;
5. `pnpm check:contrast`.

Fix defects until all pass. Inspect the generated `dist/` for:

- exactly 20 active lesson pages plus theme/dashboard/home/glossary/about/404 pages;
- base-safe links;
- no unreadable accent text;
- no extracted source files or PDF in the deploy artifact.

### Phase 5 — Publish and verify

**Goal:** make the preview live under GitHub Pages.

1. Stage and commit the completed implementation.
2. Push to `origin/main`.
3. Tag and push `v0.1.0` as the preview release marker.
4. Watch GitHub Actions.
5. Verify the home, learning, theme, lesson, progress, glossary, about, and 404 routes.

Acceptance:

- 20 active lessons cover print pages 1–41;
- reading bars and lesson completion survive reload;
- glossary filter/search works;
- Pages URL returns the correct base-prefixed routes;
- GitHub Actions is green.

## Phase 5 review checklist

On publish, confirm:

1. `git push origin main` succeeds.
2. Tag `v0.1.0` is pushed and GitHub Actions completes green.
3. Home, learning, theme, lesson, progress, glossary, about and 404 routes return `HTTP 200`.
4. A fresh browser session shows a lesson-specific completion state after reload.
5. Glossary search/filter returns visible rows for `microservices` and hides unmatched rows.

## Phase 6 — SAA-C03 Exam Guide (deferred)

> Deferred: the Blue/Green Deployments theme (Phase 7) takes priority as the next active work.

**Goal:** add a theme covering the official exam structure so readers have the exam frame
before the content themes.

**Scope (from the official SAA-C03 exam guide, print ~10 pages):**

| Lesson | Slug | Coverage |
| ---: | --- | --- |
| 1 | `1-exam-overview` | Format, 65 questions, 130 minutes, 700/1000 pass, Pearson VUE |
| 2 | `2-domain-weighting` | Domain 1–4 percentages and what each domain means |
| 3 | `3-domain1-secure-architecture` | 30% — secure designs, IAM, encryption basics |
| 4 | `4-domain2-resilient-architecture` | 26% — multi-AZ, scaling, DR targets |
| 5 | `5-domain3-high-performing-architecture` | 24% — caching, compute/storage choices |
| 6 | `6-domain4-cost-optimized-architecture` | 20% — cost levers, storage tiers, serverless |
| 7 | `7-question-patterns` | Question anatomy, distractors, scenario verb mapping |
| 8 | `8-study-plan` | 6-week plan combining this site's microservices theme |

**Tasks:**

1. Add the theme to `src/lib/themes.ts` (`THEMES`) and to `PLANNED_THEMES` removal order.
2. Extend `LESSONS` in `src/lib/lessons.ts` with `examguide-1...examguide-8` ids.
3. Create `src/content/docs/learn/exam-guide/index.mdx` plus 8 lesson MDX files.
4. Add new glossary entries to `glossary-terms.json` before use; keep service names Latin script.
5. Reuse the existing lesson shape: keywords table, exam traps, Mermaid only where it clarifies,
   `Attribution` + `MarkComplete` (`examguide-<n>`) on every page.
6. Sidebar, theme cards, progress bars and glossary filters must pick the theme up automatically.
7. Run `pnpm check`, `pnpm build`, `pnpm check:links`, `pnpm check:contrast`; commit and tag `v0.2.0`.

**Acceptance:** both themes appear on home/learn pages with independent progress bars; sidebar
lists both; per-lesson completion ids do not collide; all checks green.

## Phase 7 — Next theme: Blue/Green Deployments on AWS (planned)

**Goal:** add the third theme from the AWS whitepaper *Blue/Green Deployments on AWS*
(34 PDF pages; print pages 1–30; letter size, so PDF page = print page + cover offset only).
Same theme-folder → lesson model, same lesson shape, same progress engine; ids
`bluegreen-1...bluegreen-9`, folder `src/content/docs/learn/blue-green/`.

**Source map (print pages, one active lesson per page, front/back matter in the recap):**

| Lesson | Slug | Source pages | Coverage |
| ---: | --- | ---: | --- |
| 1 | `1-introduction` | 1–3 | Abstract; traditional deploy pain; methodology; benefits; canary; blast radius |
| 2 | `2-environment-boundary` | 4 | Define the environment boundary; candidate boundaries |
| 3 | `3-services-overview` | 5–7 | Route 53, ELB, Auto Scaling, Beanstalk, OpsWorks, CloudFormation, CloudWatch, CodeDeploy |
| 4 | `4-dns-routing` | 8–9 | Technique 1: Update DNS routing with Route 53; weighted routing; TTL pitfalls |
| 5 | `5-asg-swap-elb` | 10–12 | Technique 2: Swap ASG behind ELB; warm up; connection draining |
| 6 | `6-asg-launch-config` | 13–15 | Technique 3: Update ASG launch configuration; rolling vs replace |
| 7 | `7-beanstalk-opsworks` | 16–21 | Technique 4: Beanstalk environment swap (16–18); Technique 5: OpsWorks clone stack + DNS (19–21) |
| 8 | `8-data-sync-schema` | 22–25 | Data sync & schema change best practices; decoupling schema from code; when blue/green NOT recommended |
| 9 | `9-conclusion-appendix` | 26–30 | Conclusion; contributors; document revisions; appendix risk-comparison table (28–30) |

Notes on the mapping:

- Print page numbering confirmed from the PDF footers (1 = Abstract … 30 = end of appendix);
  the source page stated in each lesson body and `Attribution` uses this numbering.
- Techniques 4 and 5 share lesson 7 because each is short; the appendix comparison table
  (print 28–30) is a reference table — use `ReferenceTable.astro` in lesson 9.
- The "when blue/green deployments are not recommended" scenarios (print 23–25) belong to
  lesson 8 and are prime `ExamTrap` material.

**Tasks:**

1. Add the `bluegreen` theme to `THEMES` in `src/lib/themes.ts` (accent: pick a distinct shade,
   run `pnpm check:contrast` against it) and extend `LESSONS` in `src/lib/lessons.ts`.
2. Create `src/content/docs/learn/blue-green/index.mdx` plus the 9 lesson MDX files in batches:
   A (1–3), B (4–6), C (7–9).
3. Lesson frontmatter mirrors the microservices schema: `title`, `titleEn`, `theme: blue-green`,
   `order`, `pages`, `sourceUrl`, `updated`, 8–12 `keywords`, `sources`.
4. Every lesson ends with `<Attribution ... />` and `<MarkComplete lessonId="bluegreen-<n>" />`.
5. Add new terms to `glossary-terms.json` **before** first use (theme: `blue-green`);
   keep service names and identifiers in Latin script; standard Bangla only.
6. Mermaid diagrams: traffic-shift flow (lesson 1), environment boundary (lesson 2),
   at least one per technique (lessons 4–7), data-sync flow (lesson 8).
7. Sidebar, theme cards, progress bars and glossary filters pick the theme up automatically;
   verify home/learn/dashboard render both themes with independent progress bars.
8. Run `pnpm check`, `pnpm build`, `pnpm check:links`, `pnpm check:contrast`; fix, commit,
   then tag and push `v0.3.0` as the release marker.

**Acceptance:**

- 9 active lessons cover print pages 1–30, each stating its page range in body + `Attribution`.
- Theme cards, sidebar and dashboard show all themes with separate progress; completion ids
  `bluegreen-1...bluegreen-9` persist across reload.
- Glossary filter shows a `blue-green` theme button and search hits new terms.
- No extracted source text or the PDF itself is committed (`tools/.source/` stays gitignored).
- All checks green; Pages URL serves the new routes under the base path.

## Definition of done

- Phase 4 validation is green.
- `PLAN.md` status is updated with the final review result and release commit/tag.
- The remote deployment is visible and routes return HTTP 200.
- The repository is ready for the next theme without reworking this theme's metadata, lesson shape,
  or progress engine.
