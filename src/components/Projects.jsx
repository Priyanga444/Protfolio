import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'AI Career Recommender Website',
    description:
      'A smart AI-powered web application that recommends the most suitable career paths based on students\' academic performance, skills, interests, and personal profiles. Built with Python and Machine Learning algorithms to deliver personalised, data-driven career guidance.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=300&fit=crop&q=80',
    badge: '⭐ Main Project',
    badgeClass: 'badge-main',
    techs: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn', 'Pandas', 'NLP', 'Flask'],
    demo: '#',
    github: '#',
    highlight: true,
  },
  {
    title: 'Expenses Dashboard',
    description:
      'An interactive data analysis and visualisation dashboard for tracking and analysing personal and business expenses. Built using Power BI with rich charts, KPI cards, trend analysis, and category-wise breakdowns for actionable financial insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&q=80',
    badge: 'Mini Project',
    badgeClass: '',
    techs: ['Power BI', 'Data Analysis', 'Data Visualization', 'DAX', 'Excel', 'SQL'],
    demo: '#',
    github: '#',
    highlight: false,
  },
  {
    title: 'Workspace — To-Do List App',
    description:
      'A clean and modern productivity application built with React JS for managing daily tasks and workspaces. Features include task creation, priority tagging, completion tracking, and a responsive UI designed for a smooth user experience.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=300&fit=crop&q=80',
    badge: 'Project',
    badgeClass: '',
    techs: ['React JS', 'JavaScript', 'HTML', 'CSS', 'LocalStorage', 'React Hooks'],
    demo: '#',
    github: '#',
    highlight: false,
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title reveal">My Projects</h2>
        <p className="section-subtitle reveal delay-1">Real-world solutions I've built with passion</p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`project-card reveal delay-${i + 1}${project.highlight ? ' project-card-highlight' : ''}`}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-image-overlay" />
                <span className={`project-badge${project.highlight ? ' project-badge-star' : ''}`}>
                  {project.badge}
                </span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.techs.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
