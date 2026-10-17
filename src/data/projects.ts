import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "asmotors",

    title: "ASMotors",
    category: "Automotive website",

    description:
      "A website for an automotive service with a presentation of services, information pages and online booking.",

    year: "",

    technologies: ["React", "TypeScript", "Supabase", "Vercel"],

    cover: "/projects/asmotors/01-home.png",

    images: [
      {
        src: "/projects/asmotors/01-home.png",
        alt: "ASMotors homepage with hero, services and booking entry",
      },
      {
        src: "/projects/asmotors/02-about.png",
        alt: "ASMotors about section with company story and advantages",
      },
      {
        src: "/projects/asmotors/03-warranty.png",
        alt: "ASMotors warranty information and service guarantees",
      },
      {
        src: "/projects/asmotors/04-packages.png",
        alt: "ASMotors service packages with prices and included work",
      },
      {
        src: "/projects/asmotors/05-services.png",
        alt: "ASMotors catalogue of automotive services",
      },
      {
        src: "/projects/asmotors/06-reviews.png",
        alt: "ASMotors client reviews and ratings",
      },
      {
        src: "/projects/asmotors/07-gallery.png",
        alt: "ASMotors workshop photo gallery",
      },
      {
        src: "/projects/asmotors/08-contacts.png",
        alt: "ASMotors contacts, map and request form",
      },
    ],

    website: "https://asmotors.site",

    featured: false,
  },

  {
    id: 2,
    slug: "asmotors-crm",

    title: "ASMotors CRM",
    category: "Business management platform",

    description:
      "A workshop management system for requests, client records and service history, calendar and technician load, finances, documents, analytics, and notifications via WhatsApp, SMS and Telegram.",

    year: "",

    technologies: ["React", "TypeScript", "Supabase"],

    cover: "/projects/asmotors-crm/01-requests.png",

    images: [
      {
        src: "/projects/asmotors-crm/01-requests.png",
        alt: "ASMotors CRM requests board with statuses and filters",
      },
      {
        src: "/projects/asmotors-crm/02-analytics.png",
        alt: "ASMotors CRM analytics dashboard with revenue and charts",
      },
      {
        src: "/projects/asmotors-crm/03-debtors.png",
        alt: "ASMotors CRM debtors list and outstanding balances",
      },
      {
        src: "/projects/asmotors-crm/04-calculator.png",
        alt: "ASMotors CRM service calculator and pricing form",
      },
      {
        src: "/projects/asmotors-crm/05-schedule.png",
        alt: "ASMotors CRM technician schedule calendar",
      },
      {
        src: "/projects/asmotors-crm/06-clients.png",
        alt: "ASMotors CRM client directory and profiles",
      },
      {
        src: "/projects/asmotors-crm/07-masters.png",
        alt: "ASMotors CRM technicians list and workload",
      },
    ],

    featured: true,
  },

  {
    id: 3,
    slug: "finoscop",

    title: "FINOSCOP",
    category: "Financial offers platform",

    description:
      "A platform for financial offers with option matching, comparison of terms and referral to partners.",

    year: "",

    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],

    cover: "/projects/finoscop/01-home.png",

    images: [
      {
        src: "/projects/finoscop/01-home.png",
        alt: "FINOSCOP homepage with product categories and search",
      },
      {
        src: "/projects/finoscop/02-selection.png",
        alt: "FINOSCOP four-step selection process",
      },
      {
        src: "/projects/finoscop/03-offers.png",
        alt: "FINOSCOP matched financial offers and partner cards",
      },
      {
        src: "/projects/finoscop/04-market.png",
        alt: "FINOSCOP market overview of financial products",
      },
      {
        src: "/projects/finoscop/05-calculator.png",
        alt: "FINOSCOP loan calculator with amount and term controls",
      },
      {
        src: "/projects/finoscop/06-about.png",
        alt: "FINOSCOP about section explaining the platform",
      },
      {
        src: "/projects/finoscop/07-journal.png",
        alt: "FINOSCOP journal and articles",
      },
      {
        src: "/projects/finoscop/08-faq.png",
        alt: "FINOSCOP frequently asked questions",
      },
      {
        src: "/projects/finoscop/09-footer.png",
        alt: "FINOSCOP footer with navigation and legal links",
      },
    ],

    website: "https://finoscop.ru",

    featured: false,
  },

  {
    id: 4,
    slug: "zeleny-shinomontazh",

    title: "Zeleny Shinomontazh",
    category: "Business website",

    description:
      "A commercial website for a tire service in Saratov, with services and a price list, cost calculation by selected parameters, company and warranty information, contacts and booking.",

    year: "",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],

    cover: "/projects/zeleny-shinomontazh/01-home.png",

    images: [
      {
        src: "/projects/zeleny-shinomontazh/01-home.png",
        alt: "Zeleny Shinomontazh homepage with services and booking",
      },
      {
        src: "/projects/zeleny-shinomontazh/02-about.png",
        alt: "Zeleny Shinomontazh about the workshop and warranty",
      },
      {
        src: "/projects/zeleny-shinomontazh/03-services.png",
        alt: "Zeleny Shinomontazh list of tire services",
      },
      {
        src: "/projects/zeleny-shinomontazh/04-prices.png",
        alt: "Zeleny Shinomontazh price list",
      },
      {
        src: "/projects/zeleny-shinomontazh/05-calculator.png",
        alt: "Zeleny Shinomontazh cost calculator by tire parameters",
      },
      {
        src: "/projects/zeleny-shinomontazh/06-reviews.png",
        alt: "Zeleny Shinomontazh client reviews",
      },
      {
        src: "/projects/zeleny-shinomontazh/07-gallery.png",
        alt: "Zeleny Shinomontazh workshop photo gallery",
      },
      {
        src: "/projects/zeleny-shinomontazh/08-contacts.png",
        alt: "Zeleny Shinomontazh contacts, map and booking form",
      },
    ],

    website: "https://zeleny-shinomontazh.ru",

    featured: false,
  },

  {
    id: 5,
    slug: "lume-beauty-studio",

    title: "LUMÉ Beauty Studio",
    category: "Booking application",

    description:
      "A booking web application for a beauty studio, with a service catalogue and prices, technician profiles, reviews, an online booking interface, and a layout adapted for mobile devices.",

    year: "",

    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],

    cover: "/projects/lume-beauty/01-home.png",

    images: [
      {
        src: "/projects/lume-beauty/01-home.png",
        alt: "LUMÉ Beauty Studio home screen with featured services",
      },
      {
        src: "/projects/lume-beauty/02-services.png",
        alt: "LUMÉ Beauty Studio service catalogue and prices",
      },
      {
        src: "/projects/lume-beauty/03-masters.png",
        alt: "LUMÉ Beauty Studio technician profiles",
      },
      {
        src: "/projects/lume-beauty/04-booking.png",
        alt: "LUMÉ Beauty Studio online booking interface",
      },
      {
        src: "/projects/lume-beauty/05-about.png",
        alt: "LUMÉ Beauty Studio about and reviews screen",
      },
      {
        src: "/projects/lume-beauty/06-contacts.png",
        alt: "LUMÉ Beauty Studio contacts and studio details",
      },
    ],

    featured: false,
  },
];
