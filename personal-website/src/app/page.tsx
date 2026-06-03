"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { siteContent } from "@/content/siteContent";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { automationHealth } = siteContent;
  const totalTech = automationHealth.technologies.reduce((sum, item) => sum + item.count, 0);

  return (
    <main className="site-shell">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="site-nav"
      >
        <a className="site-nav__brand" href="#about">
          {siteContent.navigation.brand}
        </a>
        <div className="site-nav__links">
          <a href="#health">{automationHealth.title}</a>
          <a href="#projects">{siteContent.navigation.links.projects}</a>
          <a href="#contact">{siteContent.navigation.links.contact}</a>
        </div>
      </motion.nav>

      <section id="about" className="hero-section">
        <Image
          src="/images/portrait.jpg"
          alt="David Le"
          fill
          sizes="100vw"
          className="hero-section__image"
          priority
        />
        <div className="hero-section__scrim" />
        <div className="section-inner hero-section__content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hero-copy"
          >
            <p className="section-kicker">Hybrid QA Engineer</p>
            <h1>{siteContent.hero.title}</h1>
            <p>{siteContent.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="button button--light" href="#projects">
                {siteContent.hero.cta.primary}
              </a>
              <a
                className="button button--ghost"
                href="https://github.com/daviiidle"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
            className="hero-proof"
            aria-label="Automation portfolio summary"
          >
            {automationHealth.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="health" className="section-band section-band--light">
        <div className="section-inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="section-heading"
          >
            <p className="section-kicker">{automationHealth.auditedAt}</p>
            <h2>{automationHealth.title}</h2>
            <p>{automationHealth.summary}</p>
          </motion.div>

          <div className="health-layout">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="health-table"
            >
              <div className="health-table__header">
                <span>Framework</span>
                <span>Status</span>
                <span>Schedule</span>
              </div>
              {automationHealth.frameworks.map((framework) => (
                <article key={framework.name} className="health-row">
                  <div>
                    <h3>{framework.name}</h3>
                    <p>
                      {framework.category} / {framework.stack}
                    </p>
                  </div>
                  <span className="status-pill">
                    <span aria-hidden="true" />
                    {framework.status}
                  </span>
                  <div className="health-row__schedule">
                    <code>{framework.schedule}</code>
                    <p>{framework.latestRun}</p>
                  </div>
                </article>
              ))}
            </motion.div>

            <aside className="metrics-panel" aria-label="Automation metrics">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="metric-card metric-card--dark"
              >
                <p className="metric-card__label">Latest audited CI</p>
                <strong>100%</strong>
                <span>8 of 8 framework pipelines passing</span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="metric-card"
              >
                <h3>Capability Coverage</h3>
                <div className="bar-chart">
                  {automationHealth.capabilities.map((metric) => (
                    <div key={metric.label} className="bar-chart__row">
                      <div>
                        <span>{metric.label}</span>
                        <strong>
                          {metric.value}/{metric.total}
                        </strong>
                      </div>
                      <div className="bar-chart__track">
                        <span style={{ width: `${(metric.value / metric.total) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="metric-card"
              >
                <h3>Technology Mix</h3>
                <div className="donut-wrap">
                  <div
                    className="donut"
                    style={{
                      background: `conic-gradient(${automationHealth.technologies
                        .reduce(
                          (segments, item) => {
                            const previous = segments.offset;
                            const next = previous + (item.count / totalTech) * 100;
                            segments.parts.push(`${item.color} ${previous}% ${next}%`);
                            segments.offset = next;
                            return segments;
                          },
                          { offset: 0, parts: [] as string[] }
                        )
                        .parts.join(", ")})`,
                    }}
                    aria-hidden="true"
                  />
                  <div className="donut-legend">
                    {automationHealth.technologies.map((item) => (
                      <span key={item.label}>
                        <i style={{ backgroundColor: item.color }} />
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <section id="projects" className="section-band section-band--white">
        <div className="section-inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="section-heading section-heading--split"
          >
            <div>
              <p className="section-kicker">Framework Portfolio</p>
              <h2>{siteContent.projects.title}</h2>
            </div>
            <p>
              Practical automation frameworks covering browser UI, API, BDD, Postman/Newman
              ingestion, Selenium, and AI-assisted Playwright MCP workflows.
            </p>
          </motion.div>

          <div className="projects-grid">
            {siteContent.projects.items.map((project, index) => (
              <motion.article
                key={project.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.28) }}
                className="project-card"
              >
                <div className="project-card__media">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="project-card__image"
                    />
                  )}
                  <span>{project.category}</span>
                </div>
                <div className="project-card__body">
                  <div className="project-card__topline">
                    <span className="status-pill status-pill--compact">
                      <span aria-hidden="true" />
                      {project.ciStatus}
                    </span>
                    <span>{project.schedule}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.technologies.slice(0, 5).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View repository
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-band section-band--muted">
        <div className="section-inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="certifications-strip"
          >
            <div className="certifications-strip__media">
              <Image
                src="/images/certifications.png"
                alt="ISTQB CTFL 4.0 and iSQI Certified Agile Essentials badges"
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                className="certifications-strip__image"
              />
            </div>
            <div>
              <p className="section-kicker">Certifications</p>
              <h2>Validated QA foundations paired with modern automation delivery.</h2>
              <p>
                ISTQB Certified Tester Foundation Level 4.0 and iSQI Certified Agile Essentials,
                applied through CI-backed UI, API, BDD, and integration frameworks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-inner contact-section__inner">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">{siteContent.contact.title}</p>
            <h2>{siteContent.contact.description}</h2>
            <div className="contact-actions">
              <a className="button button--light" href={`mailto:${siteContent.contact.email.address}`}>
                {siteContent.contact.email.text}
              </a>
              <a
                className="button button--ghost"
                href={siteContent.contact.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteContent.contact.linkedin.text}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
