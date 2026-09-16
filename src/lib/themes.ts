export type ThemeId = 'microservices';

export interface ThemeMeta {
  id: ThemeId;
  slug: string;
  labelBn: string;
  labelEn: string;
  sourceBn: string;
  sourceEn: string;
  sourceUrl: string;
  pages: number;
  lessons: number;
  accent: string;
}

export const THEMES: ThemeMeta[] = [
  {
    id: 'microservices',
    slug: 'microservices',
    labelBn: 'মাইক্রোসার্ভিসেস অন AWS',
    labelEn: 'Microservices on AWS',
    sourceBn: 'AWS Whitepaper — Implementing Microservices on AWS',
    sourceEn: 'AWS Whitepaper — Implementing Microservices on AWS',
    sourceUrl:
      'https://docs.aws.amazon.com/whitepapers/latest/implementing-microservices-on-aws/implementing-microservices-on-aws.pdf',
    pages: 45,
    lessons: 20,
    accent: '#f97316',
  },
];

export const TOTAL_LESSONS = THEMES.reduce((sum, theme) => sum + theme.lessons, 0);

/**
 * Upcoming themes that will be added to the site over time.
 * They are shown on the home page as "coming soon" cards; remove an entry
 * from here (and add a real ThemeMeta above) once the theme is built.
 */
export interface PlannedTheme {
  labelBn: string;
  labelEn: string;
  noteBn: string;
}

export const PLANNED_THEMES: PlannedTheme[] = [
  { labelBn: 'এক্সাম গাইড', labelEn: 'SAA-C03 Exam Guide', noteBn: 'ডোমেইন ওয়েটিং, প্রশ্নের ধরন' },
  { labelBn: 'নতুন রিসোর্স', labelEn: 'More resources', noteBn: 'পরবর্তীতে যোগ হবে' },
];
