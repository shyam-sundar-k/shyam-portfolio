import type { Project, ExperienceItem, SkillCategory, AchievementItem } from '../types';

export const personalInfo = {
  name: "Shyam Sundar K",
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
    introLabel: "DIGITAL MARKETING EXECUTIVE · BENGALURU, INDIA",
    headlineLine1: "Creative thinking.",
    headlineLine2: "Digital strategy.",
    headlineLine3: "Performance in progress.",
    supporting: "I'm Shyam Sundar K, a digital marketing professional at Marvice with a technical foundation and an interest in building smarter, more measurable marketing campaigns. I'm developing my skills across digital advertising, analytics, content, and campaign optimization as I work toward performance marketing.",
    currentBadge: "CURRENTLY · DIGITAL MARKETING EXECUTIVE AT MARVICE",
    imageAnnotation: "CREATIVE MINDSET / ANALYTICAL CURIOSITY"
  },
  aboutCopy: {
    eyebrow: "01 / THE PERSON BEHIND THE WORK",
    headline: "A technical foundation. A creative mindset. A growing focus on performance.",
    p1: "My background in Computer Science and Business Systems has shaped the way I approach digital experiences: with curiosity about how things work, attention to detail, and an interest in solving problems.",
    p2: "Today, I work as a Digital Marketing Executive at Marvice in Bengaluru. My interests span digital advertising, content, social media, SEO fundamentals, and analytics.",
    p3: "I'm particularly interested in performance marketing because it brings creative ideas together with audience insights, measurement, experimentation, and continuous improvement.",
    p4: "I'm building my capabilities one project, one insight, and one learning experience at a time.",
    personalDetail: "Outside digital marketing, I enjoy university-level football, Python, data science, web development, and learning Japanese."
  }
};

export const performanceFocusAreas = [
  {
    number: "01",
    title: "Audience & Strategy",
    summary: "Understanding audiences, messaging, content, campaign objectives, and the role of creative strategy in digital marketing.",
    details: [
      "Defining core buyer personas and search/scroll intent",
      "Mapping creative angles to distinct customer stages",
      "Content planning aligned with commercial brand objectives",
      "Ad-copywriting tailored for organic and paid discovery"
    ],
    status: "Active Practice & Planning"
  },
  {
    number: "02",
    title: "Paid Media",
    summary: "Developing practical knowledge of Meta Ads and Google Ads, including campaign structure, audience targeting, creative testing, and advertising fundamentals.",
    details: [
      "Campaign hierarchy: Objectives, Ad Sets, and Creative Variants",
      "Meta Ads Manager exploration: Custom & Lookalike audience logic",
      "Google Ads fundamentals: Search intent, keywords, and match types",
      "Ad formats: Carousels, single image, video placements, and copy hooks"
    ],
    status: "Platform Exposure & Learning"
  },
  {
    number: "03",
    title: "Analytics & Measurement",
    summary: "Using Google Analytics and campaign reporting to understand user behavior, traffic sources, and how digital activity can be evaluated.",
    details: [
      "GA4 event models: Page views, sessions, engagements, and conversions",
      "Traffic attribution: Organic search, direct, social, and referral pathways",
      "Campaign UTM parameter structuring for clear source tracking",
      "Exporting and inspecting behavioral metrics for actionable insights"
    ],
    status: "Platform Exposure & Reporting"
  },
  {
    number: "04",
    title: "Testing & Optimization",
    summary: "Building toward a data-informed approach to experimentation, performance analysis, and continuous campaign improvement.",
    details: [
      "Formulating clear hypotheses before creative or copy changes",
      "A/B creative testing methodologies and variable isolation",
      "Landing page content alignment with ad messaging",
      "Iterative review loops to identify drop-off patterns"
    ],
    status: "Directional Development"
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
    description: "Working in digital marketing while building my experience across digital channels, marketing execution, and performance-oriented thinking.",
    responsibilities: [
      "Contributing to digital marketing execution across multi-channel digital touchpoints.",
      "Developing exposure to Meta Ads, Google Ads, and campaign setup fundamentals.",
      "Assisting in content marketing, social media scheduling, and campaign planning.",
      "Utilizing Google Analytics to monitor traffic sources and user engagement metrics.",
      "Applying structured keyword research fundamentals and website content optimization."
    ],
    toolsAndPlatforms: [
      "Meta Ads Manager",
      "Google Ads",
      "Google Analytics (GA4)",
      "Content Planning",
      "Campaign Tracking"
    ],
    note: "All claims grounded in active professional execution; no fabricated budgets, spend figures, or client metrics."
  },
  {
    id: "future-focus",
    role: "Mobile App Development Intern",
    company: "Future Focus Learning Hub",
    location: "Salem, Tamil Nadu, India",
    period: "April – July 2025",
    isCurrent: false,
    description: "Built mobile application features with cross-platform architecture and cloud backend integration.",
    responsibilities: [
      "Developed responsive mobile app features and user interfaces using Flutter and Dart.",
      "Implemented Firebase Authentication and Cloud Firestore to support robust user flows and secure data capture.",
      "Supported rigorous testing, defect logging, and debugging, contributing to a reported 25% reduction in application issues during development testing."
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
      "Cloud Infrastructure"
    ],
    note: "Foundational cloud systems experience reinforcing technical problem-solving capabilities."
  }
];

