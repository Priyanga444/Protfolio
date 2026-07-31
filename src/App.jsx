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

import Ferrofluid from './components/Ferrofluid'

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

      {/* Global Home Background across all pages/sections */}
      <MouseGlow />
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
          <Ferrofluid
            colors={['#2563EB', '#38BDF8', '#6366F1']}
            speed={0.5}
            scale={1.6}
            turbulence={1}
            fluidity={0.1}
            rimWidth={0.2}
            sharpness={2.5}
            shimmer={1.5}
            glow={2}
            flowDirection="down"
            opacity={1}
            mouseInteraction
            mouseStrength={1}
            mouseRadius={0.35}
          />
        </div>
        <ParticlesBg />
      </div>

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
      </div>
    </>
  )
}
