// @ts-check
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { THEMES } from './src/lib/themes';
import { themeLessons, lessonPath } from './src/lib/lessons';

const repoUrl = 'https://github.com/hasnat-shohag/aws-solution-architect-associate-resources';
const docsRoot = join(dirname(fileURLToPath(import.meta.url)), 'src/content/docs');

/**
 * Only list lessons whose MDX file exists, so the sidebar grows as translation progresses.
 *
 * @param {string} slug
 */
const hasLesson = (slug) => existsSync(join(docsRoot, `${slug}.mdx`));

export default defineConfig({
	site: 'https://hasnat-shohag.github.io',
	base: '/aws-solution-architect-associate-resources',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'AWS SAA বাংলা স্টাডি গাইড',
			description:
				'AWS Solutions Architect Associate (SAA-C03) প্রস্তুতির জন্য বাংলা স্টাডি গাইড — মাইক্রোসার্ভিসেস ওভারভিউ, কীওয়ার্ড টেবিল, ডায়াগ্রাম ও অগ্রগতি ট্র্যাকিং।',
			locales: {
				root: { label: 'বাংলা', lang: 'bn-BD' },
			},
			defaultLocale: 'root',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			components: {
				Head: './src/components/starlight/Head.astro',
			},
			editLink: {
				baseUrl: `${repoUrl}/edit/main/`,
			},
			lastUpdated: true,
			pagination: true,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			social: [{ icon: 'github', label: 'GitHub', href: repoUrl }],
			sidebar: [
				{
					label: 'শুরু করুন',
					items: [
						{ label: 'শেখার পথ', link: '/learn/' },
						{ label: 'অগ্রগতি ড্যাশবোর্ড', link: '/progress/' },
						{ label: 'কীওয়ার্ড গ্লসারি', link: '/glossary/' },
						{ label: 'উৎস ও লাইসেন্স', link: '/about/' },
					],
				},
				...THEMES.map((theme) => ({
					label: `${theme.labelBn} · ${theme.labelEn}`,
					items: [
						{ label: 'থিম ওভারভিউ', link: `/learn/${theme.slug}/` },
						...themeLessons(theme.id)
							.map((lesson) => ({
								label: `${lesson.id.split('-')[1]} — ${lesson.titleBn}`,
								slug: lessonPath(lesson),
								attrs: { 'data-lesson-id': lesson.id },
							}))
							.filter((item) => hasLesson(item.slug)),
					],
				})),
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'description',
						content:
							'AWS Solutions Architect Associate (SAA-C03) প্রস্তুতির জন্য বাংলা স্টাডি গাইড: মাইক্রোসার্ভিসেস লেসন, কীওয়ার্ড ও অগ্রগতি ট্র্যাকিং।',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'AWS SAA বাংলা গাইড',
					},
				},
			],
		}),
	],
	vite: {
		build: {
			// Mermaid is loaded lazily as its own chunk; the chunk is intentionally large.
			chunkSizeWarningLimit: 1200,
		},
	},
});
