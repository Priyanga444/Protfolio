const educationData = [
  {
    icon: '🎓',
    period: '2022 – 2026',
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'University / College Name',
    details: 'Specialization in Artificial Intelligence & Machine Learning. CGPA: 8.5 / 10.0. Relevant coursework: ML, Data Structures, DBMS, Computer Networks, Software Engineering.',
  },
  {
    icon: '🏫',
    period: '2020 – 2022',
    degree: 'Higher Secondary Education (12th)',
    school: 'School Name, City',
    details: 'Science stream with Mathematics, Physics, and Computer Science. Scored 92% in board examinations. School topper in Computer Science.',
  },
  {
    icon: '📚',
    period: '2018 – 2020',
    degree: 'Secondary Education (10th)',
    school: 'School Name, City',
    details: 'Completed with distinction. Scored 95% in board examinations. Active participant in science exhibitions and math olympiads.',
  },
  {
    icon: '🤖',
    period: '2024 – Present',
    degree: 'Self-Learning & Online Certifications',
    school: 'Coursera, Udemy, NPTEL',
    details: 'Continuously upskilling in Machine Learning, Deep Learning, React, and Cloud technologies through structured online programs.',
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
