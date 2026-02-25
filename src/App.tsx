import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './App.css'

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const projects = [
    {
      title: "Student Portfolio",
      description: "A modern portfolio website showcasing student projects and achievements with interactive elements.",
      tech: ["React", "TypeScript", "CSS3"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Task Manager",
      description: "An intuitive task management application with drag-and-drop functionality and real-time updates.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Blog Website",
      description: "A full-featured blogging platform with rich text editing, comments, and user authentication.",
      tech: ["React", "Express", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="app" ref={containerRef}>
      {/* Floating Background Elements */}
      <div className="floating-shapes">
        <motion.div 
          className="shape shape-1"
          animate={{ 
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="shape shape-2"
          animate={{ 
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="shape shape-3"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-bg-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
        >
          <motion.div className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="badge-dot"></span>
            Available for opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <span className="gradient-text">Yakshika Batra</span>
          </motion.h1>
          
          <motion.div className="title-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="subtitle">
              <span className="highlight">Full Stack Developer</span>
              <span className="separator">×</span>
              <span className="highlight">UI/UX Designer</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Transforming ideas into pixel-perfect, high-performance digital experiences
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#projects" className="cta-primary">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="cta-secondary">Get In Touch</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="about-container">
          <motion.div className="about-header" variants={itemVariants}>
            <span className="section-label">Who I Am</span>
            <h2>Crafting Digital Excellence</h2>
          </motion.div>
          
          <motion.div className="about-content" variants={itemVariants}>
            <div className="about-text">
              <p className="about-intro">
                I'm a <span className="text-highlight">full-stack developer</span> and <span className="text-highlight">designer</span> who believes in the power of thoughtful, user-centered digital experiences.
              </p>
              <p>
                With expertise spanning modern web technologies, I specialize in building scalable applications that don't just work—they delight. From pixel-perfect interfaces to robust backend systems, I bring ideas to life with precision and creativity.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>15+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-card">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-card">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="skills-section" variants={itemVariants}>
            <h3 className="skills-title">Technical Expertise</h3>
            <div className="skills-grid">
              {[
                { name: 'React', level: 95, color: '#61dafb' },
                { name: 'TypeScript', level: 90, color: '#3178c6' },
                { name: 'Node.js', level: 88, color: '#68a063' },
                { name: 'Python', level: 85, color: '#3776ab' },
                { name: 'CSS/SASS', level: 92, color: '#cc6699' },
                { name: 'MongoDB', level: 87, color: '#47a248' },
              ].map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="skill-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      style={{ background: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="projects-container">
          <motion.div className="projects-header" variants={itemVariants}>
            <span className="section-label">Portfolio</span>
            <h2>Featured Work</h2>
            <p className="section-subtitle">A collection of projects that showcase my expertise</p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="project-number">0{index + 1}</div>
                <div className="project-gradient" style={{ background: project.gradient }}></div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <motion.div 
                      className="project-arrow"
                      whileHover={{ x: 5, y: -5 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tech-stack">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <a href="#" className="project-link">
                      View Project
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="contact-container">
          <motion.div className="contact-content" variants={itemVariants}>
            <span className="section-label">Get In Touch</span>
            <h2>Let's Create Something Amazing</h2>
            <p className="contact-description">
              Have a project in mind? Looking to collaborate? Or just want to say hi? 
              I'd love to hear from you.
            </p>
            
            <div className="contact-info">
              <motion.a 
                href="mailto:yakshika.batra@example.com" 
                className="contact-card"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>yakshika.batra@example.com</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.579 9.521 21.269 9.521 21.002C9.521 20.765 9.512 20.049 9.508 19.122C6.726 19.717 6.139 17.746 6.139 17.746C5.685 16.588 5.029 16.279 5.029 16.279C4.121 15.668 5.098 15.681 5.098 15.681C6.101 15.753 6.629 16.703 6.629 16.703C7.521 18.234 8.97 17.796 9.539 17.538C9.631 16.893 9.889 16.456 10.175 16.204C7.955 15.949 5.62 15.095 5.62 11.265C5.62 10.171 6.01 9.277 6.649 8.576C6.546 8.321 6.203 7.308 6.747 5.929C6.747 5.929 7.586 5.658 9.496 6.974C10.294 6.751 11.15 6.64 12 6.636C12.85 6.64 13.706 6.751 14.506 6.974C16.414 5.658 17.251 5.929 17.251 5.929C17.797 7.308 17.454 8.321 17.351 8.576C17.991 9.277 18.378 10.171 18.378 11.265C18.378 15.104 16.039 15.947 13.813 16.197C14.172 16.507 14.491 17.12 14.491 18.057C14.491 19.388 14.479 20.462 14.479 20.802C14.479 21.072 14.659 21.385 15.167 21.487C19.139 20.163 22 16.417 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <p>@yakshikabatra</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <p>yakshika-batra</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="contact-footer"
          variants={itemVariants}
        >
          <p>© 2026 Yakshika Batra. Designed & Developed with 💜</p>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default App
