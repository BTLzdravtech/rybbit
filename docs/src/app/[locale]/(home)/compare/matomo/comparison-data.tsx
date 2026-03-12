import { DEFAULT_EVENT_LIMIT } from "@/lib/const";
import { ComparisonSection, FAQItem, PricingInfo, RelatedResource } from "../components/ComparisonPage";

export const matomoComparisonData: ComparisonSection[] = [
  {
    title: "Ease of Use",
    features: [
      {
        name: "Simple, intuitive interface",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Single-page dashboard",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "No training required",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "One-click setup",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Beautiful modern UI",
        rybbitValue: true,
        competitorValue: false,
      },
    ],
  },
  {
    title: "Core Analytics Features",
    features: [
      {
        name: "Web analytics dashboard",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Real-time data",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Custom events tracking",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Conversion goals",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Ecommerce tracking",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Heatmaps",
        rybbitValue: false,
        competitorValue: true,
      },
      {
        name: "A/B testing",
        rybbitValue: false,
        competitorValue: true,
      },
      {
        name: "Form analytics",
        rybbitValue: false,
        competitorValue: true,
      },
    ],
  },
  {
    title: "Advanced Features",
    features: [
      {
        name: "Session Replay",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Funnels",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "User journeys (Sankey)",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "User profiles",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Real-time globe view",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Web Vitals dashboard",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Error tracking",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Public dashboards",
        rybbitValue: true,
        competitorValue: false,
      },
    ],
  },
  {
    title: "Performance & Infrastructure",
    features: [
      {
        name: "Script size",
        rybbitValue: "18KB",
        competitorValue: "20-50KB",
      },
      {
        name: "Global CDN included",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Modern tech stack",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Auto-scaling cloud",
        rybbitValue: true,
        competitorValue: "Self-host only",
      },
      {
        name: "Zero maintenance",
        rybbitValue: true,
        competitorValue: false,
      },
    ],
  },
  {
    title: "Privacy & Compliance",
    features: [
      {
        name: "Cookie-free tracking",
        rybbitValue: true,
        competitorValue: "Optional",
      },
      // {
      //   name: "GDPR compliant by default",
      //   rybbitValue: true,
      //   competitorValue: false,
      // },
      {
        name: "No consent banner needed",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Daily rotating salt option",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Data stored in EU",
        rybbitValue: true,
        competitorValue: "Varies",
      },
    ],
  },
  {
    title: "Data & Hosting",
    features: [
      {
        name: "Data retention",
        rybbitValue: "2-5+ years",
        competitorValue: "24 months (cloud)",
      },
      {
        name: "Self-hostable",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Managed cloud option",
        rybbitValue: true,
        competitorValue: "Limited",
      },
      {
        name: "Easy Google Analytics import",
        rybbitValue: false,
        competitorValue: "Complex",
      },
      {
        name: "Data export",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "API access",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
  {
    title: "Support & Pricing",
    features: [
      {
        name: "Human customer support",
        rybbitValue: true,
        competitorValue: "Paid only",
      },
      {
        name: "Free tier",
        rybbitValue: DEFAULT_EVENT_LIMIT.toLocaleString() + " events",
        competitorValue: "Self-host only",
      },
      {
        name: "Cloud pricing",
        rybbitValue: "$19-$499/mo",
        competitorValue: "€19-€450+/mo",
      },
      {
        name: "Open source",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Live demo available",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Documentation quality",
        rybbitValue: "Modern",
        competitorValue: "Extensive but complex",
      },
    ],
  },
];

export const matomoExtendedData = {
  subtitle: "Rybbit is the modern, simple alternative to Matomo — no PHP, no complex setup, and privacy-first by default.",

  chooseRybbit: [
    "You want a simple single-page dashboard with no training required",
    "You need privacy by default — no cookie consent configuration needed",
    "You prefer a modern tech stack (Next.js/ClickHouse) over legacy PHP",
    "You want cloud hosting with zero maintenance",
    "You need session replay, user journeys, and Web Vitals built in",
    "You want a free tier to get started",
  ],

  chooseCompetitor: [
    "You need heatmaps, A/B testing, or form analytics",
    "You have strict on-premise requirements for compliance",
    "You rely on the WordPress plugin ecosystem",
    "You need a Google Analytics data import tool",
    "You want a custom report builder with 70+ report types",
  ],

  rybbitPricing: {
    name: "Rybbit",
    model: "Events-based pricing",
    startingPrice: "$19/mo",
    highlights: [
      `Free tier with ${DEFAULT_EVENT_LIMIT.toLocaleString()} events/month`,
      "All features included on every plan",
      "Session replay included at no extra cost",
      "Zero maintenance cloud hosting",
    ],
  } satisfies PricingInfo,

  competitorPricing: {
    name: "Matomo",
    model: "Pageview-based / self-host free",
    startingPrice: "Free (self-host)",
    highlights: [
      "On-Premise edition is free (self-host only)",
      "Cloud starts at \u20AC19/mo for 50k hits",
      "Many features require paid plugins",
      "Self-hosting requires server maintenance",
    ],
  } satisfies PricingInfo,

  faqItems: [
    {
      question: "Is Rybbit really simpler than Matomo?",
      answer: "Yes. Matomo has 70+ reports across 12 sections, inheriting Google Analytics-style complexity. Rybbit shows all essential metrics on a single intuitive dashboard. Your team can start using Rybbit immediately without training.",
    },
    {
      question: "Does Rybbit require cookies like Matomo?",
      answer: "No. Rybbit is cookie-free by default and never requires consent banners. Matomo uses cookies by default and requires configuration to achieve cookieless tracking, which can reduce its accuracy.",
    },
    {
      question: "How does self-hosting compare?",
      answer: "Rybbit uses a modern stack (TypeScript, ClickHouse) and is straightforward to deploy with Docker. Matomo runs on PHP/MySQL, which is widely supported but requires ongoing maintenance, updates, and security patches. Rybbit also offers a managed cloud option.",
    },
    {
      question: "Can I migrate from Matomo to Rybbit?",
      answer: "Yes. Add Rybbit's script tag to your site and data starts flowing immediately. You can run both tools in parallel during the transition. Rybbit's simpler setup means you'll be collecting data within minutes.",
    },
    {
      question: "Does Matomo have features Rybbit doesn't?",
      answer: "Yes — Matomo offers heatmaps, A/B testing, form analytics, and a custom report builder that Rybbit doesn't have. However, many of these require paid plugins. Rybbit focuses on delivering the analytics features most teams actually need, with a much simpler experience.",
    },
  ] satisfies FAQItem[],

  relatedResources: [
    {
      title: "Rybbit vs Google Analytics",
      href: "/compare/google-analytics",
      description: "The privacy-first alternative to GA4",
    },
    {
      title: "Rybbit vs PostHog",
      href: "/compare/posthog",
      description: "Focused analytics vs all-in-one product suite",
    },
    {
      title: "Rybbit vs Umami",
      href: "/compare/umami",
      description: "Two open-source analytics tools compared",
    },
    {
      title: "Getting started with Rybbit",
      href: "/docs",
      description: "Set up Rybbit in under 5 minutes",
    },
    {
      title: "Self-hosting guide",
      href: "/docs/self-hosting",
      description: "Deploy Rybbit on your own infrastructure",
    },
    {
      title: "Pricing",
      href: "/pricing",
      description: "Simple, transparent pricing for every team size",
    },
  ] satisfies RelatedResource[],
};
