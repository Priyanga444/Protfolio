import { useEffect, useRef, useState } from 'react'

export default function MouseGlow() {
  const glowRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      if (!glowRef.current) return
      setVisible(true)
      glowRef.current.style.left = e.clientX + 'px'
      glowRef.current.style.top = e.clientY + 'px'
    }
    const handleLeave = () => setVisible(false)
    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="mouse-glow"
      style={{ opacity: visible ? 1 : 0 }}
    />
  )
}
