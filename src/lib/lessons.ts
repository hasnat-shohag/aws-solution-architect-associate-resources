import { THEMES, type ThemeId } from './themes';

export interface LessonMeta {
  id: string;
  theme: ThemeId;
  slug: string;
  titleEn: string;
  titleBn: string;
  /** Page range of the AWS whitepaper covered by this lesson (print numbering). */
  pages: [number, number];
}

export const LESSONS: LessonMeta[] = [
  { id: 'microservices-1', theme: 'microservices', slug: '1-introduction', titleEn: 'Introduction, Well-Architected & Modernizing', titleBn: 'পরিচিতি, Well-Architected ও মডার্নাইজেশন', pages: [1, 3] },
  { id: 'microservices-2', theme: 'microservices', slug: '2-architecture-user-interface', titleEn: 'Architecture Overview & User Interface', titleBn: 'আর্কিটেকচার ওভারভিউ ও User Interface', pages: [4, 4] },
  { id: 'microservices-3', theme: 'microservices', slug: '3-microservices-implementations', titleEn: 'Microservices Implementations', titleBn: 'মাইকরোসার্ভিস ইমপ্লিমেন্টেশন', pages: [5, 5] },
  { id: 'microservices-4', theme: 'microservices', slug: '4-cicd-networking-datastore', titleEn: 'CI/CD, Private Networking & Data Store', titleBn: 'CI/CD, প্রাইভেট নেটওয়ার্ক ও ডেটাস্টোর', pages: [6, 6] },
  { id: 'microservices-5', theme: 'microservices', slug: '5-simplifying-operations', titleEn: 'Simplifying Operations', titleBn: 'অপারেশন সহজ করা ও ডেটাস্টোর', pages: [7, 7] },
  { id: 'microservices-6', theme: 'microservices', slug: '6-lambda-deployment', titleEn: 'Deploying Lambda-Based Applications', titleBn: 'Lambda অ্যাপ্লিকেশন ডিপ্লয়', pages: [8, 8] },
  { id: 'microservices-7', theme: 'microservices', slug: '7-multi-tenancy-api-management', titleEn: 'Multi-Tenancy & API Management', titleBn: 'মাল্টি-টেন্যান্সি ও API ম্যানেজমেন্ট', pages: [9, 10] },
  { id: 'microservices-8', theme: 'microservices', slug: '8-serverless-architecture', titleEn: 'Serverless Microservices Architecture', titleBn: 'Serverless মাইকরোসার্ভিস আর্কিটেকচার', pages: [11, 12] },
  { id: 'microservices-9', theme: 'microservices', slug: '9-dr-ha', titleEn: 'Disaster Recovery & High Availability', titleBn: 'Disaster Recovery ও High Availability', pages: [13, 14] },
  { id: 'microservices-10', theme: 'microservices', slug: '10-distributed-systems-components', titleEn: 'Distributed Systems Components', titleBn: 'ডিস্ট্রিবিউটেড সিস্টেম কম্পোনেন্ট', pages: [15, 17] },
  { id: 'microservices-11', theme: 'microservices', slug: '11-distributed-data-management', titleEn: 'Distributed Data Management', titleBn: 'ডিস্ট্রিবিউটেড ডেটা ম্যানেজমেন্ট', pages: [18, 18] },
  { id: 'microservices-12', theme: 'microservices', slug: '12-configuration-secrets', titleEn: 'Configuration & Secrets Management', titleBn: 'Configuration ও Secrets ম্যানেজমেন্ট', pages: [19, 19] },
  { id: 'microservices-13', theme: 'microservices', slug: '13-cost-sustainability', titleEn: 'Cost Optimization & Sustainability', titleBn: 'কস্ট অপটিমাইজেশন ও Sustainability', pages: [20, 20] },
  { id: 'microservices-14', theme: 'microservices', slug: '14-communication-mechanisms', titleEn: 'Communication Mechanisms', titleBn: 'কমিউনিকেশন মেকানিজম', pages: [21, 22] },
  { id: 'microservices-15', theme: 'microservices', slug: '15-orchestration-state', titleEn: 'Orchestration & State Management', titleBn: 'Orchestration ও State ম্যানেজমেন্ট', pages: [23, 25] },
  { id: 'microservices-16', theme: 'microservices', slug: '16-observability', titleEn: 'Observability — Monitoring, Logs & Tracing', titleBn: 'Observability — মনিটরিং, লগ ও ট্রেসিং', pages: [26, 32] },
  { id: 'microservices-17', theme: 'microservices', slug: '17-managing-communication', titleEn: 'Managing Communication & Caching', titleBn: 'কমিউনিকেশন ম্যানেজমেন্ট ও ক্যাশিং', pages: [33, 33] },
  { id: 'microservices-18', theme: 'microservices', slug: '18-auditing', titleEn: 'Auditing & Resource Change Management', titleBn: 'Auditing ও Change Management', pages: [34, 35] },
  { id: 'microservices-19', theme: 'microservices', slug: '19-conclusion', titleEn: 'Conclusion', titleBn: 'উপসংহার', pages: [36, 36] },
  { id: 'microservices-20', theme: 'microservices', slug: '20-glossary-recap', titleEn: 'Document Extras & Glossary', titleBn: 'Document Extras ও AWS Glossary', pages: [37, 41] },
];

export function themeLessons(theme: ThemeId): LessonMeta[] {
  return LESSONS.filter((lesson) => lesson.theme === theme);
}

export function lessonPath(lesson: LessonMeta): string {
  const theme = THEMES.find((item) => item.id === lesson.theme);
  return `learn/${theme?.slug}/${lesson.slug}`;
}

export function lessonSourceUrl(lesson: LessonMeta): string {
  const theme = THEMES.find((item) => item.id === lesson.theme);
  return theme?.sourceUrl ?? '';
}
