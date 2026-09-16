# AWS SAA-C03 — বাংলা স্টাডি গাইড

[![Deploy site to GitHub Pages](https://github.com/hasnat-shohag/aws-solution-architect-associate-resources/actions/workflows/deploy.yml/badge.svg)](https://github.com/hasnat-shohag/aws-solution-architect-associate-resources/actions/workflows/deploy.yml)
[![Code license: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](./LICENSE)
[![Content license: CC BY-NC-SA 4.0](https://img.shields.io/badge/content-CC%20BY--NC--SA%204.0-lightgrey.svg)](./LICENSE-CONTENT)

AWS Solutions Architect Associate প্রস্তুতির Astro/Starlight বাংলা সাইট। বর্তমানে **Microservices on AWS** থিম সক্রিয় এবং ওই থিমের ২০-লেসন কাঠামো সংজ্ঞায়িত; AWS Whitepaper — _Implementing Microservices on AWS_ থেকে বাংলা স্টাডি-নোট, কীওয়ার্ড টেবিল, Mermaid ডায়াগ্রাম ও ব্রাউজারে সংরক্ষিত অগ্রগতি ট্র্যাকার ধাপে ধাপে যোগ করা হচ্ছে।

**লাইভ সাইট:** <https://hasnat-shohag.github.io/aws-solution-architect-associate-resources/>

## ফিচার

- **থিম-ভিত্তিক সাইডবার** — শুধু অনুদিত পাতাই সাইডবারে দেখায়; নতুন লেসন যোগ হলে তা সাইডবারে স্বয়ংক্রিয়ভাবে সম্প্রসারিত হয়।
- **অগ্রগতি ট্র্যাকিং** — পাতা শেষ করার অবস্থা `localStorage`-এ (`saa:aws:v1`) থাকে; কোনো অ্যাকাউন্ট বা বেকএন্ড নেই।
- **গ্লোসারির একক সুত্র** — পরিভাষা ব্যবহারের আগে `src/content/glossary-terms.json`-এ যোগ করতে হয়।
- **Mermaid ডায়াগ্রাম** — ক্লায়েন্টে রেন্ডার হয়, তাই বিল্ড-টাইম ব্রাউজার দরকার হয় না।
- **অভিগম্যতা ও ভেতরের লিংক** — WCAG AA কনট্রাস্ট ও ভাঙা লিংক ধরার জন্য পরীক্ষার স্ক্রিপ্ট অন্তর্ভুক্ত।

## প্রয়োজনীয়তা

- Node.js 22 বা তার পরের ভার্সন
- pnpm 11 বা তার পরের ভার্সন

## দ্রুত শুরু

```bash
pnpm install
pnpm astro dev --background
```

ডেভ সার্ভার এই URL-এ চলে:

<http://localhost:4321/aws-solution-architect-associate-resources/>

সার্ভার বন্ধ করতে:

```bash
pnpm astro dev stop
```

## প্রজেক্ট স্ট্রাকচার

```text
src/
  content.config.ts            # Astro কনটেন্ট স্কিমা ও লেসন ভ্যালিডেশন
  content/docs/                # Astro/Starlight পাতা
    learn/microservices/       # সক্রিয় মাইক্রোসার্ভিস থিম ও লেসন
  content/glossary-terms.json  # পরিভাষার একক সুত্র
  content/i18n/                # Starlight UI-র বাংলা স্ট্রিং
  components/                  # content, progress ও starlight কম্পোনেন্ট
  lib/                         # themes, lessons, progress ও URLs হেল্পার
  styles/                      # থিম টোকেন, গ্রিড ও প্রিন্ট স্টাইল
tools/
  check-links.mjs              # বিল্ড-পরবর্তী ভেতরের লিংক যাচাই
  check-contrast.mjs           # কনট্রাস্ট যাচাই (হেডলেস Chrome)
  fetch-source.mjs             # ডেভ-অনলি ইংরেজি পাঠের রেফারেন্স
.github/workflows/deploy.yml   # GitHub Actions ডিপ্লয়
```

## ডেভ সার্ভার কন্ট্রোল

```bash
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## স্ক্রিপ্ট

| কমান্ড | কাজ |
| --- | --- |
| `pnpm build` | প্রোডাকশন বিল্ড করা, আউটপুট `dist/` |
| `pnpm preview` | বিল্ড করা সাইট লোকালি দেখা |
| `pnpm check` | `astro check` — টাইপ ও কনটেন্ট স্কিমা যাচাই |
| `pnpm check:links` | বিল্ড-পরবর্তী ভেতরের লিংক যাচাই |
| `pnpm check:contrast` | বিল্ড-পরবর্তী হেডলেস Chrome দিয়ে কনট্রাস্ট যাচাই |
| `pnpm fetch-source` | ইংরেজি পাঠের ডেভ-অনলি রেফারেন্স ডাউনলোড করা |

### স্ক্রিপ্ট সম্পর্কে নোট

`check:links` অনুদিত না হওয়া লেসনকে "pending" ধরে (এটা ফেল নয়); প্রকৃত ভাঙা লিংক পেলে কমান্ড ফেল করে। `--verbose` দিলে pending list-ও দেখা যায়।

`check:contrast` বিল্ড করা `dist/`-এ হেডলেস Chrome চালায়, তাই আগে `pnpm build` চালাতে হয়। Chrome না পাওয়া গেলে `--allow-missing-browser` চেকটি skip করে, আর `CHROME_PATH` দিয়ে ব্রাউজার পাথ দেওয়া যায়। `KNOWN_GAPS`-এ নথিভুক্ত ঋণ ছাড়া সীমার নিচে নামলে কমান্ড ফেল করে।

`fetch-source` আউটপুট gitignored `tools/.source/`-এ রাখে। এটি নির্দিষ্ট লেসনেও চলে — যেমন: `pnpm fetch-source 1-introduction`; পুরনো ফাইল আবার নামাতে `--force` দিন।

## লেসন লেখা ও অনুবাদের নিয়ম

1. থিম metadata আগে বসান (`src/lib/themes.ts`), তারপর lesson list ও title/page data বসান (`src/lib/lessons.ts`); শুধু তারপর সংশ্লিষ্ট MDX ফাইল সাইডবারে যুক্ত হবে।
2. লেসন ফাইল `src/content/docs/learn/<theme-slug>/<lesson-slug>.mdx` পথে রাখুন; slug মূল ইংরেজি সোর্সের গঠন মেনে চলে।
3. লেসন ফ্রন্টম্যাটার স্কিমা অনুযায়ী পূরণ করুন: `title`, `titleEn`, `domain`, `task`, `order`, `sourceUrl`, `updated`, `keywords[]`, `sources[]`। স্কিমা: `src/content.config.ts`।
4. প্রতি লেসনের শেষে `<Attribution sourceUrl={frontmatter.sourceUrl} />` আর `<MarkComplete lessonId="<domain>-<task>" />` রাখুন।
5. **প্রযুক্তিগত শব্দ ইংরেজিতেই রাখুন** — যেমন: `MCP`, `CLAUDE.md`, `stop_reason`, `PreToolUse`; কোড ও identifiers transliterate করবেন না।
6. নতুন পরিভাষা লেসনে ব্যবহারের আগে `src/content/glossary-terms.json`-এ যোগ করুন। একই শব্দ দুইভাবে অনুদিত থাকলে গ্লোসারির রূপটি চূড়ান্ত।
7. মেশিন-অনুবাদ হুবহু বসাবেন না — প্রাকৃতিক বাংলা > আক্ষরিক অনুবাদ।
8. যে থিমের লেসন এখনো অনুদিত নয়, তার index পাতা "অনুবাদ বাকি" ট্যাগসহ রাখুন, যাতে সাইডবার লিংক 404 না দেয়।

## সাইটে নতুন থিম যোগ করা

1. `src/lib/themes.ts`-এ নতুন থিমের metadata ও source তথ্য যোগ করুন।
2. `src/lib/lessons.ts`-এ অর্ডারড lesson list, slugs, পেজ রেঞ্জ ও শিরোনাম রাখুন।
3. থিমের overview পাতা `src/content/docs/learn/<theme-slug>/index.mdx`-এ তৈরি করুন, যাতে সাইডবার লিংক সবসময় valid থাকে।
4. প্রতিটি লেসন `src/content/docs/learn/<theme-slug>/<lesson-slug>.mdx`-এ তৈরি করুন।

> নোট: যে থিমের লেসন এখনো অনুদিত নয়, সেখানে overview পাতা “অনুবাদ বাকি” ট্যাগসহ থাকা জরুরি, যাতে সাইডবার ও অভ্যন্তরীণ লিংক 404 না দেয়।

### ভেতরের লিংক

সাইট `/aws-solution-architect-associate-resources` বেসে চলে, কিন্তু Astro Markdown ও MDX-এ root-relative লিংকে `base` যোগ হয় না। তাই `/learn/` প্রোডাকশনে 404 দেয়।

| ফাইল | সঠিক নিয়ম |
| --- | --- |
| `.astro` কম্পোনেন্ট | `siteUrl('learn/')` — হেল্পার: `src/lib/urls.ts` |
| `.mdx` কনটেন্ট | `<a href={siteUrl('learn/')}>…</a>` |
| Starlight ফ্রন্টম্যাটার | বেস পাথ স্পষ্ট লিখুন — `/aws-solution-architect-associate-resources/learn/` |

`pnpm check:links` বেস ছাড়া যেকোনো root-relative লিংকে ফেল করে, তাই ভুল লিংক নীরবে পাস করে না।

### ডিজাইন ও কনট্রাস্ট

- নিউট্রাল সারফেসে accent টেক্সটে WCAG AA (৪.৫:১) পাস করতে হবে — raw `--sl-color-accent`-এর বদলে `--sl-color-accent-high` ব্যবহার করুন।
- Mermaid নিজের প্রস্থ inline `max-width`-এ পিন করে, আর `custom.css` সেই সীমা তুলে দেয় যাতে flowchart পড়ার কলাম ভরে। এই রুল বদলালে inline style-এর dependency-ও পরীক্ষা করুন।
- Starlight-এর ডিফল্ট গ্রিডে TOC কলাম চওড়া স্ক্রিনে ৯২০px অবধি প্রসারিত হতে পারে। `custom.css` TOC কলাম `--sl-sidebar-width`-এ সীমিত রাখে আর `--sl-content-width` ৪৮rem-এ তোলে (≥৭২rem)। ওই কলাম বদলালে হেডারের গ্রিড চালানো `--__toc-width`-ও মিলিয়ে নিন।

## কমিট বা PR করার আগে

```bash
pnpm check
pnpm build
pnpm check:links
pnpm check:contrast
```

- উপরের চারটি কমান্ড পাস করা জরুরি।
- রঙ/থিম বদলালে টেক্সটের কনট্রাস্ট ৪.৫:১-এর উপরে রাখুন (নিছক গ্রাফিক চিহ্নের জন্য ৩:১)।
- ভেতরের লিংক অটুট রাখুন (prev/next, সাইডবার, গ্লোসারি রেফারেন্স)।
- নতুন শব্দ `src/content/glossary-terms.json`-এ যোগ করা আছে তা নিশ্চিত করুন।
- পরিবর্তন ছোট রাখুন এবং কমিট মেসেজ পরিষ্কার রাখুন, যেমন: `feat: microservices overview অনুবাদ` বা `fix: lesson frontmatter সংশোধন`।

বিস্তারিত নিয়ম [CONTRIBUTING.md](./CONTRIBUTING.md)-এ।

## ডিপ্লয়

`main`-এ পুশ করলেই GitHub Actions সাইট বিল্ড করে GitHub Pages-এ দেয়; Actions থেকে `workflow_dispatch`-ও চালানো যায়। CI ধাপ: install → `pnpm check` → `pnpm build` → `pnpm check:links` → `pnpm check:contrast` → artifact আপলোড → deploy।

base path `/aws-solution-architect-associate-resources` বদলালে `astro.config.mjs` ও সংশ্লিষ্ট পাতার লিংকগুলোর consistency নিশ্চিত করুন। একবারের সেটআপ: Settings → General → Default branch = **main**, আর Settings → Pages → Source = **GitHub Actions**। Actions-এর `GITHUB_TOKEN` দিয়ে Pages চালু করা যায় না, তাই দ্বিতীয় ধাপটি হাতে করতে হয় — না করলে ডিপ্লয় `Configure Pages` ধাপে থামে।

## অবদান

PR স্বাগত — বিশেষ করে অনুবাদ সংশোধন। পরিবর্তন ছোট রাখুন (প্রতি PR-এ একটি থিম/ডোমেইন বা component), প্রযুক্তিগত শব্দ ইংরেজিতে রাখুন, নতুন শব্দ আগে গ্লোসারিতে যোগ করুন, আর কমিটের আগে চারটি validation কমান্ড পাস করান।

বাগ বা ভুল অনুবাদ পেলে [issue](https://github.com/hasnat-shohag/aws-solution-architect-associate-resources/issues) খুলুন — পাতা/লেসনের নাম, ভুল বাক্যটি হুবহু, কেন ভুল ও সঠিক কী হওয়া উচিত, এবং মূল ইংরেজি পাতার লিংক (থাকলে) দিন।

কনটেন্ট-মালিক এই অনুবাদ অপসারণ চাইলে issue খুলুন — যুক্তি ছাড়াই যোগ্য পাতাগুলো সরিয়ে নেওয়া হবে।

## লাইসেন্স ও কৃতিত্ব

- **কোড:** MIT (`LICENSE`)।
- **বাংলা কনটেন্ট:** CC BY-NC-SA 4.0 (`LICENSE-CONTENT`); PR-এ অবদান রাখলে এই শর্তে সম্মত ধরা হয়।
- **মূল ইংরেজি সোর্স:** [AWS Whitepaper — Implementing Microservices on AWS](https://docs.aws.amazon.com/whitepapers/latest/implementing-microservices-on-aws/implementing-microservices-on-aws.pdf)।
- পরীক্ষার ব্লুপ্রিন্ট ও প্রযুক্তিগত বিবরণ: Amazon Web Services।
