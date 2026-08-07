import { FiTerminal } from 'react-icons/fi'
import aboutImg from '../assets/about.jpeg'

export default function About() {
  return (
    <section className="about section" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal delay-1">
          The person behind the code — passion, craftsmanship & innovation
        </p>

        <div className="about-inner">
          {/* Left Column: Image Card */}
          <div className="about-image-side reveal-left">
            <div className="about-image-card">
              <img
                src={aboutImg}
                alt="Priyanga"
              />
            </div>
          </div>

          {/* Right Column: Bio Card */}
          <div className="about-content-side reveal-right">
            <div className="about-bio-card">
              <div className="about-badge-tag">
                <FiTerminal className="inline-icon-blue" />
                <span>Full Stack Developer & Problem Solver</span>
              </div>

              <h2 className="about-heading">
                Building the Future with{' '}
                <span className="about-gradient-text">Design & Clean Code</span>
              </h2>

              <p className="about-paragraph">
                Hi! I'm <strong>Priyanga</strong>, an ambitious Full Stack Software Engineer currently pursuing my <strong>MCA (Class of 2026)</strong>. I specialize in building modern, high-performance web applications that bridge intuitive user interfaces with robust backend architectures.
              </p>

              <p className="about-paragraph" style={{ marginBottom: 0 }}>
                My passion lies at the intersection of technical elegance and user-centric design. Whether engineering scalable RESTful services in Python & Node.js, crafting reactive components with React, or designing analytical dashboards with Power BI — I focus on delivering code that is performant, scalable, and impactful.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
