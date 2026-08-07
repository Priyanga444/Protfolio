import { 
  FiAward, 
  FiBookOpen, 
  FiBookmark, 
  FiCode, 
  FiCalendar, 
  FiMapPin 
} from 'react-icons/fi'

const EDUCATION_DATA = [
  {
    period: '2024 – 2026',
    degree: 'Master of Computer Applications (MCA)',
    school: 'Pope John Paul II College of Education',
    location: 'Puducherry, India',
    score: 'CGPA: 8.5 / 10.0',
    icon: <FiAward className="edu-card-icon" />,
    badgeType: 'score-navy',
    skills: ['Full Stack Architecture', 'DBMS & SQL', 'React & Python', 'Software Engineering']
  },
  {
    period: '2021 – 2024',
    degree: 'Bachelor of Science in Mathematics (B.Sc)',
    school: 'Bharathidasan Government College for Women',
    location: 'Puducherry, India',
    score: 'CGPA: 7.5 / 10.0',
    icon: <FiBookOpen className="edu-card-icon" />,
    badgeType: 'score-navy',
    skills: ['Discrete Mathematics', 'Quantitative Analysis', 'Statistical Logic', 'Optimization']
  },
  {
    period: '2018 – 2020',
    degree: 'Higher Secondary Education (12th Grade)',
    school: 'Annai Sivagami Government Higher Secondary School',
    location: 'Puducherry, India',
    score: 'Score: 75%',
    icon: <FiBookmark className="edu-card-icon" />,
    badgeType: 'score-navy',
    skills: ['Mathematics', 'Computer Science', 'Physics', 'Chemistry']
  },
  {
    period: '2024 – Present',
    degree: 'Continuous Upskilling & Certifications',
    school: 'Udemy & Self-Driven Projects',
    location: 'Online Platform',
    score: 'Active Learning',
    icon: <FiCode className="edu-card-icon" />,
    badgeType: 'score-navy',
    skills: ['React.js', 'Python & Express', 'Power BI & Analytics', 'RESTful APIs']
  }
]

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title reveal">Education & Academic Journey</h2>
        <p className="section-subtitle reveal delay-1">
          Formal academic qualifications, achievements & technical upskilling
        </p>

        {/* Timeline Grid Container */}
        <div className="education-timeline-grid reveal delay-2">
          {EDUCATION_DATA.map((edu, idx) => (
            <div className="edu-timeline-card" key={idx}>
              <div className="edu-card-header">
                <div className="edu-icon-badge">{edu.icon}</div>
                <div className="edu-header-main">
                  <div className="edu-top-row">
                    <span className="edu-period-pill">
                      <FiCalendar className="inline-micro-icon" /> {edu.period}
                    </span>
                    <span className={`edu-score-pill ${edu.badgeType}`}>
                      {edu.score}
                    </span>
                  </div>
                  <h3 className="edu-degree-title">{edu.degree}</h3>
                  <div className="edu-school-name">
                    <span>{edu.school}</span>
                    <span className="edu-location">
                      <FiMapPin className="inline-micro-icon" /> {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="edu-card-body">
                <div className="edu-skills-tags">
                  {edu.skills.map((skill, sIdx) => (
                    <span className="edu-skill-pill" key={sIdx}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
