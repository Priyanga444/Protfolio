import { useEffect, useState } from 'react'
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiFileText, 
  FiTerminal, 
  FiCode, 
  FiCpu, 
  FiSend,
  FiMapPin,
  FiBriefcase
} from 'react-icons/fi'

const ROLES = [
  'Full Stack Software Engineer',
  'Python & React Developer',
  'MCA Candidate (2026)',
  'Scalable Web App Architect'
]

function useDynamicTyping(phrases, typingSpeed = 70, eraseSpeed = 40, delay = 2000) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!phrases || phrases.length === 0) return

    const currentPhrase = phrases[phraseIdx % phrases.length]

    let timer = setTimeout(() => {
      if (!isDeleting && charIdx < currentPhrase.length) {
        setText(currentPhrase.substring(0, charIdx + 1))
        setCharIdx((prev) => prev + 1)
      } else if (!isDeleting && charIdx === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && charIdx > 0) {
        setText(currentPhrase.substring(0, charIdx - 1))
        setCharIdx((prev) => prev - 1)
      } else if (isDeleting && charIdx === 0) {
        setIsDeleting(false)
        setPhraseIdx((prev) => prev + 1)
      }
    }, isDeleting ? eraseSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [charIdx, isDeleting, phraseIdx, phrases, typingSpeed, eraseSpeed, delay])

  return text
}

export default function Hero() {
  const currentRole = useDynamicTyping(ROLES)

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Main Content Layout */}
        <div className="hero-grid">
          
          {/* Left Column: Intro & Headline */}
          <div className="hero-main-content">
            <div className="status-badge">
              <span className="pulse-dot" />
              <span>Available for Hire & Internships</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight-text">Priyanga R</span>
            </h1>

            <div className="role-container">
              <FiTerminal className="role-icon" />
              <span className="typed-text">{currentRole}</span>
              <span className="blinking-cursor">|</span>
            </div>

            <p className="hero-summary">
              I build high-performance web applications with modern tech stacks. Focused on clean architecture, seamless UX, and data-driven solutions using React, Python, and cloud-native databases.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <FiSend /> Get in Touch
              </a>
              <a href="/Priyanga-resume.pdf" download="Priyanga-resume.pdf" className="btn btn-secondary">
                <FiFileText /> View Resume
              </a>
            </div>

            {/* Quick Links / Socials */}
            <div className="hero-social-bar">
              <span className="social-label">Connect:</span>
              <a 
                href="https://github.com/Priyanga444" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/priyanga-r44/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:priyangapriyanga444@gmail.com" 
                className="social-btn"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Bento Cards & Live Terminal Visual */}
          <div className="hero-bento-grid">
            
            {/* Card 1: Interactive Terminal */}
            <div className="bento-card terminal-card">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="terminal-title">bash — priyanga@portfolio:~</span>
              </div>
              <div className="terminal-body">
                <p className="cmd-line">
                  <span className="prompt">$</span> priyanga --info
                </p>
                <div className="cmd-output">
                  <p><span>Degree:</span> MCA (Class of 2026)</p>
                  <p><span>Location:</span> India <FiMapPin className="inline-icon" /></p>
                  <p><span>Stack:</span> React, Python, Express, SQL</p>
                  <p><span>Focus:</span> Full-Stack Web App Development</p>
                </div>
                <p className="cmd-line">
                  <span className="prompt">$</span> priyanga --status
                </p>
                <p className="cmd-output active-status">
                  🟢 Ready to solve complex problems and collaborate!
                </p>
              </div>
            </div>

            {/* Card 2: Key Metrics Grid */}
            <div className="bento-card stats-subgrid">
              <div className="stat-box">
                <FiCode className="stat-icon" />
                <h4>15+</h4>
                <p>Projects Built</p>
              </div>
              <div className="stat-box">
                <FiCpu className="stat-icon" />
                <h4>10+</h4>
                <p>Tech Stack Tools</p>
              </div>
              <div className="stat-box">
                <FiBriefcase className="stat-icon" />
                <h4>1+</h4>
                <p>Internships</p>
              </div>
            </div>

            {/* Card 3: Skills Marquee Strip */}
            <div className="bento-card tech-strip-card">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Power BI</span>
              <span className="tech-tag">Express</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}