
"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    icon: "◈",
    title: "Web Development",
    description:
      "Fast, responsive websites and web applications designed around real business goals.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    number: "02",
    icon: "⌘",
    title: "Software Solutions",
    description:
      "Practical digital systems that simplify workflows, organize information and solve problems.",
    tags: ["Python", "Databases", "APIs"],
  },
  {
    number: "03",
    icon: "✳",
    title: "AI Integration",
    description:
      "Smarter digital experiences using automation, intelligent workflows and AI-powered features.",
    tags: ["AI Tools", "Automation", "Integration"],
  },
  {
    number: "04",
    icon: "▧",
    title: "UI/UX Design",
    description:
      "Clean interfaces and intuitive user journeys that make complex products feel simple.",
    tags: ["Wireframes", "Prototypes", "Responsive UI"],
  },
];

const projects = [
  {
    number: "01",
    category: "DIGITAL COMMERCE",
    title: "Smart Choice Hub",
    subtitle: "A clearer way to discover products.",
    description:
      "An e-commerce concept focused on organized product discovery, intuitive navigation and a smooth shopping experience across devices.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern online shopping and digital payment experience",
    stack: ["Next.js", "React", "TypeScript"],
    problem:
      "Online shoppers can struggle to find relevant products when categories and product information are poorly organized.",
    solution:
      "Create a structured storefront with clear product categories, accessible information and a consistent responsive interface.",
    outcome:
      "A polished project concept designed around easier product discovery and a better user journey.",
  },
  {
    number: "02",
    category: "INFORMATION SYSTEMS",
    title: "Library Management",
    subtitle: "Less manual work. Better organization.",
    description:
      "A library management system concept for organizing book records, member information, lending activity and searchable collections.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
    alt: "Professional library interior with organized bookshelves",
    stack: ["Python", "Database", "SQL"],
    problem:
      "Paper-based or scattered records make it harder to search for books and keep track of library activity.",
    solution:
      "Organize book and member records in a structured database and provide a clear workflow for managing lending activity.",
    outcome:
      "A practical academic project demonstrating programming logic, data organization and database concepts.",
  },
];

const thoughtSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the users, business goals and real problem.",
    detail:
      "We start by asking the right questions, identifying the audience and clarifying what success should look like.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Break the challenge into clear requirements.",
    detail:
      "We examine constraints, user needs, available data and technical requirements before choosing an approach.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Strategize",
    description: "Choose the right plan and technology.",
    detail:
      "We map the user journey, prioritize features and select technologies that fit the actual problem.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Build",
    description: "Turn the plan into a usable product.",
    detail:
      "We develop in manageable steps, keep the interface consistent and test the important user flows.",
    icon: "⌘",
  },
  {
    number: "05",
    title: "Improve",
    description: "Test, refine and prepare for growth.",
    detail:
      "We review the experience, fix issues and identify improvements for future versions.",
    icon: "↗",
  },
];

const processSteps = [
  ["01", "Research", "Define the problem and understand the audience."],
  ["02", "Planning", "Set priorities, features and milestones."],
  ["03", "Design", "Create the layout and user experience."],
  ["04", "Development", "Build responsive, maintainable functionality."],
  ["05", "Testing", "Check usability, performance and key interactions."],
  ["06", "Launch", "Deploy the project and plan future improvements."],
];

