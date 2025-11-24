import { motion, useMotionValueEvent, useTransform } from 'framer-motion'
import { useState } from 'react'

const LetterReveal = ({ text, scrollProgress, startProgress, endProgress, style, className }) => {
  const [visibleChars, setVisibleChars] = useState(0)

  // Transform scroll progress to letter count
  const letterProgress = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [0, 1]
  )

  // Update visible character count based on scroll progress
  useMotionValueEvent(letterProgress, 'change', (latest) => {
    const totalChars = text.length
    const charsToShow = Math.floor(latest * totalChars)
    setVisibleChars(charsToShow)
  })

  // Split text into characters, preserving spaces
  const characters = text.split('')

  return (
    <motion.span
      style={style}
      className={className}
    >
      {characters.map((char, index) => {
        const isVisible = index < visibleChars
        const isSpace = char === ' '

        return (
          <motion.span
            key={index}
            style={{ display: 'inline-block' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 10
            }}
            transition={{
              duration: 0.15,
              ease: 'easeOut'
            }}
          >
            {isSpace ? '\u00A0' : char}
          </motion.span>
        )
      })}
    </motion.span>
  )
}

export default LetterReveal

