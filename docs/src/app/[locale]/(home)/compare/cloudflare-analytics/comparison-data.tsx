import { ComparisonSection, FAQItem, PricingInfo, RelatedResource } from "../components/ComparisonPage";

export const cloudflareAnalyticsComparisonData: ComparisonSection[] = [
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
        name: "Live visitors counter",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Real-time globe view",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Visit duration metrics",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Bounce rate tracking",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Entry/exit pages",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "UTM campaign tracking",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Custom events with attributes",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Conversion goals",
        rybbitValue: true,
        competitorValue: false,
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
        name: "Web Vitals dashboard",
        rybbitValue: true,
        competitorValue: true,
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
    title: "Data & Accuracy",
    features: [
      {
        name: "Data sampling",
        rybbitValue: "No sampling",
        competitorValue: "10% sample",
      },
      {
        name: "Data retention",
        rybbitValue: "2-5+ years",
        competitorValue: "6 months",
      },
      {
        name: "Unique visitor tracking",
        rybbitValue: "Accurate",
        competitorValue: "Overcounts",
      },
      {
        name: "Bot filtering",
        rybbitValue: true,
        competitorValue: "Minimal",
      },
      {
        name: "Dashboard item limits",
        rybbitValue: "Unlimited",
        competitorValue: "Top 15 only",
      },
      {
        name: "Geolocation detail",
        rybbitValue: "City-level",
        competitorValue: "Country-level",
      },
    ],
  },
  {
    title: "Implementation & Setup",
    features: [
      {
        name: "One-line installation",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Works without CDN",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Self-hostable",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Multiple domain tracking",
        rybbitValue: true,
        competitorValue: "Limited",
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
        name: "Daily rotating salt option",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "100% data ownership",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Open source",
        rybbitValue: true,
        competitorValue: false,
      },
    ],
  },
  {
    title: "Support & Business Model",
    features: [
      {
        name: "Customer support",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Dedicated product focus",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "API access",
        rybbitValue: true,
        competitorValue: false,
      },
      {
        name: "Team collaboration",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Organization support",
        rybbitValue: true,
        competitorValue: true,
      },
      {
        name: "Live demo available",
        rybbitValue: true,
        competitorValue: false,
      },
    ],
  },
];

export const cloudflareAnalyticsExtendedData = {
  subtitle: "Cloudflare Analytics is free but limited — Rybbit gives you accurate, unsampled data with the features you actually need.",

  chooseRybbit: [
    "You need 100% accurate data without sampling (Cloudflare uses 10% samples)",
    "You want full analytics features: UTM tracking, custom events, goals, funnels",
    "You need session replay and user journey visualization",
    "You want 2-5+ years of data retention instead of 6 months",
    "You need analytics that works without Cloudflare CDN lock-in",
    "You want open-source software you can self-host",
  ],

  chooseCompetitor: [
    "You already use Cloudflare CDN and want zero-cost basic analytics",
    "You only need a high-level traffic overview",
    "You don't need custom events, goals, or conversion tracking",
    "You want analytics with absolutely no setup beyond DNS",
    "Basic Web Vitals monitoring is all you need",
  ],

  rybbitPricing: {
    name: "Rybbit",
    model: "Events-based pricing",
    startingPrice: "$19/mo",
    highlights: [
      "7-day free trial, no credit card required",
      "All features included on every plan",
      "100% unsampled, accurate data",
      "2-5+ years data retention",
    ],
  } satisfies PricingInfo,

  competitorPricing: {
    name: "Cloudflare Analytics",
    model: "Free (bundled with CDN)",
    startingPrice: "Free",
    highlights: [
      "Included free with Cloudflare CDN",
      "Only 10% sampled data (not accurate)",
      "6-month data retention limit",
      "No custom events, goals, or funnels",
    ],
  } satisfies PricingInfo,

  faqItems: [
    {
      question: "Why is Cloudflare Analytics data inaccurate?",
      answer: "Cloudflare Analytics samples only about 10% of your traffic and extrapolates the rest. This means visitor counts are often significantly overcounted and you can't trust the exact numbers. Rybbit processes 100% of your events with no sampling.",
    },
    {
      question: "Do I need Cloudflare CDN to use Cloudflare Analytics?",
      answer: "Yes. Cloudflare Analytics requires routing your DNS through Cloudflare. Rybbit works with any website regardless of CDN or hosting provider — just add a single script tag.",
    },
    {
      question: "What features does Cloudflare Analytics lack?",
      answer: "Cloudflare Analytics doesn't support custom events, conversion goals, UTM campaign tracking, session replay, funnels, user journeys, bounce rate, visit duration, entry/exit pages, or an API. It only provides basic traffic metrics with sampled data.",
    },
    {
      question: "How long does Cloudflare keep my data?",
      answer: "Cloudflare retains analytics data for only 6 months. Rybbit retains data for 2-5+ years depending on your plan, and you can export your data at any time.",
    },
    {
      question: "Can I use Rybbit alongside Cloudflare Analytics?",
      answer: "Yes. Many teams add Rybbit for detailed analytics while keeping Cloudflare for basic CDN-level traffic monitoring. Just add Rybbit's script tag to your site — it works alongside any other analytics tool.",
    },
  ] satisfies FAQItem[],

  relatedResources: [
    {
      title: "Rybbit vs Google Analytics",
      href: "/compare/google-analytics",
      description: "The privacy-first alternative to GA4",
    },
    {
      title: "Rybbit vs Matomo",
      href: "/compare/matomo",
      description: "Modern analytics vs the legacy GA alternative",
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
