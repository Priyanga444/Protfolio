import { useEffect, useRef, useState } from 'react'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'

const TYPING_STRINGS = [
  'AI & Full Stack Developer',
  'Machine Learning Enthusiast',
  'Python Developer',
  'React Developer',
]

function useTypingEffect(strings, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[idx % strings.length]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setIdx(i => i + 1)
    }

    setDisplay(current.substring(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx, strings, speed, pause])

  return display
}

export default function Hero() {
  const typed = useTypingEffect(TYPING_STRINGS)

  return (
    <section className="hero section" id="home">
      <div className="hero-bg-gradient" />
      <div className="container">
        <div className="hero-inner">
          {/* Text Side */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Open to Opportunities
            </div>

            <h1 className="hero-heading">
              Hi, I'm{' '}
              <span className="gradient-text">Priyanga</span>
              <br />
              <span className="accent-text">Ramesh</span>
            </h1>

            <div className="hero-typing-wrapper">
              <span>{typed}</span>
              <span className="typing-cursor" />
            </div>

            <p className="hero-description">
              Passionate about building intelligent systems and beautiful user experiences.
              I combine the power of AI & Machine Learning with modern full-stack development
              to craft solutions that make a real-world impact.
            </p>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Let's Talk <FiArrowRight />
              </a>
              <a href="/resume.pdf" download className="btn btn-outline">
                <FiDownload /> Download CV
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Priyanga"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/Priyanga"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:priyanga@email.com"
                className="social-icon"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="hero-image-wrapper">
            <div className="hero-image-orb">
              <div className="hero-image-orb-ring" />
              <div className="hero-image-orb-ring2" />
              <img
                src="images/profile.jpg"
                alt="Priyanga – AI & Full Stack Developer"
                className="hero-avatar"
              />

              {/* Floating tech badges */}
              <div className="hero-tech-badge badge-1">
                <span className="tech-badge-icon">🤖</span> AI / ML
              </div>
              <div className="hero-tech-badge badge-2">
                <span className="tech-badge-icon">⚛️</span> React
              </div>
              <div className="hero-tech-badge badge-3">
                <span className="tech-badge-icon">🐍</span> Python
              </div>
              <div className="hero-tech-badge badge-4">
                <span className="tech-badge-icon">🎨</span> UI/UX
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-dot" /></div>
        <span>Scroll down</span>
      </div>
    </section>
  )
}
