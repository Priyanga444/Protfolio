import { useEffect } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python',      percent: 90 },
      { name: 'JavaScript',  percent: 88 },
      { name: 'HTML & CSS',  percent: 92 },
      { name: 'SQL',         percent: 82 },
    ],
    barClass: '',
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚙️',
    skills: [
      { name: 'React JS',     percent: 88 },
      { name: 'Vite',         percent: 85 },
      { name: 'Node.js',      percent: 80 },
      { name: 'Express.js',   percent: 78 },
    ],
    barClass: 'accent',
  },
  {
    title: 'Data & Analytics',
    icon: '📊',
    skills: [
      { name: 'Data Analysis',     percent: 88 },
      { name: 'Data Visualization',percent: 90 },
      { name: 'Power BI',          percent: 85 },
      { name: 'Pandas & NumPy',    percent: 82 },
    ],
    barClass: 'secondary',
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git',     percent: 88 },
      { name: 'GitHub',  percent: 90 },
      { name: 'VS Code', percent: 95 },
      { name: 'Figma',   percent: 75 },
    ],
    barClass: '',
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>

              <div className="skill-items">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-item-label">
                      <span>{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.percent}%` }}
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
