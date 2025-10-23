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
        name: "Playwright-Automation-Framework",
        description: "TypeScript-based cross-browser automation framework with Page Object Model, test fixtures, parallel execution, comprehensive reporting, and automatic failure screenshots/videos.",
        technologies: ["TypeScript", "Playwright", "POM", "Faker.js", "Allure", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Playwright-Automation-Framework",
        image: "/images/playwright.webp",
      },
      {
        name: "Python-API-Automation-Framework",
        description: "BDD-driven API testing framework using Python, Behave, Poetry, Wiremock for mocking, Faker for data generation, Allure reporting, and GitHub Actions CI/CD.",
        technologies: ["Python", "Behave", "BDD", "Poetry", "WireMock", "Faker", "Allure", "GitHub Actions"],
        githubUrl: "https://github.com/daviiidle/Python-API-Automation-Framework",
        image: "/images/python-api.webp",
      },
      {
        name: "Wiremock",
        description: "Banking API stub service built with WireMock, Java 17, Python, Pytest for testing, response templating, dynamic data generation, and cloud deployment on Railway/Render.",
        technologies: ["Python", "Java 17", "WireMock", "Pytest", "Railway", "Render"],
        githubUrl: "https://github.com/daviiidle/Wiremock",
        image: "/images/wiremock.webp",
      },
      {
        name: "Selenium-Automation-Framework",
        description: "Java-based framework with Selenium WebDriver, TestNG, Maven, Page Object Model, Factory Pattern, ExtentReports/Allure reporting, Log4j2, and Java Faker for test data.",
        technologies: ["Java", "Selenium", "TestNG", "Maven", "POM", "ExtentReports", "Allure", "Log4j2"],
        githubUrl: "https://github.com/daviiidle/Selenium-Automation-Framework",
        image: "/images/cypress.webp",
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