const faqs = [
  {
    question: "What does Nexora Digital do?",
    answer:
      "Nexora Digital is presented as a software and IT agency offering web development, software concepts, AI integration and UI/UX design.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "This website highlights Next.js, React, TypeScript, Python, SQL and modern database technologies.",
  },
  {
    question: "Are the projects real client case studies?",
    answer:
      "Smart Choice Hub and Library Management are showcased as project concepts. Replace their descriptions with verified details if you later use this website for real client work.",
  },
  {
    question: "Can a website be customized for my business?",
    answer:
      "Yes. The layout and content can be adapted for a business website, online store, portfolio or software product.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeThought, setActiveThought] = useState(0);
  const [sent, setSent] = useState(false);

  function handleContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <div className="announcement">
        <span className="status-dot" />
        Building thoughtful digital experiences
        <a href="#contact">Let&apos;s talk <span>↗</span></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nexora Digital home">
          <span className="brand-mark">N</span>
          <span className="brand-copy">
            <strong>NEXORA</strong>
            <small>DIGITAL STUDIO</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[
            ["Services", "#services"],
            ["Projects", "#projects"],
            ["Our thinking", "#thinking"],
            ["Process", "#process"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Start a project <span>↗</span>
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            GOOD TECHNOLOGY. REAL SOLUTIONS.
          </div>

          <h1>
            Thoughtful ideas.
            <br />
            <span>Powerful digital</span>
            <br />
            experiences.
          </h1>

          <p className="hero-description">
            We bring strategy, design and technology together to build useful
            digital products that solve real problems and create lasting value.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore our work <span>↗</span>
            </a>
            <a className="button-secondary" href="#thinking">
              How we think <span>↓</span>
            </a>
          </div>

          <div className="hero-proof">
            <span className="proof-icon">✳</span>
            <span>
              <strong>Built with intention</strong>
              <small>Strategy first. Technology second.</small>
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90"
            alt="Modern development workspace with a laptop and code editor"
          />
          <div className="image-shade" />

          <div className="floating-label label-top">
            <span className="mini-dot" />
            <span>
              <strong>Modern technology</strong>
              <small>Designed for what comes next</small>
            </span>
          </div>

          <div className="stack-card">
            <div className="stack-card-heading">
              <span>OUR DIGITAL TOOLKIT</span>
              <span className="live-dot" />
            </div>
            <div className="stack-items">
              {[
                ["⚛", "React"],
                ["N", "Next.js"],
                ["TS", "TypeScript"],
                ["Py", "Python"],
              ].map(([symbol, name]) => (
                <div className="stack-item" key={name}>
                  <span className="stack-symbol">{symbol}</span>
                  <small>{name}</small>
                </div>
              ))}
            </div>
            <div className="stack-card-footer">
              <span>Purpose-built stack</span>
              <span>↗</span>
            </div>
          </div>

          <div className="visual-caption">
            <span className="caption-index">01 / 04</span>
            <span>From concept to crafted product</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>STRATEGY</span>
          <i />
          <span>DESIGN</span>
          <i />
          <span>ENGINEERING</span>
          <i />
          <span>INNOVATION</span>
        </div>
      </section>

      <section className="trust-strip">
        <div className="section-wrap trust-inner">
          <span className="trust-label">TECHNOLOGY WITH PURPOSE</span>
          <div className="trust-item"><span>✳</span> Clean engineering</div>
          <div className="trust-item"><span>◈</span> User-first thinking</div>
          <div className="trust-item"><span>↗</span> Built to evolve</div>
        </div>
      </section>

      <section className="section section-wrap" id="about">
        <div className="section-heading about-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" />WHO WE ARE</div>
            <h2>
              Technology should
              <br />
              <span>make life simpler.</span>
            </h2>
          </div>
          <p>
            Great digital products are not just about writing code. They begin
            with understanding people, asking better questions and choosing
            the simplest effective solution.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=85"
              alt="Team collaborating around a table"
              loading="lazy"
            />
            <div className="about-image-tag">
              <span>✳</span>
              <span>
                <strong>People before pixels</strong>
                <small>Better products start with understanding.</small>
              </span>
            </div>
          </div>
          <div className="about-content">
            <span className="mini-label">OUR PHILOSOPHY</span>
            <h3>Make it useful.<br />Make it intuitive.<br /><span>Make it matter.</span></h3>
            <p>
              Nexora Digital brings a problem-solving mindset to web
              experiences, software systems and emerging technology. Every
              design choice and technical decision should serve a clear purpose.
            </p>
            <a className="text-link" href="#thinking">Explore our thinking <span>↗</span></a>

            <div className="principles">
              <div><span>01</span><strong>Clarity over complexity</strong></div>
              <div><span>02</span><strong>Purpose over trends</strong></div>
              <div><span>03</span><strong>Progress through iteration</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" />WHAT WE DO</div>
              <h2>
                Digital capabilities.
                <br />
                <span>Practical outcomes.</span>
              </h2>
            </div>
            <p>
              A considered mix of design, development and technical thinking
              to help turn ideas into useful digital experiences.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon">{service.icon}</span>
                  <span className="card-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="card-arrow" href="#contact" aria-label={`Discuss ${service.title}`}>↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" />SELECTED WORK</div>
            <h2>
              Ideas brought
              <br />
              <span>into focus.</span>
            </h2>
          </div>
          <p>
            A closer look at projects that explore how thoughtful design and
            structured engineering can improve digital experiences.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index % 2 === 1 ? "project-reverse" : ""}`}
              key={project.number}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <div className="project-image-overlay" />
                <span className="project-image-index">{project.number} / PROJECT</span>
                <span className="project-image-corner">↗</span>
              </div>

              <div className="project-info">
                <div className="eyebrow project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>

                <a className="text-link" href={`#case-${project.number}`}>
                  Explore case study <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-note">
          <span className="note-icon">i</span>
          <p>
            Project descriptions are presented as portfolio concepts. Update
            them with verified project details and results as your work grows.
          </p>
        </div>
      </section>

      <section className="section case-section" id="case-studies">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" />CASE STUDIES</div>
              <h2>
                Start with the
                <br />
                <span>problem, not the code.</span>
              </h2>
            </div>
            <p>
              Every strong solution starts with a clear understanding of what
              needs to change and why.
            </p>
          </div>

          <div className="case-grid">
            {projects.map((project) => (
              <article className="case-card" id={`case-${project.number}`} key={project.number}>
                <div className="case-card-header">
                  <span>CASE {project.number}</span>
                  <span className="case-arrow">↗</span>
                </div>
                <h3>{project.title}</h3>
                <div className="case-block">
                  <span className="case-label"><span className="case-dot problem-dot" />THE CHALLENGE</span>
                  <p>{project.problem}</p>
                </div>
                <div className="case-block">
                  <span className="case-label"><span className="case-dot solution-dot" />THE APPROACH</span>
                  <p>{project.solution}</p>
                </div>
                <div className="case-outcome">
                  <span>INTENDED OUTCOME</span>
                  <p>{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wrap" id="thinking">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" />OUR THOUGHT PROCESS</div>
            <h2>
              Better thinking.
              <br />
              <span>Better solutions.</span>
            </h2>
          </div>
          <p>
            We do not jump straight into development. We understand the
            challenge, evaluate options and build with a reason behind every step.
          </p>
        </div>

        <div className="thinking-layout">
          <div className="thinking-list">
            {thoughtSteps.map((step, index) => (
              <button
                className={`thinking-step ${activeThought === index ? "thinking-active" : ""}`}
                key={step.number}
                onClick={() => setActiveThought(index)}
                aria-pressed={activeThought === index}
              >
                <span className="thinking-number">{step.number}</span>
                <span className="thinking-step-copy">
                  <strong>{step.title}</strong>
                  <small>{step.description}</small>
                </span>
                <span className="thinking-chevron">{activeThought === index ? "−" : "+"}</span>
              </button>
            ))}
          </div>

          <div className="thinking-detail">
            <div className="detail-topline">
              <span>THE NEXORA METHOD</span>
              <span>{thoughtSteps[activeThought].number} / 05</span>
            </div>
            <div className="detail-symbol">{thoughtSteps[activeThought].icon}</div>
            <h3>{thoughtSteps[activeThought].title}<span>.</span></h3>
            <p>{thoughtSteps[activeThought].detail}</p>
            <div className="detail-bottom">
              <span className="detail-line" />
              <span>Intentional by design</span>
            </div>
            <div className="detail-watermark">{thoughtSteps[activeThought].number}</div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" />HOW WE WORK</div>
              <h2>
                A clear path from
                <br />
                <span>idea to launch.</span>
              </h2>
            </div>
            <p>
              A structured, collaborative process keeps priorities clear and
              helps every stage move towards a useful final product.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map(([number, title, description]) => (
              <article className="process-card" key={number}>
                <div className="process-top">
                  <span className="process-number">{number}</span>
                  <span className="process-icon">
                    {["⌕", "▤", "◇", "⌘", "✓", "↗"][Number(number) - 1]}
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="process-line"><span /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wrap" id="technology">
        <div className="technology-panel">
          <div className="technology-copy">
            <div className="eyebrow"><span className="eyebrow-line" />OUR TECHNOLOGY</div>
            <h2>
              The right tools
              <br />
              for <span>real solutions.</span>
            </h2>
            <p>
              Technology is a means to an end. We choose tools according to the
              product requirements, usability and maintainability—not just trends.
            </p>
            <a className="button-primary" href="#contact">Discuss your idea <span>↗</span></a>
          </div>
          <div className="technology-stack">
            {[
              ["R", "React", "User interfaces"],
              ["N", "Next.js", "Web applications"],
              ["TS", "TypeScript", "Reliable code"],
              ["Py", "Python", "Programming & automation"],
              ["DB", "SQL / Databases", "Structured information"],
              ["API", "APIs", "System integration"],
            ].map(([symbol, name, description]) => (
              <div className="technology-item" key={name}>
                <span className="technology-symbol">{symbol}</span>
                <span className="technology-text">
                  <strong>{name}</strong>
                  <small>{description}</small>
                </span>
                <span className="technology-check">↗</span>
              </div>
            ))}
          </div>
          <div className="technology-orb orb-one" />
          <div className="technology-orb orb-two" />
        </div>
      </section>

      <section className="section section-muted" id="faq">
        <div className="section-wrap faq-layout">
          <div className="faq-intro">
            <div className="eyebrow"><span className="eyebrow-line" />GOOD TO KNOW</div>
            <h2>
              Questions,
              <br />
              <span>answered.</span>
            </h2>
            <p>
              Want to understand the approach, services or technology before
              starting? Here are a few useful answers.
            </p>
            <a className="text-link" href="#contact">Ask us directly <span>↗</span></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span className="faq-index">0{index + 1}</span>
                  <strong>{faq.question}</strong>
                  <span className="faq-plus">{activeFaq === index ? "−" : "+"}</span>
                </button>
                {activeFaq === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <div className="eyebrow"><span className="eyebrow-line" />HAVE AN IDEA?</div>
            <h2>
              Let&apos;s make
              <br />
              something <span>meaningful.</span>
            </h2>
            <p>
              Share what you are working on. Start with an idea, a challenge
              or a goal—and we can shape the next steps together.
            </p>
            <div className="contact-promise">
              <span>✳</span>
              <span>
                <strong>Good work starts with a conversation.</strong>
                <small>Clear goals. Thoughtful planning. Better outcomes.</small>
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContact}>
            <div className="form-heading">
              <span>PROJECT INQUIRY</span>
              <span className="form-indicator">● OPEN</span>
            </div>
            <label>
              Your name
              <input name="name" placeholder="Enter your name" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              What do you need?
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                <option>Web Development</option>
                <option>Software Solutions</option>
                <option>AI Integration</option>
                <option>UI/UX Design</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Tell us about your idea
              <textarea name="message" placeholder="A little about your project..." rows={3} required />
            </label>
            <button className="button-primary form-submit" type="submit">
              Prepare inquiry <span>↗</span>
            </button>
            {sent && (
              <p className="form-notice">
                This demo form is interactive, but it does not send an email yet.
                Connect a form service or backend to receive submissions.
              </p>
            )}
            <small className="form-footnote">Your project starts with a clear conversation.</small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-wrap">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand" href="#home">
                <span className="brand-mark">N</span>
                <span className="brand-copy">
                  <strong>NEXORA</strong>
                  <small>DIGITAL STUDIO</small>
                </span>
              </a>
              <p>
                Thoughtful technology.<br />
                Digital experiences with purpose.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <strong>EXPLORE</strong>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
              </div>
              <div>
                <strong>OUR APPROACH</strong>
                <a href="#thinking">Thought process</a>
                <a href="#process">Development process</a>
                <a href="#technology">Technology</a>
              </div>
              <div>
                <strong>CONNECT</strong>
                <a href="#contact">Contact us</a>
                <a href="#faq">FAQs</a>
                <a href="#home">Back to top ↑</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Nexora Digital. All rights reserved.</span>
            <span>BUILT WITH PURPOSE <span className="footer-star">✳</span></span>
          </div>
        </div>
      </footer>
    </main>
  );
}
