import profileImage from "@/assets/profile.png";
import logoApollo from "@/assets/logo_apollo.png";
import logoManipal from "@/assets/logo_manipal.png";
import logoNarayana from "@/assets/logo_narayana.png";
import logoTvs from "@/assets/logo_tvs.png";

export const contact = {
  name: "Nitish Narayanan",
  role: "Solution Engineering Chapter Lead",
  email: "nitishnarayanan002@gmail.com",
  phone: "+91 81212 99705",
  linkedin: "https://www.linkedin.com/in/nitish-narayanan/",
  linkedinLabel: "linkedin.com/in/nitish-narayanan",
  github: "https://github.com/nitishnarayanan002",
  githubLabel: "github.com/nitishnarayanan002",
  resume: "/Nitish_Narayanan_Resume.pdf",
  profileImage,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Claude Studio", href: "#claude-studio" },
  { label: "AI Portfolio", href: "#ai-portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const currently = [
  "Solution Engineering Chapter Lead",
  "Enterprise SaaS · CPaaS · Agentic AI",
  "Outcome-led selling, not feature-led",
  "10+ years turning tech into business impact",
];

export const heroParagraph =
  "Enterprise SaaS leader with 10+ years driving measurable customer outcomes. I lead the Solution Engineering Chapter at Infobip, designing CPaaS, Generative & Agentic AI solutions for enterprises across healthcare, automotive and retail.";

export const marqueeItems = [
  "Solution Engineering",
  "Agentic AI",
  "Conversational CX",
  "CPaaS",
  "Generative AI",
  "WhatsApp Business",
  "Outcome Selling",
  "Healthcare CX",
  "Automotive CX",
  "Retail CX",
  "Claude Code",
  "GTM Strategy",
];

export const aboutIntro = [
  "A decade in, one consistent obsession: turning communication technology into measurable business outcomes — not just implementations, but results that show up in customer journeys and enterprise deals. I lead the Solution Engineering Chapter at Infobip in a player-coach model, with a team of six Solution Engineers across North and South India. I started out selling cloud contact-centre solutions at Ozonetel, so I've sat on every side of the enterprise table.",
  "Today my focus is agentic AI for customer engagement, WhatsApp automation and voice AI integrations. I build with Claude Code myself — the AI-assisted pre-call research and demo-preparation workflow I built is now used as a demo-preparation skill by Solution Engineering teams at Infobip HQ — and I coach my team to ship the same way. I'm pursuing an Executive PG in ML & AI at IIIT Bangalore because SE leaders of the next five years need to understand AI architecturally, not just commercially.",
];

/* Every number here is backed by the resume — client-reported or team-scale facts,
   no win-rate or cycle-time claims. */
export const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years in enterprise SaaS",
    sub: "CPAAS · CONVERSATIONAL AI · CX",
  },
  {
    value: 6,
    suffix: "",
    label: "Solution Engineers led",
    sub: "NORTH & SOUTH INDIA · PLAYER-COACH",
  },
  {
    value: 49,
    suffix: "%",
    label: "More bookings with WhatsApp Flows",
    sub: "APOLLO 24|7 · VS STANDARD CHATBOT",
  },
  {
    value: 2,
    suffix: "×",
    label: "Awards",
    sub: "ORANGE STAR & BIPSTAR · INFOBIP · 2023 & 2024",
  },
];

