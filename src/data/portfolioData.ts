import type { Project, ExperienceItem, SkillCategory, AchievementItem, MarketingPlatform } from '../types';

export const personalInfo = {
  name: "Shyam Sundar K",
  wordmark: "SHYAM SUNDAR®",
  brandConcept: "Creative ideas meet data. Digital experiences become opportunities. Growth begins with curiosity.",
  role: "Digital Marketing Executive",
  company: "Marvice",
  location: "Bengaluru, Karnataka, India",
  email: "shyam22ww@gmail.com",
  phone: "+91 9600321018",
  phoneFormatted: "+91 96003 21018",
  education: {
    degree: "B.Tech in Computer Science and Business Systems",
    college: "Knowledge Institute of Technology",
    period: "2022–2026",
    cgpa: "7.2"
  },
  careerDirection: "Performance Marketing",
  heroCopy: {
    introLabel: "DIGITAL MARKETING EXECUTIVE / BENGALURU, INDIA",
    headlineLine1: "CREATIVE",
    headlineLine2: "MINDS.",
    headlineLine3: "DATA-DRIVEN",
    headlineLine4: "MOVES.",
    positioningLine: "Building my path from digital marketing to performance-driven growth.",
    supporting: "I'm Shyam Sundar K, a Digital Marketing Executive at Marvice in Bengaluru. I bring together creative thinking, digital advertising, analytics, and a technical foundation as I continue developing toward performance marketing.",
    currentBadge: "CURRENTLY · DIGITAL MARKETING EXECUTIVE AT MARVICE",
    imageAnnotation: "CREATIVE MINDSET / ANALYTICAL CURIOSITY"
  },
  aboutCopy: {
    eyebrow: "01 / THE PERSON BEHIND THE CAMPAIGNS",
    headline: "Marketing meets a mind built for technology.",
    p1: "I'm Shyam Sundar K, a Digital Marketing Executive at Marvice in Bengaluru. My background in Computer Science and Business Systems shapes the way I approach digital experiences, problem-solving, and new ideas.",
    p2: "My interests span digital advertising, content, social media, SEO fundamentals, and analytics. I'm particularly interested in performance marketing because it connects creative strategy with measurement, experimentation, and continuous improvement.",
    p3: "I'm building my career by learning how digital campaigns work, how audiences respond, and how better decisions can come from better insights.",
    personalDetail: "Outside digital marketing, I enjoy university-level football, Python, data science, web development, and learning Japanese."
  },
  pillars: [
    { number: "01", label: "CREATIVITY", desc: "Audience-first messaging, ad copywriting, and conceptual hooks." },
    { number: "02", label: "DATA", desc: "GA4 behavioral tracking, UTM attribution, and campaign diagnostics." },
    { number: "03", label: "GROWTH", desc: "Disciplined testing, iterative optimization, and technical curiosity." }
  ],
  connectedKeywords: [
    "CREATIVE THINKING",
    "DIGITAL ADVERTISING",
    "AUDIENCE INSIGHTS",
    "ANALYTICAL CURIOSITY",
    "CONTINUOUS LEARNING"
  ]
};

export const floatingChips = [
  { label: "DIGITAL ADS", color: "#37E7FF", border: "rgba(55, 231, 255, 0.4)", position: "top-2 -left-4 sm:-left-8", delay: "0s" },
  { label: "META ADS", color: "#9A6BFF", border: "rgba(154, 107, 255, 0.4)", position: "top-20 -right-2 sm:-right-8", delay: "1.2s" },
  { label: "GOOGLE ADS", color: "#D7FF62", border: "rgba(215, 255, 98, 0.4)", position: "bottom-28 -left-3 sm:-left-6", delay: "2.1s" },
  { label: "GOOGLE ANALYTICS", color: "#37E7FF", border: "rgba(55, 231, 255, 0.4)", position: "bottom-10 -right-2 sm:-right-6", delay: "0.8s" },
  { label: "CREATIVE THINKING", color: "#FF6B9A", border: "rgba(255, 107, 154, 0.4)", position: "top-44 -left-4 sm:-left-10", delay: "1.8s" },
  { label: "PERFORMANCE MARKETING", color: "#D7FF62", border: "rgba(215, 255, 98, 0.4)", position: "-bottom-4 left-1/4", delay: "2.6s" }
];

