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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center text-black mb-16 tracking-tight">
            {siteContent.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteContent.projects.items.map((project, index) => (
              <a
                key={index}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-md transition-all duration-200"
              >
                {/* Project Image */}
                {project.image ? (
                  <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.technologies[0] === 'JavaScript' ? '🟨' :
                       project.technologies[0] === 'TypeScript' ? '🔷' :
                       project.technologies[0] === 'Python' ? '🐍' :
                       project.technologies[0] === 'Java' ? '☕' :
                       '📦'}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                      </svg>
                      <h3 className="text-base font-medium text-blue-600 group-hover:text-blue-700">
                        {project.name}
                      </h3>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      Public
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 rounded-full ${
                        project.technologies[0] === 'JavaScript' ? 'bg-yellow-400' :
                        project.technologies[0] === 'TypeScript' ? 'bg-blue-600' :
                        project.technologies[0] === 'Python' ? 'bg-blue-500' :
                        project.technologies[0] === 'Java' ? 'bg-orange-500' :
                        'bg-gray-400'
                      }`}></span>
                      <span>{project.technologies[0]}</span>
                    </div>
                    {project.demoUrl && (
                      <span className="text-blue-600">Live Demo</span>
                    )}
                  </div>
                </div>
              </a>
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