export type Role = {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const roles: Role[] = [
  {
    company: "Infobip",
    location: "Bengaluru",
    title: "Solution Engineering Chapter Lead",
    period: "JUL 2025 — PRESENT",
    bullets: [
      "Lead a team of six Solution Engineers across North and South India in a player-coach model — hands-on with accounts while coaching the team to shift from feature-led pitching to outcome-led selling.",
      "Built an AI-assisted pre-call research and demo-preparation workflow with Claude Code: for each target account it compiles recent news, the solutions already in use, and objection-handling guidance. Infobip HQ adopted it as a demo-preparation skill for Solution Engineering teams.",
      "Cut demo preparation from 2–3 days (sometimes a week) to hours by replacing chatbot builds with HTML mockups that show clients how their solution looks in production — freeing Solution Engineers for discovery and design.",
      "Introduced AI into daily SE work: the team now builds its own dashboards, reports and prototypes with Claude Code.",
      "Designed the architecture for integrating Voice AI providers with Infobip SIP trunks, documented as a reference for Presales and Sales teams.",
      "Partner with CXOs in healthcare, retail and automotive to co-design CPaaS and AI solutions.",
    ],
    tags: ["LEADERSHIP", "PLAYER-COACH", "AI ADOPTION", "AGENTIC AI"],
  },
  {
    company: "Infobip",
    location: "Bengaluru",
    title: "Principal Solutions Engineer",
    period: "APR 2022 — JUL 2025",
    bullets: [
      "Owned solution design and value delivery for CPaaS and AI-enabled customer engagement across healthcare, automotive and retail.",
      "Lead Solution Engineer for all Google Business Messages and RCS clients, supporting client growth in both channels within a single year.",
      "Apollo 24|7 — sole Solution Engineer on the account: drove solution design and implementation with Infobip's CX consultants and integration partners. Delivered WhatsApp Flows for booking and lab-test journeys that drove 49% more bookings and 72% higher revenue per order than the standard chatbot flow, and reduced care-centre call volume by 20%.",
      "Manipal Hospitals — redesigned the international patient enquiry journey across WhatsApp and voice after diagnosing where enquiries dropped off. Delivered on Infobip CCaaS with a chatbot for automated patient messages, plus marketing automation for appointment nudges and reminders.",
      "TVS Automobiles — sole Solution Engineer through discovery and solution design: shaped a bot-driven service flow that lets customers find their nearest dealer and book a service visit. Around 1,000 dealer service bookings in its first month, up from roughly 30–35 before launch.",
    ],
    tags: ["SOLUTION DESIGN", "CPAAS", "AI ENGAGEMENT"],
  },
  {
    company: "Infobip",
    location: "Bengaluru",
    title: "Senior Presales Engineer",
    period: "DEC 2020 — APR 2022",
    bullets: [
      "Established Infobip's Google CPaaS presales practice in India, building the technical foundation for Google Business Messages, vSMS and RCS adoption before these channels reached mainstream enterprise use.",
      "Primary Client Solutions Engineer for Google's channels across India — solution design, integration feasibility and phased rollout plans for enterprise clients.",
      "Consulted enterprise clients across South India on digital communication transformation, from product-market fit through to implementation planning.",
      "Turned competitive intelligence and industry trend analysis into sales-ready material for enterprise deal conversations and SE enablement sessions.",
      "Developed project scopes and delivery plans with cross-functional teams, keeping solutions technically feasible and on schedule.",
    ],
    tags: ["PRESALES", "GOOGLE CPAAS", "ENABLEMENT"],
  },
  {
    company: "Infobip",
    location: "Zagreb, Croatia",
    title: "Client Solutions Engineer",
    period: "NOV 2019 — DEC 2020",
    bullets: [
      "Based at Infobip's headquarters in Zagreb as the central technical resource for Voice and IoT solutions across APAC, LATAM and India.",
      "Go-to expert for Voice and IoT product lines: product education, technical solutioning and post-sales support to Presales Engineers and clients across three regions.",
      "Identified new use cases and integration patterns for Voice and IoT, turning client needs into product improvement inputs for the roadmap.",
      "Worked with Product Owners to keep product documentation accurate and feed regional field feedback into roadmap decisions.",
      "Co-designed solutions with regional Presales and Sales teams, supporting enterprise deal closures across international markets.",
    ],
    tags: ["VOICE", "IOT", "GLOBAL SUPPORT"],
  },
  {
    company: "Infobip",
    location: "Bengaluru",
    title: "Enterprise Presales Engineer",
    period: "SEP 2018 — NOV 2019",
    bullets: [
      "Owned the full RFP and RFI process for enterprise tenders — technical responses, documentation and cross-team sign-off.",
      "Designed solution architectures and proof-of-concept builds to validate technical fit before sales commitments.",
      "Conducted feasibility analysis before each implementation, setting realistic delivery expectations and reducing technical risk.",
      "Acted as project manager during implementation, bridging Sales, Product and Client teams to deliver on time and in scope.",
      "Identified expansion opportunities in post-sales engagements to grow client usage beyond initial deployments.",
    ],
    tags: ["RFP/RFI", "PROOF OF CONCEPT", "DELIVERY"],
  },
  {
    company: "Ozonetel Communications",
    location: "Mumbai",
    title: "Technical Sales Manager & Channel Partnership",
    period: "MAR 2016 — AUG 2018",
    bullets: [
      "Managed end-to-end technical sales and channel partnerships for Ozonetel's cloud communications platform across Mumbai and Ahmedabad — cloud telephony and contact-centre products.",
      "Owned the full sales cycle: discovery, product demonstration, solution scoping, pricing and proposal delivery.",
      "Managed telecom operator and channel partner relationships, building a partner ecosystem that extended Ozonetel's market reach.",
      "Responded to RFPs and RFIs from enterprise prospects — technical documentation and client-facing presentations for complex deals.",
      "Contributed to product marketing with demo videos and product blogs.",
    ],
    tags: ["CLOUD TELEPHONY", "PARTNERSHIPS", "FULL SALES CYCLE"],
  },
];

export type CaseStudy = {
  index: string;
  industry: string;
  name: string;
  logo?: string;
  mark?: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    industry: "Healthcare",
    name: "Apollo 24|7",
    logo: logoApollo,
    challenge: "Patient communication bottleneck in diagnostic query handling.",
    solution:
      "WhatsApp Flows for booking and lab-test journeys, delivered as sole Solution Engineer with Infobip's CX consultants and integration partners.",
    outcome:
      "49% more bookings and 72% higher revenue per order than the standard chatbot flow — and care-centre call volume down 20%.",
  },
  {
    index: "02",
    industry: "Healthcare",
    name: "Manipal Hospitals",
    logo: logoManipal,
    challenge: "International patient enquiries dropping off across WhatsApp and voice.",
    solution:
      "Redesigned the enquiry journey on Infobip CCaaS — a chatbot for automated patient messages plus marketing automation for appointment nudges and reminders.",
    outcome:
      "Improved no-show rates, enhanced patient engagement and operational efficiency.",
  },
  {
    index: "03",
    industry: "Healthcare",
    name: "Narayana Health",
    logo: logoNarayana,
    challenge: "Fragmented patient engagement across multiple geographies and languages.",
    solution: "Omnichannel patient platform with multilingual support.",
    outcome: "Scaled from 5 to 15+ centers on a single platform.",
  },
  {
    index: "04",
    industry: "Automotive",
    name: "TVS Automobiles",
    logo: logoTvs,
    challenge: "Lead routing inefficiencies and slow service coordination.",
    solution:
      "Bot-driven dealer discovery and service booking flow, shaped as sole Solution Engineer through discovery and design.",
    outcome:
      "Around 1,000 dealer service bookings in the first month, up from roughly 30–35 before launch.",
  },
  {
    index: "05",
    industry: "Retail",
    name: "Puma",
    mark: "P",
    challenge: "Post-sales communication was scattered across channels and lost personalisation.",
    solution:
      "Deployed a post-sales chatbot to address order tracking, cancellations and delivery ETAs. Paired with a marketing automation layer on the website pushing auto-messages for order confirmation and item intimation.",
    outcome:
      "Reduced RTO, improved order management, and re-targeted customers with personalised offers.",
  },
  {
    index: "06",
    industry: "Retail",
    name: "Nike",
    mark: "N",
    challenge:
      "Nike was running the After Dark Tour (women-only) in India for the first time and needed accurate information delivery plus 3-month pre-run engagement for participants.",
    solution:
      "Deployed a chatbot covering venue details, joining instructions, AMA sessions with trainers, and personalised WhatsApp video messages to each participant.",
    outcome:
      "5,000+ runners participated on event day with all communication on WhatsApp. The model was replicated for LATAM and UK editions.",
  },
  {
    index: "07",
    industry: "Retail · Consumer Electronics",
    name: "LG",
    mark: "L",
    challenge: "Gaps in post-sales engagement after appliance purchase.",
    solution:
      "Automated WhatsApp journeys triggered on every order — covering installation scheduling and AMC offer nudges via the LG official channel.",
    outcome:
      "20% uplift in AMC selling within first 6 months. Instant brand-verified communication improved customer trust and timely installation.",
  },
  {
    index: "08",
    industry: "BFSI",
    name: "BankBazaar",
    mark: "B",
    challenge:
      "Customer engagement campaigns struggled with low click-through and channel fatigue on traditional SMS.",
    solution:
      "Onboarded BankBazaar onto RCS Business Messaging through Infobip — rich, branded conversational campaigns directly inside the messaging inbox.",
    outcome: "130% higher click-through rate on customer engagement campaigns post-rollout.",
  },
];

