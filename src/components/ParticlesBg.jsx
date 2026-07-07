import { useCallback } from 'react'
import { Particles, ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const particleOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
      push: { quantity: 2 },
    },
  },
  particles: {
    color: { value: ['#6C63FF', '#00D4FF', '#8B5CF6'] },
    links: {
      color: '#6C63FF',
      distance: 120,
      enable: true,
      opacity: 0.12,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'bounce' },
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: { enable: true, area: 900 },
      value: 55,
    },
    opacity: { value: { min: 0.08, max: 0.35 } },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 2.5 } },
  },
  detectRetina: true,
}

export default function ParticlesBg() {
  // useCallback ensures a stable reference so ParticlesProvider doesn't throw
  const initParticles = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <ParticlesProvider init={initParticles}>
      <Particles id="tsparticles" options={particleOptions} />
    </ParticlesProvider>
  )
}
