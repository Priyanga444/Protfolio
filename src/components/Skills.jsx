import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python',      percent: 90 },
      { name: 'Java',        percent: 75 },
      { name: 'C',           percent: 70 },
      { name: 'SQL',         percent: 82 },
      { name: 'HTML',        percent: 92 },
      { name: 'CSS',         percent: 88 },
      { name: 'JavaScript',  percent: 85 },
    ],
    barClass: '',
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚙️',
    skills: [
      { name: 'React',    percent: 85 },
      { name: 'FastAPI',  percent: 78 },
      { name: 'Flask',    percent: 80 },
      { name: 'Streamlit',percent: 88 },
    ],
    barClass: 'accent',
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning',        percent: 85 },
      { name: 'Data Analysis',           percent: 88 },
      { name: 'Recommendation Systems',  percent: 80 },
      { name: 'Predictive Models',       percent: 78 },
      { name: 'Data Visualization',      percent: 90 },
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
      { name: 'Figma',   percent: 80 },
    ],
    barClass: '',
  },
]

export default function Skills() {
  const barsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target
            bar.style.width = bar.dataset.width
          }
        })
      },
      { threshold: 0.2 }
    )

    const allBars = document.querySelectorAll('.skill-bar-fill')
    allBars.forEach((bar) => observer.observe(bar))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title reveal">Skills & Expertise</h2>
        <p className="section-subtitle reveal delay-1">Technologies I work with</p>

        <div className="skills-categories">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`skill-category-card reveal delay-${ci + 1}`}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>

              <div className="skill-items">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="skill-item-label">
                      <span>{skill.name}</span>
                      <span className="skill-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className={`skill-bar-fill ${cat.barClass}`}
                        data-width={`${skill.percent}%`}
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
