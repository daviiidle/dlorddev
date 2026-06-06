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

  const { automationHealth, homelab, professionalStory } = siteContent;
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
          <a href="#story">Story</a>
          <a href="#health">{automationHealth.title}</a>
          <a href="#projects">{siteContent.navigation.links.projects}</a>
          <a href="#homelab">Homelab</a>
          <a href="#contact">{siteContent.navigation.links.contact}</a>
        </div>
      </motion.nav>

      <section id="about" className="hero-section">
        <div className="hero-section__scrim" />
        <div className="section-inner hero-section__content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hero-copy"
          >
            <p className="section-kicker">Quality Engineer / Test Automation Engineer</p>
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

      <section className="recruiter-strip" aria-label="Recruiter snapshot">
        <div className="section-inner recruiter-strip__inner">
          {professionalStory.recruiterSnapshot.map((item) => (
            <article key={item.label} className="recruiter-fact">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="section-band section-band--white">
        <div className="section-inner">
          <motion.details
            className="story-disclosure"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <summary className="story-summary">
              <span className="story-summary__copy">
                <span className="section-kicker">{professionalStory.kicker}</span>
                <strong>{professionalStory.title}</strong>
                <em>{professionalStory.summary}</em>
              </span>
              <span className="story-summary__button">
                <span className="story-summary__expand">{professionalStory.cta}</span>
                <span className="story-summary__collapse">Collapse story</span>
              </span>
            </summary>

            <div className="story-expanded">
              <div className="story-highlights" aria-label="Career story highlights">
                {professionalStory.highlights.map((highlight) => (
                  <article key={highlight.label}>
                    <strong>{highlight.value}</strong>
                    <span>{highlight.label}</span>
                    <p>{highlight.detail}</p>
                  </article>
                ))}
              </div>

              <div className="story-body">
                {professionalStory.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.details>
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
                <strong>8/8</strong>
                <span>framework pipelines green in the latest checked runs</span>
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
              <p className="section-kicker">{siteContent.projects.kicker}</p>
              <h2>{siteContent.projects.title}</h2>
            </div>
            <p>
              {siteContent.projects.summary}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="projects-context"
          >
            <strong>How to read this section</strong>
            <p>{siteContent.projects.note}</p>
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
                    <span className="project-context-pill">{project.context}</span>
                    <span className="status-pill status-pill--compact">
                      <span aria-hidden="true" />
                      {project.ciStatus}
                    </span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <dl className="project-evidence">
                    <div>
                      <dt>My role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt>Evidence</dt>
                      <dd>{project.evidence}</dd>
                    </div>
                    <div>
                      <dt>CI rhythm</dt>
                      <dd>{project.schedule}</dd>
                    </div>
                  </dl>
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

      <section id="homelab" className="section-band section-band--white">
        <div className="section-inner">
          <motion.details
            className="homelab-disclosure"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <summary className="homelab-summary">
              <span className="section-kicker">{homelab.kicker}</span>
              <span className="homelab-summary__main">
                <span>
                  <strong>{homelab.title}</strong>
                  <em>{homelab.teaser}</em>
                </span>
                <span className="homelab-summary__button">
                  <span className="homelab-summary__expand">Expand</span>
                  <span className="homelab-summary__collapse">Collapse</span>
                </span>
              </span>
            </summary>

            <div className="homelab-expanded">
              <div className="section-heading section-heading--split homelab-heading">
                <div>
                  <p className="section-kicker">{homelab.kicker}</p>
                  <h2>{homelab.title}</h2>
                </div>
                <p>{homelab.summary}</p>
              </div>

              <div className="homelab-layout">
                <aside className="homelab-principles">
                  <h3>Showcase Boundaries</h3>
                  {homelab.principles.map((principle) => (
                    <p key={principle}>{principle}</p>
                  ))}
                </aside>

                <div className="homelab-grid">
                  {homelab.services.map((service) => (
                    <article key={service.name} className="homelab-card">
                      {service.image && (
                        <a
                          className="homelab-card__media"
                          href={service.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open full ${service.name} dashboard screenshot`}
                        >
                          <Image
                            src={service.image}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="homelab-card__image"
                          />
                        </a>
                      )}
                      <div className="homelab-card__body">
                        <div className="homelab-card__topline">
                          <span>{service.category}</span>
                          <span>{service.visibility}</span>
                        </div>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <div className="tech-list">
                          {service.stack.map((technology) => (
                            <span key={technology}>{technology}</span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </motion.details>
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
            className="profile-panel"
          >
            <div className="profile-panel__media">
              <Image
                src="/images/portrait.jpg"
                alt="David Le"
                fill
                sizes="(max-width: 768px) 180px, 260px"
                className="profile-panel__image"
                priority
              />
            </div>
            <div className="profile-panel__copy">
              <p className="section-kicker">{siteContent.contact.title}</p>
              <h2>{siteContent.contact.description}</h2>
              <p>
                Melbourne-based quality engineer combining enterprise testing, practical automation,
                rapid system comprehension, and evidence-based AI-assisted engineering.
              </p>
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
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
