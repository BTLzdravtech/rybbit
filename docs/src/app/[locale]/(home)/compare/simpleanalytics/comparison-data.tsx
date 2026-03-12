import { ComparisonSection, FAQItem, PricingInfo, RelatedResource } from "../components/ComparisonPage";

export const simpleAnalyticsComparisonData: ComparisonSection[] = [
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
        name: "Source tracking",
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
      {
        name: "Geographic data",
        rybbitValue: "City-level",
        competitorValue: "Country-level",
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
    title: "Privacy & Compliance",
    features: [
      {
        name: "Cookie-free tracking",
        rybbitValue: true,
        competitorValue: true,
      },
      // {
      //   name: "GDPR/CCPA compliant",
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
        name: "Data stored in EU",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
  {
    title: "Open Source & Transparency",
    features: [
      {
        name: "Open source",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Self-hostable",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "License",
        rybbitValue: "AGPL v3",
        competitorValue: "Proprietary",
      },
    ],
  },
  {
    title: "User Experience",
    features: [
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
    title: "Technical & Performance",
    features: [
      {
        name: "Bot filtering",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "API access",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Bypasses ad blockers",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Organization support",
        rybbitValue: true,
        competitorValue: false,
      },
    ],
  },
];

export const simpleAnalyticsExtendedData = {
  subtitle: "Both prioritize privacy, but Rybbit is open source with session replay, funnels, and city-level geolocation that Simple Analytics lacks.",

  introHeading: "Why consider Rybbit over Simple Analytics?",
  introParagraphs: [
    "Simple Analytics lives up to its name: it's a privacy-focused analytics tool that keeps things minimal. It offers a clean dashboard, cookie-free tracking, and EU-based data storage. But its simplicity means no session replay, no funnel analysis, no user journeys, and only country-level geolocation. It's also entirely closed-source with no self-hosting option.",
    "Rybbit matches Simple Analytics on privacy (cookie-free, no personal data collection, EU data storage) but adds the advanced features growing teams actually need. Session replay lets you watch how users interact with your site. Funnel analysis shows where visitors drop off in your conversion flow. User journey visualization reveals the paths people take through your content. And city-level geolocation gives you much more granular insights into where your audience is.",
    "The business model difference matters too. Rybbit is fully open source under AGPL v3, so you can self-host it for free and verify exactly how your data is handled. Simple Analytics is proprietary, so you're locked into their cloud service with no alternative. If you want privacy-first analytics with the depth to actually improve your product and the transparency of open source, Rybbit is the stronger choice.",
  ],

  chooseRybbit: [
    "You want open-source software you can self-host and audit",
    "You need session replay, funnels, and user journey visualization",
    "You want city-level geolocation instead of country-level",
    "You need error tracking and Web Vitals monitoring",
    "You want organization support with team roles",
    "You want a 7-day free trial to evaluate the product",
  ],

  chooseCompetitor: [
    "You want built-in AI-powered analytics assistant",
    "You want a Mini plan with unlimited websites",
    "You prefer a longer-established product",
    "You don't need advanced features like funnels or session replay",
    "You want country-level data only for maximum privacy",
  ],

  rybbitPricing: {
    name: "Rybbit",
    model: "Events-based pricing",
    startingPrice: "$19/mo",
    highlights: [
      "7-day free trial, no credit card required",
      "Session replay available on Pro plan",
      "Funnels, user journeys, and error tracking included",
      "Self-hosting option available (free)",
    ],
  } satisfies PricingInfo,

  competitorPricing: {
    name: "Simple Analytics",
    model: "Pageview-based pricing",
    startingPrice: "$19/mo",
    highlights: [
      "Starts at 100k pageviews/month",
      "No free tier.14-day trial only",
      "AI assistant included on all plans",
      "Cloud-only, no self-hosting option",
    ],
  } satisfies PricingInfo,

  faqItems: [
    {
      question: "Is Rybbit open source while Simple Analytics is not?",
      answer: "Yes. Rybbit is fully open source under the AGPL v3 license, so you can inspect the code and self-host it. Simple Analytics is proprietary and closed-source with no self-hosting option.",
    },
    {
      question: "What features does Rybbit have that Simple Analytics doesn't?",
      answer: "Rybbit includes session replay, funnel analysis, user journey visualization (Sankey diagrams), Web Vitals monitoring, error tracking, user profiles, city-level geolocation, and organization support. Simple Analytics focuses on simpler metrics with an AI assistant.",
    },
    {
      question: "How does geolocation differ between the two?",
      answer: "Rybbit provides city-level geolocation data, giving you more granular insights into where your visitors are. Simple Analytics only offers country-level data, which limits your ability to understand regional traffic patterns.",
    },
    {
      question: "Are both equally private?",
      answer: "Both are privacy-first and cookie-free with EU data storage. Rybbit adds a daily rotating salt option for extra privacy, ensuring visitor IDs can't be tracked across days. Both are GDPR compliant without requiring consent banners.",
    },
    {
      question: "Can I switch from Simple Analytics to Rybbit easily?",
      answer: "Yes. Add Rybbit's tracking script to your site and data collection begins immediately. You can run both tools in parallel during the transition. Setup takes less than 5 minutes.",
    },
  ] satisfies FAQItem[],

  relatedResources: [
    {
      title: "Rybbit vs Plausible",
      href: "/compare/plausible",
      description: "Compare two privacy-first analytics platforms",
    },
    {
      title: "Rybbit vs Fathom",
      href: "/compare/fathom",
      description: "Open source vs proprietary privacy analytics",
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
