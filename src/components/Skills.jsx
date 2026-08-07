import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaPython, 
  FaHtml5, 
  FaJs, 
  FaGitAlt, 
  FaChartBar,
  FaCode,
  FaServer,
  FaTools,
  FaChartPie
} from 'react-icons/fa'
import { 
  SiVercel, 
  SiRender, 
  SiTailwindcss, 
  SiPostgresql 
} from 'react-icons/si'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Engineering',
    badge: 'UI & Web Apps',
    icon: <FaCode style={{ color: '#0B192C' }} />,
    skills: [
      { name: 'React.js', percent: '92%', icon: <FaReact color="#0B192C" /> },
      { name: 'JavaScript (ES6+)', percent: '90%', icon: <FaJs color="#F7DF1E" /> },
      { name: 'Tailwind & Modern CSS', percent: '90%', icon: <SiTailwindcss color="#0B192C" /> },
      { name: 'HTML5 / CSS3', percent: '95%', icon: <FaHtml5 color="#E34F26" /> }
    ]
  },
  {
    title: 'Backend & Databases',
    badge: 'API & Server Architecture',
    icon: <FaServer style={{ color: '#0B192C' }} />,
    skills: [
      { name: 'Python', percent: '88%', icon: <FaPython color="#3776AB" /> },
      { name: 'Node.js & Express', percent: '85%', icon: <FaNodeJs color="#339933" /> },
      { name: 'PostgreSQL & SQL', percent: '85%', icon: <SiPostgresql color="#4169E1" /> },
      { name: 'RESTful APIs', percent: '90%', icon: <FaDatabase color="#0B192C" /> }
    ]
  },
  {
    title: 'Analytics & Visualization',
    badge: 'Business Intelligence',
    icon: <FaChartPie style={{ color: '#0B192C' }} />,
    skills: [
      { name: 'Power BI', percent: '88%', icon: <FaChartBar color="#F2C811" /> },
      { name: 'Data Visualization', percent: '90%', icon: <FaChartBar color="#0B192C" /> },
      { name: 'Data Modeling', percent: '82%', icon: <FaDatabase color="#0B192C" /> },
      { name: 'Dashboard Design', percent: '88%', icon: <FaCode color="#0B192C" /> }
    ]
  },
  {
    title: 'Tools & DevOps',
    badge: 'Deployment & Workflow',
    icon: <FaTools style={{ color: '#0B192C' }} />,
    skills: [
      { name: 'Git & GitHub', percent: '92%', icon: <FaGitAlt color="#F05032" /> },
      { name: 'Vercel', percent: '90%', icon: <SiVercel color="#0B192C" /> },
      { name: 'Render', percent: '85%', icon: <SiRender color="#0B192C" /> },
      { name: 'VS Code & CLI', percent: '95%', icon: <FaTools color="#64748B" /> }
    ]
  }
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title reveal">Skills & Technical Expertise</h2>
        <p className="section-subtitle reveal delay-1">
          A comprehensive overview of my technical stack, tools & core competencies
        </p>

        {/* Categorized Bento Grid */}
        <div className="skills-categories reveal delay-2">
          {SKILL_CATEGORIES.map((cat, cIdx) => (
            <div className="skill-category-card" key={cIdx}>
              <div className="skill-category-header">
                <div className="skill-category-icon-wrapper">
                  <div className="skill-category-icon">{cat.icon}</div>
                </div>
                <div className="skill-category-info">
                  <h3 className="skill-category-title">{cat.title}</h3>
                  <span className="skill-category-badge">{cat.badge}</span>
                </div>
              </div>

              <div className="skills-tile-grid">
                {cat.skills.map((skill, sIdx) => (
                  <div className="skill-tile" key={sIdx}>
                    <div className="skill-tile-top">
                      <div className="skill-tile-info">
                        <span className="skill-tile-icon">{skill.icon}</span>
                        <span className="skill-tile-name">{skill.name}</span>
                      </div>
                      <span className="skill-tile-percent">{skill.percent}</span>
                    </div>
                    <div className="skill-tile-track">
                      <div
                        className="skill-tile-fill"
                        style={{ width: skill.percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
