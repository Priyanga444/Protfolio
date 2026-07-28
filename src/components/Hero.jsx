import { useEffect, useState } from 'react'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowRight, FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi'

const TYPING_STRINGS = [
  'Full Stack Developer',
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
            </h1>

            <div className="hero-typing-wrapper">
              <span>{typed}</span>
              <span className="typing-cursor" />
            </div>

            <p className="hero-description">
              Passionate about building responsive web applications and clean user experiences.
              I combine modern full-stack development with intuitive design
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
                href="https://github.com/Priyanga444"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanga-r44/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:priyangapriyanga444@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="hero-image-wrapper">
            <div className="hero-illustration-wrap">
              <div className="hero-code-card">
                <div className="code-card-header">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                  <span className="code-card-title">developer.js</span>
                </div>
                <div className="code-card-body">
                  <span className="code-line"><span className="code-kw">const</span> <span className="code-class">developer</span> = &#123;</span>
                  <span className="code-line code-indent"><span className="code-prop">name</span>: <span className="code-str">'Priyanga'</span>,</span>
                  <span className="code-line code-indent"><span className="code-prop">role</span>: <span className="code-str">'Full Stack Dev'</span>,</span>
                  <span className="code-line code-indent"><span className="code-prop">skills</span>: [</span>
                  <span className="code-line code-indent2"><span className="code-str">'React'</span>, <span className="code-str">'Python'</span>,</span>
                  <span className="code-line code-indent2"><span className="code-str">'Node.js'</span>, <span className="code-str">'SQL'</span></span>
                  <span className="code-line code-indent">&#93;,</span>
                  <span className="code-line code-indent"><span className="code-prop">status</span>: <span className="code-str">'Building web apps'</span></span>
                  <span className="code-line">&#125;</span>
                  <span className="code-line code-blink-line"><span className="code-kw">developer</span>.<span className="code-fn">buildAwesomeStuff</span>()</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="hero-tech-badge badge-1">
                <span className="tech-badge-icon">⚛️</span> React
              </div>
              <div className="hero-tech-badge badge-2">
                <span className="tech-badge-icon">🐍</span> Python
              </div>
              <div className="hero-tech-badge badge-3">
                <span className="tech-badge-icon">🌐</span> Web Dev
              </div>
              <div className="hero-tech-badge badge-4">
                <span className="tech-badge-icon">📊</span> SQL
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