export const marketingPlatforms: MarketingPlatform[] = [
  {
    id: "meta-ads",
    name: "Meta Ads",
    category: "Paid Social Advertising",
    badge: "Active Platform Exposure",
    brandColor: "#0081FB",
    accentBg: "rgba(0, 129, 251, 0.12)",
    roleInStack: "Campaign Hierarchy & Audience Targeting",
    description: "Hands-on exposure configuring campaign goals, ad sets, lookalike audience structures, and testing ad formats.",
    capabilities: [
      "Campaign objective alignment (Traffic & Engagement)",
      "Ad creative testing (Carousel & Single Image)",
      "Audience targeting & demographic segmentation",
      "Ads Manager reporting & metric observation"
    ]
  },
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Search & Intent Marketing",
    badge: "Active Platform Exposure",
    brandColor: "#4285F4",
    accentBg: "rgba(66, 133, 244, 0.12)",
    roleInStack: "Search Intent & Match Types",
    description: "Practical knowledge of high-intent search query structure, keyword match logic, and ad extensions.",
    capabilities: [
      "Keyword research & match type exploration",
      "Search ad headline and description drafting",
      "Negative keyword structuring",
      "Quality score fundamentals"
    ]
  },
  {
    id: "google-analytics",
    name: "Google Analytics (GA4)",
    category: "Telemetry & Attribution",
    badge: "Active Platform Exposure",
    brandColor: "#E37400",
    accentBg: "rgba(227, 116, 0, 0.12)",
    roleInStack: "Event Models & User Journeys",
    description: "Using GA4 to monitor user acquisition channels, event engagements, session duration, and traffic sources.",
    capabilities: [
      "User acquisition & traffic source analysis",
      "Standard GA4 event monitoring",
      "UTM parameter validation for campaigns",
      "Engagement rate & bounce diagnostics"
    ]
  },
  {
    id: "google-search-console",
    name: "Google Search Console",
    category: "Organic Search & Indexing",
    badge: "Foundational / Active Learning",
    brandColor: "#0F9D58",
    accentBg: "rgba(15, 157, 88, 0.12)",
    roleInStack: "Organic Discovery & Queries",
    description: "Inspecting organic search impressions, average position trends, and on-page indexing health.",
    capabilities: [
      "Query click-through & impressions review",
      "Indexing status & crawl oversight",
      "Organic keyword performance trends"
    ]
  },
  {
    id: "canva",
    name: "Canva",
    category: "Creative Production",
    badge: "Active Platform Exposure",
    brandColor: "#00C4CC",
    accentBg: "rgba(0, 196, 204, 0.12)",
    roleInStack: "Rapid Social & Ad Assets",
    description: "Designing fast-turnaround visual assets, social creatives, and promotional banners for digital distribution.",
    capabilities: [
      "Platform-specific aspect ratios (1:1, 9:16)",
      "Visual hierarchy & typographical layout",
      "Brand consistency & color styling"
    ]
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX & Creative Strategy",
    badge: "Technical Tooling",
    brandColor: "#F24E1E",
    accentBg: "rgba(242, 78, 30, 0.12)",
    roleInStack: "Wireframing & Storyboarding",
    description: "Prototyping landing page layouts, creative ad storyboard concepts, and user conversion flows.",
    capabilities: [
      "Landing page section wireframing",
      "Ad storyboard concepts & layout systems",
      "Interactive component design"
    ]
  },
  {
    id: "html-css",
    name: "HTML5 & CSS3",
    category: "Web Infrastructure",
    badge: "Technical Tooling",
    brandColor: "#E44D26",
    accentBg: "rgba(228, 77, 38, 0.12)",
    roleInStack: "On-Page Optimization & DOM",
    description: "Understanding web document structure, meta tags, responsive behavior, and technical SEO hygiene.",
    capabilities: [
      "Semantic HTML & Open Graph markup",
      "Responsive layout debugging",
      "Core Web Vitals awareness"
    ]
  }
];

