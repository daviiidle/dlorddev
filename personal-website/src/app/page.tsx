"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { siteContent } from "@/content/siteContent";

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const heroTitleParts = siteContent.hero.title.split(" & ");

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base font-medium tracking-[0.2em] uppercase text-gray-900"
            >
              {siteContent.navigation.brand}
            </motion.div>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="hidden md:inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-2 text-xs font-semibold tracking-[0.28em] uppercase text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {siteContent.navigation.links.contact}
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative isolate overflow-hidden bg-gray-100 pt-40 pb-32"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="hero-title text-left text-5xl sm:text-6xl md:text-[4.6rem] leading-[1.04] font-medium text-gray-900 max-w-3xl"
          >
            {heroTitleParts.length === 2 ? (
              <>
                <span className="hero-title-fragment">{heroTitleParts[0]}</span>{" "}
                <span className="hero-ampersand" aria-hidden="true">
                  <span>&</span>
                </span>
                <br />
                <span className="hero-title-fragment">{heroTitleParts[1]}</span>
              </>
            ) : (
              siteContent.hero.title
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-left text-base md:text-lg text-gray-600 leading-relaxed"
          >
            {siteContent.hero.subtitle}
          </motion.p>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 inline-flex items-center text-sm font-semibold tracking-[0.28em] uppercase text-gray-900 hover:text-black transition-colors"
          >
            {siteContent.hero.cta.primary} →
          </motion.a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-light text-black mb-16 tracking-tight"
          >
            {siteContent.projects.title}
          </motion.h2>
        </div>
        <div className="projects-grid-wrapper">
          <div className="projects-grid">
            {siteContent.projects.items.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02 }}
                className="project-tile"
              >
                <div className="project-media">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="project-media__image"
                      priority={index < 2}
                    />
                  ) : (
                    <div className="project-media__placeholder">
                      {project.technologies[0] === "JavaScript"
                        ? "🟨"
                        : project.technologies[0] === "TypeScript"
                        ? "🔷"
                        : project.technologies[0] === "Python"
                        ? "🐍"
                        : project.technologies[0] === "Java"
                        ? "☕"
                        : "📦"}
                    </div>
                  )}
                </div>
                <div className="project-overlay" />
                <div className="project-content">
                  <p className="project-meta">
                    {project.technologies.slice(0, 3).join(" • ")}
                  </p>
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-actions">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button project-button--primary"
                    >
                      View Code
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-button project-button--secondary"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="certifications-card"
          >
            <div className="certifications-card__media">
              <Image
                src="/images/certifications.png"
                alt="ISTQB CTFL 4.0 and iSQI Certified Agile Essentials badges"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="certifications-card__image"
              />
            </div>
            <div className="certifications-card__content">
              <p className="certifications-card__eyebrow">Certifications</p>
              <h2 className="certifications-card__heading">
                Validated expertise in QA fundamentals and agile delivery.
              </h2>
              <p className="certifications-card__description">
                ISTQB® Certified Tester Foundation Level (CTFL 4.0) and iSQI® Certified Agile
                Essentials.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-gray-100 py-32"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left text-sm font-semibold tracking-[0.42em] uppercase text-gray-500"
          >
            {siteContent.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-left text-xl md:text-[1.45rem] leading-relaxed text-gray-900"
          >
            {siteContent.contact.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={`mailto:${siteContent.contact.email.address}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="contact-pill"
            >
              <span>{siteContent.contact.email.text}</span>
            </motion.a>
            <motion.a
              href={siteContent.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="contact-pill contact-pill--secondary"
            >
              <span>{siteContent.contact.linkedin.text}</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
