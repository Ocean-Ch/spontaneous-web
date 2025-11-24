import { motion } from 'framer-motion'

const BubbleReveal = ({ children, delay = 0, className = '', style, isActive = false }) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ scale: 0 }}
      animate={{ scale: isActive ? 1 : 0 }}
      transition={{
        type: isActive ? 'spring' : 'tween',
        bounce: isActive ? 0.5 : 0,
        ease: isActive ? undefined : 'easeInOut',
        duration: isActive ? 0.8 : 0.3,
        delay: isActive ? delay : 0,
      }}
    >
      {children}
    </motion.div>
  )
}

export default BubbleReveal

