"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";

const navItems = ["Work", "Experience", "Toolkit", "About"];

const projects = [
  {
    number: "01",
    type: "Operations intelligence",
    title: "OLA ride performance",
    description:
      "A 71,000+ record analysis translating booking, payment, ratings, revenue, and cancellation data into a clearer view of customer experience and operational bottlenecks.",
    tools: ["SQL", "Excel", "Power BI"],
    className: "project-ola",
    stat: "71K+",
    statLabel: "ride records",
    image: "/ola-project.png",
    link: "https://github.com/AnkitRauthan1441/ola-performance-project-sql-excel-powerbi",
  },
  {
    number: "02",
    type: "Commercial analytics",
    title: "E-commerce profitability",
    description:
      "A unified KPI dashboard for revenue, margin, customers, products, and regional performance — built to make recurring decisions faster and more confident.",
    tools: ["Power BI", "Excel", "Power Query"],
    className: "project-shop",
    stat: "360°",
    statLabel: "business view",
    image: "/ecommerce-project.png",
    link: "https://github.com/AnkitRauthan1441/E-Commerce-Performance-Dashboard-Excel-Power-Bi",
  },
];

const skills = [
  ["01", "Query & code", "SQL / T-SQL", "MySQL · PostgreSQL · Python · Pandas · NumPy"],
  ["02", "Visualize & model", "Power BI", "DAX · Data modeling · Power Query · Dashboard design"],
  ["03", "Clean & transform", "Data preparation", "ETL · Validation · EDA · Wrangling · Statistical analysis"],
  ["04", "Report & automate", "Advanced Excel", "Pivot tables · XLOOKUP · Dynamic arrays · KPI reporting"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">AR</span>
          <span>Ankit Rauthan</span>
        </a>
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> DATA ANALYST <b>|</b> SQL • POWER BI • ADVANCED EXCEL • PYTHON</div>
          <h1>I turn messy data into <em>clear business decisions.</em></h1>
          <p className="hero-lede">I analyze business data, uncover trends and performance drivers, and build dashboards and reports that turn raw data into actionable insights.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">View My Projects <ArrowDownRight size={17} /></a>
            <a className="button button-outline" href="mailto:ankitrth81945@gmail.com?subject=Resume%20request">Download Resume <Download size={16} /></a>
          </div>
          <div className="hero-socials"><span>Connect:</span><a href="https://linkedin.com/in/ankit-rauthan-1815a5415" target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a><a href="https://github.com/AnkitRauthan1441" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a></div>
        </div>
        <div className="hero-visual">
          <div className="hero-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="profile-frame">
            <Image src="/ankit-rauthan.png" alt="Portrait of Ankit Rauthan" fill priority sizes="(max-width: 800px) 80vw, 38vw" />
          </div>
          <div className="floating-card floating-top"><span className="mini-label">CURRENT FOCUS</span><strong>Business intelligence</strong><span className="card-arrow"><ArrowUpRight size={14} /></span></div>
          <div className="floating-card floating-bottom"><span className="mini-label">ANALYTICS STACK</span><div className="stack-icons"><span>SQL</span><span>BI</span><span>PY</span></div></div>
          <div className="hero-index">01 <span>/</span> 04</div>
        </div>
      </section>

      <section className="recruiter-snapshot section-wrap" aria-labelledby="snapshot-title">
        <div className="snapshot-heading"><span className="section-label">/ Recruiter snapshot</span><h2 id="snapshot-title">The quick read.</h2><p>Focused on turning business data into measurable insights.</p></div>
        <div className="snapshot-grid">
          <div className="snapshot-card snapshot-primary"><span className="snapshot-index">01</span><strong>Data Analyst</strong><span>Role focus</span></div>
          <div className="snapshot-card"><span className="snapshot-index">02</span><strong>8 Months</strong><span>Analytics internship experience</span></div>
          <div className="snapshot-card"><span className="snapshot-index">03</span><strong>71K+</strong><span>Records analyzed</span></div>
          <div className="snapshot-card"><span className="snapshot-index">04</span><strong>SQL · Power BI</strong><span>Advanced Excel · Python</span></div>
          <div className="snapshot-card"><span className="snapshot-index">05</span><strong>2+</strong><span>End-to-end analytics projects</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Core analytics skills"><span>SQL</span><i>✦</i><span>POWER BI</span><i>✦</i><span>PYTHON</span><i>✦</i><span>ADVANCED EXCEL</span><i>✦</i><span>DATA STORYTELLING</span></section>

      <section className="numbers section-wrap" id="about">
        <div className="section-intro"><span className="section-label">/ At a glance</span><h2>The numbers behind the work.</h2></div>
        <div className="number-grid">
          <div className="number-item"><strong>71K<sup>+</sup></strong><span>Records analyzed<br />in one project</span></div>
          <div className="number-item"><strong>08</strong><span>Months of hands-on<br />analytics internship</span></div>
          <div className="number-item"><strong>04</strong><span>Core tools in my<br />everyday toolkit</span></div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading"><div><span className="section-label">/ Selected work</span><h2>Analysis that moves<br /><em>business forward.</em></h2></div><p>From raw rows to readable decisions. Here are two projects where I followed the data all the way to the insight.</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className={`project-card ${project.className}`} key={project.number}>
            <a className="project-top" href={project.link} target="_blank" rel="noreferrer"><span className="project-number">{project.number}</span><span>{project.type}</span><ArrowUpRight size={20} /></a>
            <div className="project-chart"><Image src={project.image} alt={`${project.title} dashboard preview`} fill sizes="(max-width: 800px) 90vw, 42vw" /></div>
            <div className="project-body"><div><h3>{project.title}</h3><p>{project.description}</p><div className="tool-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">View repository <Github size={14} /></a></div><div className="project-stat"><strong>{project.stat}</strong><span>{project.statLabel}</span></div></div>
          </article>)}
        </div>
      </section>

      <section className="experience dark-section" id="experience">
        <div className="section-wrap experience-inner"><div className="experience-title"><span className="section-label light">/ Experience</span><h2>Learning by<br /><em>doing.</em></h2><p>Real-world exposure, practical case studies, and a habit of asking one more question of the data.</p></div><div className="timeline"><div className="timeline-item current"><span className="timeline-date">DEC 2025 — JUL 2026</span><div><h3>Data Analyst Intern</h3><h4>GRAS Education & Training Services · Noida</h4><p>Supported real-time reporting and data validation workflows for GRAStech.in. Cleaned multi-source datasets, tracked KPIs, surfaced trends, and built structured reports to support stakeholder decisions.</p><div className="timeline-tags"><span>Reporting</span><span>Data quality</span><span>KPI analysis</span></div></div></div><div className="timeline-item"><span className="timeline-date">AUG 2018 — SEP 2021</span><div><h3>Bachelor of Commerce</h3><h4>Hemvati Nandan Bahuguna Garhwal University</h4><p>A business foundation that keeps the commercial question at the center of every analysis.</p></div></div></div></div>
      </section>

      <section className="toolkit section-wrap" id="toolkit"><div className="section-heading"><div><span className="section-label">/ The toolkit</span><h2>From question<br />to <em>quantified answer.</em></h2></div><p>My process connects technical fluency with business context — making analysis useful, not just accurate.</p></div><div className="skill-list">{skills.map((skill) => <div className="skill-row" key={skill[0]} tabIndex={0}><span className="skill-hover-orb" aria-hidden="true" /><span className="skill-number">{skill[0]}</span><span className="skill-category">{skill[1]}</span><strong>{skill[2]}</strong><span className="skill-details">{skill[3]}</span><ChevronRight size={18} /></div>)}</div></section>

      <section className="credentials section-wrap"><div className="credential-box"><span className="section-label">/ Credentials</span><h2>Curious by nature.<br /><em>Certified by practice.</em></h2><div className="cert-list"><div><Check size={17} /><span>Data Analytics Diploma</span><small>GRAStech · 2025–2026</small></div><div><Check size={17} /><span>SQL (Advanced) Certificate</span><small>Technical proficiency</small></div><div><Check size={17} /><span>Deloitte · Tata · PNC Simulations</span><small>Job simulation programs</small></div><div><Check size={17} /><span>Diploma in Office Automation</span><small>2023–2024</small></div></div></div><div className="credential-note"><Database size={29} /><span>Always learning</span><p>Exploring the space where data, business, and better questions meet.</p><div className="note-line" /></div></section>

      <section className="contact dark-section" id="contact"><div className="section-wrap contact-inner"><span className="section-label light">/ Start a conversation</span><h2>Have a question<br />worth <em>answering?</em></h2><p>Whether you&apos;re looking for an analyst, want to talk dashboards, or just have a good data problem — I&apos;d love to hear from you.</p><a className="button button-lime" href="mailto:ankitrth81945@gmail.com">Get in touch <ArrowUpRight size={17} /></a><div className="contact-links"><a href="mailto:ankitrth81945@gmail.com"><Mail size={17} /> ankitrth81945@gmail.com</a><a href="tel:+919634136551"><Phone size={17} /> +91 96341 36551</a><a href="https://linkedin.com/in/ankit-rauthan-1815a5415" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="https://github.com/AnkitRauthan1441" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a></div></div></section>

      <footer className="footer section-wrap"><span>© 2026 Ankit Rauthan</span><span>Data Analyst · SQL · Power BI · Python</span><a href="#top">Back to top ↑</a></footer>
      <a className="go-up" href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
    </main>
  );
}