export const performanceFocusAreas = [
  {
    number: "01",
    title: "AUDIENCE & STRATEGY",
    summary: "Understanding audiences, communication, creative messaging, and campaign objectives.",
    details: [
      "Defining target buyer intent & customer journey stages",
      "Structuring creative messaging hooks tailored to awareness levels",
      "Aligning content calendars with commercial objectives",
      "Connecting value propositions with ad-copy angles"
    ],
    status: "Active Practice & Planning",
    glowColor: "#37E7FF"
  },
  {
    number: "02",
    title: "PAID MEDIA",
    summary: "Building on exposure to Meta Ads and Google Ads, developing knowledge of campaign structures, targeting, and paid-media fundamentals.",
    details: [
      "Campaign hierarchy: Objectives, Ad Sets, and Creative Variants",
      "Meta Ads Manager: Custom audience and interest targeting logic",
      "Google Ads: Search intent mapping, match types, and ad assets",
      "Creative variant testing for scroll-stopping hooks"
    ],
    status: "Platform Exposure & Learning",
    glowColor: "#9A6BFF"
  },
  {
    number: "03",
    title: "MEASUREMENT",
    summary: "Using Google Analytics and reporting tools to understand digital behavior, traffic, and campaign activity.",
    details: [
      "GA4 user engagement tracking & event attribution models",
      "Traffic breakdown across organic, direct, referral, and paid",
      "Consistent UTM tagging protocols for campaign reporting",
      "Behavioral drop-off analysis to identify friction points"
    ],
    status: "Platform Exposure & Reporting",
    glowColor: "#D7FF62"
  },
  {
    number: "04",
    title: "OPTIMIZATION",
    summary: "Developing the mindset to investigate performance, test hypotheses, and improve decisions using reliable evidence.",
    details: [
      "Formulating hypothesis-driven testing roadmaps",
      "A/B creative testing isolating single visual/copy variables",
      "Landing page alignment ensuring ad promise continuity",
      "Iterative feedback loops eliminating wasted spend"
    ],
    status: "Directional Development",
    glowColor: "#FF6B9A"
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "marvice",
    role: "Digital Marketing Executive",
    company: "Marvice",
    location: "Bengaluru, Karnataka, India",
    period: "Current Position",
    isCurrent: true,
    description: "Working in digital marketing while building experience across digital channels and developing a stronger focus on performance-oriented marketing.",
    responsibilities: [
      "Contributing to digital marketing execution across multi-channel digital touchpoints.",
      "Developing exposure to Meta Ads, Google Ads, and campaign setup fundamentals.",
      "Assisting in content marketing, social media scheduling, and campaign planning.",
      "Utilizing Google Analytics to monitor traffic sources and user engagement metrics.",
      "Applying structured keyword research fundamentals and website content optimization."
    ],
    toolsAndPlatforms: [
      "Meta Ads",
      "Google Ads",
      "Google Analytics",
      "Content Planning",
      "Campaign Tracking"
    ],
    note: "All claims strictly grounded in active professional execution; no fabricated budgets, ad spend figures, or client metrics."
  },
  {
    id: "future-focus",
    role: "Mobile App Development Intern",
    company: "Future Focus Learning Hub",
    location: "Salem, Tamil Nadu, India",
    period: "April – July 2025",
    isCurrent: false,
    description: "Developed mobile application features with cross-platform architecture and cloud backend integration.",
    responsibilities: [
      "Developed mobile application features using Flutter and Dart.",
      "Implemented Firebase Authentication and Cloud Firestore to support secure user flows and structured data capture.",
      "Supported rigorous testing, defect logging, and debugging that contributed to a reported 25% reduction in application issues during development testing."
    ],
    toolsAndPlatforms: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Git"
    ],
    note: "The 25% issue reduction represents software QA debugging and testing during the internship, not a marketing performance metric."
  },
  {
    id: "gateway-solution",
    role: "Cloud Computing Intern",
    company: "Gateway Solution",
    location: "Tamil Nadu, India",
    period: "September – October 2023",
    isCurrent: false,
    description: "Hands-on exposure to cloud infrastructure provisioning, virtual computing, and storage services on AWS.",
    responsibilities: [
      "Worked directly with AWS core services including EC2 compute instances, S3 object storage, and IAM security policies.",
      "Deployed sample application environments and configured secure cloud infrastructure permissions.",
      "Studied cloud scalability patterns and serverless fundamentals to strengthen backend architectural intuition."
    ],
    toolsAndPlatforms: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "Cloud Infra"
    ],
    note: "Foundational cloud systems experience reinforcing technical problem-solving capabilities."
  }
];