export const studioIntro =
  "As Solution Engineering Chapter Lead, I don't just sell automation — I ship it. Over the last few months I've built a personal Claude Code studio: a library of reusable AI Skills + client-specific deployments that compress how an enterprise SE team discovers, designs and delivers solutions.";

export const studioStats = [
  { value: 140, suffix: "+", label: "Artefacts shipped" },
  { value: 89, suffix: "", label: "YAML configs · bots, tools, agents" },
  { value: 26, suffix: "", label: "Python scripts · generate · deploy" },
  { value: 12, suffix: "", label: "Custom Claude skills" },
  { value: 6, suffix: "", label: "Enterprise client builds" },
  { value: 20, suffix: "+", label: "Internal dashboards & POCs" },
];

export const studioSkills = [
  {
    category: "Demo Automation",
    path: "/ai-agentic-demo-generator",
    name: "AI Agentic Demo Generator",
    highlight: false,
    description:
      "Researches a prospect company, analyses their website, journeys, chatbots and FAQs, and autonomously picks the 1–2 highest-impact use cases — outputting a demo-ready markdown brief with tool specs.",
  },
  {
    category: "AgentOS",
    path: "/chatbot-builder",
    name: "Chatbot Builder",
    highlight: true,
    description:
      "Builds and deploys a WhatsApp / RCS conversational chatbot from a use-case flow output. Wires up the Infobip AI Agents + Answers plugins with mock tools end-to-end.",
  },
  {
    category: "Account Research",
    path: "/company-intelligence",
    name: "Company Intelligence",
    highlight: false,
    description:
      "Generates a visual Word (.docx) intelligence report with charts, KPI boxes, timelines and RAG-rated challenge tables for target companies and markets.",
  },
  {
    category: "Risk · Compliance",
    path: "/compliance-checker",
    name: "Compliance Checker",
    highlight: false,
    description:
      "Validates regulatory requirements for messaging campaigns across geographies and channels before they hit production.",
  },
  {
    category: "Solution Design",
    path: "/flow-architect",
    name: "Flow Architect",
    highlight: false,
    description:
      "Creates detailed technical flow specifications — API calls, data mapping, error handling and deployment steps — from a single brief.",
  },
  {
    category: "GTM Strategy",
    path: "/infobip-capability-mapper",
    name: "Infobip Capability Mapper",
    highlight: false,
    description:
      "Maps Infobip's full product portfolio to a company's needs based on industry, use-case and geography in one pass.",
  },
  {
    category: "Business Case",
    path: "/roi-strategy-builder",
    name: "ROI Strategy Builder",
    highlight: true,
    description:
      "Builds a compelling business case and ROI strategy for Infobip AgentOS adoption — investment breakdown, revenue projections, roadmap, and a 90-day quick-win plan.",
  },
  {
    category: "Team Ops",
    path: "/se-dashboard",
    name: "SE Dashboard",
    highlight: false,
    description:
      "Generates a self-contained HTML pipeline dashboard for the SE team straight from live Salesforce data — per-quarter breakdowns and optional SE hours tracking.",
  },
  {
    category: "Team Ops",
    path: "/se-weekly-snapshot",
    name: "SE Weekly Snapshot",
    highlight: false,
    description:
      "Pulls fresh Salesforce data via the Infobip SF MCP and produces the SE team's weekly Word snapshot — no manual stitching.",
  },
  {
    category: "Knowledge",
    path: "/session-summarizer",
    name: "Session Summarizer",
    highlight: false,
    description:
      "Scans every output file created across sessions and produces a concise summary organised by company, skill and date.",
  },
  {
    category: "Solution Design",
    path: "/use-case-designer",
    name: "Use-Case Designer",
    highlight: false,
    description:
      "Designs marketing or support campaign flows with triggers, journeys, message examples and success metrics ready for review.",
  },
  {
    category: "Client Specific",
    path: "/manipal-hospitals",
    name: "Manipal Hospitals Skill",
    highlight: false,
    description:
      "A client-specific skill encapsulating Manipal's patient flows, channel preferences and operational constraints for faster solution turnaround.",
  },
];

