import { useEffect } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python',      percent: 90, icon: '🐍' },
      { name: 'JavaScript',  percent: 88, icon: '⚡' },
      { name: 'HTML & CSS',  percent: 92, icon: '🎨' },
      { name: 'SQL',         percent: 82, icon: '🗄️' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚙️',
    skills: [
      { name: 'React JS',     percent: 88, icon: '⚛️' },
      { name: 'Vite',         percent: 85, icon: '⚡' },
      { name: 'Node.js',      percent: 80, icon: '🟩' },
      { name: 'Express.js',   percent: 78, icon: '🚀' },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: '📊',
    skills: [
      { name: 'Data Analysis',     percent: 88, icon: '🔬' },
      { name: 'Data Visualization',percent: 90, icon: '📈' },
      { name: 'Power BI',          percent: 85, icon: '📊' },
      { name: 'Pandas & NumPy',    percent: 82, icon: '🐼' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git',     percent: 88, icon: '🌿' },
      { name: 'GitHub',  percent: 90, icon: '🐙' },
      { name: 'VS Code', percent: 95, icon: '💻' },
      { name: 'Figma',   percent: 75, icon: '🎨' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies & tools I work with</p>

        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>

              <div className="skills-tile-grid">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-tile">
                    <div className="skill-tile-top">
                      <div className="skill-tile-info">
                        <span className="skill-tile-icon">{skill.icon}</span>
                        <span className="skill-tile-name">{skill.name}</span>
                      </div>
                      <span className="skill-tile-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-tile-track">
                      <div
                        className="skill-tile-fill"
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
