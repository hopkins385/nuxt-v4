export interface Project {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  year: number;
  role: string;
  highlights: string[];
  url?: string;
  github?: string;
}

const projects: Project[] = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha',
    tagline: 'SaaS platform built from idea to production in 6 weeks.',
    desc: 'A multi-tenant SaaS platform for small teams to manage workflows. Built the full stack solo — from database schema and API design to the marketing site and billing integration.',
    tags: ['Nuxt', 'Stripe', 'Postgres', 'Docker'],
    year: 2025,
    role: 'Solo developer — design, backend, frontend, DevOps',
    highlights: [
      'Designed a multi-tenant architecture with row-level security in PostgreSQL',
      'Integrated Stripe Billing with webhooks for subscription lifecycle management',
      'Achieved sub-200ms TTFB globally using SSR + edge caching',
      'Shipped from zero to paying customers in 6 weeks',
    ],
    url: '#',
  },
  {
    slug: 'open-source-cli',
    title: 'Open Source CLI',
    tagline: 'Developer tool with 2k+ GitHub stars automating repetitive tasks.',
    desc: 'A command-line tool that automates common developer workflows — scaffolding, code generation, and project setup. Adopted by the community and actively maintained.',
    tags: ['Node.js', 'TypeScript', 'Open Source'],
    year: 2024,
    role: 'Creator & maintainer',
    highlights: [
      'Grew to 2,000+ GitHub stars organically within the first year',
      'Plugin system allows community extensions without core changes',
      'Full test coverage with Vitest, published to npm with semantic versioning',
      'Written up in two developer newsletters reaching 40k+ readers',
    ],
    github: '#',
  },
  {
    slug: 'internal-dashboard',
    title: 'Internal Dashboard',
    tagline: 'Real-time analytics dashboard for a logistics startup.',
    desc: 'A live operations dashboard tracking fleet status, delivery performance, and KPIs for a logistics company. Handles thousands of WebSocket events per minute with a responsive Vue frontend.',
    tags: ['Vue', 'WebSockets', 'Docker', 'Postgres'],
    year: 2024,
    role: 'Sole contractor — full stack',
    highlights: [
      'WebSocket server handling 5,000+ concurrent connections with Node.js',
      'Real-time map rendering with sub-second update latency',
      'Containerized deployment on bare metal with Docker Compose',
      'Reduced manual reporting time by 80% for the ops team',
    ],
  },
];

export const useProjects = () => {
  const getProject = (slug: string) => projects.find(p => p.slug === slug);
  return { projects, getProject };
};
