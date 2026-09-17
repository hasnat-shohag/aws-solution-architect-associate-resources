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
  { id: 'microservices-3', theme: 'microservices', slug: '3-microservices-implementations', titleEn: 'Microservices Implementations', titleBn: 'মাইক্রোসার্ভিস ইমপ্লিমেন্টেশন', pages: [5, 5] },
  { id: 'microservices-4', theme: 'microservices', slug: '4-cicd-networking-datastore', titleEn: 'CI/CD, Private Networking & Data Store', titleBn: 'CI/CD, প্রাইভেট নেটওয়ার্ক ও ডেটাস্টোর', pages: [6, 6] },
  { id: 'microservices-5', theme: 'microservices', slug: '5-simplifying-operations', titleEn: 'Simplifying Operations', titleBn: 'অপারেশন সহজ করা ও ডেটাস্টোর', pages: [7, 7] },
  { id: 'microservices-6', theme: 'microservices', slug: '6-lambda-deployment', titleEn: 'Deploying Lambda-Based Applications', titleBn: 'Lambda অ্যাপ্লিকেশন ডিপ্লয়', pages: [8, 8] },
  { id: 'microservices-7', theme: 'microservices', slug: '7-multi-tenancy-api-management', titleEn: 'Multi-Tenancy & API Management', titleBn: 'মাল্টি-টেন্যান্সি ও API ম্যানেজমেন্ট', pages: [9, 10] },
  { id: 'microservices-8', theme: 'microservices', slug: '8-serverless-architecture', titleEn: 'Serverless Microservices Architecture', titleBn: 'Serverless মাইক্রোসার্ভিস আর্কিটেকচার', pages: [11, 12] },
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
  { id: 'bluegreen-1', theme: 'blue-green', slug: '1-introduction', titleEn: 'Introduction to Blue/Green Deployments', titleBn: 'ব্লু/গ্রিন ডিপ্লয়মেন্ট পরিচিতি', pages: [1, 3] },
  { id: 'bluegreen-2', theme: 'blue-green', slug: '2-environment-boundary', titleEn: 'Define the Environment Boundary', titleBn: 'এনভায়রনমেন্ট বাউন্ডারি নির্ধারণ', pages: [4, 4] },
  { id: 'bluegreen-3', theme: 'blue-green', slug: '3-services-overview', titleEn: 'Services for Blue/Green Deployments', titleBn: 'ব্লু/গ্রিন-এর জন্য AWS সার্ভিস', pages: [5, 7] },
  { id: 'bluegreen-4', theme: 'blue-green', slug: '4-dns-routing', titleEn: 'Technique 1 — Update DNS Routing with Route 53', titleBn: 'টেকনিক ১ — Route 53-তে DNS routing আপডেট', pages: [8, 9] },
  { id: 'bluegreen-5', theme: 'blue-green', slug: '5-asg-swap-elb', titleEn: 'Technique 2 — Swap the ASG behind the ELB', titleBn: 'টেকনিক ২ — ELB-এর পেছনে ASG swap', pages: [10, 12] },
  { id: 'bluegreen-6', theme: 'blue-green', slug: '6-asg-launch-config', titleEn: 'Technique 3 — Update ASG Launch Configurations', titleBn: 'টেকনিক ৩ — ASG launch configuration আপডেট', pages: [13, 15] },
  { id: 'bluegreen-7', theme: 'blue-green', slug: '7-beanstalk-opsworks', titleEn: 'Techniques 4 & 5 — Beanstalk Swap and OpsWorks Clone', titleBn: 'টেকনিক ৪ ও ৫ — Beanstalk swap আর OpsWorks clone', pages: [16, 21] },
  { id: 'bluegreen-8', theme: 'blue-green', slug: '8-data-sync-schema', titleEn: 'Data Sync, Schema Changes and Anti-Patterns', titleBn: 'ডেটা সিঙ্ক, schema change ও ব্যতিক্রম', pages: [22, 25] },
  { id: 'bluegreen-9', theme: 'blue-green', slug: '9-conclusion-appendix', titleEn: 'Conclusion and Risk Comparison', titleBn: 'উপসংহার ও risk তুলনা', pages: [26, 30] },
  { id: 'examguide-1', theme: 'exam-guide', slug: '1-exam-overview', titleEn: 'SAA-C03 Exam Overview', titleBn: 'SAA-C03 পরীক্ষা এক নজরে', pages: [1, 2] },
  { id: 'examguide-2', theme: 'exam-guide', slug: '2-domain-weighting', titleEn: 'The Four Domains and Their Weightings', titleBn: 'চারটি ডোমেইন ও ওয়েটিং', pages: [2, 3] },
  { id: 'examguide-3', theme: 'exam-guide', slug: '3-domain1-secure-architecture', titleEn: 'Domain 1 — Secure Architectures', titleBn: 'ডোমেইন ১ — Secure Architectures', pages: [3, 5] },
  { id: 'examguide-4', theme: 'exam-guide', slug: '4-domain2-resilient-architecture', titleEn: 'Domain 2 — Resilient Architectures', titleBn: 'ডোমেইন ২ — Resilient Architectures', pages: [5, 7] },
  { id: 'examguide-5', theme: 'exam-guide', slug: '5-domain3-high-performing-architecture', titleEn: 'Domain 3 — High-Performing Architectures', titleBn: 'ডোমেইন ৩ — High-Performing Architectures', pages: [7, 10] },
  { id: 'examguide-6', theme: 'exam-guide', slug: '6-domain4-cost-optimized-architecture', titleEn: 'Domain 4 — Cost-Optimized Architectures', titleBn: 'ডোমেইন ৪ — Cost-Optimized Architectures', pages: [10, 14] },
  { id: 'examguide-7', theme: 'exam-guide', slug: '7-question-patterns', titleEn: 'Question Patterns and Distractor Logic', titleBn: 'প্রশ্নের ধরন ও distractor লজিক', pages: [1, 14] },
  { id: 'examguide-8', theme: 'exam-guide', slug: '8-study-plan', titleEn: 'Study Plan and Exam Scope', titleBn: 'স্টাডি প্ল্যান ও পরীক্ষার scope', pages: [14, 23] },
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
