import type { Project } from "../types/project";
export const projects: Project[] = [
  {
    id: 1,
    slug: "asmotors",

    title: "ASMotors",
    category: "Website + CRM Platform",

    description:
      "A complete digital ecosystem for an automotive service business with online booking, CRM, notifications and analytics.",

    year: "2025",

    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "Telegram",
      "SMS",
      "Vercel",
    ],

    cover: "/projects/asmotors-cover.png",

    website: "https://asmotors.site",

    featured: true,
  },

  {
    id: 2,
    slug: "asmotors-crm",

    title: "ASMotors CRM",
    category: "Internal Management System",

    description:
      "CRM platform for managing appointments, clients, finances, analytics and workshop operations.",

    year: "2025",

    technologies: [
      "React",
      "TypeScript",
      "Supabase",
    ],

    cover: "/projects/asmotors-crm.png",

    featured: true,
  },

  {
    id: 3,
    slug: "finoscop",

    title: "FINOSCOP",
    category: "Financial Marketplace",

    description:
      "Marketplace for comparing financial products with partner integrations and SEO-focused architecture.",

    year: "2025",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
    ],

    cover: "/projects/finoscop.png",

    website: "https://finoscop.ru",

    featured: true,
  },
];