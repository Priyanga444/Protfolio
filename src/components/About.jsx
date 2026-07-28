export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal delay-1">The person behind the code</p>

        <div className="about-inner">
          {/* Image Side */}
          <div className="about-image-side reveal-left">
            <div className="about-image-card">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&fit=crop&q=80"
                alt="Priyanga Workspace"
              />
            </div>
            <div className="about-stats">
              <div className="about-stat-item">
                <div className="about-stat-number">2+</div>
                <div className="about-stat-label">Years Experience</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">10+</div>
                <div className="about-stat-label">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="about-content reveal-right">
            <h2>
              Building the Future with{' '}
              <span className="gradient-text">Design & Code</span>
            </h2>

            <p>
              I'm <strong style={{ color: 'var(--text)' }}>Priyanga</strong>, an
              enthusiastic Full Stack Developer with a passion for creating high-performance,
              user-centric applications. My journey in tech is driven by curiosity and a
              relentless desire to solve complex problems elegantly.
            </p>
            <p>
              I specialize in <strong style={{ color: 'var(--primary)' }}>Full Stack Development</strong>.
              From building interactive web applications to designing intuitive
              user interfaces — I bring ideas to life with precision and creativity.
            </p>
            <p>
              I believe great software is born at the intersection of technical excellence and
              a deep understanding of user needs. Every product I build isn't just functional
              — it's meaningful, efficient, and built to last.
            </p>
            <p>
              When I'm not coding, I'm continuously learning — exploring modern web technologies,
              contributing to open-source, and staying at the forefront of the ever-evolving
              tech landscape.
            </p>

            <div className="about-tags">
              {[
                '🐍 Python',
                '⚛️ React',
                '🌐 Full Stack',
                '💡 Problem Solving',
                '📈 Data Visualization',
                '📊 Power BI',
              ].map(tag => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
