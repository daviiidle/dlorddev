export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  category?: string;
  context: "Self-directed portfolio" | "Personal website" | "Private homelab case study";
  role: string;
  evidence: string;
  ciStatus?: "Passing" | "Manual" | "N/A";
  schedule?: string;
}

export interface FrameworkHealth {
  name: string;
  category: string;
  stack: string;
  status: "Passing";
  schedule: string;
  latestRun: string;
}

export interface CapabilityMetric {
  label: string;
  value: number;
  total: number;
}

export interface TechnologyMetric {
  label: string;
  count: number;
  color: string;
}

export interface HomelabService {
  name: string;
  category: string;
  stack: string[];
  description: string;
  visibility: "Private repo" | "Public showcase";
  image?: string;
}

export interface SiteContent {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    brand: string;
    links: {
      about: string;
      projects: string;
      contact: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    socialLinks: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  professionalStory: {
    kicker: string;
    title: string;
    summary: string;
    cta: string;
    recruiterSnapshot: {
      label: string;
      value: string;
      detail: string;
    }[];
    highlights: {
      value: string;
      label: string;
      detail: string;
    }[];
    paragraphs: string[];
  };
  projects: {
    title: string;
    kicker: string;
    summary: string;
    note: string;
    items: Project[];
  };
  automationHealth: {
    title: string;
    summary: string;
    auditedAt: string;
    stats: {
      label: string;
      value: string;
      detail: string;
    }[];
    frameworks: FrameworkHealth[];
    capabilities: CapabilityMetric[];
    technologies: TechnologyMetric[];
  };
  homelab: {
    title: string;
    kicker: string;
    teaser: string;
    summary: string;
    principles: string[];
    services: HomelabService[];
  };
  contact: {
    title: string;
    description: string;
    email: {
      text: string;
      address: string;
    };
    linkedin: {
      text: string;
      url: string;
    };
  };
}

export const siteContent: SiteContent = {
  metadata: {
    title: "David Le - Quality Engineer & Test Automation Engineer",
    description: "Modern AI-assisted quality engineering, test automation, and delivery evidence across banking, Salesforce, energy, and enterprise systems.",
  },
  navigation: {
    brand: "David Le",
    links: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
  },
  hero: {
    title: "Modern quality engineering, accelerated by AI.",
    subtitle: "Melbourne-based Quality Engineer and Test Automation Engineer with consulting experience across banking, healthcare research, retail customer experience, Salesforce, and energy. I use coding agents, structured context, and testing discipline to understand unfamiliar systems quickly, build practical automation, and validate complex behaviour with evidence.",
    cta: {
      primary: "View My Work",
      secondary: "GitHub",
    },
    socialLinks: {
      github: "https://github.com/daviiidle",
      linkedin: "https://www.linkedin.com/in/david-le-2a3456a9/",
      email: "daviiidle@gmail.com",
    },
  },
  professionalStory: {
    kicker: "Professional Story",
    title: "From functional QA to AI-assisted quality engineering.",
    summary:
      "I combine hands-on testing, automation, system analysis, and AI-assisted engineering to become productive quickly in unfamiliar codebases and domains without compromising validation, traceability, or delivery evidence.",
    cta: "Read the full career story",
    recruiterSnapshot: [
      {
        label: "Role fit",
        value: "Quality + Automation",
        detail: "Quality Engineer, Test Automation Engineer, QA Automation, and SDET-aligned roles.",
      },
      {
        label: "Domains",
        value: "Enterprise systems",
        detail: "Banking, energy and utilities, Salesforce, retail customer experience, and healthcare research.",
      },
      {
        label: "Core stack",
        value: "API / UI / Data",
        detail: "Python, C#/.NET, Playwright, TypeScript, Selenium, Cypress, Postman/Newman, BDD, and CI.",
      },
      {
        label: "Working method",
        value: "AI-assisted QE",
        detail: "Fast codebase comprehension, framework navigation, reverse engineering, and evidence-based validation.",
      },
    ],
    highlights: [
      {
        value: "4+",
        label: "Client domains",
        detail: "Consulting delivery across research, banking, retail customer experience, and energy.",
      },
      {
        value: "186",
        label: "System scenarios automated",
        detail: "Contributed roughly 37% of automated system test coverage at Judo Bank.",
      },
      {
        value: "213",
        label: "Salesforce migration cases",
        detail: "Sole QA ownership across journeys, routing, integrations, records, and case lifecycles.",
      },
    ],
    paragraphs: [
      "I began my testing career with Planit in 2022, building foundations in functional testing, requirements analysis, defect management, SQL-based validation, and end-to-end business process testing. Consulting engagements then took me across healthcare research, banking and financial services, retail customer experience, Salesforce CRM, and energy and utilities.",
      "At Judo Bank, I moved from system and integration testing into API-first automation. I worked across onboarding, payments, term deposits, statements, account lifecycles, ERP integrations, mobile applications, APIs, data stores, and connected platforms. Using Python, Behave, PyTest, reusable endpoint abstractions, and GitHub Actions, I personally automated 186 of 500 planned system tests and later 42 of 200 planned end-to-end tests.",
      "That work also developed my delivery and leadership skills. I mentored and onboarded 3-4 offshore testers into the automation framework, helping with test creation, debugging, and execution. My automation contribution and delivery throughput were recognised with Planit's Super Nova Award.",
      "At MECCA, I acted as the sole QA resource for a migration to Salesforce Embedded Messaging. I owned planning, design, execution, regression, evidence, and reporting, and authored 213 test cases across customer journeys, routing, AU/NZ queues, Salesforce records, integrations, and case lifecycles. I also built a Playwright and TypeScript framework to explore repeatable chat-workflow automation.",
      "My current AEMO engagement brings that experience into energy and utilities. I perform functional, integration, system, exploratory, API, data, and UI testing across enterprise applications while contributing to C#/.NET automation and framework modernisation. In one unfamiliar validation-service domain, I used scripting and AI-assisted analysis to map files, processing rules, outputs, and database relationships, then validated the findings through controlled tests and Oracle data traceability.",
      "AI assistance is part of how I engineer, not a substitute for engineering judgement. I use coding agents and structured context to understand existing codebases, identify framework patterns, find where changes belong, draft queries and test assets, and iterate quickly. I validate suggestions through read-only investigation where appropriate, controlled changes, test execution, evidence review, and defect analysis.",
      "I am strongest when the system or domain is unfamiliar. I do not position myself as a syntax-memorisation specialist or a deep expert in every language I touch. I bring test thinking, rapid system comprehension, practical automation, and the judgement to use modern tools safely across Python, C#/.NET, Playwright, TypeScript, Selenium, Cypress, Postman/Newman, BDD tooling, and CI pipelines.",
      "Outside client work, I maintain public automation frameworks and a private Ubuntu homelab. These projects let me keep developing in browser and API automation, AI-assisted tooling, CI, service virtualisation, dashboards, Docker-based operations, observability, and recovery planning.",
    ],
  },
  projects: {
    title: "Featured Projects",
    kicker: "Self-directed engineering evidence",
    summary:
      "These are personal projects, portfolio frameworks, and lab systems built to demonstrate how I think through quality engineering, automation design, CI, and maintainable delivery. They are not presented as client-delivered products.",
    note:
      "For recruiters and hiring teams: read these as evidence of hands-on capability, learning velocity, and engineering judgement alongside my professional QA experience.",
    items: [
      {
        name: "Cypress-Automation-Framework",
        description: "Portfolio UI automation framework used to demonstrate Cypress structure, Page Object modelling, generated test data, reporting, and scheduled CI discipline.",
        technologies: ["JavaScript", "Cypress", "POM", "Faker.js", "Mochawesome", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Cypress-Automation-Framework.",
        image: "/images/tile-cypress-automation-framework.png",
        category: "UI Automation",
        context: "Self-directed portfolio",
        role: "Designed and maintained as a public QA automation sample.",
        evidence: "Shows framework structure, reporting, reusable page objects, and daily GitHub Actions.",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "dlorddev",
        description: "This personal website, built to present automation evidence, career context, and selected project work without implying client ownership.",
        technologies: ["TypeScript", "Next.js", "React", "TailwindCSS", "Vercel"],
        githubUrl: "https://github.com/daviiidle/dlorddev",
        image: "/images/tile-dlorddev.png",
        category: "Portfolio",
        context: "Personal website",
        role: "Built and edited end to end, including content model, responsive layout, and tests.",
        evidence: "Shows frontend delivery, portfolio storytelling, accessibility-aware layout, and deployment workflow.",
        ciStatus: "Manual",
        schedule: "On change",
      },
      {
        name: "Playwright-TypeScript",
        description: "Self-directed Playwright framework demonstrating cross-browser E2E patterns, deterministic checks, and TypeScript test organisation.",
        technologies: ["TypeScript", "Playwright", "E2E Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Playwright-TypeScript",
        image: "/images/tile-playwright-typescript.png",
        category: "UI Automation",
        context: "Self-directed portfolio",
        role: "Created as a public practice framework for modern browser automation.",
        evidence: "Shows Playwright fixtures, test structure, CI execution, and maintainable selectors.",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Python-API",
        description: "Portfolio API automation framework focused on request validation, schema checks, generated data, and reusable test execution patterns.",
        technologies: ["Python", "API Testing", "Automation", "Pytest"],
        githubUrl: "https://github.com/daviiidle/Python-API",
        image: "/images/tile-python-api.png",
        category: "API Automation",
        context: "Self-directed portfolio",
        role: "Built to demonstrate API test design outside a confidential employer codebase.",
        evidence: "Shows API abstractions, validation strategy, logging, and repeatable CI runs.",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "ITAF-DotNet-CSharp",
        description: "Self-directed integrated automation framework exploring .NET, C#, BDD, Playwright, API coverage, logging, reporting, and CI/CD.",
        technologies: ["C#", ".NET", "Reqnroll", "Gherkin", "NUnit", "Playwright", "API Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/ITAF-DotNet-CSharp",
        image: "/images/tile-itaf-dotnet-csharp.png",
        category: "BDD Framework",
        context: "Self-directed portfolio",
        role: "Developed as a portfolio-grade framework to show architecture and adoption thinking.",
        evidence: "Shows BDD layering, UI/API coverage, test hooks, reusable core utilities, and CI.",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Postman-Decoupling-Framework",
        description: "Personal framework concept for turning existing Postman/Newman assets into Gherkin, test data, and WireMock mappings without forcing tool changes.",
        technologies: ["C#", ".NET", "Postman", "Newman", "Gherkin", "WireMock", "CI/CD"],
        githubUrl: "https://github.com/daviiidle/Postman-Decoupling-Framework",
        image: "/images/tile-postman-decoupling-framework.png",
        category: "Integration Framework",
        context: "Self-directed portfolio",
        role: "Designed as a technical spike around automation adoption and asset reuse.",
        evidence: "Shows importer design, generator pipeline, stub mapping, and framework boundary thinking.",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Postman-Newman-Framework",
        description: "Companion portfolio source project with Postman collections, environments, data files, and scheduled Newman CI for the decoupling framework.",
        technologies: ["Postman", "Newman", "Node.js", "API Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Postman-Newman-Framework",
        image: "/images/tile-postman-newman-framework.png",
        category: "API Source Framework",
        context: "Self-directed portfolio",
        role: "Created as controlled source material for framework ingestion and CI evidence.",
        evidence: "Shows collection structure, environment handling, iteration data, and Newman scheduling.",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Selenium-Automation-Framework",
        description: "Portfolio Selenium Java framework against DemoWebShop, built to show classic UI automation patterns without relying on employer examples.",
        technologies: ["Java", "Selenium", "TestNG", "Maven", "POM", "ExtentReports", "Allure", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Selenium-Automation-Framework",
        image: "/images/tile-selenium-automation-framework.png",
        category: "UI Automation",
        context: "Self-directed portfolio",
        role: "Maintained as a public Java/Selenium automation sample.",
        evidence: "Shows POM structure, TestNG suites, reporting, driver management, and CI workflows.",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Appium-Java-Mobile-Framework",
        description: "Portfolio Android mobile automation framework against a public Sauce Labs demo retail app, built for hands-on Appium learning and interview evidence.",
        technologies: ["Java", "Appium", "Android", "TestNG", "Maven", "POM", "Allure", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/appium-java-mobile-framework",
        category: "Mobile Automation",
        context: "Self-directed portfolio",
        role: "Built as a local emulator-ready framework covering login, product browsing, product detail, add-to-cart, and cart validation flows.",
        evidence: "Shows Appium 2 setup, config-driven capabilities, POM structure, screenshots on failure, Allure reporting, and mobile CI planning.",
        ciStatus: "Manual",
        schedule: "Daily workflow skeleton",
      },
      {
        name: "Playwright-MCP-AI-Framework",
        description: "Personal AI-assisted automation experiment using Playwright MCP for exploratory authoring, with deterministic Playwright TypeScript checks for CI.",
        technologies: ["TypeScript", "Playwright", "MCP", "AI Automation", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Playwright-MCP-AI-Framework",
        image: "/images/tile-playwright-mcp-ai-framework.png",
        category: "AI Automation",
        context: "Self-directed portfolio",
        role: "Built to explore where AI assistance helps test authoring while keeping checks deterministic.",
        evidence: "Shows MCP-assisted workflow, Playwright implementation, and scheduled validation.",
        ciStatus: "Passing",
        schedule: "Daily",
      },
    ],
  },
  automationHealth: {
    title: "Automation Evidence",
    summary: "A snapshot of maintained QA frameworks with scheduled GitHub Actions, deterministic checks, and visible evidence that the repos are actively exercised.",
    auditedAt: "Audited June 3, 2026",
    stats: [
      {
        label: "Framework repos",
        value: "8",
        detail: "scheduled and maintained",
      },
      {
        label: "Green audited runs",
        value: "8/8",
        detail: "latest checked framework pipelines",
      },
      {
        label: "Automation types",
        value: "5",
        detail: "UI, API, BDD, integration, AI",
      },
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
    capabilities: [
      { label: "UI automation", value: 4, total: 8 },
      { label: "API automation", value: 4, total: 8 },
      { label: "BDD / Gherkin", value: 2, total: 8 },
      { label: "AI-assisted tooling", value: 1, total: 8 },
      { label: "Scheduled CI", value: 8, total: 8 },
    ],
    technologies: [
      { label: "TypeScript / JavaScript", count: 3, color: "#2563eb" },
      { label: "C# / .NET", count: 2, color: "#7c3aed" },
      { label: "Python", count: 1, color: "#0f766e" },
      { label: "Java", count: 1, color: "#dc2626" },
      { label: "Postman / Newman", count: 1, color: "#ea580c" },
    ],
  },
  homelab: {
    title: "Homelab Systems",
    kicker: "Private infrastructure, public case studies",
    teaser: "Open the server cupboard",
    summary:
      "A sanitized look at the self-hosted systems I run for energy tracking, household dashboards, media services, automation, monitoring, and recovery planning. The production repositories and live endpoints stay private; the portfolio focuses on architecture, delivery practice, and operational thinking.",
    principles: [
      "Private repos for home-specific implementation details",
      "Sanitized screenshots and mock data for public write-ups",
      "Docker Compose, systemd, and backup-first restore planning",
    ],
    services: [
      {
        name: "Home Dashboard Next",
        category: "Operations dashboard",
        stack: ["Next.js", "FastAPI", "Docker", "Tailscale"],
        description:
          "Single-pane dashboard for private service health, project shortcuts, Docker-aware status, and household system summaries.",
        visibility: "Private repo",
        image: "/images/homelab/home-dashboard-next.png",
      },
      {
        name: "Granny Flat Billing",
        category: "Energy billing",
        stack: ["Python", "React", "SQLite", "systemd"],
        description:
          "Tracks tenant-facing electricity usage and billing state with local persistence and a focused dashboard workflow.",
        visibility: "Private repo",
        image: "/images/homelab/granny-flat-billing.png",
      },
      {
        name: "Main House Energy",
        category: "Solar and usage",
        stack: ["Python", "React", "SQLite", "SolarEdge"],
        description:
          "Models household solar generation, grid import/export, and daily energy flow for practical household decision-making.",
        visibility: "Private repo",
        image: "/images/homelab/main-house-energy.png",
      },
      {
        name: "Frigate + Home Assistant",
        category: "Automation and video",
        stack: ["Docker Compose", "Frigate", "Home Assistant", "MQTT"],
        description:
          "Local-first camera, automation, and event workflow stack with pinned containers and recovery-oriented configuration.",
        visibility: "Public showcase",
        image: "/images/homelab/frigate-wall.png",
      },
      {
        name: "Immich",
        category: "Photo library",
        stack: ["Docker", "PostgreSQL", "External storage"],
        description:
          "Self-hosted photo library with scheduled database backups and external media storage separated from app config.",
        visibility: "Public showcase",
      },
      {
        name: "Portainer + Filebrowser",
        category: "Administration",
        stack: ["Docker", "Volumes", "Bind mounts"],
        description:
          "Local administration tools for container visibility and managed access to curated server folders.",
        visibility: "Public showcase",
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    description: "Interested in automation, testing, or have a project in mind? I'd love to hear from you.",
    email: {
      text: "Email Me",
      address: "daviiidle@gmail.com",
    },
    linkedin: {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/david-le-2a3456a9/",
    },
  },
};
