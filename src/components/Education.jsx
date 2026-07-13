const educationData = [
  {
    icon: '🎓',
    period: '2024 – 2026',
    degree: 'Master of Computer Application (MCA)',
    school: 'Pope John Paul II College of Education, Pondicherry ',
    CGPA: 8.5 / 10.0,
  },
  {
    icon: '🎓',
    period: '2021 – 2024',
    degree: 'Bachelor of Mathematics (B.Sc)',
    school: 'Bharathidasan womens college, Pondicherry ',
    CGPA: 7.5 / 10.0,
  },
  {
    icon: '📚',
    period: '2018 – 2020',
    degree: 'Higher Secondary Education (12th)',
    school: 'Annai Sivagami women higher secondary school, Pondicherry ',
    percentage: '75%',
  },
  {
    icon: '🤖',
    period: '2026 – Present',
    degree: 'Self-Learning & Online Certifications',
    school: ' Udemy',
    details: 'Continuously upskilling in Machine Learning, React,Python.',
  },
]

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title reveal">Education</h2>
        <p className="section-subtitle reveal delay-1">My academic background</p>

        <div className="education-grid">
          {educationData.map((edu, i) => (
            <div
              key={edu.degree}
              className={`education-card glass-card reveal delay-${i + 1}`}
            >
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-details">
                <div className="edu-period">{edu.period}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-details-text">{edu.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
