import FlowingMenu from './FlowingMenu'
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaChartBar } from 'react-icons/fa'
import { SiVercel, SiRender } from 'react-icons/si'

const skillMenuCategories = [
  {
    link: '#skills',
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
      { name: 'React JS', icon: <FaReact color="#0284C7" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
      { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> }
    ]
  },
  {
    link: '#skills',
    category: 'Backend Development',
    skills: [
      { name: 'Node JS', icon: <FaNodeJs color="#339933" /> },
      { name: 'Python', icon: <FaPython color="#0284C7" /> },
      { name: 'SQL', icon: <FaDatabase color="#00758F" /> }
    ]
  },
  {
    link: '#skills',
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt color="#F05032" /> },
      { name: 'Vercel', icon: <SiVercel color="#0F172A" /> },
      { name: 'PowerBI', icon: <FaChartBar color="#F2C811" /> },
      { name: 'Render', icon: <SiRender color="#0284C7" /> }
    ]
  }
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title reveal">Skills & Expertise</h2>
        <p className="section-subtitle reveal delay-1">Hover over categories to reveal tech stack</p>

        <div className="reveal delay-2" style={{ height: '420px', position: 'relative', borderRadius: '24px', overflow: 'hidden', margin: '2rem 0', border: '1px solid rgba(186, 230, 253, 0.8)', boxShadow: '0 15px 35px rgba(56, 189, 248, 0.15)' }}>
          <FlowingMenu
            items={skillMenuCategories}
            speed={6}
            textColor="#0F172A"
            bgColor="rgba(240, 249, 255, 0.85)"
            marqueeBgColor="#0284C7"
            marqueeTextColor="#ffffff"
            borderColor="rgba(186, 230, 253, 0.7)"
          />
        </div>
      </div>
    </section>
  )
}
