export type ProjectCategory = "Featured" | "Automation" | "Full-stack" | "Websites";

export interface Project {
  name: string;
  category: ProjectCategory;
  featured?: boolean;
  eyebrow: string;
  description: string;
  details: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  context: "Professional experience" | "Self-directed portfolio" | "Personal website" | "Private homelab case study";
  role: string;
  evidence: string;
  ciStatus?: "Passing" | "Manual" | "N/A";
  schedule?: string;
  placeholder?: boolean;
}

export interface FrameworkHealth {
  name: string;
  category: string;
  stack: string;
  status: "Passing" | "Manual";
  schedule: string;
  latestRun: string;
}

export interface HomelabService {
  name: string;
  category: string;
  stack: string[];
  description: string;
  visibility: "Private repo" | "Public showcase";
  image?: string;
}

const projects: Project[] = [
  {
    name: "Commercial Kitchen CRM",
    category: "Full-stack",
    featured: true,
    eyebrow: "Independent build",
    description: "Custom full-stack CRM designed to centralise business operations, connect third-party services, and streamline day-to-day workflows.",
    details: "Authentication, business and customer workflows, scheduling, calendar functionality, integrations, and email-related workflows. Built and deployed as an independent project.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    context: "Self-directed portfolio",
    role: "Independent full-stack builder.",
    evidence: "Placeholder retained until the public screenshot, name, and URL are confirmed.",
    placeholder: true,
  },
  {
    name: "AI-assisted developer tooling",
    category: "Featured",
    featured: true,
    eyebrow: "Developer tooling / automation",
    description: "Python-powered tooling that combines repository discovery, AI-assisted patch generation, context validation, and automated code modification.",
    details: "A human-orchestrated workflow: discover context with Python and WSL, pass focused material to Copilot, validate proposed changes, apply safe patches, then test and iterate. Employer-specific code and infrastructure stay private.",
    technologies: ["Python", "WSL", "Repository analysis", "Patch validation", "Copilot"],
    context: "Self-directed portfolio",
    role: "Built as a private, human-orchestrated developer workflow.",
    evidence: "Demonstrates repository discovery, context validation, safe patching, and test iteration without exposing employer code.",
    placeholder: true,
  },
  {
    name: "Enterprise test automation",
    category: "Automation",
    featured: true,
    eyebrow: "Professional experience",
    description: "Designing and delivering scalable UI, API, and CI/CD testing solutions for complex enterprise environments.",
    details: "Professional experience across banking, retail, research, and energy systems. Public demonstration frameworks show patterns in Playwright, Python, C#/.NET, Selenium, API testing, BDD, and CI.",
    technologies: ["Playwright", "Python", "C# / .NET", "REST APIs", "CI/CD"],
    image: "/images/tile-playwright-mcp-ai-framework.png",
    githubUrl: "https://github.com/daviiidle/Playwright-MCP-AI-Framework",
    context: "Professional experience",
    role: "Senior Test Analyst / Test Automation Engineer.",
    evidence: "Professional experience across banking, retail, research, and energy; public repositories demonstrate the shareable patterns.",
  },
  {
    name: "RetailChill Refrigeration",
    category: "Websites",
    eyebrow: "Live business website",
    description: "A responsive refrigeration website for supermarkets, grocers, and food retailers across Melbourne and Australia.",
    details: "The site presents cool rooms, freezer rooms, Carrier display refrigeration, open and specialist displays, supermarket fit-outs, installation, commissioning, and a quote enquiry flow.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Vercel"],
    githubUrl: "https://github.com/daviiidle/retailchill-refrigeration",
    demoUrl: "https://www.retailchill.com.au/",
    context: "Personal website",
    role: "Designed and built the public marketing site and quote journey.",
    evidence: "Live site structure covers solutions, fit-outs, project coordination, contact details, and a working enquiry form.",
  },
  {
    name: "Commercial Kitchen AUS",
    category: "Websites",
    eyebrow: "Live business website",
    description: "A service-led website for commercial kitchen mechanical work across Victoria.",
    details: "The site explains kitchen exhaust and canopies, ducting, fans, make-up air, commercial air-conditioning, refrigeration, stainless fabrication, installation, commissioning, maintenance, and breakdown support.",
    technologies: ["HTML", "CSS", "Responsive design", "Accessible markup"],
    demoUrl: "https://www.ckaus.com.au/",
    context: "Personal website",
    role: "Designed and built the public service and project showcase website.",
    evidence: "Live site includes service cards, real project imagery, sectors served, coordination process, contact CTAs, and mobile navigation.",
  },
  {
    name: "Commercial Kitchen Canopy Supply",
    category: "Full-stack",
    eyebrow: "Live full-stack product",
    description: "A full-stack commercial canopy supply platform that turns a customer’s kitchen dimensions and options into an online order or quote workflow.",
    details: "The Next.js application combines a supply-only canopy configurator, dimension and option pricing, project enquiry forms, Stripe checkout and order handling, Supabase-backed data, image uploads, project galleries, admin management, email notifications, analytics, and order tracking.",
    technologies: ["Next.js", "TypeScript", "React", "Supabase", "PostgreSQL", "Stripe", "R2 / S3", "Resend", "Cloudflare"],
    githubUrl: "https://github.com/daviiidle/commercial-kitchen-aus",
    demoUrl: "https://commercialkitchencanopysupply.com.au/",
    context: "Self-directed portfolio",
    role: "Built and maintained the product, order workflow, admin tools, and public content.",
    evidence: "Source includes pricing/configuration logic, checkout and webhook handling, project image management, project enquiries, order tracking, guides, SEO metadata, and operational tests.",
  },
  {
    name: "Venio",
    category: "Full-stack",
    eyebrow: "Live product / used at my wedding",
    description: "A full-stack wedding guest experience platform I used for my own wedding to manage seating, QR links, RSVP flows, and guest photo sharing.",
    details: "Guests can scan a QR code to find their seat, access event content, respond through RSVP flows, and upload or view photos and videos without downloading an app. The product also supports event setup, seating assignment, lock/unlock timing, guest management, shared media, pricing, authentication, billing, and hosted event links.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Cloudflare Workers", "R2 / S3", "Stripe", "Resend", "QR codes"],
    githubUrl: "https://github.com/daviiidle/EventPrompt",
    demoUrl: "https://venio.site/",
    context: "Self-directed portfolio",
    role: "Built and operated the product end to end, including the wedding event implementation.",
    evidence: "Source includes wedding marketing flows, seating workspaces, RSVP and guest routes, QR generation, photo uploads, event locking, multi-event operations, billing, backend notifications, and Cloudflare deployment configuration.",
  },
  {
    name: "Cypress-Automation-Framework",
    category: "Automation",
    eyebrow: "Public showcase project",
    description: "Portfolio UI automation framework demonstrating Cypress structure, Page Object modelling, generated test data, reporting, and scheduled CI discipline.",
    details: "Designed and maintained as a public QA automation sample. Shows framework structure, reporting, reusable page objects, and daily GitHub Actions.",
    technologies: ["JavaScript", "Cypress", "POM", "Faker.js", "Mochawesome", "GitHub Actions"],
    image: "/images/tile-cypress-automation-framework.png",
    githubUrl: "https://github.com/daviiidle/Cypress-Automation-Framework.",
    context: "Self-directed portfolio",
    role: "Designed and maintained as a public QA automation sample.",
    evidence: "Framework structure, reporting, reusable page objects, and daily GitHub Actions.",
    ciStatus: "Passing",
    schedule: "Daily",
  },
  {
    name: "Playwright TypeScript",
    category: "Automation",
    eyebrow: "Public demonstration project",
    description: "Self-directed browser automation framework demonstrating cross-browser E2E patterns, deterministic checks, and TypeScript test organisation.",
    details: "A public practice framework showing Playwright fixtures, maintainable selectors, test structure, and CI execution.",
    technologies: ["TypeScript", "Playwright", "E2E testing", "GitHub Actions"],
    image: "/images/tile-playwright-typescript.png",
    githubUrl: "https://github.com/daviiidle/Playwright-TypeScript",
    context: "Self-directed portfolio",
    role: "Created as a public practice framework for modern browser automation.",
    evidence: "Playwright fixtures, test structure, CI execution, and maintainable selectors.",
    ciStatus: "Passing",
    schedule: "Daily",
  },
  {
    name: "Python API",
    category: "Automation",
    eyebrow: "Public demonstration project",
    description: "Python API automation framework built around reusable requests, test data, reporting, and CI execution.",
    details: "Public project evidence for API testing, Python structure, and repeatable validation workflows.",
    technologies: ["Python", "Pytest", "REST APIs", "GitHub Actions"],
    image: "/images/tile-python-api.png",
    githubUrl: "https://github.com/daviiidle/Python-API",
    context: "Self-directed portfolio",
    role: "Built to demonstrate API test design outside a confidential employer codebase.",
    evidence: "API abstractions, validation strategy, logging, and repeatable CI runs.",
    ciStatus: "Passing",
    schedule: "Daily",
  },
  {
    name: "ITAF-DotNet-CSharp",
    category: "Automation",
    eyebrow: "Public showcase project",
    description: "Self-directed integrated automation framework exploring .NET, C#, BDD, Playwright, API coverage, logging, reporting, and CI/CD.",
    details: "Developed as a portfolio-grade framework showing BDD layering, UI/API coverage, test hooks, reusable core utilities, and CI.",
    technologies: ["C#", ".NET", "Reqnroll", "Gherkin", "NUnit", "Playwright", "API Testing", "GitHub Actions"],
    image: "/images/tile-itaf-dotnet-csharp.png",
    githubUrl: "https://github.com/daviiidle/ITAF-DotNet-CSharp",
    context: "Self-directed portfolio",
    role: "Developed as a portfolio-grade framework to show architecture and adoption thinking.",
    evidence: "BDD layering, UI/API coverage, test hooks, reusable core utilities, and CI.",
    ciStatus: "Passing",
    schedule: "Daily",
  },
  {
    name: "Postman-Decoupling-Framework",
    category: "Automation",
    eyebrow: "Public showcase project",
    description: "Personal framework concept for turning existing Postman/Newman assets into Gherkin, test data, and WireMock mappings without forcing tool changes.",
    details: "A technical spike around automation adoption and asset reuse, showing importer design, generator pipeline, stub mapping, and framework boundary thinking.",
    technologies: ["C#", ".NET", "Postman", "Newman", "Gherkin", "WireMock", "CI/CD"],
    image: "/images/tile-postman-decoupling-framework.png",
    githubUrl: "https://github.com/daviiidle/Postman-Decoupling-Framework",
    context: "Self-directed portfolio",
    role: "Designed as a technical spike around automation adoption and asset reuse.",
    evidence: "Importer design, generator pipeline, stub mapping, and framework boundary thinking.",
    ciStatus: "Passing",
    schedule: "Daily",
  },
  {
    name: "Postman-Newman-Framework",
    category: "Automation",
    eyebrow: "Public showcase project",
    description: "Companion portfolio source project with Postman collections, environments, data files, and scheduled Newman CI for the decoupling framework.",
    details: "Controlled source material for framework ingestion and CI evidence, including collection structure, environment handling, iteration data, and Newman scheduling.",
    technologies: ["Postman", "Newman", "Node.js", "API Testing", "GitHub Actions"],
    image: "/images/tile-postman-newman-framework.png",
    githubUrl: "https://github.com/daviiidle/Postman-Newman-Framework",
    context: "Self-directed portfolio",
    role: "Created as controlled source material for framework ingestion and CI evidence.",
    evidence: "Collection structure, environment handling, iteration data, and Newman scheduling.",
    ciStatus: "Passing",
    schedule: "Daily",
  },
  {
    name: "Selenium-Automation-Framework",
    category: "Automation",
    eyebrow: "Public showcase project",
    description: "Portfolio Selenium Java framework against DemoWebShop, built to show classic UI automation patterns without relying on employer examples.",
    details: "A public Java/Selenium automation sample showing POM structure, TestNG suites, reporting, driver management, and CI workflows.",
    technologies: ["Java", "Selenium", "TestNG", "Maven", "POM", "ExtentReports", "Allure", "GitHub Actions"],
    image: "/images/tile-selenium-automation-framework.png",
    githubUrl: "https://github.com/daviiidle/Selenium-Automation-Framework",
    context: "Self-directed portfolio",
    role: "Maintained as a public Java/Selenium automation sample.",
    evidence: "POM structure, TestNG suites, reporting, driver management, and CI workflows.",
    ciStatus: "Passing",
    schedule: "Daily",
  },
  {
    name: "Appium-Java-Mobile-Framework",
    category: "Automation",
    eyebrow: "Public showcase project",
    description: "Portfolio Android mobile automation framework against a public Sauce Labs demo retail app, built for hands-on Appium learning and interview evidence.",
    details: "Local emulator-ready framework covering login, product browsing, product detail, add-to-cart, and cart validation flows. The workflow skeleton is manual.",
    technologies: ["Java", "Appium", "Android", "TestNG", "Maven", "POM", "Allure", "GitHub Actions"],
    githubUrl: "https://github.com/daviiidle/appium-java-mobile-framework",
    context: "Self-directed portfolio",
    role: "Built as a local emulator-ready mobile automation framework.",
    evidence: "Appium 2 setup, config-driven capabilities, POM structure, failure screenshots, Allure reporting, and CI planning.",
    ciStatus: "Manual",
    schedule: "Daily workflow skeleton",
  },
  {
    name: "Playwright MCP AI Framework",
    category: "Automation",
    eyebrow: "Public showcase project",
    description: "Personal AI-assisted automation experiment using Playwright MCP for exploratory authoring, with deterministic Playwright TypeScript checks for CI.",
    details: "Built to explore where AI assistance helps test authoring while keeping checks deterministic. The repository contains the shareable implementation and scheduled validation.",
    technologies: ["TypeScript", "Playwright", "MCP", "AI Automation", "GitHub Actions"],
    image: "/images/tile-playwright-mcp-ai-framework.png",
    githubUrl: "https://github.com/daviiidle/Playwright-MCP-AI-Framework",
    context: "Self-directed portfolio",
    role: "Built to explore AI-assisted test authoring with deterministic checks.",
    evidence: "MCP-assisted workflow, Playwright implementation, and scheduled validation.",
    ciStatus: "Passing",
    schedule: "Daily",
  },
  {
    name: "dlorddev",
    category: "Websites",
    eyebrow: "Personal website",
    description: "This personal website, built to present automation evidence, career context, and selected project work without implying client ownership.",
    details: "Built and edited end to end, including the content model, responsive layout, accessibility-aware structure, and homepage tests.",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Playwright"],
    image: "/images/tile-dlorddev.png",
    githubUrl: "https://github.com/daviiidle/dlorddev",
    context: "Personal website",
    role: "Built and edited end to end.",
    evidence: "Frontend delivery, portfolio storytelling, responsive layout, and deployment workflow.",
    ciStatus: "Manual",
    schedule: "On change",
  },
];

