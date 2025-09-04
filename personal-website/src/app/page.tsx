import Image from "next/image";
import { siteContent } from "@/content/siteContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="font-medium text-lg text-black">
              {siteContent.navigation.brand}
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm">
                {siteContent.navigation.links.about}
              </a>
              <a href="#projects" className="text-gray-600 hover:text-black transition-colors text-sm">
                {siteContent.navigation.links.projects}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm">
                {siteContent.navigation.links.contact}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light text-black mb-8 tracking-tight">
            {siteContent.hero.title}
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {siteContent.hero.subtitle}
          </p>
          <a
            href="#projects"
            className="inline-block text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
          >
            {siteContent.hero.cta.primary} →
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-center text-black mb-16 tracking-tight">
            {siteContent.projects.title}
          </h2>
          <div className="space-y-12">
            {siteContent.projects.items.map((project, index) => (
              <div key={index} className="group">
                <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-medium text-black mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs text-gray-500"
                        >
                          {tech}{techIndex < project.technologies.length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      View Code →
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-black mb-6 tracking-tight">
            {siteContent.contact.title}
          </h2>
          <p className="text-gray-600 mb-12 leading-relaxed">
            {siteContent.contact.description}
          </p>
          <div className="flex justify-center gap-8">
            <a
              href={`mailto:${siteContent.contact.email.address}`}
              className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
            >
              {siteContent.contact.email.text} →
            </a>
            <a
              href={siteContent.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              {siteContent.contact.linkedin.text} →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
