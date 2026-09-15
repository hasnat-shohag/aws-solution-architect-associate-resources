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
  { id: 'microservices-1', theme: 'microservices', slug: '1-introduction', titleEn: 'Introduction, Well-Architected & Modernizing', titleBn: 'পরিচিতি, Well-Architected ও মডার্নাইজেশন', pages: [1, 4] },
  { id: 'microservices-2', theme: 'microservices', slug: '2-architecture-overview', titleEn: 'Microservices Architecture on AWS — Overview', titleBn: 'মাইকরোসার্বিসেস আর্কিটেকচার — সারভিউ', pages: [5, 5] },
  { id: 'microservices-3', theme: 'microservices', slug: '3-user-interface', titleEn: 'User Interface', titleBn: 'ইউজার ইন্টারফেস', pages: [6, 6] },
  { id: 'microservices-4', theme: 'microservices', slug: '4-microservices-implementations', titleEn: 'Microservices Implementations', titleBn: 'মাইকরোসার্বিসেস ইমপ্লিমেন্টেশন', pages: [7, 9] },
  { id: 'microservices-5', theme: 'microservices', slug: '5-cicd-networking-datastore', titleEn: 'CI/CD, Private Networking & Data Store', titleBn: 'CI/CD, প্রাইভেট নেটওয়ার্কিং ও ডেটাস্টোর', pages: [10, 10] },
  { id: 'microservices-6', theme: 'microservices', slug: '6-simplifying-operations', titleEn: 'Simplifying Operations', titleBn: 'অপারেশনসহজীকরণ ও ডেটাবেস', pages: [11, 11] },
  { id: 'microservices-7', theme: 'microservices', slug: '7-lambda-deployment', titleEn: 'Deploying Lambda-Based Applications', titleBn: 'Lambda-ভিত্তিক অ্যাপ্লিকেশন ডিপ্লয়', pages: [12, 13] },
  { id: 'microservices-8', theme: 'microservices', slug: '8-multi-tenancy-api-management', titleEn: 'Multi-Tenancy & API Management', titleBn: 'মাল্টি-টেন্যান্সি ও API ম্যানেজমেন্ট', pages: [14, 14] },
  { id: 'microservices-9', theme: 'microservices', slug: '9-serverless-architecture', titleEn: 'Serverless Microservices Architecture', titleBn: 'Serverless মাইকরোসার্বিসেস আর্কিটেকচার', pages: [15, 16] },
  { id: 'microservices-10', theme: 'microservices', slug: '10-dr-ha', titleEn: 'Disaster Recovery & High Availability', titleBn: 'Disaster Recovery ও High Availability', pages: [17, 17] },
  { id: 'microservices-11', theme: 'microservices', slug: '11-distributed-systems-components', titleEn: 'Distributed Systems Components', titleBn: 'ডিস্ট্রিবিউটেড সিস্টেম কম্পোনেন্ট', pages: [18, 19] },
  { id: 'microservices-12', theme: 'microservices', slug: '12-distributed-data-management', titleEn: 'Distributed Data Management', titleBn: 'ডিস্ট্রিবিউটেড ডেটা ম্যানেজমেন্ট', pages: [20, 22] },
  { id: 'microservices-13', theme: 'microservices', slug: '13-configuration-secrets', titleEn: 'Configuration & Secrets Management', titleBn: 'কনফিগারেশন ও Secrets ম্যানেজমেন্ট', pages: [23, 23] },
  { id: 'microservices-14', theme: 'microservices', slug: '14-cost-sustainability', titleEn: 'Cost Optimization & Sustainability', titleBn: 'কস্ট অপটিমাইজেশন ও সাসটেইনেবিলিটি', pages: [24, 24] },
  { id: 'microservices-15', theme: 'microservices', slug: '15-communication-mechanisms', titleEn: 'Communication Mechanisms', titleBn: 'কমিউনিকেশন মেকানিজম', pages: [25, 27] },
  { id: 'microservices-16', theme: 'microservices', slug: '16-orchestration-state', titleEn: 'Orchestration & State Management', titleBn: 'Orchestration ও State ম্যানেজমেন্ট', pages: [28, 29] },
  { id: 'microservices-17', theme: 'microservices', slug: '17-observability', titleEn: 'Observability — Monitoring, Logs, Tracing', titleBn: 'Observability — মনিটরিং, লগ, ট্রেসিং', pages: [30, 36] },
  { id: 'microservices-18', theme: 'microservices', slug: '18-managing-communication', titleEn: 'Managing Communication & Caching', titleBn: 'কমিউনিকেশন ম্যানেজমেন্ট ও ক্যাশিং', pages: [37, 39] },
  { id: 'microservices-19', theme: 'microservices', slug: '19-auditing', titleEn: 'Auditing & Change Management', titleBn: 'অডিটিং ও চেঞ্জ ম্যানেজমেন্ট', pages: [40, 40] },
  { id: 'microservices-20', theme: 'microservices', slug: '20-conclusion', titleEn: 'Conclusion', titleBn: 'উপসংহার', pages: [40, 41] },
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
