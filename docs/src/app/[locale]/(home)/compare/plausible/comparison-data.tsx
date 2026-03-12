import { DEFAULT_EVENT_LIMIT } from "@/lib/const";
import { ComparisonSection, FAQItem, PricingInfo, RelatedResource } from "../components/ComparisonPage";

export const plausibleComparisonData: ComparisonSection[] = [
  {
    title: "Core Analytics Features",
    features: [
      {
        name: "Simple dashboard",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Real-time data",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Visitor analytics",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Page analytics",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Source tracking",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Device/OS/Browser stats",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "UTM tracking",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Custom events",
        rybbitValue: "With attributes",
        competitorValue: "Basic",
      },
      {
        name: "Conversion goals",
        rybbitValue: true,
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
        competitorValue: false,
      },
      {
        name: "Funnels",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "User journeys (Sankey)",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "User profiles",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Sessions tracking",
        rybbitValue: true,
        competitorValue: false,
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
    ],
  },
  {
    title: "Privacy & Open Source",
    features: [
      {
        name: "Cookie-free tracking",
        rybbitValue: true,
        competitorValue: true,
      },
      // {
      //   name: "GDPR compliant",
      //   rybbitValue: true,
      //   competitorValue: true,
      // },
      {
        name: "No personal data collection",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Daily rotating salt option",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Open source",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Self-hostable",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
  {
    title: "User Experience",
    features: [
      {
        name: "Beautiful UI",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "No training required",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Public dashboards",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Live demo",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
  {
    title: "Performance & Technical",
    features: [
      {
        name: "Real-time updates",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "API access",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Tech stack",
        rybbitValue: "Typescript/ClickHouse",
        competitorValue: "Elixir/ClickHouse",
      },
      {
        name: "Bot filtering",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Bypasses ad blockers",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
  {
    title: "Data & Infrastructure",
    features: [
      {
        name: "Data retention",
        rybbitValue: "2-5+ years",
        competitorValue: "Unlimited",
      },
      {
        name: "Data location",
        rybbitValue: "EU (Hetzner)",
        competitorValue: "EU (Hetzner)",
      },
      {
        name: "Team collaboration",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Organization support",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Multiple websites",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
  {
    title: "Pricing & Support",
    features: [
      {
        name: "Free tier",
        rybbitValue: DEFAULT_EVENT_LIMIT.toLocaleString() + " events",
        competitorValue: false,
      },
      {
        name: "Entry price",
        rybbitValue: "$19/mo",
        competitorValue: "$19/mo",
      },
      {
        name: "Pricing model",
        rybbitValue: "Events-based",
        competitorValue: "Pageview-based",
      },
      {
        name: "Customer support",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
];

export const plausibleExtendedData = {
  subtitle: "Both are privacy-first, but Rybbit offers session replay, funnels, and user journeys that Plausible doesn't.",

  chooseRybbit: [
    "You need advanced features like session replay and funnels",
    "You want user journey visualization (Sankey diagrams)",
    "You need error tracking and Web Vitals monitoring",
    "You want events-based pricing instead of pageview-based",
    "You need organization support with team roles",
    "You want a daily rotating salt option for extra privacy",
  ],

  chooseCompetitor: [
    "You want the simplest possible analytics dashboard",
    "You prefer a more established product with a longer track record",
    "You only need basic pageview and source tracking",
    "You want unlimited data retention on all plans",
    "You prefer Elixir/Phoenix over TypeScript for self-hosting",
  ],

  rybbitPricing: {
    name: "Rybbit",
    model: "Events-based pricing",
    startingPrice: "$19/mo",
    highlights: [
      `Free tier with ${DEFAULT_EVENT_LIMIT.toLocaleString()} events/month`,
      "Session replay included on all plans",
      "Funnels, user journeys, and error tracking included",
      "Unlimited team members and websites",
    ],
  } satisfies PricingInfo,

  competitorPricing: {
    name: "Plausible",
    model: "Pageview-based pricing",
    startingPrice: "$19/mo",
    highlights: [
      "No free tier available",
      "Starts at 10k monthly pageviews",
      "All features included on every plan",
      "Self-hosted Community Edition is free",
    ],
  } satisfies PricingInfo,

  faqItems: [
    {
      question: "How is Rybbit different from Plausible?",
      answer: "Both are privacy-first and open source, but Rybbit includes advanced features that Plausible doesn't offer: session replay, funnel analysis, user journey visualization (Sankey diagrams), Web Vitals monitoring, error tracking, and user profiles.",
    },
    {
      question: "Is Rybbit as easy to use as Plausible?",
      answer: "Yes. Rybbit is designed to be just as simple for basic analytics, with a clean single-page dashboard. The advanced features like funnels and session replay are there when you need them but don't add complexity to the core experience.",
    },
    {
      question: "How does pricing compare between Rybbit and Plausible?",
      answer: "Both start at $19/month. The key difference is that Rybbit uses events-based pricing (which includes pageviews, custom events, and more), while Plausible charges by pageviews only. Rybbit also offers a free tier that Plausible doesn't.",
    },
    {
      question: "Can I self-host Rybbit like Plausible?",
      answer: "Yes, Rybbit is fully self-hostable under the AGPL v3 license. Both use ClickHouse for fast analytics queries. Rybbit's stack is TypeScript-based, while Plausible uses Elixir.",
    },
    {
      question: "Does Rybbit have session replay?",
      answer: "Yes, session replay is one of the biggest differentiators. Rybbit includes session replay on all plans at no extra cost, allowing you to watch how users interact with your site. Plausible does not offer this feature.",
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
      title: "Rybbit vs Fathom",
      href: "/compare/fathom",
      description: "Compare two privacy-focused analytics tools",
    },
    {
      title: "Rybbit vs Simple Analytics",
      href: "/compare/simpleanalytics",
      description: "Feature-rich vs minimal analytics",
    },
    {
      title: "Getting started with Rybbit",
      href: "/docs",
      description: "Set up Rybbit in under 5 minutes",
    },
    {
      title: "Pricing",
      href: "/pricing",
      description: "Simple, transparent pricing for every team size",
    },
  ] satisfies RelatedResource[],
};
