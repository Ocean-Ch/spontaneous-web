import { useState } from 'react'
import { motion } from 'framer-motion'

const ImageFan = ({ images = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  // If no images provided, use placeholders
  const displayImages = images.length > 0 ? images : [
    '/api/placeholder/400/600',
    '/api/placeholder/400/600',
    '/api/placeholder/400/600',
    '/api/placeholder/400/600',
    '/api/placeholder/400/600',
  ]

  const centerIndex = Math.floor(displayImages.length / 2)

  return (
    <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden py-20">
      <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
        {displayImages.map((src, index) => {
          // Calculate distance from center (e.g., -2, -1, 0, 1, 2)
          const offset = index - centerIndex
          const isHovered = hoveredIndex === index
          
          // Fan Calculations
          const rotation = isHovered ? 0 : offset * 8 // Degree of rotation
          const translateX = offset * 70 // Spacing between cards
          const translateY = isHovered ? -20 : Math.abs(offset) * 10 // Arch effect
          const scale = isHovered ? 1.1 : 1 - Math.abs(offset) * 0.05 // Sides are smaller
          const zIndex = isHovered ? 50 : 10 - Math.abs(offset) // Center has higher Z

          return (
            <motion.div
              key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="absolute w-48 sm:w-56 aspect-[3/4] rounded-2xl shadow-2xl border-4 border-white/10 bg-gray-900 cursor-pointer overflow-hidden origin-bottom"
              initial={false} // Prevents animation on mount (starts in position)
              animate={{
                rotate: rotation,
                x: translateX,
                y: translateY,
                scale: scale,
                zIndex: zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 1
              }}
              whileHover={{
                boxShadow: "0 20px 50px rgba(241, 142, 72, 0.3)", // Orange glow on hover
                borderColor: "rgba(255, 255, 255, 0.5)"
              }}
            >
              <img 
                src={src} 
                alt={`Screenshot ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none" 
              />
              
              {/* Optional: Dark overlay that vanishes on hover */}
              <motion.div 
                animate={{ opacity: isHovered ? 0 : 0.3 }}
                className="absolute inset-0 bg-black/40"
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageFan