'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import type { Variants } from 'framer-motion'
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
} from 'lucide-react'
import { FormEvent, useState } from 'react'

const navItems = [
  ['About', '#about'], ['Experience', '#experience'], ['Services', '#services'],
  ['Portfolio', '#portfolio'], ['Skills', '#skills'], ['Process', '#process'],
  ['FAQ', '#faq'], ['Contact', '#contact'],
]

const services = [
  { icon: Code2, title: 'React development', text: 'Reusable, maintainable interfaces that give your product a dependable foundation.' },
  { icon: Globe2, title: 'Next.js development', text: 'Fast, search-friendly websites and applications built for the modern web.' },
  { icon: Layers3, title: 'Landing pages', text: 'Focused pages that make your offer clear and give visitors a reason to act.' },
  { icon: Layers3, title: 'Dashboard development', text: 'Business tools that turn complex workflows into clear, useful decisions.' },
  { icon: Globe2, title: 'Business websites', text: 'Responsive digital homes that communicate trust across every screen.' },
  { icon: Plug, title: 'API integration', text: 'Reliable connections to the data and services your team already uses.' },
  { icon: ShieldCheck, title: 'Authentication', text: 'Protected routes and thoughtful account flows built around real user needs.' },
  { icon: Zap, title: 'Performance optimization', text: 'Practical improvements that make pages feel faster and easier to use.' },
  { icon: BriefcaseBusiness, title: 'Website maintenance', text: 'Ongoing improvements, content changes, and support after launch.' },
  { icon: Code2, title: 'Bug fixing', text: 'Calm, systematic debugging for issues that interrupt the experience.' },
  { icon: Globe2, title: 'Responsive development', text: 'Layouts that feel intentional from the smallest phone to the largest screen.' },
]

const skills = {
  Frontend: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['.NET', 'REST APIs', 'CRUD operations'],
  Database: ['MySQL', 'Data modeling'],
  'State management': ['Redux', 'Context API'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
}

const workflowSteps = [
  ['Discovery', 'Align on the business, audience, goals, and the one outcome that matters most.'],
  ['Planning', 'Shape the scope, architecture, milestones, and a realistic path to launch.'],
  ['Design', 'Turn ideas into clear flows and a visual system that feels unmistakably yours.'],
  ['Development', 'Build with reusable components, clean code, and responsive behavior from day one.'],
  ['Integration', 'Connect APIs, authentication, and the data your team relies on.'],
  ['Testing', 'Check quality across devices, states, browsers, and the details users depend on.'],
  ['Deployment', 'Ship confidently and set up the foundations for a smooth handoff.'],
  ['Support', 'Stay close for improvements, bug fixes, and the next chapter of the product.'],
]

const faqs = [
  ['How long does a project take?', 'It depends on scope, but a focused landing page can move quickly while a dashboard or application benefits from a considered phased plan. We will define that together before work begins.'],
  ['Do you redesign existing websites?', 'Yes. I can audit the current experience, identify the highest-impact improvements, and rebuild the parts that are holding the product back.'],
  ['Can you work with existing APIs?', 'Absolutely. I regularly work with REST APIs and existing backend systems, including .NET applications and MySQL-backed workflows.'],
  ['Do you provide maintenance?', 'Yes. Support can include bug fixing, performance work, content changes, new features, or a simple monthly care plan.'],
  ['Can we discuss custom requirements?', 'Of course. If you have a specific workflow or a less-than-standard problem, send a note and we can shape the right engagement.'],
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const contact = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@amarshah.dev',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '',
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? '',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '',
  location: process.env.NEXT_PUBLIC_LOCATION ?? 'India · Working worldwide',
  resume: process.env.NEXT_PUBLIC_RESUME_URL ?? '',
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-copy">{body}</p>}
    </div>
  )
}

