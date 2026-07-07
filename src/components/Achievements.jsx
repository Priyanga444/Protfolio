import { useEffect, useRef, useState } from 'react'

const counters = [
  { icon: '🚀', end: 15, suffix: '+', label: 'Projects Completed' },
  { icon: '🛠️', end: 20, suffix: '+', label: 'Technologies Learned' },
  { icon: '🏆', end: 5,  suffix: '+', label: 'Certifications' },
  { icon: '⏱️', end: 500,suffix: '+', label: 'Coding Hours' },
]

const certifications = [
  { icon: '📊', title: 'Machine Learning Specialization', issuer: 'Coursera · Stanford' },
  { icon: '🐍', title: 'Python for Data Science',        issuer: 'IBM · Coursera' },
  { icon: '⚛️', title: 'React – The Complete Guide',    issuer: 'Udemy' },
  { icon: '🤖', title: 'Deep Learning Fundamentals',    issuer: 'NPTEL · IIT' },
  { icon: '☁️', title: 'Cloud Computing Basics',        issuer: 'Google Cloud' },
  { icon: '🎨', title: 'UI/UX Design Essentials',       issuer: 'Google UX Design' },
]

function AnimatedCounter({ end, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1500
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <span ref={ref} className="counter-number">
      {count}{suffix}
    </span>
  )
}

export default function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <h2 className="section-title reveal">Achievements</h2>
        <p className="section-subtitle reveal delay-1">Milestones that define my journey</p>

        {/* Animated Counters */}
        <div className="achievements-counters">
          {counters.map((c, i) => (
            <div key={c.label} className={`counter-card reveal delay-${i + 1}`}>
              <span className="counter-icon">{c.icon}</span>
              <AnimatedCounter end={c.end} suffix={c.suffix} />
              <div className="counter-label">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="section-title reveal" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          Certifications
        </h3>
        <p className="section-subtitle reveal delay-1" style={{ marginBottom: '2rem' }}>
          Credentials & continuous learning
        </p>
        <div className="certs-grid achievements-certs">
          {certifications.map((cert, i) => (
            <div key={cert.title} className={`cert-card reveal delay-${i + 1}`}>
              <div className="cert-icon-wrapper">{cert.icon}</div>
              <div>
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