export const siteContent = {
  name: "David Le",
  location: "Melbourne, Australia",
  title: "Automation Engineer | Quality Engineering & Test Automation",
  tagline: "I turn complex systems into reliable, repeatable automation.",
  intro:
    "Melbourne-based quality engineer moving deeper into automation engineering, with hands-on UI, API, CI/CD, and AI-assisted testing across enterprise systems.",
  social: {
    github: "https://github.com/daviiidle",
    linkedin: "https://www.linkedin.com/in/david-le-2a3456a9/",
    email: "daviiidle@gmail.com",
  },
  stats: [
    { value: "04+", label: "enterprise domains", detail: "banking, retail, research, energy" },
    { value: "API / UI", label: "automation focus", detail: "frameworks, pipelines, evidence" },
    { value: "Full-stack", label: "independent builds", detail: "apps, sites, integrations" },
  ],
  projects,
  experience: {
    role: "Senior Test Analyst / Test Automation Engineer",
    company: "Planit Testing / NRI Australia",
    dates: "July 2022 – Present",
    summary: "Enterprise quality engineering across energy, banking, retail, and research applications.",
    points: [
      "UI, API, integration, exploratory, data, and system testing across complex enterprise products.",
      "C#/.NET, Playwright, Python Behave/Pytest, Selenium, Cucumber/Gherkin, SQL, and REST API testing.",
      "Framework engineering, CI/CD delivery, reporting, test-data processing, and automation modernisation.",
    ],
    highlights: [
      { value: "186", label: "system scenarios automated", detail: "Contributed roughly 37% of automated system test coverage at Judo Bank." },
      { value: "213", label: "Salesforce migration cases", detail: "Sole QA ownership across journeys, routing, integrations, records, and case lifecycles." },
      { value: "Super Nova", label: "Planit award", detail: "Recognition for automation contribution and delivery throughput." },
    ],
    paragraphs: [
      "I began my testing career with Planit in 2022, building foundations in functional testing, requirements analysis, defect management, SQL-based validation, and end-to-end business process testing. Consulting engagements then took me across healthcare research, banking and financial services, retail customer experience, Salesforce CRM, and energy and utilities.",
      "At Judo Bank, I moved from system and integration testing into API-first automation. I worked across onboarding, payments, term deposits, statements, account lifecycles, ERP integrations, mobile applications, APIs, data stores, and connected platforms. Using Python, Behave, PyTest, reusable endpoint abstractions, and GitHub Actions, I personally automated 186 of 500 planned system tests and later 42 of 200 planned end-to-end tests.",
      "That work also developed my delivery and leadership skills. I mentored and onboarded 3-4 offshore testers into the automation framework, helping with test creation, debugging, and execution. My automation contribution and delivery throughput were recognised with Planit's Super Nova Award.",
      "At MECCA, I acted as the sole QA resource for a migration to Salesforce Embedded Messaging. I owned planning, design, execution, regression, evidence, and reporting, and authored 213 test cases across customer journeys, routing, AU/NZ queues, Salesforce records, integrations, and case lifecycles. I also built a Playwright and TypeScript framework to explore repeatable chat-workflow automation.",
      "My current AEMO engagement brings that experience into energy and utilities. I perform functional, integration, system, exploratory, API, data, and UI testing across enterprise applications while contributing to C#/.NET automation and framework modernisation. In one unfamiliar validation-service domain, I used scripting and AI-assisted analysis to map files, processing rules, outputs, and database relationships, then validated the findings through controlled tests and Oracle data traceability.",
      "AI assistance is part of how I engineer, not a substitute for engineering judgement. I use coding agents and structured context to understand existing codebases, identify framework patterns, find where changes belong, draft queries and test assets, and iterate quickly. I validate suggestions through read-only investigation where appropriate, controlled changes, test execution, evidence review, and defect analysis.",
      "I am strongest when the system or domain is unfamiliar. I bring test thinking, rapid system comprehension, practical automation, and the judgement to use modern tools safely across Python, C#/.NET, Playwright, TypeScript, Selenium, Cypress, Postman/Newman, BDD tooling, and CI pipelines.",
    ],
  },
  automation: {
    title: "Automation Evidence",
    summary: "A compact snapshot of public QA frameworks with scheduled GitHub Actions, deterministic checks, and visible evidence that the repositories are actively exercised.",
    auditedAt: "Audited June 3, 2026",
    stats: [
      { value: "8", label: "framework repos", detail: "scheduled and maintained" },
      { value: "8/8", label: "green audited runs", detail: "latest checked framework pipelines" },
      { value: "5", label: "automation types", detail: "UI, API, BDD, integration, AI" },
    ],
    frameworks: [
      { name: "Cypress", category: "UI", stack: "JavaScript", status: "Passing", schedule: "0 2 * * *", latestRun: "Latest scheduled run green" },
      { name: "Playwright TypeScript", category: "UI", stack: "TypeScript", status: "Passing", schedule: "0 9 * * *", latestRun: "Latest scheduled run green" },
      { name: "Python API", category: "API", stack: "Python", status: "Passing", schedule: "0 23 * * *", latestRun: "Latest scheduled run green" },
      { name: "ITAF .NET C#", category: "BDD", stack: "C# / .NET", status: "Passing", schedule: "0 20 * * *", latestRun: "Latest scheduled run green" },
      { name: "Postman Decoupling", category: "Integration", stack: "C# / Postman", status: "Passing", schedule: "0 20 * * *", latestRun: "Latest scheduled run green" },
      { name: "Postman Newman", category: "API", stack: "Node.js / Newman", status: "Passing", schedule: "0 19 * * *", latestRun: "Latest scheduled run green" },
      { name: "Selenium", category: "UI", stack: "Java / Selenium", status: "Passing", schedule: "0 20 * * *", latestRun: "Latest scheduled run green" },
      { name: "Playwright MCP AI", category: "AI", stack: "TypeScript / MCP", status: "Passing", schedule: "0 21 * * *", latestRun: "Latest push run green" },
    ],
  },
  homelab: {
    title: "Homelab Systems",
    summary: "A sanitized look at self-hosted systems for energy tracking, household dashboards, media services, automation, monitoring, and recovery planning. Production repositories and live endpoints stay private.",
    principles: ["Private repos for home-specific implementation details", "Sanitized screenshots and mock data for public write-ups", "Docker Compose, systemd, and backup-first restore planning"],
    services: [
      { name: "Home Dashboard Next", category: "Operations dashboard", stack: ["Next.js", "FastAPI", "Docker", "Tailscale"], description: "Single-pane dashboard for private service health, project shortcuts, Docker-aware status, and household system summaries.", visibility: "Private repo", image: "/images/homelab/home-dashboard-next.png" },
      { name: "Granny Flat Billing", category: "Energy billing", stack: ["Python", "React", "SQLite", "systemd"], description: "Tracks tenant-facing electricity usage and billing state with local persistence and a focused dashboard workflow.", visibility: "Private repo", image: "/images/homelab/granny-flat-billing.png" },
      { name: "Main House Energy", category: "Solar and usage", stack: ["Python", "React", "SQLite", "SolarEdge"], description: "Models household solar generation, grid import/export, and daily energy flow for practical household decision-making.", visibility: "Private repo", image: "/images/homelab/main-house-energy.png" },
      { name: "Frigate + Home Assistant", category: "Automation and video", stack: ["Docker Compose", "Frigate", "Home Assistant", "MQTT"], description: "Local-first camera, automation, and event workflow stack with pinned containers and recovery-oriented configuration.", visibility: "Public showcase", image: "/images/homelab/frigate-wall.png" },
      { name: "Immich", category: "Photo library", stack: ["Docker", "PostgreSQL", "External storage"], description: "Self-hosted photo library with scheduled database backups and external media storage separated from app config.", visibility: "Public showcase" },
      { name: "Portainer + Filebrowser", category: "Administration", stack: ["Docker", "Volumes", "Bind mounts"], description: "Local administration tools for container visibility and managed access to curated server folders.", visibility: "Public showcase" },
    ],
  },
  stack: {
    Languages: ["Python", "TypeScript", "JavaScript", "C#", "Java", "SQL"],
    Frontend: ["React", "Next.js", "Tailwind CSS", "HTML / CSS"],
    "Backend & data": ["Supabase", "PostgreSQL", "REST APIs", "SQL Server", "API integrations"],
    "Test automation": ["Playwright", "Selenium", "Behave", "Pytest", "Cucumber / Gherkin", "Postman", "Bruno"],
    "DevOps & tooling": ["GitHub Actions", "Azure DevOps", "Docker", "Vercel", "Cloudflare", "Git", "WSL"],
  },
  certifications: ["ISTQB Certified Tester Foundation Level 4.0", "iSQI Certified Agile Essentials"],
};

export type SiteContent = typeof siteContent;
