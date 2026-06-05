export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  category?: string;
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
    title: "David Le - Hybrid QA Engineer",
    description: "Personal website showcasing automation engineering projects and expertise",
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
    title: "Automation-focused Quality Engineer.",
    subtitle: "Melbourne-based QA and Automation Engineer with hands-on experience across banking, Salesforce, API integration, and enterprise workflow testing. I build practical automation frameworks, validate complex system behaviour, and use AI-assisted engineering to move faster without losing testing discipline.",
    cta: {
      primary: "View My Work",
      secondary: "GitHub",
    },
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile",
      email: "your.email@example.com",
    },
  },
  professionalStory: {
    kicker: "Professional Story",
    title: "A practical path from functional QA to automation ownership.",
    summary:
      "The short version: I started in functional testing, moved into enterprise banking automation, and now combine QA fundamentals with framework development, API coverage, Playwright, and AI-assisted quality engineering.",
    cta: "Read the full career story",
    recruiterSnapshot: [
      {
        label: "Role fit",
        value: "QA / Automation",
        detail: "Strong fit for Quality Engineer, Automation Engineer, and SDET-adjacent roles.",
      },
      {
        label: "Domains",
        value: "Banking + Salesforce",
        detail: "Experience across onboarding, deposits, transactions, chat migration, and integrations.",
      },
      {
        label: "Core stack",
        value: "Python / Playwright / API",
        detail: "Comfortable across PyTest, Behave, TypeScript, CI/CD, Postman/Newman, and BDD.",
      },
      {
        label: "Current edge",
        value: "AI-assisted QE",
        detail: "Using local models, agents, and automation wrappers to accelerate test design and delivery.",
      },
    ],
    highlights: [
      {
        value: "2022",
        label: "QA foundations",
        detail: "Functional testing, requirements validation, defect management, and process coverage.",
      },
      {
        value: "186",
        label: "System scenarios automated",
        detail: "Contributed roughly 37% of automated system test coverage at Judo Bank.",
      },
      {
        value: "200+",
        label: "Salesforce chat cases",
        detail: "Designed and executed migration coverage across journeys, routing, integrations, and data validation.",
      },
    ],
    paragraphs: [
      "I entered the software testing industry in 2022 through a QA bootcamp and began my career in functional testing. My early experience focused on test execution, defect management, requirements validation, and end-to-end business process testing across research and enterprise applications.",
      "As I moved into banking and financial services projects, I became increasingly involved in API testing, integration testing, and complex enterprise workflows. Working across systems such as Salesforce, Thought Machine, T24, Ops UI, Oracle ERP, and downstream integrations exposed me to large-scale enterprise environments where quality depended on validating data, business processes, and system interactions across multiple platforms.",
      "A defining point in my career was transitioning into automation. I did not come from a traditional software engineering background and initially relied heavily on AI-assisted development tools to accelerate my learning. Rather than focusing on memorising programming syntax, I focused on understanding frameworks, identifying patterns, solving testing problems, and delivering outcomes. Over time, I became increasingly effective at working within automation frameworks, understanding reusable components, API abstractions, CI/CD pipelines, test isolation strategies, and maintainable automation practices.",
      "Within approximately six months of moving into automation, I became a significant contributor to the automation team at Judo Bank. Working as part of a team of eight automation engineers, I automated approximately 186 system test scenarios, contributing to roughly 37% of the overall automated system test coverage. My work focused on customer onboarding, term deposits, transactions, account life cycles, integrations, and end-to-end banking workflows using Python, Behave, PyTest, API automation, and GitHub Actions.",
      "During this period I actively embraced AI-assisted engineering practices and became one of the strongest advocates for AI adoption within the team. I mentored offshore automation testers and shared AI-assisted workflows that helped accelerate delivery, problem-solving, and framework development. My contributions were recognised through a Super Nova Award, one of the highest recognition awards available within the organisation.",
      "More recently, I worked as the sole tester on a Salesforce chat migration project, helping migrate from a legacy chat platform to Salesforce Embedded Messaging. In this role I designed and executed more than 200 test cases covering customer journeys, case creation, routing logic, integrations, Salesforce data validation, and business process workflows. During project downtime, I independently built Playwright and TypeScript automation to validate chat workflows and improve my capability in modern web automation technologies.",
      "One of the most important lessons I learned during this period was adaptability. I was placed into automation projects involving technologies and business domains I had never worked with before. In one project, I joined an automation team responsible for validating output engine processes, generated files, headers, record counts, and downstream outputs. Despite having no prior experience in that area, I was able to understand the framework, contribute working automation, have my pull request merged within days, and rapidly increase my delivery velocity afterwards.",
      "My current work extends beyond traditional testing and automation into AI-assisted quality engineering. I am currently involved in an AI proof-of-concept initiative focused on accelerating application understanding, test data generation, and test case creation where requirements are incomplete, outdated, or unavailable. Due to data sovereignty requirements, the initiative uses locally hosted models and tooling rather than public cloud AI services. This includes experimentation with Gemma-based models, OpenCode workflows, agent-based approaches, and AI-assisted techniques for understanding complex applications and generating testing assets.",
      "Alongside this initiative, I developed an ITAF wrapper framework designed to reduce friction when adopting automation. Rather than forcing users to learn an entirely new framework, the solution allows teams to continue using familiar tools and workflows while automatically generating feature files and test data through reusable submodules and framework abstractions. The objective was not simply automation, but improving adoption by adapting the framework to existing business processes rather than forcing users to adapt to the framework.",
      "Outside of work, I continuously build personal projects focused on automation, AI, and infrastructure. These include Playwright frameworks, AI tooling, prompt orchestration systems, CLI applications, dashboards, and a self-hosted Ubuntu homelab running Docker-based services. Through these projects I continue to explore automation, observability, AI-assisted engineering, infrastructure management, and modern software delivery practices.",
      "Today, I describe myself as a Quality Engineer and Automation Engineer who combines strong testing fundamentals with practical automation experience and extensive use of AI-assisted engineering techniques. My strength is not memorising syntax or writing every line of code manually. My strength is understanding systems, learning unfamiliar domains quickly, recognising patterns, building reusable solutions, and using modern tools to deliver quality outcomes efficiently.",
    ],
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        name: "Cypress-Automation-Framework",
        description: "JavaScript-based E2E testing framework utilizing Cypress, Page Object Model, Faker.js for data generation, Mochawesome reporting, and GitHub Actions CI/CD integration.",
        technologies: ["JavaScript", "Cypress", "POM", "Faker.js", "Mochawesome", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Cypress-Automation-Framework.",
        image: "/images/tile-cypress-automation-framework.png",
        category: "UI Automation",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "dlorddev",
        description: "Personal portfolio website showcasing automation frameworks and projects",
        technologies: ["TypeScript", "Next.js", "React", "TailwindCSS", "Vercel"],
        githubUrl: "https://github.com/daviiidle/dlorddev",
        image: "/images/tile-dlorddev.png",
        category: "Portfolio",
        ciStatus: "Manual",
        schedule: "On change",
      },
      {
        name: "Playwright-TypeScript",
        description: "TypeScript-based Playwright automation framework for reliable cross-browser end-to-end testing.",
        technologies: ["TypeScript", "Playwright", "E2E Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Playwright-TypeScript",
        image: "/images/tile-playwright-typescript.png",
        category: "UI Automation",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Python-API",
        description: "Python API testing framework for structured request validation, test data generation, and automated quality checks.",
        technologies: ["Python", "API Testing", "Automation", "Pytest"],
        githubUrl: "https://github.com/daviiidle/Python-API",
        image: "/images/tile-python-api.png",
        category: "API Automation",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "ITAF-DotNet-CSharp",
        description: "Integrated Test Automation Framework built with .NET, C#, Reqnroll BDD/Gherkin, NUnit, Playwright UI automation, API testing, logging, reporting, and CI/CD.",
        technologies: ["C#", ".NET", "Reqnroll", "Gherkin", "NUnit", "Playwright", "API Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/ITAF-DotNet-CSharp",
        image: "/images/tile-itaf-dotnet-csharp.png",
        category: "BDD Framework",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Postman-Decoupling-Framework",
        description: "C# ingestion framework that consumes existing Postman/Newman repositories and generates Gherkin features, test data, and WireMock stub mappings without forcing teams to change tools.",
        technologies: ["C#", ".NET", "Postman", "Newman", "Gherkin", "WireMock", "CI/CD"],
        githubUrl: "https://github.com/daviiidle/Postman-Decoupling-Framework",
        image: "/images/tile-postman-decoupling-framework.png",
        category: "Integration Framework",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Postman-Newman-Framework",
        description: "Placement-domain Postman/Newman source framework containing collections, environments, iteration data, and scheduled CI assets consumed by the decoupling framework.",
        technologies: ["Postman", "Newman", "Node.js", "API Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Postman-Newman-Framework",
        image: "/images/tile-postman-newman-framework.png",
        category: "API Source Framework",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Selenium-Automation-Framework",
        description: "Enterprise-grade Selenium Java automation framework for DemoWebShop with Page Object Model, TestNG suites, reporting, driver management, test data utilities, and CI workflows.",
        technologies: ["Java", "Selenium", "TestNG", "Maven", "POM", "ExtentReports", "Allure", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Selenium-Automation-Framework",
        image: "/images/tile-selenium-automation-framework.png",
        category: "UI Automation",
        ciStatus: "Passing",
        schedule: "Daily",
      },
      {
        name: "Playwright-MCP-AI-Framework",
        description: "AI-assisted browser automation framework using Microsoft's official Playwright MCP server for exploratory authoring, with deterministic Playwright TypeScript tests and scheduled CI.",
        technologies: ["TypeScript", "Playwright", "MCP", "AI Automation", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Playwright-MCP-AI-Framework",
        image: "/images/tile-playwright-mcp-ai-framework.png",
        category: "AI Automation",
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
