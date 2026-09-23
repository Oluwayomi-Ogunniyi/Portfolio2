import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './App.css';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Modal = ({ isOpen, onClose, content, isVideo }) => {
  if (!isOpen) return null;
  return (
    <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose}>
      <motion.div className="modal-content" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        <span className="close" onClick={onClose}>×</span>
        {isVideo ? (
          <iframe
            src={content}
            allowFullScreen
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 'none', width: '100%', height: '80vh', minHeight: '400px' }}
          />
        ) : (
          <img src={content} alt="Full view" style={{ maxWidth: '100%', maxHeight: '90vh' }} />
        )}
      </motion.div>
    </motion.div>
  );
};

const Navbar = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.classList.add('menu-open');
    else document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container">
        <h1>Oluwayomi Favour Ogunniyi</h1>
        <div className="nav-controls">
          <button id="darkModeToggle" onClick={toggleTheme}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#graphics" onClick={() => setMenuOpen(false)}>Graphics</a></li>
            <li><a href="#multimedia" onClick={() => setMenuOpen(false)}>Multimedia</a></li>
            <li><a href="#ethical-hacking" onClick={() => setMenuOpen(false)}>Ethical Hacking</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

const MobileThemeToggle = ({ theme, toggleTheme }) => (
  <div className="mobile-theme-toggle">
    <button onClick={toggleTheme}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  </div>
);

const Profile = () => (
  <motion.div className="profile-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
    <motion.img
      src="images/Oluwayomi Favour Ogunniyi.jpeg"
      alt="Profile"
      loading="lazy"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    />
  </motion.div>
);

const Hero = () => (
  <section id="hero">
    <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
      Software Developer, Networking and System Security Analyst.
    </motion.h2>
    <motion.p initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
      Experienced in software development, networking and system security analysis.
    </motion.p>
  </section>
);

