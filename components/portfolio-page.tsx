"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  GitBranch,
  Globe2,
  Layers3,
  Link,
  Mail,
  Menu,
  Moon,
  Palette,
  Plug,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { profile } from "@/lib/profile";

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["Skills", "#skills"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const services = [
  {
    icon: Code2,
    title: "React.js development",
    text: "Component-based interfaces built to stay clear, reusable, and easy to extend.",
  },
  {
    icon: Globe2,
    title: "Next.js development",
    text: "Production-ready websites and applications with sensible routing, rendering, and performance.",
  },
  {
    icon: Layers3,
    title: "Landing pages",
    text: "Focused pages that explain the offer clearly and guide visitors toward the next step.",
  },
  {
    icon: Layers3,
    title: "Dashboard development",
    text: "Practical dashboards for teams that need to review data and complete daily work quickly.",
  },
  {
    icon: Globe2,
    title: "Business websites",
    text: "Responsive websites that give your company a credible, useful presence online.",
  },
  {
    icon: Plug,
    title: "REST API integration",
    text: "Frontend integrations with existing .NET services and backend systems.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication",
    text: "Clear account flows, protected routes, and predictable states for users and teams.",
  },
  {
    icon: Zap,
    title: "Performance optimization",
    text: "Targeted improvements to loading, rendering, and day-to-day responsiveness.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Website maintenance",
    text: "Small improvements, content updates, fixes, and frontend support after launch.",
  },
  {
    icon: Code2,
    title: "Bug fixing",
    text: "Focused investigation and fixes for frontend issues that affect real users.",
  },
  {
    icon: Globe2,
    title: "Responsive development",
    text: "Layouts that work reliably across phones, tablets, and desktop screens.",
  },
];

const skills = {
  Frontend: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  Backend: [".NET", "REST APIs", "CRUD operations"],
  Database: ["MySQL", "Data modeling"],
  "State management": ["Redux", "Context API"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
};

const workflowSteps = [
  [
    "Understand",
    "Clarify the business goal, users, existing systems, and what the first release needs to do.",
  ],
  [
    "Plan",
    "Break the work into a sensible scope, technical approach, and sequence of milestones.",
  ],
  [
    "Structure",
    "Map the key screens, states, data, and reusable components before implementation.",
  ],
  [
    "Build",
    "Develop the React.js and Next.js frontend with TypeScript and responsive behavior from the start.",
  ],
  [
    "Integrate",
    "Connect REST APIs, .NET services, authentication, and MySQL-backed workflows where needed.",
  ],
  [
    "Test",
    "Check the important paths across screen sizes, browsers, loading states, and error cases.",
  ],
  [
    "Release",
    "Prepare the application for handoff or deployment with the key details documented.",
  ],
  [
    "Improve",
    "Continue with fixes, performance work, and the next features once the product is in use.",
  ],
];

const faqs = [
  [
    "How long does a project take?",
    "The scope decides that. A focused page may take a short engagement, while a dashboard or application is better planned in stages. I will give you a clear breakdown before development starts.",
  ],
  [
    "Do you work on existing products?",
    "Yes. I can work within an existing React.js or Next.js codebase, improve the frontend, fix issues, or build a new area without replacing what is already working.",
  ],
  [
    "Can you work with existing APIs?",
    "Yes. I have experience connecting React frontends to REST APIs, .NET services, authentication flows, and MySQL-backed applications.",
  ],
  [
    "Have you worked on healthcare applications?",
    "Yes. My professional experience includes healthcare applications with appointment booking flows and internal dashboards. The project details are covered by an NDA.",
  ],
  [
    "Do you provide maintenance?",
    "Yes. I can handle frontend fixes, performance improvements, content changes, and smaller feature work after launch.",
  ],
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {body && <p className="section-copy">{body}</p>}
    </div>
  );
}

function Logo() {
  return (
    <a href="#home" className="logo" aria-label={`${profile.name} home`}>
      <span className="logo-mark">{profile.name.charAt(0)}</span>
      <span>{profile.name}</span>
    </a>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const reducedMotion = useReducedMotion();
  const motionVariants = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : fadeUp;
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function toggleTheme() {
    setDark((value) => {
      const next = !value;
      document.documentElement.classList.toggle("dark", next);
      document.documentElement.style.colorScheme = next ? "dark" : "light";
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    const form = event.currentTarget;
    const formData = new FormData(form);
console.log(
  process.env.NEXT_PUBLIC_RESEND_API_KEY
);
    formData.append("access_key", process.env.NEXT_PUBLIC_RESEND_API_KEY!);

    formData.append("subject", "New Portfolio Enquiry");

    formData.append("from_name", "Amar Shah Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <div className="site-shell" id="home">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header">
        <div className="nav-wrap">
          <Logo />
          <nav
            id="primary-navigation"
            className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}
            aria-label="Primary navigation"
          >
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              className="button button-small button-primary nav-cta"
              href="#contact"
            >
              Hire me <ArrowUpRight size={15} />
            </a>
            <button
              className="menu-toggle icon-button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={motionVariants}
            >
              <p className="eyebrow">
                <span />
                React.js & Next.js developer
              </p>
              <h1>
                Frontend development for products that need to{" "}
                <em>work well.</em>
              </h1>
              <p className="hero-lead">
                I build React.js and Next.js applications with TypeScript, clean
                interfaces, and the API integrations needed to support real
                business workflows.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Hire me <ArrowUpRight size={16} />
                </a>
                <a className="button button-ghost" href="#portfolio">
                  View my work <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="availability">
                <span className="availability-dot" />
                Available for freelance frontend work{" "}
                {profile.location && (
                  <>
                    <span className="availability-line" /> {profile.location}
                  </>
                )}
              </div>
            </motion.div>
            <motion.div
              className="hero-visual"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={
                reducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.15 }
              }
            >
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="portrait-card">
                <div
                  className="portrait-visual"
                  role="img"
                  aria-label="Abstract frontend development workspace visual"
                >
                  <div className="visual-toolbar">
                    <span />
                    <span />
                    <span />
                    <small>amar-shah.dev</small>
                  </div>
                  <div className="visual-code">
                    <span className="code-muted">01</span>
                    <span>
                      <b>const</b> experience = {"{"}
                    </span>
                    <span className="code-indent">
                      <b>frontend</b>: <i>“thoughtful”</i>,
                    </span>
                    <span className="code-indent">
                      <b>systems</b>: <i>“reliable”</i>,
                    </span>
                    <span>
                      <b>{"}"}</b>
                    </span>
                  </div>
                  <div className="visual-status">
                    <span className="availability-dot" /> Available for select
                    projects
                  </div>
                </div>
                <div className="portrait-caption">
                  <strong>Thoughtful interfaces.</strong>
                  <span>Reliable engineering.</span>
                </div>
              </div>
              <div className="floating-chip chip-react">
                <Code2 size={15} /> React
              </div>
              <div className="floating-chip chip-next">
                <Sparkles size={14} /> Next.js
              </div>
              <div className="hero-stamp">
                <ShieldCheck size={17} />
                <span>
                  Focused on
                  <br />
                  <strong>usable software</strong>
                </span>
              </div>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <p>Technologies I use in production work</p>
            <div className="trust-items">
              <span>React.js</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>REST APIs</span>
              <span>.NET</span>
              <span>MySQL</span>
            </div>
          </div>
        </section>

        <section className="section container about-section" id="about">
          <div className="about-grid">
            <SectionHeading
              eyebrow="About me"
              title="I build interfaces around how people actually work."
              body="I’m a frontend developer focused on React.js, Next.js, and TypeScript applications for businesses that need reliable, maintainable software."
            />
            <div className="about-body">
              <p>
                My work is not limited to the visible screen. I think through
                the data, API states, permissions, and edge cases that make an
                application useful after launch.
              </p>
              <p>
                I’ve worked on healthcare software, appointment booking flows,
                internal dashboards, and business websites. I’m comfortable
                working with existing systems, including .NET services, REST
                APIs, MySQL databases, and Redux-based state.
              </p>
              <div className="about-note">
                <Sparkles size={18} />
                <span>
                  I keep the frontend clear for users and practical for the team
                  maintaining it.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft-section" id="experience">
          <div className="container">
            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <p className="eyebrow">
                    <span />
                    Professional experience
                  </p>
                  <h2>Frontend work for healthcare applications.</h2>
                </div>
                <span className="confidential-badge">
                  <BriefcaseBusiness size={15} /> NDA-protected work
                </span>
                <span className="confidential-note">
                  Client and product details are not public
                </span>
              </div>
              <div className="experience-content">
                <div className="experience-intro">
                  <p>
                    In my professional role, I’ve worked on enterprise
                    healthcare applications that support appointment booking and
                    internal dashboard workflows.
                  </p>
                  <p>
                    The client, product, and implementation details are covered
                    by an NDA. I can discuss the technical scope: React.js and
                    TypeScript interfaces, Redux state management, .NET REST API
                    integration, MySQL-backed CRUD operations, authentication,
                    and production support.
                  </p>
                  <a href="#contact" className="text-link">
                    Discuss a similar project <ArrowUpRight size={15} />
                  </a>
                </div>
                <div className="experience-list">
                  {[
                    "React.js & TypeScript frontend development",
                    "Redux state management & reusable components",
                    "Appointment booking & dashboard workflows",
                    ".NET REST API & MySQL integration",
                    "Authentication, QA & production support",
                  ].map((item) => (
                    <div className="check-item" key={item}>
                      <span>
                        <Check size={13} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="services">
          <SectionHeading
            eyebrow="Services"
            title="Frontend development for real products."
            body="I can join an existing team, take ownership of a frontend area, or build a focused application from the ground up."
          />
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className="service-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  ...fadeUp,
                  visible: {
                    ...fadeUp.visible,
                    transition: {
                      duration: 0.65,
                      ease: "easeOut",
                      delay: index * 0.05,
                    },
                  },
                }}
              >
                <div className="service-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight className="service-arrow" size={17} />
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section project-section" id="portfolio">
          <div className="container">
            <div className="portfolio-heading">
              <SectionHeading
                eyebrow="Selected work"
                title="A few projects I can show publicly."
                body="My professional healthcare work is covered by an NDA. These public projects show how I approach structure, responsive UI, and frontend implementation."
              />
              <span className="project-count">
                02 <small>public projects</small>
              </span>
            </div>
            <div className="project-grid">
              <article className="project-card project-featured">
                <div className="project-image">
                  <Image
                    src="/maison-haven-neutral.png"
                    alt="Maison Haven website mockup"
                    fill
                    sizes="(max-width: 800px) 100vw, 60vw"
                  />
                  <span className="project-type">Modern business website</span>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>Maison Haven</h3>
                    <p>
                      A responsive business website built around clear content,
                      simple navigation, and a polished frontend.
                    </p>
                  </div>
                  <a
                    className="circle-arrow"
                    href="https://maison-haven.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Maison Haven"
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
                <dl className="project-details">
                  <div>
                    <dt>Problem</dt>
                    <dd>
                      Create a credible digital home for a modern interiors
                      brand.
                    </dd>
                  </div>
                  <div>
                    <dt>Solution</dt>
                    <dd>
                      A calm, editorial layout with clear paths to explore and
                      enquire.
                    </dd>
                  </div>
                  <div>
                    <dt>Technology</dt>
                    <dd>React.js, Next.js, TypeScript, responsive CSS.</dd>
                  </div>
                  <div>
                    <dt>My role</dt>
                    <dd>
                      Frontend development, component structure, and responsive
                      implementation.
                    </dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>
                      A responsive public website with a clear structure and
                      maintainable frontend.
                    </dd>
                  </div>
                </dl>
                <div className="tag-list">
                  {[
                    "Responsive design",
                    "Professional UI",
                    "SEO friendly",
                    "Fast loading",
                  ].map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
              <article className="project-card">
                <div className="project-image">
                  <Image
                    src="/digital-marketing-neutral.png"
                    alt="Digital marketing website mockup"
                    fill
                    sizes="(max-width: 800px) 100vw, 40vw"
                  />
                  <span className="project-type">Client website · private</span>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>Digital Marketing Website</h3>
                    <p>
                      A private client website with a responsive layout, clear
                      messaging, and a frontend built for lead generation.
                    </p>
                  </div>
                  <span className="circle-arrow muted-circle">
                    <LockIcon />
                  </span>
                </div>
                <dl className="project-details">
                  <div>
                    <dt>Problem</dt>
                    <dd>
                      Make a marketing offer easier to understand and act on.
                    </dd>
                  </div>
                  <div>
                    <dt>Solution</dt>
                    <dd>
                      A responsive, conversion-focused page structure with clear
                      messaging.
                    </dd>
                  </div>
                  <div>
                    <dt>Technology</dt>
                    <dd>React.js, responsive CSS, reusable components.</dd>
                  </div>
                  <div>
                    <dt>My role</dt>
                    <dd>Frontend development and UI implementation.</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>
                      Private client project. Live demo available upon request.
                    </dd>
                  </div>
                </dl>
                <div className="tag-list">
                  <span>Responsive development</span>
                  <span>Lead generation</span>
                  <span>Private client project</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <SectionHeading
            eyebrow="Technical skills"
            title="A frontend stack grounded in production work."
          />
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-group" key={group}>
                <p>{group}</p>
                <div>
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="why-grid">
            <div>
              <p className="eyebrow">
                <span />
                How I work
              </p>
              <h2>Clear frontend decisions, built around the product.</h2>
            </div>
            <div className="why-points">
              {[
                "React.js and TypeScript code that stays readable",
                "Next.js structure chosen for the product needs",
                "Responsive UI and accessible interaction states",
                "REST API and .NET integration experience",
                "Redux state kept deliberate and predictable",
                "Clear communication from planning through handoff",
              ].map((point) => (
                <div key={point}>
                  <Check size={16} />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <SectionHeading
              eyebrow="Process"
              title="A practical path from requirements to release."
              body="I keep the work visible, make technical decisions explicit, and test the flows that matter to the business."
            />
            <div className="process-grid">
              {workflowSteps.map(([title, text], index) => (
                <div className="process-step" key={title}>
                  <span className="step-number">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container feedback-section">
          <div className="feedback-card">
            <div>
              <p className="eyebrow">
                <span />
                Client feedback
              </p>
              <h2>Professional work, shared with appropriate context.</h2>
              <p>
                My current healthcare work is covered by an NDA, so I do not
                publish client names, screenshots, or product details.
              </p>
              <p className="feedback-note">
                I’m happy to explain the role, technical scope, and type of
                workflows involved in a private conversation.
              </p>
              <a
                className="button button-ghost feedback-action"
                href="#contact"
              >
                Start a conversation <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="feedback-mark" aria-hidden="true">
              “
            </div>
          </div>
        </section>

        <section className="section container faq-section" id="faq">
          <SectionHeading
            eyebrow="Questions, answered"
            title="A few things you might be wondering."
          />
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div
                className={`faq-item ${openFaq === index ? "is-open" : ""}`}
                key={question}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{question}</span>
                  <ChevronDown size={18} />
                </button>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">
                <span />
                Contact
              </p>
              <h2>
                Need a frontend developer? <em>Let&apos;s talk.</em>
              </h2>
              <p>
                Tell me what you’re building, what needs to change, or where the
                current frontend is getting in the way. I’ll reply with a
                practical next step.
              </p>
              <p className="reply-note">Usually replies within 24 hours.</p>
              <div className="contact-links">
                {profile.email && (
                  <a href={`mailto:${profile.email}`}>
                    <Mail size={17} /> {profile.email}
                  </a>
                )}
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Link size={17} /> LinkedIn
                  </a>
                )}
                {profile.github && (
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <GitBranch size={17} /> GitHub
                  </a>
                )}
                {profile.phone && (
                  <a href={`tel:${profile.phone}`}>
                    <BriefcaseBusiness size={17} /> {profile.phone}
                  </a>
                )}
                {profile.location && (
                  <span className="contact-location">
                    <Globe2 size={17} /> {profile.location}
                  </span>
                )}
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Company
                  <input name="company" placeholder="Your company" />
                </label>
                <label>
                  Project type
                  <select name="project">
                    <option>Website</option>
                    <option>Web application</option>
                    <option>Dashboard</option>
                    <option>Something else</option>
                  </select>
                </label>
              </div>
              <label>
                Message
                <textarea
                  required
                  name="message"
                  placeholder="Tell me a little about what you’re building..."
                  rows={5}
                />
              </label>
              <button
                className="button button-primary form-submit"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent ✓"
                    : "Send Message"}
              </button>
              <p className="form-note" aria-live="polite">
                {status === "success" &&
                  "✅ Thank you! I'll get back to you within 24 hours."}

                {status === "error" &&
                  "❌ Something went wrong. Please try again."}

                {status === "" && "Fill out the form and click Send Message."}
              </p>
            </form>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <Logo />
            <p>React.js · Next.js · TypeScript</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Quick links</strong>
              <a href="#about">About</a>
              <a href="#portfolio">Work</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <strong>Social</strong>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {profile.resume && (
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  Resume download
                </a>
              )}
            </div>
          </div>
          <div className="footer-right">
            <span>© {new Date().getFullYear()} Amar Shah</span>
            <a href="#home">
              Back to top <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LockIcon() {
  return (
    <span className="lock-icon" aria-label="Private client project">
      •
    </span>
  );
}
