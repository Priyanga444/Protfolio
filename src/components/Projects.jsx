import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'AI-Based Career Path Recommender System',
    description:
      'Developed an intelligent AI system that recommends suitable career paths based on students\' academic performance, interests, and personal profiles using advanced Machine Learning algorithms and collaborative filtering.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=300&fit=crop&q=80',
    badge: 'AI / ML',
    techs: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn', 'Pandas', 'NLP'],
    demo: '#',
    github: '#',
  },
 
  {
    title: 'Admin Analytics Dashboard',
    description:
      'Created a responsive, data-rich analytics dashboard with interactive charts, real-time statistics cards, user management, and modern glassmorphism UI components for enterprise use.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&q=80',
    badge: 'Dashboard',
    techs: ['React', 'FastAPI', 'Chart.js', 'Python', 'SQL', 'CSS3'],
    demo: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title reveal">Featured Projects</h2>
        <p className="section-subtitle reveal delay-1">Things I've built with passion</p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`project-card reveal delay-${i + 1}`}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-image-overlay" />
                <span className="project-badge">{project.badge}</span>
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
