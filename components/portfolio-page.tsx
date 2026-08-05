'use client'

import Image from 'next/image'
import { motion, useScroll, useSpring } from 'framer-motion'
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
  { icon: Code2, title: 'React.js development', text: 'Scalable interfaces with reusable components, robust state, and the polish users notice.' },
  { icon: Globe2, title: 'Next.js websites', text: 'Fast, SEO-friendly marketing sites and web applications built for the modern web.' },
  { icon: Layers3, title: 'Dashboards & admin panels', text: 'Clear, efficient business tools that turn complex workflows into simple decisions.' },
  { icon: Plug, title: 'API & authentication', text: 'Reliable REST integrations, protected routes, and data flows that stay maintainable.' },
  { icon: Palette, title: 'Figma to React', text: 'Thoughtful translation from design files to responsive, accessible production UI.' },
  { icon: Zap, title: 'Performance & support', text: 'Speed improvements, bug fixing, and ongoing care for products that keep moving.' },
]

const skills = {
  Frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  'State management': ['Redux', 'Context API'],
  Backend: ['.NET', 'REST APIs'],
  Database: ['MySQL'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],
}

const process = [
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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
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
    setSent(true)
  }

  return (
    <div className="site-shell" id="home">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header">
        <div className="nav-wrap">
          <Logo />
          <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="icon-button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
            <a className="button button-small button-primary nav-cta" href="#contact">Hire me <ArrowUpRight size={15} /></a>
            <button className="menu-toggle icon-button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-grid">
            <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
              <p className="eyebrow"><span />Frontend developer · React & Next.js</p>
              <h1>Building modern web applications that <em>help businesses grow.</em></h1>
              <p className="hero-lead">I create responsive, scalable, and high-performance digital experiences for teams who care about the details.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#portfolio">View my work <ArrowUpRight size={16} /></a>
                <a className="button button-ghost" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
              </div>
              <div className="availability"><span className="availability-dot" />Available for select freelance projects <span className="availability-line" /> Based in India · Working worldwide</div>
            </motion.div>
            <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
              <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
              <div className="portrait-card"><div className="portrait-placeholder"><span>AS</span></div><div className="portrait-caption"><strong>Thoughtful interfaces.</strong><span>Reliable engineering.</span></div></div>
              <div className="floating-chip chip-react"><Code2 size={15} /> React</div>
              <div className="floating-chip chip-next"><Sparkles size={14} /> Next.js</div>
              <div className="hero-stamp"><ShieldCheck size={17} /><span>Built with<br /><strong>care & clarity</strong></span></div>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </section>

        <section className="trust-strip"><div className="container trust-inner"><p>Experience across the layers that make a product work</p><div className="trust-items"><span>React.js</span><span>Next.js</span><span>TypeScript</span><span>REST APIs</span><span>.NET</span><span>MySQL</span></div></div></section>

        <section className="section container about-section" id="about"><div className="about-grid"><SectionHeading eyebrow="A little about me" title="Good software should feel clear." body="I’m a frontend developer who enjoys turning business problems into interfaces people can use with confidence." /><div className="about-body"><p>My work sits at the intersection of thoughtful product design and dependable engineering. I care about the architecture underneath a polished screen just as much as the screen itself.</p><p>Over the years, I’ve worked on business applications in a professional software environment, collaborating with designers, backend developers, and QA teams to ship work that holds up in the real world.</p><div className="about-note"><Sparkles size={18} /><span>My approach: make complex things feel simple, then make the simple things feel considered.</span></div></div></div></section>

        <section className="section soft-section" id="experience"><div className="container"><div className="experience-card"><div className="experience-top"><div><p className="eyebrow"><span />Professional experience</p><h2>Enterprise work, handled with care.</h2></div><span className="confidential-badge"><BriefcaseBusiness size={15} /> Client work · details limited by confidentiality</span></div><div className="experience-content"><div className="experience-intro"><p>I’ve helped build and support business applications for clients as part of a software company. Those projects belong to the company and are not presented as personal portfolio pieces.</p><p>What I can share is the craft: modern React applications, reusable UI, API integrations, CRUD workflows, dashboards, authentication, optimization, and the steady teamwork it takes to ship well.</p><a href="#contact" className="text-link">Talk about your project <ArrowUpRight size={15} /></a></div><div className="experience-list">{['React & reusable UI systems', 'API integration & CRUD workflows', 'Authentication & dashboard development', 'Performance, QA & production support', 'Collaboration in Agile teams with Git'].map((item) => <div className="check-item" key={item}><span><Check size={13} /></span>{item}</div>)}</div></div></div></div></section>

        <section className="section container" id="services"><SectionHeading eyebrow="How I can help" title="A reliable pair of hands for the web." body="From the first screen to the last edge case, I help teams move from idea to a polished experience." /><div className="service-grid">{services.map(({ icon: Icon, title, text }, index) => <motion.article key={title} className="service-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: .65, ease: 'easeOut', delay: index * .05 } } }}><div className="service-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={17} /></motion.article>)}</div></section>

        <section className="section project-section" id="portfolio"><div className="container"><div className="portfolio-heading"><SectionHeading eyebrow="Selected work" title="A small, honest portfolio." body="Most of my professional work is confidential. These are the public projects I can share." /><span className="project-count">02 <small>public projects</small></span></div><div className="project-grid"><article className="project-card project-featured"><div className="project-image"><Image src="/maison-haven-mockup.png" alt="Maison Haven website mockup" fill sizes="(max-width: 800px) 100vw, 60vw" /><span className="project-type">Modern business website</span></div><div className="project-meta"><div><h3>Maison Haven</h3><p>A clean, responsive business website with an editorial feel and a smooth, considered experience.</p></div><a className="circle-arrow" href="https://maison-haven.vercel.app/" target="_blank" rel="noreferrer" aria-label="Visit Maison Haven"><ExternalLink size={17} /></a></div><div className="tag-list">{['Responsive design', 'Professional UI', 'SEO friendly', 'Fast loading'].map((tag) => <span key={tag}>{tag}</span>)}</div></article><article className="project-card"><div className="project-image"><Image src="/digital-marketing-mockup.png" alt="Digital marketing website mockup" fill sizes="(max-width: 800px) 100vw, 40vw" /><span className="project-type">Client website · private</span></div><div className="project-meta"><div><h3>Digital Marketing Website</h3><p>A responsive client website focused on clear positioning, user experience, and lead generation.</p></div><span className="circle-arrow muted-circle"><LockIcon /></span></div><div className="tag-list"><span>Responsive development</span><span>Lead generation</span><span>Private client project</span></div></article></div></div></section>

        <section className="section container" id="skills"><SectionHeading eyebrow="The toolkit" title="The right tools for the job." /><div className="skills-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><p>{group}</p><div>{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div><div className="why-grid"><div><p className="eyebrow"><span />Why work with me</p><h2>Practical, curious, and invested in the outcome.</h2></div><div className="why-points">{['Clean, maintainable code', 'Performance that respects attention', 'Responsive by default', 'Clear communication throughout', 'Reusable architecture', 'Long-term support when you need it'].map((point) => <div key={point}><Check size={16} />{point}</div>)}</div></div></section>

        <section className="section process-section" id="process"><div className="container"><SectionHeading eyebrow="A clear way of working" title="From first conversation to first release." body="A simple process keeps the work calm, transparent, and pointed at the outcome." /><div className="process-grid">{process.map(([title, text], index) => <div className="process-step" key={title}><span className="step-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

        <section className="section container feedback-section"><div className="feedback-card"><div><p className="eyebrow"><span />Client feedback</p><h2>Good work should speak for itself.</h2><p>Testimonials will be added as new freelance projects are completed.</p></div><div className="feedback-mark">“</div></div></section>

        <section className="section container faq-section" id="faq"><SectionHeading eyebrow="Questions, answered" title="A few things you might be wondering." /><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'is-open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></section>

        <section className="section contact-section" id="contact"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow"><span />Let&apos;s work together</p><h2>Have a good problem? <em>Let&apos;s solve it.</em></h2><p>Have an idea or need help with your website or web application? I&apos;d love to hear what you&apos;re working on.</p><div className="contact-links"><a href="mailto:hello@amarshah.dev"><Mail size={17} /> hello@amarshah.dev</a><a href="#contact"><Link size={17} /> LinkedIn <small>add your link</small></a><a href="#contact"><GitBranch size={17} /> GitHub <small>add your link</small></a></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Company<input name="company" placeholder="Your company" /></label><label>Project type<select name="project"><option>Website</option><option>Web application</option><option>Dashboard</option><option>Something else</option></select></label></div><label>Message<textarea required name="message" placeholder="Tell me a little about what you’re building..." rows={5} /></label><button className="button button-primary form-submit" type="submit">{sent ? 'Message ready to send' : 'Send message'} {sent ? <Check size={16} /> : <Send size={16} />}</button><p className="form-note">This form is ready to connect to EmailJS or your preferred email service.</p></form></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><Logo /><p>Building digital experiences with care.</p><div className="footer-right"><span>© {new Date().getFullYear()} Amar Shah</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></div></div></footer>
    </div>
  )
}

function LockIcon() { return <span className="lock-icon" aria-label="Private client project">•</span> }
