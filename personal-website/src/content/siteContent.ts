export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
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
    title: "Hybrid QA Engineer",
    subtitle: "Building robust test automation frameworks and CI/CD pipelines with TypeScript, Playwright, and modern DevOps practices",
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
        name: "API Test Automation Framework",
        description: "Playwright-based framework for automated API testing with comprehensive reporting",
        technologies: ["TypeScript", "Playwright", "Node.js", "Docker"],
        githubUrl: "https://github.com/yourusername/api-automation",
        demoUrl: "https://api-automation-demo.vercel.app",
      },
      {
        name: "CI/CD Pipeline Orchestrator",
        description: "Automated deployment pipeline with testing, security scanning, and monitoring",
        technologies: ["Python", "GitHub Actions", "Docker", "AWS"],
        githubUrl: "https://github.com/yourusername/pipeline-orchestrator",
      },
      {
        name: "Web UI Test Suite",
        description: "Comprehensive end-to-end testing suite for web applications",
        technologies: ["TypeScript", "Playwright", "Jest", "React"],
        githubUrl: "https://github.com/yourusername/ui-test-suite",
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    description: "Interested in automation, testing, or have a project in mind? I'd love to hear from you.",
    email: {
      text: "Email Me",
      address: "your.email@example.com",
    },
    linkedin: {
      text: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
    },
  },
};