const About = () => (
  <section id="about">
    <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      About Me
    </motion.h2>
    <div className="about-container">
      <div className="badge-wrapper">
        <div className='badge-base LI-profile-badge' data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="oluwayomi-favour-ogunniyi-5178161a4" data-version="v1">
          <a className='badge-base__link LI-simple-link' href='https://ng.linkedin.com/in/oluwayomi-favour-ogunniyi-5178161a4?trk=profile-badge'>
            Oluwayomi Favour Ogunniyi
          </a>
        </div>
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </div>
      <motion.div className="about-text" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        Software Developer, Networking and System Security Analyst. Thrilled to secure and innovate in the digital world! Skilled in software development (HTML, CSS, JavaScript, Python, Java, React), I craft secure, user-friendly Web applications with a keen eye for UI/UX. Expert in vulnerability assessments and penetration testing using Kali Linux, Wireshark, and Metasploit, I proactively safeguard systems with secure coding and threat mitigation, ensuring robust performance and data protection.
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills">
    <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      Skills
    </motion.h2>
    <motion.h3 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
      TECHNICAL SKILLS
    </motion.h3>
    <ul className="technical-list">
      <li>Software Development</li>
      <li>AI & Machine Learning</li>
      <li>Network Analyst</li>
      <li>System Security Analyst</li>
      <li>Creative Technologist (Video Editing & Graphic Design)</li>
    </ul>

    <motion.h3 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
      TOOLS & PLATFORMS
    </motion.h3>
    <div className="logos">
      {[
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", alt: "Microsoft" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg", alt: "Google Workspace" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", alt: "Slack" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", alt: "Jira" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", alt: "Trello" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", alt: "Adobe Photoshop" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", alt: "Adobe Illustrator" },
        { src: "images/Animate.png", alt: "Adobe Animate" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg", alt: "Autodesk Maya" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
        { src: "https://static.canva.com/static/images/favicon.ico", alt: "Canva" },
        { src: "images/Capcut.png", alt: "CapCut" },
        { src: "https://www.virtualbox.org/graphics/vbox_logo2_gradient.png", alt: "Oracle VirtualBox" },
        { src: "https://www.kali.org/images/kali-logo.svg", alt: "Kali Linux" },
        { src: "https://cdn.simpleicons.org/zapier/FF4759", alt: "Zapier" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
        { src: "https://cdn.simpleicons.org/lighthouse/FFCD00", alt: "Lighthouse" },
        { src: "https://cdn.simpleicons.org/netlify/00C7B7", alt: "Netlify" },
      ].map((tool, i) => (
        <motion.div
          className="skill"
          key={tool.alt}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        >
          <img src={tool.src} alt={tool.alt} loading="lazy" />
          <span>{tool.alt}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "The Qlip",
      desc: "Official personal brand website built with vanilla HTML, CSS, and JavaScript. Fully responsive, SEO-optimized, with a signature dark-neon theme.",
      link: "https://theqlipdigital.com",
      img: "images/project1.jpg",
      reverse: false,
      languages: ["HTML", "CSS", "JavaScript"],
      workflows: "Responsive design, SEO optimization, vanilla JS interactivity"
    },
    {
      title: "The Pacesettermum Tribe",
      desc: "Sleek single-page landing site for a vibrant community platform. Mobile-first design with smooth scrolling and strong call-to-action.",
      link: "https://oluwayomi-ogunniyi.github.io/Pacesetter/",
      img: "images/pacesetter.jpg",
      reverse: true,
      languages: ["HTML", "CSS", "JavaScript"],
      workflows: "Mobile-first approach, smooth scrolling, CTA integration"
    },
    {
      title: "French Masterclass Website - Template",
      desc: "This elegant, single-page web experience serves as a French Masterclass landing page, designed to help users \"Master French with Elegance\". The site features a sophisticated, minimalist aesthetic with smooth typography, subtle animations, and a focus on language learning appeal.",
      link: "https://oluwayomi-ogunniyi.github.io/French-template-X/",
      img: "images/French Master.jpg",
      reverse: false,
      languages: ["React", "JavaScript (ES6+)", "CSS3"],
      workflows: "Component-based architecture, SPA routing, responsive design, smooth animations, Git version control, GitHub Pages deployment"
    },
    {
      title: "Sea-Steel Marine & Offshore Services Ltd.",
      desc: "Professional corporate landing page showcasing services, expertise, and contact options for a marine services company.",
      link: "https://seastealmarineoffshoreservicesltd.netlify.app/",
      img: "images/Sea-steal.jpg",
      reverse: true,
      languages: ["HTML", "CSS", "JavaScript"],
      workflows: "Corporate layout, service showcases, contact integration"
    },
    {
      title: "Eduplex – Lead Front-End Engineer",
      desc: "I built the face of a school that never sleeps. When teachers upload scores, parents get them same second, no calls, no lost sheets. That flow? I wired it. Mobile or desk, one tap or click nothing breaks, nothing waits. In a country where education fights traffic and timetables, I made results run faster than gossip.",
      link: "https://eduplexweb.netlify.app/",
      img: "images/Eduplex.jpg",
      reverse: false,
      languages: ["HTML", "JavaScript", "CSS"],
      workflows: "Real-time updates, responsive design, data synchronization"
    },
    {
      title: "Godbless Vikky Leather Shop",
      desc: "A premium e-commerce platform showcasing an exclusive collection of handcrafted leather footwear and belts for men and women. Features a clean, responsive product catalog with 43+ items, detailed descriptions, star ratings, pricing in Naira, and \"Add to Cart\" functionality for seamless shopping. Built with modern web technologies and deployed on Netlify for fast, reliable performance.",
      link: "https://godblessvikky.netlify.app/shop",
      img: "images/Godbless Vikky.jpg",
      reverse: true,
      note: "In Progress...",
      languages: ["HTML", "JavaScript", "CSS"],
      workflows: "E-commerce catalog, cart functionality, Netlify deployment"
    },
  ];

  return (
    <section id="projects">
      <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        Projects
      </motion.h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className={`project-item ${p.reverse ? 'reverse' : ''}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-text">
              <strong>{p.title}</strong>
              <p>{p.desc}</p>
              {p.note && <p><em>{p.note}</em></p>}
              <div className="project-details">
                <strong>Languages:</strong> {p.languages.join(', ')}<br />
                <strong>Workflow:</strong> {p.workflows}
              </div>
              <span className="hint">Click the image to visit the live site →</span>
            </div>
            <div className="project-media">
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="img-fit"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Graphics = ({ openModal }) => {
  const items = [
    { src: "images/Bizcardxxx.jpg", title: "Business Card Design", desc: "Elegant premium business card for Dr. Kamil Tijani, Cardiologist at Lagos Medical Center – featuring a minimalist heartbeat line integrated with the medical caduceus symbol on a soft blue background." },
    { src: "images/Bizcardxx.jpg", title: "Business Card Design", desc: "Military-inspired business card for Gen. Saheed Bawali, Brigadier General, Nigerian Army – incorporating camouflage green tones, official eagle emblem with wings, and structured hierarchy details." },
    { src: "images/Bizcard.jpg", title: "Business Card Design", desc: "Modern tech executive business card for Okechi Fedrick, CEO of Tech Innovations Ltd – highlighting a geometric hexagon logo with vibrant multicolored accents, premium insured branding, and clean contact layout." },
    { src: "images/Door.jpg", title: "Intricate wooden keyhole door logo", desc: "Featuring an open arched doorway with detailed grain texture and metallic rivets – symbolizing access, discovery, and unlocking opportunities (sample concept for a security, mystery, or entry-themed brand)" },
    { src: "images/The Qlip.png", title: "Innovative geometric logo for The Qlip", desc: "A bold isometric cube with interlocking negative space that forms a central clip element – evoking holding/securing while allowing release or flow through clever escape in the center void, representing grip, connection, and effortless detachment in a modern, dynamic way." },
    { src: "images/Acathy Culturalty.png", title: "Vibrant, culturally rich logo for Akati Cultural", desc: "An entity preserving and broadcasting historic African journalism, media, and storytelling. Featuring a stylized hanging lantern/chandelier motif above layered, playful typography in earthy multicolored accents, blending tradition with contemporary broadcast energy to highlight cultural heritage, news, language preservation, and African narratives across media platforms." },
    { src: "images/FinMotion.mp4", title: "Fintech", desc: "Motion Graphics Intro for a Nigerian finance firm." },
    { src: "images/Fashion.mp4", title: "Fashion", desc: "Motion Graphics editorial art for a culture magazine spread on African fashion." },
    { src: "images/Interior Bohemian.mp4", title: "Interior Bohemian", desc: "Relatable animated reveal of a plain urban living room transformed into a warm, personality-filled bohemian space with reclaimed wood, layered textiles, abundant plants, and cozy textures for everyday Nigerian homes." },
    { src: "images/Interior Luxury.mp4", title: "Interior Luxury", desc: "Cinematic after-touch sequence showcasing opulent art deco updates in a high-end apartment, featuring velvet seating, geometric gold accents, mirrored elements, and sophisticated lighting to convey status and refined comfort." },
    { src: "images/Health & Wellness.mp4", title: "Health & Wellness", desc: "An ultra-relatable short animated video showcasing everyday life—hustle fatigue to simple supplement ritual to energized confidence, highlighting natural energy, immunity, and wellness wins in an authentic home settings." },
    { src: "images/Product design.jpg", title: "Product Design / Branding", desc: "Branding and packaging visuals for Natura Glow – a natural skincare line featuring serums, cleansers, and glow-focused products with botanical elements." },
    { src: "images/Vibetribe.png", title: "Feed Post Design", desc: "Vibrant social media feed post designs for Vibe Tribe Africa, an African-inspired fashion and culture brand emphasizing roots, embrace your heritage, and bold visuals with elements like sunglasses, jewelry, and vibrant patterns." },
    { src: "images/Afropay.jpg", title: "Branding / Logo Design", desc: "Identity and color palette design for AfroPay – a fintech solution enabling secure money transfers across Africa, featuring modern geometric shapes in blue, yellow, and neutral tones." },
    { src: "images/Lagos Arissing.jpg", title: "Inspirational cityscape flyer for Lagos Rising", desc: "A futuristic vision of Lagos featuring towering modern architecture blended with vibrant urban crowds, golden-hour lighting, and dynamic composition to evoke growth, energy, and rising potential in Nigeria's economic hub." },
    { src: "images/Innotech.jpg", title: "Tech innovation flyer for InnoNiTech Nigeria", desc: "A cosmic, fluid design with glowing blue particle effects and watery bubbles surrounding bold \"Innovating Africa\" text, emphasizing cutting-edge technology, creativity, and forward-thinking solutions for the continent." },
    { src: "images/Save our naija.jpg", title: "An urgent advocacy flyer", desc: "A powerful split-panel composition showing environmental crisis (flooded communities, people in water) contrasted with hopeful orange sunrise tones, calling for immediate action on climate, sustainability, and national preservation in Nigeria." },
    { src: "images/The Qlip Training.png", title: "Digital Skills Training Flyer", desc: "High-impact promotional graphic emphasizing that true AI mastery requires human coding fundamentals—highlighting HTML/CSS, JavaScript, Python, and React training to empower beginners to pros in Nigeria's tech scene." },
  ];

  return (
    <section id="graphics" className="graphics">
      <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        Graphic Design
      </motion.h2>
      <div className="grid">
        {items.map((item, i) => (
          <motion.div
            className="card"
            key={item.src}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {item.src.endsWith(".mp4") ? (
          <video
            className="img-fit"
            onClick={() => openModal(item.src, true)}
            style={{ cursor: "pointer" }}
            muted
            loop
            playsInline
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support video.
          </video>
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="img-fit"
            loading="lazy"
            onClick={() => openModal(item.src, false)}
            style={{ cursor: "pointer" }}
          />
        )}
            <div className="info">
              <strong>{item.title}</strong><br />
              <small>{item.desc}</small>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Multimedia = ({ openModal }) => (
  <section id="multimedia">
    <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      Multimedia
    </motion.h2>
    <div className="project-grid">
      <motion.div 
        className="project-item" 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }}
      >
        <div className="project-text">
          <strong>Animation + Video Editing</strong>
          <p>Dynamic short animation combining 2D motion graphics, transitions, and sound design...</p>
          <span className="hint">Click the image to watch full demo →</span>
        </div>
        <div className="project-media">
          <motion.img 
            src="images/Animation and Video Editing.jpg" 
            alt="Animation Demo" 
            className="img-fit" 
            loading="lazy" 
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal("https://drive.google.com/file/d/1a2ZmkNrVknqgZf_KTqJ8kLD5x1pzLwFh/preview", true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </motion.div>

      <motion.div 
        className="project-item reverse" 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }}
      >
        <div className="project-text">
          <strong>Cloud-Native Architecture Hacks Video</strong>
          <p>Crafted a dynamic, animated tutorial format...</p>
          <span className="hint">Click the image to watch full demo →</span>
        </div>
        <div className="project-media">
          <motion.img 
            src="images/Cloud native.jpeg" 
            alt="Cloud Video" 
            className="img-fit" 
            loading="lazy" 
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal("https://drive.google.com/file/d/1kcACtUoEQDRw2hB4QKedZ8iQe1NYt2vB/preview", true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const EthicalHacking = ({ openModal }) => (
  <section id="ethical-hacking">
    <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      Ethical Hacking Demos
    </motion.h2>
    <div className="project-grid">
      <motion.div 
        className="project-item reverse" 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }}
      >
        <div className="project-text">
          <strong>Kali Linux to Windows Payload</strong>
          <p>Self-created penetration testing demonstration showing payload generation in Kali Linux...</p>
          <span className="hint">Click the image to watch full demo →</span>
        </div>
        <div className="project-media">
          <motion.img 
            src="images/Reverse Shell Demo.jpg" 
            alt="Reverse Shell Demo" 
            className="img-fit" 
            loading="lazy" 
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal("https://drive.google.com/file/d/14mx32a7eCeEqFL_8N4yIsfsWYb8Dek8z/preview", true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.send('service_hg1jqcy', 'template_qbwqyr3', form, 'Dm065dmgiIEcjC7Mf')
      .then(() => { alert('Message sent!'); setForm({ name: '', email: '', message: '' }); })
      .catch(() => alert('Failed to send.'));
  };

  return (
    <section id="contact">
      <motion.h2 initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        Contact Me
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

const Footer = () => (
  <footer>
    <p>© 2026 Oluwayomi F. Ogunniyi | <a href="https://theqlip.digital/" target="_blank" rel="noopener noreferrer">The Qlip</a></p>
  </footer>
);

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [modal, setModal] = useState({ open: false, content: '', isVideo: false });

  const openModal = (content, isVideo = false) => setModal({ open: true, content, isVideo });
  const closeModal = () => setModal({ open: false, content: '', isVideo: false });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <title>Oluwayomi Favour | Portfolio</title>
      <meta name="description" content="Oluwayomi Favour - Full-Stack Developer & Creative Technologist Portfolio" />

      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {isMobile && (
        <div className="mobile-theme-toggle-container">
          <MobileThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      )}

      <Profile />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Graphics openModal={openModal} />
      <Multimedia openModal={openModal} />
      <EthicalHacking openModal={openModal} />
      <Contact />
      <Footer />

      <Modal isOpen={modal.open} onClose={closeModal} content={modal.content} isVideo={modal.isVideo} />
    </>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);