export const clientBuilds = [
  {
    name: "Dominos India",
    meta: "17 files",
    description:
      "End-to-end chatbot orchestrator manifests: use cases, agent attributes, dialogs, and Python tools for customer context, menus and store information.",
  },
  {
    name: "Policybazaar",
    meta: "98 files",
    description:
      "The largest single build — 98 artefacts defining chatbot state, attributes, dialogs and multiple specialised reference branches for an insurance-grade journey.",
  },
  {
    name: "RareRabbit",
    meta: "12 files",
    description:
      "Agent configurations for style advisor, support, rewards concierge and store locator — plus web-crawling, loyalty and event-push tools.",
  },
  {
    name: "Country Delight",
    meta: "4 files",
    description:
      "Company intelligence report, Infobip capability mapping and flow specifications for D2C subscription engagement.",
  },
];

export const workspaceChips = [
  "AgentOS GTM Analysis",
  "AI Costs Report",
  "Infobip Status",
  "AI Adoption Report",
  "Internal Agents Platform — Executive Overview",
  "Voice SBC Global Overview",
  "DevDays 2026 — AI Tips & Tricks",
  "Customer Intent on SF from ZoomInfo",
  "DevDays 2026 — Infobip",
  "Platform Operations — Connectivity Team",
  "Observability Dashboard POC",
  "Sales Transcript Analysis",
  "Support QBR Showcase",
  "AgentOS Pricing",
  "AgentOS Incidents Overview",
  "AgentOS Workshop — Live Presentation",
  "Workshop Demo",
  "AgentOS Self-Service Tracker",
  "AgentOS Pricing for Partners",
  "AgentOS Selected Accounts — EMEA",
];

