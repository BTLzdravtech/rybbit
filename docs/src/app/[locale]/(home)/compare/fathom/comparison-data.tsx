import { ComparisonSection, FAQItem, PricingInfo, RelatedResource } from "../components/ComparisonPage";

export const fathomComparisonData: ComparisonSection[] = [
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
        name: "Live visitor counter",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "UTM/Campaign tracking",
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
    title: "Privacy & Compliance",
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
        name: "No consent banner needed",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Daily rotating salt option",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "IP anonymization",
        rybbitValue: true,
        competitorValue: true,
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
        name: "Code transparency",
        rybbitValue: "Full",
        competitorValue: "None",
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
        name: "Beautiful UI",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Public dashboards",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Email reports",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
  {
    title: "Technical & Performance",
    features: [
      {
        name: "Script size",
        rybbitValue: "18KB",
        competitorValue: "2KB",
      },
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
        name: "Tech stack",
        rybbitValue: "Typescript/ClickHouse",
        competitorValue: "PHP/Singlestore",
      },
    ],
  },
  {
    title: "Pricing & Support",
    features: [
      {
        name: "Free trial",
        rybbitValue: "7 days",
        competitorValue: false,
      },
      {
        name: "Entry price",
        rybbitValue: "$19/mo",
        competitorValue: "$15/mo",
      },
      {
        name: "Customer support",
        rybbitValue: true,
        competitorValue: true,
      },
    ],
  },
];

export const fathomExtendedData = {
  subtitle: "Both are privacy-first, but Rybbit is open source with session replay, funnels, and self-hosting that Fathom doesn't offer.",

  introHeading: "Why consider Rybbit over Fathom?",
  introParagraphs: [
    "Fathom Analytics is a well-respected privacy-first analytics tool known for its clean interface and cookie-free tracking. It's a solid choice for websites that need simple traffic metrics without the complexity of Google Analytics. But Fathom is intentionally limited to basic web analytics: no session replay, no funnel analysis, no user journey visualization, and it's entirely closed-source with no self-hosting option.",
    "Rybbit shares Fathom's commitment to privacy and simplicity but extends far beyond basic web metrics. You get session replay to see exactly how users interact with your site, funnel analysis to identify conversion bottlenecks, user journey visualization with Sankey diagrams, Web Vitals monitoring, and error tracking. This means you can understand not just how many visitors you get, but how they convert, where they drop off, and what issues they encounter.",
    "Transparency is another major difference. Rybbit is fully open source under the AGPL v3 license, so you can inspect every line of code and self-host on your own infrastructure. Fathom is proprietary and cloud-only, so you're trusting their claims about data handling without the ability to verify. If you love Fathom's privacy-first approach but need deeper analytics, code transparency, and the freedom to self-host, Rybbit gives you all of that.",
  ],

  chooseRybbit: [
    "You want open-source software you can audit and self-host",
    "You need session replay, funnels, and user journey visualization",
    "You want a 7-day free trial to evaluate before committing",
    "You need error tracking and Web Vitals monitoring",
    "You prefer events-based pricing over pageview-based",
    "You want full code transparency (AGPL v3)",
  ],

  chooseCompetitor: [
    "You want the smallest possible tracking script (2KB)",
    "You prefer a more established product with a longer track record",
    "You only need basic pageview and conversion tracking",
    "You don't want to worry about self-hosting or infrastructure",
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
    name: "Fathom",
    model: "Pageview-based pricing",
    startingPrice: "$15/mo",
    highlights: [
      "Starts at 100k pageviews/month",
      "No free tier available",
      "All features included on every plan",
      "Cloud-only, no self-hosting option",
    ],
  } satisfies PricingInfo,

  faqItems: [
    {
      question: "Is Rybbit open source while Fathom is not?",
      answer: "Yes. Rybbit is fully open source under the AGPL v3 license, meaning you can inspect the code, self-host it, and verify exactly how your data is handled. Fathom is proprietary and closed-source, so you have to trust their claims about data handling.",
    },
    {
      question: "What features does Rybbit have that Fathom doesn't?",
      answer: "Rybbit includes session replay, funnel analysis, user journey visualization (Sankey diagrams), Web Vitals monitoring, error tracking, user profiles, and sessions tracking. Fathom focuses on basic pageview and conversion analytics.",
    },
    {
      question: "How does pricing compare between Rybbit and Fathom?",
      answer: "Rybbit starts at $19/month with events-based pricing and a 7-day free trial. Fathom starts at $15/month with pageview-based pricing. Rybbit includes significantly more features at a comparable price point, including session replay, funnels, and error tracking.",
    },
    {
      question: "Can I self-host Rybbit like I can with other tools?",
      answer: "Yes, Rybbit is fully self-hostable. Fathom does not offer self-hosting at all. If data sovereignty and infrastructure control matter to you, Rybbit gives you the option to run everything on your own servers.",
    },
    {
      question: "Is it easy to switch from Fathom to Rybbit?",
      answer: "Yes. Just add Rybbit's script tag to your site and data starts collecting immediately. You can run both in parallel during the transition. The setup takes less than 5 minutes.",
    },
  ] satisfies FAQItem[],

  relatedResources: [
    {
      title: "Rybbit vs Plausible",
      href: "/compare/plausible",
      description: "Compare two privacy-first analytics platforms",
    },
    {
      title: "Rybbit vs Simple Analytics",
      href: "/compare/simpleanalytics",
      description: "Feature-rich vs minimal analytics",
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