export const projects: Project[] = [
  {
    id: "agrosmart",
    title: "AgroSmart",
    category: "AI CONCEPT · DIGITAL PRODUCT",
    badge: "Conceptual Digital Product",
    description: "An AI-driven smart agriculture platform concept exploring how soil, weather, image, crop, and market-price data could support agricultural decisions.",
    keyElements: [
      "Data-driven crop recommendations based on soil conditions",
      "Computer vision concept for plant-disease identification",
      "Fertilizer schedules and water-efficient irrigation guidance"
    ],
    tags: ["Product Concept", "AI Architecture", "Data Integration", "Agriculture Tech"],
    isConcept: true,
    caseStudy: {
      context: "Small and medium-scale farming frequently faces crop loss and sub-optimal yields due to delayed disease identification, weather volatility, and lack of timely agronomic advisories.",
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
    category: "ADVERTISING · CREATIVE THINKING",
    badge: "Creative Pitch Competition",
    description: "Participated in a national-level talent fest involving fast-paced ad pitching, rapid campaign ideation, and live audience presentation.",
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
    category: "IN PROGRESS · PORTFOLIO DEVELOPMENT",
    badge: "Upcoming Marketing Studies",
    description: "Building a collection of practical marketing case studies focused on advertising, analytics, SEO, content strategy, and performance-oriented thinking.",
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
      toolsUsed: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "Google Search Console", "Excel"],
      measurementApproach: "Grounded metrics only: verifiable engagement rates, documented campaign parameters, and clear diagnostic takeaways.",
      verifiedOutcomes: "Portfolio framework built and ready for real case additions as campaigns run and verified performance data becomes available.",
      learningsAndNextSteps: "Ensuring every case study prioritizes honest diagnostic learnings over vanity metrics."
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Digital Marketing",
    description: "Core principles of audience discovery, organic engagement, and campaign planning.",
    skills: [
      { name: "Digital Marketing Fundamentals", tag: "Core" },
      { name: "Social Media Marketing", tag: "Strategy" },
      { name: "Content Marketing", tag: "Organic" },
      { name: "Campaign Planning", tag: "Execution" }
    ]
  },
  {
    category: "Advertising & Analytics",
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
    category: "Content & Communication",
    description: "Writing and messaging that transforms complex ideas into compelling stories.",
    skills: [
      { name: "Blog Writing", tag: "Editorial" },
      { name: "Content Creation", tag: "Creative" },
      { name: "Ad-Copywriting Basics", tag: "Messaging" },
      { name: "Business Communication", tag: "Professional" }
    ]
  },
  {
    category: "SEO & Web",
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
    category: "Design & Productivity",
    description: "Visual creation and structured data organization.",
    skills: [
      { name: "Canva", tag: "Visuals" },
      { name: "Figma", tag: "UI Layouts" },
      { name: "Excel Fundamentals", tag: "Data Analysis" }
    ]
  },
  {
    category: "Technical Foundation",
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