export const aiProjects = [
  {
    featured: true,
    path: "/jupyter-notebook",
    name: "Sales Forecasting for Rossmann",
    description:
      "End-to-end sales forecasting for Rossmann stores using SARIMAX and XGBoost. Includes EDA, time-series analysis, model pivoting, and 6-week forecasts with <5% MAPE.",
    tags: ["SARIMAX", "XGBoost", "Time-Series", "Forecasting", "Retail Analytics", "Scikit-Learn", "Statsmodels"],
  },
  {
    featured: true,
    path: "/jupyter-notebook",
    name: "RAG on Myntra Dataset",
    description:
      "Retrieval-Augmented Generation on the Myntra dataset (Kaggle). Demonstrates vector embeddings, re-ranking and generation layer with Perplexity APIs.",
    tags: ["RAG", "Vector Embeddings", "Re-Ranking", "Perplexity API"],
  },
  {
    featured: false,
    path: "/jupyter-notebook",
    name: "Semantic Spotter — Myntra",
    description:
      "Semantic Spotter project on Myntra dataset (Kaggle) — semantic search over product catalogues.",
    tags: ["Semantic Search", "NLP", "Kaggle"],
  },
  {
    featured: false,
    path: "/jupyter-notebook",
    name: "Identifying Key Entities — Recipe Data",
    description:
      "Named-Entity Recognition starter network on recipe data — extracting ingredients, quantities and cooking actions.",
    tags: ["NER", "NLP", "Neural Networks"],
  },
  {
    featured: false,
    path: "/jupyter-notebook",
    name: "Car Sales Price Prediction",
    description:
      "Predicting the overall amount a customer will spend on a vehicle from features such as age, salary, credit card debt, and net worth.",
    tags: ["Regression", "Feature Engineering"],
  },
  {
    featured: false,
    path: "/jupyter-notebook",
    name: "Bike-Sharing Demand",
    description:
      "Statistical modelling of factors influencing BoomBikes bike-sharing demand post-pandemic to optimise business strategy.",
    tags: ["Linear Regression", "EDA", "Demand Forecasting"],
  },
  {
    featured: false,
    path: "/jupyter-notebook",
    name: "Waste Segregation",
    description: "Classification model for waste segregation built in a Jupyter notebook.",
    tags: ["Classification", "Computer Vision"],
  },
  {
    featured: false,
    path: "/javascript",
    name: "Media Link Generator",
    description: "A JavaScript utility for generating shareable media links.",
    tags: ["JavaScript", "Tooling"],
  },
  {
    featured: false,
    path: "/jupyter-notebook",
    name: "Lending Case Study",
    description:
      "Risk analytics in banking and financial services — using data to minimise the risk of losing money while lending to consumers.",
    tags: ["Risk Analytics", "Banking", "EDA"],
  },
];