export const projects: Project[] = [
  {
    id: "agrosmart",
    title: "AgroSmart",
    category: "AI CONCEPT / DIGITAL PRODUCT",
    badge: "Conceptual Digital Product",
    description: "An AI-driven smart agriculture platform concept exploring how soil, weather, image, crop, and market-price data could support agricultural decisions.",
    keyElements: [
      "Crop recommendations based on multi-variable soil parameters",
      "Plant-disease detection via computer vision leaf diagnostics",
      "Fertilizer and irrigation guidance aligned with real-time weather"
    ],
    tags: ["Product Concept", "AI Architecture", "Data Ingestion", "Agtech"],
    isConcept: true,
    caseStudy: {
      context: "Small and medium-scale agriculture faces crop loss and sub-optimal yields due to delayed disease identification, weather volatility, and lack of timely agronomic advisories.",
      audience: "Agronomists, progressive farmers, and agricultural cooperative managers seeking data-assisted field recommendations.",
      strategy: "Design an integrated conceptual workflow that ingests multimodal inputs (soil sensors, localized meteorological data, and mobile leaf captures) to produce actionable, plain-language agricultural decisions.",
      execution: "Architected conceptual modules for: 1) Image-based leaf symptom triage, 2) Crop suitability matrix based on N-P-K soil profiles, and 3) Weather-reactive irrigation alerts.",
      toolsUsed: ["Figma Mockups", "System Architecture Diagrams", "Computer Vision Concepts", "Data Flow Modeling"],
      measurementApproach: "In concept evaluation: accuracy of advisory logic, simplicity of mobile workflow, and readability of disease diagnostics without complex jargon.",
      verifiedOutcomes: "Delivered a structured concept demonstration proving technical feasibility, data flow mapping, and problem-solving methodology without claiming deployed commercial traction.",
      learningsAndNextSteps: "Highlighted the importance of user interface accessibility for non-technical users; provided a foundation for testing conversion flows in future agtech digital campaigns."
    }
  },
  {
    id: "adzap-pitching",
    title: "ADZAP — Campaign Ideation",
    category: "ADVERTISING / CREATIVE THINKING",
    badge: "Creative Pitch Competition",
    description: "Participated in a national-level talent fest involving advertising concepts, ad pitching, and presentation.",
    keyElements: [
      "Rapid creative hook generation under timed constraints",
      "Audience-centric value proposition packaging",
      "Live stage delivery and persuasive brand narrative"
    ],
    tags: ["Creative Strategy", "Ad Pitching", "Live Presentation", "Copywriting"],
    isConcept: false,
    caseStudy: {
      context: "Participated in a competitive national-level advertising pitch challenge (ADZAP) requiring teams to formulate, storyboard, and pitch a brand campaign within high-pressure time constraints.",
      audience: "Panel of creative adjudicators and audience evaluating market appeal, humor, clarity, and brand recall.",
      strategy: "Identified a sharp consumer pain point, developed a memorable tagline, and constructed a humorous narrative arc that highlighted the core product solution within the first 15 seconds.",
      execution: "Delivered live role-play pitching, conceptual ad scripting, and immediate responses to rapid-fire panel objections.",
      toolsUsed: ["Campaign Storyboarding", "Pitch Scripting", "Creative Brainstorming", "Verbal Communication"],
      measurementApproach: "Evaluated on narrative clarity, brand memorability, creative originality, and presentation confidence by the jury.",
      verifiedOutcomes: "Successfully presented at a national-level collegiate talent fest, sharpening impromptu storytelling and advertising concept creation.",
      learningsAndNextSteps: "Reinforced that in advertising, whether live or digital, the first 3 seconds dictate audience attention. Serves as a direct bridge to digital hook creation for Meta and Google video ads."
    }
  },
  {
    id: "future-case-studies",
    title: "The Next Experiment Starts Here",
    category: "IN DEVELOPMENT",
    badge: "Upcoming Marketing Studies",
    description: "Building a portfolio of practical marketing case studies spanning advertising, analytics, SEO, content strategy, and performance-oriented thinking.",
    keyElements: [
      "Controlled audience targeting experiment blueprints",
      "Search intent to content alignment workflows",
      "GA4 user journey and drop-off analysis writeups"
    ],
    tags: ["Performance Marketing", "A/B Testing Blueprints", "GA4 Analytics", "SEO Experiments"],
    isUpcoming: true,
    caseStudy: {
      context: "Currently compiling verified, hands-on digital marketing experiments as professional milestones are achieved and verified.",
      audience: "Future hiring managers, growth team leads, and collaborative performance marketers looking for transparent, data-grounded execution.",
      strategy: "Publish transparent case studies following a strict 8-point editorial format: Context, Audience, Strategy, Execution, Tools, Measurement, Verified Outcomes, and Learnings.",
      execution: "Establishing benchmark tracking protocols across organic content discovery, keyword ranking shifts, and ad platform learning phases.",
      toolsUsed: ["Meta Ads", "Google Ads", "Google Analytics 4", "Google Search Console", "Excel"],
      measurementApproach: "Grounded metrics only: verifiable engagement rates, documented campaign parameters, and clear diagnostic takeaways.",
      verifiedOutcomes: "Portfolio framework built and ready for real case additions as campaigns run and verified performance data becomes available.",
      learningsAndNextSteps: "Ensuring every case study prioritizes honest diagnostic learnings over vanity metrics."
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "DIGITAL MARKETING",
    description: "Core principles of audience discovery, organic engagement, and campaign planning.",
    skills: [
      { name: "Digital Marketing Fundamentals", tag: "Core" },
      { name: "Social Media Marketing", tag: "Strategy" },
      { name: "Content Marketing", tag: "Organic" },
      { name: "Campaign Planning", tag: "Execution" }
    ]
  },
  {
    category: "ADVERTISING & ANALYTICS",
    description: "Platforms and quantitative methods for tracking digital activity.",
    skills: [
      { name: "Meta Ads", tag: "Platform Exposure" },
      { name: "Google Ads", tag: "Platform Exposure" },
      { name: "Google Analytics (GA4)", tag: "Platform Exposure" },
      { name: "Campaign Tracking & Reporting", tag: "Analytics" },
      { name: "Basic Data Analysis", tag: "Quantitative" }
    ]
  },
  {
    category: "CONTENT & COMMUNICATION",
    description: "Writing and messaging that transforms complex ideas into compelling stories.",
    skills: [
      { name: "Blog Writing", tag: "Editorial" },
      { name: "Content Creation", tag: "Creative" },
      { name: "Ad-Copywriting Basics", tag: "Messaging" },
      { name: "Business Communication", tag: "Professional" }
    ]
  },
  {
    category: "SEO & WEB",
    description: "Organic search visibility and fundamental web technologies.",
    skills: [
      { name: "SEO Fundamentals", tag: "Organic Search" },
      { name: "Keyword Research Basics", tag: "Discovery" },
      { name: "Website Content Optimization", tag: "On-Page" },
      { name: "HTML", tag: "Web Structure" },
      { name: "CSS", tag: "Web Styling" }
    ]
  },
  {
    category: "DESIGN & PRODUCTIVITY",
    description: "Visual creation and structured data organization.",
    skills: [
      { name: "Canva", tag: "Visuals" },
      { name: "Figma", tag: "UI Layouts" },
      { name: "Excel Fundamentals", tag: "Data Analysis" }
    ]
  },
  {
    category: "TECHNICAL FOUNDATION",
    description: "Engineering systems and cloud infrastructure experience.",
    skills: [
      { name: "Flutter", tag: "Mobile UI" },
      { name: "Dart", tag: "Language" },
      { name: "Firebase Authentication", tag: "Auth Flows" },
      { name: "Cloud Firestore", tag: "NoSQL DB" },
      { name: "AWS EC2, S3, IAM", tag: "Cloud Infra" }
    ]
  }
];

export const achievements: AchievementItem[] = [
  {
    title: "Best Management Team",
    organization: "FROLICS 2025",
    periodOrYear: "2025",
    badge: "Winner — National Level",
    description: "Secured 1st place in the management team event at a national-level festival, demonstrating collaborative leadership, crisis management, and strategic decision-making under time pressure.",
    type: "award"
  },
  {
    title: "ADZAP / Ad Pitching",
    organization: "National-Level Talent Fest",
    periodOrYear: "Collegiate Fest",
    badge: "Participant — National Level",
    description: "Participated in a competitive ad pitching and marketing campaign ideation competition, presenting creative advertising angles and campaign narratives before an expert jury.",
    type: "event"
  },
  {
    title: "Anna University Zonal Football Tournament",
    organization: "Anna University Sports Board",
    periodOrYear: "2024–2025",
    badge: "Certificate of Merit",
    description: "Represented college at the university zonal football tournament, earning a Certificate of Merit. Cultivated team communication, high-intensity focus, and resilient problem-solving on the field.",
    type: "sport"
  },
  {
    title: "KALAM 2023",
    organization: "Technical Event",
    periodOrYear: "2023",
    badge: "Participant",
    description: "Engaged in technical symposium problem-solving and software application showcases, testing engineering concepts against peer solutions.",
    type: "event"
  },
  {
    title: "Joy of Computing",
    organization: "NPTEL",
    periodOrYear: "Certified",
    badge: "Certification",
    description: "Completed structured computational thinking, algorithmic logic, and fundamental problem-solving coursework administered through NPTEL.",
    type: "certification"
  }
];

export const personalityPillars = [
  {
    title: "University-Level Football",
    category: "ATHLETICS & TEAMWORK",
    description: "Competitive football teaches rapid spatial awareness, situational decision-making under fatigue, and seamless coordination with teammates. On the pitch or in a campaign, execution relies on positioning and timing.",
    tag: "Certificate of Merit 2024–2025"
  },
  {
    title: "Python & Data Science",
    category: "ANALYTICAL RIGOR",
    description: "Exploring exploratory data analysis and Python scripting. Having an algorithmic lens makes it second nature to question anomalies, interpret data sets, and understand tracking telemetry.",
    tag: "Data Curiosity"
  },
  {
    title: "Web Development & Code",
    category: "TECHNICAL CREATIVITY",
    description: "Understanding HTML, CSS, Dart, and responsive web systems means bridging the gap between marketing vision and engineering reality. No disconnect between what is designed and what is built.",
    tag: "Frontend & Mobile"
  },
  {
    title: "Learning Japanese",
    category: "CULTURAL CURIOSITY",
    description: "Studying Japanese requires patience, systematic pattern recognition, and an appreciation for nuanced expression—qualities that directly influence how I analyze language, tone, and audience context in marketing.",
    tag: "Language & Discipline"
  }
];