function Logo() {
  return <a href="#home" className="logo" aria-label="Amar Shah home"><span className="logo-mark">A</span><span>Amar Shah</span></a>
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [sent, setSent] = useState(false)
  const reducedMotion = useReducedMotion()
  const motionVariants = reducedMotion ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } } : fadeUp
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30 })

  function toggleTheme() {
    setDark((value) => {
      const next = !value
      document.documentElement.classList.toggle('dark', next)
      document.documentElement.style.colorScheme = next ? 'dark' : 'light'
      return next
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = `${data.get('project') ?? 'Web project'} enquiry from ${data.get('name') ?? 'a new contact'}`
    const body = [
      `Name: ${data.get('name') ?? ''}`,
      `Email: ${data.get('email') ?? ''}`,
      `Company: ${data.get('company') ?? ''}`,
      `Project type: ${data.get('project') ?? ''}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\\n')
    setSent(true)
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="site-shell" id="home">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header">
        <div className="nav-wrap">
          <Logo />
          <nav id="primary-navigation" className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="icon-button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
            <a className="button button-small button-primary nav-cta" href="#contact">Hire me <ArrowUpRight size={15} /></a>
            <button className="menu-toggle icon-button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-grid">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={motionVariants}>
              <p className="eyebrow"><span />React.js & Next.js developer</p>
              <h1>Helping businesses build fast, scalable <em>web applications.</em></h1>
              <p className="hero-lead">I build responsive, scalable and high-performance web applications using React.js, Next.js, TypeScript and modern frontend technologies.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Hire me <ArrowUpRight size={16} /></a>
                <a className="button button-ghost" href="#portfolio">View my work <ArrowUpRight size={16} /></a>
              </div>
              <div className="availability"><span className="availability-dot" />Available for select freelance projects <span className="availability-line" /> Based in India · Working worldwide</div>
            </motion.div>
            <motion.div className="hero-visual" initial={reducedMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={reducedMotion ? { duration: 0 } : { duration: .8, delay: .15 }}>
              <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
              <div className="portrait-card"><div className="portrait-visual" role="img" aria-label="Abstract frontend development workspace visual"><div className="visual-toolbar"><span /><span /><span /><small>amar-shah.dev</small></div><div className="visual-code"><span className="code-muted">01</span><span><b>const</b> experience = {'{'}</span><span className="code-indent"><b>frontend</b>: <i>“thoughtful”</i>,</span><span className="code-indent"><b>systems</b>: <i>“reliable”</i>,</span><span><b>{'}'}</b></span></div><div className="visual-status"><span className="availability-dot" /> Available for select projects</div></div><div className="portrait-caption"><strong>Thoughtful interfaces.</strong><span>Reliable engineering.</span></div></div>
              <div className="floating-chip chip-react"><Code2 size={15} /> React</div>
              <div className="floating-chip chip-next"><Sparkles size={14} /> Next.js</div>
              <div className="hero-stamp"><ShieldCheck size={17} /><span>Built with<br /><strong>care & clarity</strong></span></div>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </section>

        <section className="trust-strip"><div className="container trust-inner"><p>Experience across the layers that make a product work</p><div className="trust-items"><span>React.js</span><span>Next.js</span><span>TypeScript</span><span>REST APIs</span><span>.NET</span><span>MySQL</span></div></div></section>

        <section className="section container about-section" id="about"><div className="about-grid"><SectionHeading eyebrow="A little about me" title="Technology should make business feel lighter." body="I help businesses turn ideas, manual workflows, and outdated experiences into modern web applications people can use with confidence." /><div className="about-body"><p>My work is focused on the moments where software needs to do more than look good: helping a team move faster, making information easier to understand, or giving customers a clearer path to take action.</p><p>I bring product thinking to the frontend, balancing a polished interface with the dependable structure underneath. The goal is work that is easier to use today and easier to build on tomorrow.</p><div className="about-note"><Sparkles size={18} /><span>My approach: understand the business first, make the complexity feel simple, then sweat the details.</span></div></div></div></section>

        <section className="section soft-section" id="experience"><div className="container"><div className="experience-card"><div className="experience-top"><div><p className="eyebrow"><span />Professional experience</p><h2>Enterprise healthcare work, handled with care.</h2></div><span className="confidential-badge"><BriefcaseBusiness size={15} /> Professional client work</span><span className="confidential-note">Details limited due to confidentiality</span></div><div className="experience-content"><div className="experience-intro"><p>I’ve helped build and support enterprise healthcare applications as part of a software company. That work includes appointment booking flows and internal dashboards used to manage important day-to-day operations.</p><p>Details are limited due to confidentiality, but I can share the craft: React.js interfaces, .NET API integration, MySQL-backed CRUD operations, authentication, QA, and the steady teamwork it takes to ship well.</p><a href="#contact" className="text-link">Talk about your project <ArrowUpRight size={15} /></a></div><div className="experience-list">{['React & reusable UI systems', 'API integration & CRUD workflows', 'Authentication & dashboard development', 'Performance, QA & production support', 'Collaboration in Agile teams with Git'].map((item) => <div className="check-item" key={item}><span><Check size={13} /></span>{item}</div>)}</div></div></div></div></section>

        <section className="section container" id="services"><SectionHeading eyebrow="How I can help" title="A reliable pair of hands for the web." body="From the first screen to the last edge case, I help teams move from idea to a polished experience." /><div className="service-grid">{services.map(({ icon: Icon, title, text }, index) => <motion.article key={title} className="service-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: .65, ease: 'easeOut', delay: index * .05 } } }}><div className="service-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={17} /></motion.article>)}</div></section>

        <section className="section project-section" id="portfolio"><div className="container"><div className="portfolio-heading"><SectionHeading eyebrow="Selected work" title="A small, honest portfolio." body="Most of my professional work is confidential. These are the public projects I can share." /><span className="project-count">02 <small>public projects</small></span></div><div className="project-grid"><article className="project-card project-featured"><div className="project-image"><Image src="/maison-haven-neutral.png" alt="Maison Haven website mockup" fill sizes="(max-width: 800px) 100vw, 60vw" /><span className="project-type">Modern business website</span></div><div className="project-meta"><div><h3>Maison Haven</h3><p>A clean, responsive business website with an editorial feel and a smooth, considered experience.</p></div><a className="circle-arrow" href="https://maison-haven.vercel.app/" target="_blank" rel="noreferrer" aria-label="Visit Maison Haven"><ExternalLink size={17} /></a></div><dl className="project-details"><div><dt>Problem</dt><dd>Create a credible digital home for a modern interiors brand.</dd></div><div><dt>Solution</dt><dd>A calm, editorial layout with clear paths to explore and enquire.</dd></div><div><dt>Technology</dt><dd>React.js, responsive CSS, accessible UI patterns.</dd></div><div><dt>My role</dt><dd>Frontend development and responsive implementation.</dd></div><div><dt>Outcome</dt><dd>A polished public-facing website ready to support business growth.</dd></div></dl><div className="tag-list">{['Responsive design', 'Professional UI', 'SEO friendly', 'Fast loading'].map((tag) => <span key={tag}>{tag}</span>)}</div></article><article className="project-card"><div className="project-image"><Image src="/digital-marketing-neutral.png" alt="Digital marketing website mockup" fill sizes="(max-width: 800px) 100vw, 40vw" /><span className="project-type">Client website · private</span></div><div className="project-meta"><div><h3>Digital Marketing Website</h3><p>A responsive client website focused on clear positioning, user experience, and lead generation.</p></div><span className="circle-arrow muted-circle"><LockIcon /></span></div><dl className="project-details"><div><dt>Problem</dt><dd>Make a marketing offer easier to understand and act on.</dd></div><div><dt>Solution</dt><dd>A responsive, conversion-focused page structure with clear messaging.</dd></div><div><dt>Technology</dt><dd>React.js, responsive CSS, reusable components.</dd></div><div><dt>My role</dt><dd>Frontend development and UI implementation.</dd></div><div><dt>Outcome</dt><dd>Private client project. Live demo available upon request.</dd></div></dl><div className="tag-list"><span>Responsive development</span><span>Lead generation</span><span>Private client project</span></div></article></div></div></section>

        <section className="section container" id="skills"><SectionHeading eyebrow="The toolkit" title="The right tools for the job." /><div className="skills-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><p>{group}</p><div>{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div><div className="why-grid"><div><p className="eyebrow"><span />Why work with me</p><h2>Practical, curious, and invested in the outcome.</h2></div><div className="why-points">{['Clean, maintainable code', 'Performance that respects attention', 'Responsive by default', 'Clear communication throughout', 'Reusable architecture', 'Long-term support when you need it'].map((point) => <div key={point}><Check size={16} />{point}</div>)}</div></div></section>

        <section className="section process-section" id="process"><div className="container"><SectionHeading eyebrow="A clear way of working" title="From first conversation to first release." body="A simple process keeps the work calm, transparent, and pointed at the outcome." /><div className="process-grid">{workflowSteps.map(([title, text], index) => <div className="process-step" key={title}><span className="step-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

        <section className="section container feedback-section"><div className="feedback-card"><div><p className="eyebrow"><span />Client feedback</p><h2>Good work should speak for itself.</h2><p>Selected feedback will be added as new freelance projects are completed.</p><p className="feedback-note">In the meantime, explore the public work above or start a conversation about your project.</p><a className="button button-ghost feedback-action" href="#contact">Start a conversation <ArrowUpRight size={15} /></a></div><div className="feedback-mark" aria-hidden="true">“</div></div></section>

        <section className="section container faq-section" id="faq"><SectionHeading eyebrow="Questions, answered" title="A few things you might be wondering." /><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></section>

        <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow"><span />Let&apos;s work together</p><h2>Have a good problem? <em>Let&apos;s solve it.</em></h2><p>Have an idea or need help with your website or web application? I&apos;d love to hear what you&apos;re working on.</p><p className="reply-note">Usually replies within 24 hours.</p><div className="contact-links"><a href={`mailto:${contact.email}`}><Mail size={17} /> {contact.email}</a>{contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer"><Link size={17} /> LinkedIn</a>}{contact.github && <a href={contact.github} target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a>}{contact.phone && <a href={`tel:${contact.phone}`}><BriefcaseBusiness size={17} /> {contact.phone}</a>}<span className="contact-location"><Globe2 size={17} /> {contact.location}</span></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Company<input name="company" placeholder="Your company" /></label><label>Project type<select name="project"><option>Website</option><option>Web application</option><option>Dashboard</option><option>Something else</option></select></label></div><label>Message<textarea required name="message" placeholder="Tell me a little about what you’re building..." rows={5} /></label><button className="button button-primary form-submit" type="submit">{sent ? 'Email draft opened' : 'Open email draft'} {sent ? <Check size={16} /> : <Send size={16} />}</button><p className="form-note" aria-live="polite">{sent ? 'Your message details have been added to a new email draft.' : `This opens your email app with the project details pre-filled.`}</p></form></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><div><Logo /><p>Building digital experiences with care.</p></div><div className="footer-links"><div><strong>Quick links</strong><a href="#about">About</a><a href="#portfolio">Work</a><a href="#contact">Contact</a></div><div><strong>Social</strong>{contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}{contact.github && <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>}{contact.resume && <a href={contact.resume} target="_blank" rel="noreferrer">Resume download</a>}</div></div><div className="footer-right"><span>© {new Date().getFullYear()} Amar Shah</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div></div></footer>
    </div>
  )
}

function LockIcon() { return <span className="lock-icon" aria-label="Private client project">•</span> }
