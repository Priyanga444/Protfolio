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
      repulse: { distance: 70, duration: 0.4 },
      push: { quantity: 2 },
    },
  },
  particles: {
    color: { value: ['#6C63FF', '#8B5CF6', '#0099CC'] },
    links: {
      color: '#8B5CF6',
      distance: 130,
      enable: true,
      opacity: 0.09,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'bounce' },
      random: true,
      speed: 0.45,
      straight: false,
    },
    number: {
      density: { enable: true, area: 1000 },
      value: 50,
    },
    opacity: { value: { min: 0.05, max: 0.22 } },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 2.5 } },
  },
  detectRetina: true,
}

export default function ParticlesBg() {
  const initParticles = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <ParticlesProvider init={initParticles}>
      <Particles id="tsparticles" options={particleOptions} />
    </ParticlesProvider>
  )
}
