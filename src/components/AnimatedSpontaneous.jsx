import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'

// Helper function to interpolate between hex colors
function interpolateColor(color1, color2, factor) {
  const hex1 = color1.replace('#', '')
  const hex2 = color2.replace('#', '')
  
  const r1 = parseInt(hex1.substring(0, 2), 16)
  const g1 = parseInt(hex1.substring(2, 4), 16)
  const b1 = parseInt(hex1.substring(4, 6), 16)
  
  const r2 = parseInt(hex2.substring(0, 2), 16)
  const g2 = parseInt(hex2.substring(2, 4), 16)
  const b2 = parseInt(hex2.substring(4, 6), 16)
  
  const r = Math.round(r1 + (r2 - r1) * factor)
  const g = Math.round(g1 + (g2 - g1) * factor)
  const b = Math.round(b1 + (b2 - b1) * factor)
  
  return `rgb(${r}, ${g}, ${b})`
}

const AnimatedSpontaneous = () => {
  const text = 'Spontaneous.'
  const letters = text.split('')
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth spring values for mouse tracking
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })
  
  // Dynamic gradient position
  const gradientPosition = useMotionValue(0)
  
  // Wave animation state
  const [waveActive, setWaveActive] = useState(false)

  // Track mouse position for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Normalize to -1 to 1 range
      mouseX.set((e.clientX - centerX) / (rect.width / 2))
      mouseY.set((e.clientY - centerY) / (rect.height / 2))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Animate gradient position
  useEffect(() => {
    const animation = animate(gradientPosition, 100, {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    })
    return () => animation.stop()
  }, [gradientPosition])

  // Trigger wave animation on mount and periodically
  useEffect(() => {
    // Initial wave
    setWaveActive(true)
    setTimeout(() => setWaveActive(false), 2000)
    
    // Periodic waves
    const interval = setInterval(() => {
      setWaveActive(true)
      setTimeout(() => setWaveActive(false), 2000)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Apply 3D transforms to entire word (facing cursor, minimal amounts)
  const rotateX = useTransform(springY, (y) => y * 3) // Positive to face cursor, reduced to 3 degrees
  const rotateY = useTransform(springX, (x) => x * 3) // Positive to face cursor, reduced to 3 degrees
  const translateZ = useTransform(
    [springX, springY],
    ([x, y]) => {
      const distance = Math.sqrt(x * x + y * y)
      return distance * 8 // Further reduced from 20 to 8
    }
  )

  // Single gradient for entire word
  const wordGradient = useTransform(gradientPosition, (pos) => {
    const offset = pos % 100
    
    if (offset < 33) {
      const t = offset / 33
      return `linear-gradient(90deg, 
        ${interpolateColor('#F18E48', '#ff4d4d', t)} 0%,
        ${interpolateColor('#ff4d4d', '#c026d3', t)} 50%,
        ${interpolateColor('#c026d3', '#F18E48', t)} 100%)`
    } else if (offset < 66) {
      const t = (offset - 33) / 33
      return `linear-gradient(90deg, 
        ${interpolateColor('#ff4d4d', '#c026d3', t)} 0%,
        ${interpolateColor('#c026d3', '#F18E48', t)} 50%,
        ${interpolateColor('#F18E48', '#ff4d4d', t)} 100%)`
    } else {
      const t = (offset - 66) / 34
      return `linear-gradient(90deg, 
        ${interpolateColor('#c026d3', '#F18E48', t)} 0%,
        ${interpolateColor('#F18E48', '#ff4d4d', t)} 50%,
        ${interpolateColor('#ff4d4d', '#c026d3', t)} 100%)`
    }
  })

  return (
    <motion.span
      ref={containerRef}
      className="inline-block relative"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        z: translateZ,
      }}
    >
      {letters.map((letter, index) => {
        const isSpace = letter === ' '
        // Apply gradient to each letter with offset to maintain continuity
        const letterGradient = useTransform(gradientPosition, (pos) => {
          const letterPos = (index / letters.length) * 100
          const offset = (pos + letterPos) % 100
          
          if (offset < 33) {
            const t = offset / 33
            return `linear-gradient(90deg, 
              ${interpolateColor('#F18E48', '#ff4d4d', t)} 0%,
              ${interpolateColor('#ff4d4d', '#c026d3', t)} 50%,
              ${interpolateColor('#c026d3', '#F18E48', t)} 100%)`
          } else if (offset < 66) {
            const t = (offset - 33) / 33
            return `linear-gradient(90deg, 
              ${interpolateColor('#ff4d4d', '#c026d3', t)} 0%,
              ${interpolateColor('#c026d3', '#F18E48', t)} 50%,
              ${interpolateColor('#F18E48', '#ff4d4d', t)} 100%)`
          } else {
            const t = (offset - 66) / 34
            return `linear-gradient(90deg, 
              ${interpolateColor('#c026d3', '#F18E48', t)} 0%,
              ${interpolateColor('#F18E48', '#ff4d4d', t)} 50%,
              ${interpolateColor('#ff4d4d', '#c026d3', t)} 100%)`
          }
        })

        return (
          <motion.span
            key={`${letter}-${index}`}
            className="inline-block"
            style={{
              backgroundImage: letterGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={waveActive ? {
              y: [0, -10, 0],
            } : {}}
            transition={{
              y: {
                delay: index * 0.05,
                duration: 0.5,
                ease: 'easeOut',
              },
            }}
          >
            {isSpace ? '\u00A0' : letter}
          </motion.span>
        )
      })}
    </motion.span>
  )
}

export default AnimatedSpontaneous

