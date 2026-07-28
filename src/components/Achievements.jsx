import { useEffect, useRef, useState } from 'react'

const counters = [
  { icon: '🚀', end: 3,   suffix: '',  label: 'Projects Completed' },
  { icon: '🛠️', end: 10,  suffix: '+', label: 'Technologies Learned' },
]

const certifications = [
  {
    icon: '🐍',
    title: 'Python with Data Analysis',
    issuer: 'Udemy',
  },
  {
    icon: '📘',
    title: 'Python Programming',
    issuer: 'CSC (Computer Society of India)',
  },
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
          const duration = 1400
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
        <div className="achievements-counters achievements-counters-2col">
          {counters.map((c, i) => (
            <div key={c.label} className={`counter-card reveal delay-${i + 1}`}>
              <span className="counter-icon">{c.icon}</span>
              <AnimatedCounter end={c.end} suffix={c.suffix} />
              <div className="counter-label">{c.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="section-title reveal" style={{ fontSize: '1.8rem', marginBottom: '1rem', marginTop: '1rem' }}>
          Certifications
        </h3>
        <p className="section-subtitle reveal delay-1" style={{ marginBottom: '2rem' }}>
          Credentials &amp; continuous learning
        </p>
        <div className="certs-grid certs-grid-2col achievements-certs">
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
