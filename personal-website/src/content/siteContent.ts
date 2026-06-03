export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
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
        image: "/images/selenium.webp",
      },
      {
        name: "dlorddev",
        description: "Personal portfolio website showcasing automation frameworks and projects",
        technologies: ["TypeScript", "Next.js", "React", "TailwindCSS", "Vercel"],
        githubUrl: "https://github.com/daviiidle/dlorddev",
        image: "/images/dlorddev.webp",
      },
      {
        name: "Playwright-TypeScript",
        description: "TypeScript-based Playwright automation framework for reliable cross-browser end-to-end testing.",
        technologies: ["TypeScript", "Playwright", "E2E Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Playwright-TypeScript",
        image: "/images/playwright.webp",
      },
      {
        name: "Python-API",
        description: "Python API testing framework for structured request validation, test data generation, and automated quality checks.",
        technologies: ["Python", "API Testing", "Automation", "Pytest"],
        githubUrl: "https://github.com/daviiidle/Python-API",
        image: "/images/python-api.webp",
      },
      {
        name: "ITAF-DotNet-CSharp",
        description: "Integrated Test Automation Framework built with .NET, C#, Reqnroll BDD/Gherkin, NUnit, Playwright UI automation, API testing, logging, reporting, and CI/CD.",
        technologies: ["C#", ".NET", "Reqnroll", "Gherkin", "NUnit", "Playwright", "API Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/ITAF-DotNet-CSharp",
        image: "/images/cypress.webp",
      },
      {
        name: "Postman-Decoupling-Framework",
        description: "C# ingestion framework that consumes existing Postman/Newman repositories and generates Gherkin features, test data, and WireMock stub mappings without forcing teams to change tools.",
        technologies: ["C#", ".NET", "Postman", "Newman", "Gherkin", "WireMock", "CI/CD"],
        githubUrl: "https://github.com/daviiidle/Postman-Decoupling-Framework",
        image: "/images/wiremock.webp",
      },
      {
        name: "Postman-Newman-Framework",
        description: "Placement-domain Postman/Newman source framework containing collections, environments, iteration data, and scheduled CI assets consumed by the decoupling framework.",
        technologies: ["Postman", "Newman", "Node.js", "API Testing", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Postman-Newman-Framework",
        image: "/images/python-api.webp",
      },
      {
        name: "Selenium-Automation-Framework",
        description: "Enterprise-grade Selenium Java automation framework for DemoWebShop with Page Object Model, TestNG suites, reporting, driver management, test data utilities, and CI workflows.",
        technologies: ["Java", "Selenium", "TestNG", "Maven", "POM", "ExtentReports", "Allure", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Selenium-Automation-Framework",
        image: "/images/selenium.webp",
      },
      {
        name: "Playwright-MCP-AI-Framework",
        description: "AI-assisted browser automation framework using Microsoft's official Playwright MCP server for exploratory authoring, with deterministic Playwright TypeScript tests and scheduled CI.",
        technologies: ["TypeScript", "Playwright", "MCP", "AI Automation", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Playwright-MCP-AI-Framework",
        image: "/images/playwright.webp",
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
