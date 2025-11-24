import { motion } from 'framer-motion'

const PhoneMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{ rotateY: 5, rotateX: 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-[280px] h-[560px] mx-auto transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Phone Frame */}
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-gray-800 to-gray-900 p-2 shadow-2xl border-4 border-gray-700">
          {/* Screen */}
          <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-blurple-900 via-blurple-800 to-gray-900 overflow-hidden relative">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-black/20 backdrop-blur-sm flex items-center justify-between px-6 text-white text-xs font-medium z-10">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-white/50 rounded-sm">
                  <div className="w-3/4 h-full bg-white/80 rounded-sm" />
                </div>
                <div className="w-1 h-1 bg-white/80 rounded-full" />
              </div>
            </div>

            {/* App Content Placeholder */}
            <div className="pt-12 h-full flex flex-col items-center justify-center p-8 space-y-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-blurple-500 to-blurple-600 flex items-center justify-center text-4xl font-bold shadow-lg glow"
              >
                S
              </motion.div>
              
              <div className="space-y-3 text-center">
                <div className="h-4 w-32 bg-white/20 rounded-full mx-auto" />
                <div className="h-3 w-24 bg-white/10 rounded-full mx-auto" />
              </div>

              {/* Mockup Content Cards */}
              <div className="space-y-3 w-full">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="h-16 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10"
                  />
                ))}
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-[3rem] bg-blurple-500/20 blur-3xl -z-10 scale-110" />
      </motion.div>
    </motion.div>
  )
}

export default PhoneMockup

