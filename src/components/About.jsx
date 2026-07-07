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
                src="https://api.dicebear.com/8.x/avataaars/svg?seed=priyanka-paithiyam&backgroundColor=b6e3f4,c0aede,d1d4f9&skinColor=f8d25c&hair=longCurvy&facialHair=none&accessories=glasses&clothe=blazerAndShirt&clotheColor=3c4f5c&eyebrow=raisedExcited&eye=happy&mouth=smile"
                alt="Priyanga"
              />
            </div>
            <div className="about-stats">
              <div className="about-stat-item">
                <div className="about-stat-number">15+</div>
                <div className="about-stat-label">Projects</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">20+</div>
                <div className="about-stat-label">Technologies</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">5+</div>
                <div className="about-stat-label">Certifications</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">500+</div>
                <div className="about-stat-label">Coding Hours</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content reveal-right">
            <h2>
              Building the Future with{' '}
              <span className="gradient-text">AI & Code</span>
            </h2>

            <p>
              I'm <strong style={{ color: 'var(--text)' }}>Priyanga</strong>, an
              enthusiastic AI & Full Stack Developer with a passion for creating intelligent,
              user-centric applications. My journey in tech is driven by curiosity and a
              relentless desire to solve complex problems elegantly.
            </p>
            <p>
              I specialize in <strong style={{ color: 'var(--primary)' }}>Artificial Intelligence</strong>,{' '}
              <strong style={{ color: 'var(--accent)' }}>Machine Learning</strong>, and{' '}
              <strong style={{ color: 'var(--secondary)' }}>Full Stack Development</strong>.
              From building recommendation systems and predictive models to designing beautiful,
              responsive web applications — I bring ideas to life with precision and creativity.
            </p>
            <p>
              I believe great software is born at the intersection of technical excellence and
              exceptional user experience. My UI/UX sensibility ensures that every product I
              build isn't just functional — it's delightful to use.
            </p>
            <p>
              When I'm not coding, I'm continuously learning — exploring new ML papers,
              contributing to open-source, and staying at the forefront of the ever-evolving
              tech landscape.
            </p>

            <div className="about-tags">
              {[
                '🤖 Artificial Intelligence',
                '📊 Machine Learning',
                '🐍 Python',
                '⚛️ React',
                '🎨 UI/UX Design',
                '🔬 Data Analysis',
                '🌐 Full Stack',
                '💡 Problem Solving',
                '🚀 FastAPI',
                '📈 Data Visualization',
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
