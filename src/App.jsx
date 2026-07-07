import { useEffect, useState } from 'react'
import './index.css'
import LoadingScreen from './components/LoadingScreen'
import MouseGlow    from './components/MouseGlow'
import ParticlesBg  from './components/ParticlesBg'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Skills       from './components/Skills'
import Projects     from './components/Projects'
import Experience   from './components/Experience'
import Education    from './components/Education'
import Achievements from './components/Achievements'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const classes = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale']
    const allEls = document.querySelectorAll(classes.join(','))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    allEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useScrollReveal()

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Particles */}
      <ParticlesBg />

      {/* Mouse glow */}
      <MouseGlow />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
