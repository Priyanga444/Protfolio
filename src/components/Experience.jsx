const experiences = [
  {
    date: 'Internship',
    title: 'Web Developer Intern',
    org: 'Zenzio Technology Pvt. Limited',
    desc: 'Worked as a Web Developer Intern at Zenzio Technology Pvt. Limited, contributing to real-world web development projects. Designed and developed responsive UI components, collaborated with the development team, and gained hands-on experience in building modern web applications with clean, user-friendly interfaces.',
    tags: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    side: 'left',
  },
]

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="experience-single-wrap">
          {experiences.map((exp) => (
            <div key={exp.title} className="experience-card">
              <div className="exp-badge">{exp.date}</div>
              <h3 className="exp-title">{exp.title}</h3>
              <div className="exp-org">{exp.org}</div>
              <p className="exp-desc">{exp.desc}</p>
              <div className="timeline-tags">
                {exp.tags.map(t => (
                  <span key={t} className="timeline-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
