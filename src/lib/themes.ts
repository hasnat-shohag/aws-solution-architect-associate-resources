export type ThemeId = 'microservices' | 'blue-green' | 'exam-guide';

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
  {
    id: 'blue-green',
    slug: 'blue-green',
    labelBn: 'ব্লু/গ্রিন ডিপ্লয়মেন্ট অন AWS',
    labelEn: 'Blue/Green Deployments on AWS',
    sourceBn: 'AWS Whitepaper — Blue/Green Deployments on AWS',
    sourceEn: 'AWS Whitepaper — Blue/Green Deployments on AWS',
    sourceUrl: 'https://docs.aws.amazon.com/pdfs/whitepapers/latest/blue-green-deployments/blue-green-deployments.pdf',
    pages: 30,
    lessons: 9,
    // Cyan-600: blue↔green midpoint, thematically right for "blue/green",
    // distinct from the amber microservices accent (#f97316) and Starlight's
    // indigo default. Validated ≥3:1 on white (3.68:1) and dark (4.82:1) —
    // sky-500 (#0ea5e9) failed the light-theme floor at 2.77:1.
    accent: '#0891b2',
  },
  {
    id: 'exam-guide',
    slug: 'exam-guide',
    labelBn: 'SAA-C03 এক্সাম গাইড',
    labelEn: 'SAA-C03 Exam Guide',
    sourceBn: 'AWS Certification — SAA-C03 Exam Guide (v1.1)',
    sourceEn: 'AWS Certified Solutions Architect – Associate (SAA-C03) Exam Guide',
    sourceUrl: 'https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf',
    pages: 21,
    lessons: 8,
    // Violet-600: distinct from microservices amber (#f97316) and blue-green
    // cyan (#0891b2), and from Starlight's indigo default. Validated ≥3:1 on
    // white (5.70:1) and dark (3.11:1); the accent renders as card border and
    // progress fill, never as text.
    accent: '#7c3aed',
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
  { labelBn: 'নতুন রিসোর্স', labelEn: 'More resources', noteBn: 'পরবর্তীতে যোগ হবে' },
];
