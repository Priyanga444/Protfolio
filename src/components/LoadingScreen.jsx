import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true)
      setTimeout(onComplete, 600)
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`}>
      <div className="loading-logo">P</div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
      <p className="loading-text">Loading Portfolio...</p>
    </div>
  )
}
