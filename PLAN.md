# SAA Bangla Study Site — Implementation Plan

**Status:** Phases 0–4 complete. All 20 Microservices lessons are authored, the glossary has 146 entries, and static build/links/contrast checks pass. Phase 5 publishing remains.

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

## Definition of done

- Phase 4 validation is green.
- `PLAN.md` status is updated with the final review result and release commit/tag.
- The remote deployment is visible and routes return HTTP 200.
- The repository is ready for the next theme without reworking this theme's metadata, lesson shape,
  or progress engine.
