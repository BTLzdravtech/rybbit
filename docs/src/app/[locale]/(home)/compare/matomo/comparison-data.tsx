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
        name: "Free trial",
        rybbitValue: "7 days",
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

  introHeading: "Why consider Rybbit over Matomo?",
  introParagraphs: [
    "Matomo (formerly Piwik) has been around since 2007 and positions itself as the open-source Google Analytics alternative. It's feature-rich with 70+ reports, heatmaps, A/B testing, and form analytics. But that breadth comes with Google Analytics-level complexity — most teams need training just to find the metrics they care about, and the PHP/MySQL stack feels increasingly dated.",
    "Rybbit is what a modern analytics tool should look like. A single-page dashboard shows all essential metrics at a glance, with no training required. Privacy works by default — no cookies, no consent banners, no configuration needed. The tech stack (TypeScript, ClickHouse) is built for performance, and the managed cloud option means zero server maintenance. You get session replay, user journeys, Web Vitals, and error tracking without installing plugins.",
    "Matomo's cloud pricing starts at €19/month for just 50k hits, and many useful features require paid plugins on top of that. Rybbit starts at $19/month with all features included. If you're tired of Matomo's complexity, maintenance burden, or plugin costs, Rybbit offers a dramatically simpler path to the analytics insights your team actually needs.",
  ],

  chooseRybbit: [
    "You want a simple single-page dashboard with no training required",
    "You need privacy by default — no cookie consent configuration needed",
    "You prefer a modern tech stack (Next.js/ClickHouse) over legacy PHP",
    "You want cloud hosting with zero maintenance",
    "You need session replay, user journeys, and Web Vitals built in",
    "You want a 7-day free trial to evaluate before committing",
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
      "7-day free trial, no credit card required",
      "All features included on every plan",
      "Session replay available on Pro plan",
      "Zero maintenance cloud hosting",
    ],
  } satisfies PricingInfo,

  competitorPricing: {
    name: "Matomo Cloud",
    model: "Pageview-based pricing",
    startingPrice: "\u20AC19/mo",
    highlights: [
      "Starts at 50k hits/month",
      "On-Premise edition available for free (self-host)",
      "Many features require paid plugins on top",
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