export const capabilities = [
  {
    title: "Customer Value & GTM",
    items: [
      "Customer Value Lifecycle",
      "Value Assessment",
      "Business Case Development",
      "Solution Architecture",
      "Outcome Selling",
      "GTM Strategy",
    ],
  },
  {
    title: "Leadership & Team",
    items: [
      "Team Building",
      "Talent Mentorship",
      "Cross-Functional Leadership",
      "Recruitment",
      "Player-Coach Leadership",
    ],
  },
  {
    title: "Technical Expertise",
    items: [
      "CPaaS Platforms",
      "Cloud Communications",
      "WhatsApp Business API",
      "Conversational AI",
      "Generative AI",
      "Agentic AI",
      "Anthropic Claude",
      "Claude Code",
      "Integration Architecture",
    ],
  },
  {
    title: "Industry Verticals",
    items: ["Healthcare CX", "Automotive Solutions", "Retail", "Financial Services"],
  },
];

export const education = [
  {
    title: "Executive PG Programme in Machine Learning & Artificial Intelligence",
    school: "International Institute of Information Technology Bangalore · with upGrad",
    period: "2024 — 2026",
  },
  {
    title: "Master of Business Administration (MBA), Marketing",
    school: "IBS Hyderabad",
    period: "2014 — 2016",
  },
  {
    title: "Bachelor of Engineering (B.E.), Mechanical Engineering",
    school: "KLE College of Engineering & Technology",
    period: "2009 — 2013",
  },
];

export const certifications = [
  "Executive Post Graduate Programme in Machine Learning and Artificial Intelligence — IIIT Bangalore & upGrad (2024 — 2026)",
  "IBM Enterprise Design Thinking Practitioner",
  "IBM New Collar Professional Skills",
  "API and Webservice Introduction",
];

export const awards = [
  {
    title: "Orange Star Award",
    year: "2024",
    org: "Infobip",
    detail: "Recognition for consistent performance and customer value delivery.",
  },
  {
    title: "Orange Star Award & BipStar Award",
    year: "2023",
    org: "Infobip",
    detail: "Recognition for consistent performance and cross-functional impact.",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Tamil", level: "Native" },
  { name: "Gujarati", level: "Conversational" },
];

export const contactPitch =
  "Open to conversations on enterprise AI adoption, SE team building, CPaaS strategy, agentic CX — or any interesting problem at the intersection of technology and customer experience. Whether you're hiring for SE leadership, AI strategy or want to brainstorm a use case — I reply to every message.";
