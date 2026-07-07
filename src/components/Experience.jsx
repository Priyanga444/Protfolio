const experiences = [
  {
    date: 'Jan 2026 – Present',
    title: 'AI & Full Stack Developer',
    org: 'Freelance / Self-Employed',
    desc: 'Building AI-powered web applications, recommendation systems, and data-driven dashboards for clients. Leading end-to-end development from requirement gathering to deployment.',
    tags: ['Python', 'React', 'FastAPI', 'ML', 'Streamlit'],
    side: 'left',
  },
  {
    date: 'Aug 2025 – Dec 2025',
    title: 'Machine Learning Intern',
    org: 'AI Research Lab',
    desc: 'Worked on predictive models and data analysis pipelines. Developed a recommendation system that improved user engagement by 35%. Presented findings to senior researchers.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NLP', 'SQL'],
    side: 'right',
  },
  {
    date: 'May 2025 – Jul 2025',
    title: 'Frontend Developer Intern',
    org: 'Tech Startup',
    desc: 'Designed and implemented responsive UI components using React and Figma. Collaborated with cross-functional teams to deliver features on schedule, improving UX and accessibility.',
    tags: ['React', 'CSS', 'JavaScript', 'Figma', 'Git'],
    side: 'left',
  },
  {
    date: '2023 – 2025',
    title: 'Academic Projects & Open Source',
    org: 'University & GitHub',
    desc: 'Developed multiple AI/ML and web projects as part of coursework and personal initiative. Actively contributed to open-source communities and tech clubs.',
    tags: ['Python', 'HTML', 'CSS', 'Flask', 'Java'],
    side: 'right',
  },
]

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title reveal">Experience</h2>
        <p className="section-subtitle reveal delay-1">My professional journey</p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={exp.title} className="timeline-item">
              {exp.side === 'left' ? (
                <>
                  <div className={`timeline-content reveal-left delay-${i + 1}`}>
                    <div className="timeline-date">{exp.date}</div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-org">{exp.org}</div>
                    <p className="timeline-desc">{exp.desc}</p>
                    <div className="timeline-tags">
                      {exp.tags.map(t => <span key={t} className="timeline-tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="timeline-dot" />
                  <div className="timeline-empty" />
                </>
              ) : (
                <>
                  <div className="timeline-empty" />
                  <div className="timeline-dot" />
                  <div className={`timeline-content reveal-right delay-${i + 1}`}>
                    <div className="timeline-date">{exp.date}</div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-org">{exp.org}</div>
                    <p className="timeline-desc">{exp.desc}</p>
                    <div className="timeline-tags">
                      {exp.tags.map(t => <span key={t} className="timeline-tag">{t}</span>)}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
