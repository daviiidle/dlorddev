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
    title: "Quality Assurance & Automation Engineer",
    subtitle: "QA and Automation Engineer with expertise in functional and automation testing across banking, finance, and retail. Building scalable test frameworks with Python, Behave, Cucumber, and modern CI/CD pipelines. Passionate about combining structured test design with AI-assisted tooling to deliver reliable, high-performing platforms.",
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
    title: "Automation Health",
    summary: "A snapshot of maintained QA frameworks with scheduled GitHub Actions, deterministic checks, and visible evidence of delivery discipline.",
    auditedAt: "Audited June 3, 2026",
    stats: [
      {
        label: "Framework repos",
        value: "8",
        detail: "scheduled and maintained",
      },
      {
        label: "Latest CI pass rate",
        value: "100%",
        detail: "latest audited framework runs",
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
