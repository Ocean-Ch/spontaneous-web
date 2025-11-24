import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import WaitlistForm from './WaitlistForm'

const Hero = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-blurple-300 text-sm font-medium"
      >
        <Sparkles className="w-4 h-4" />
        <span>Coming Soon</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
      >
        <span className="bg-gradient-to-r from-white via-blurple-200 to-blurple-400 bg-clip-text text-transparent">
          Spontaneous
        </span>
        <br />
        <span className="text-white">Live in the Moment</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl"
      >
        Capture life as it happens. No filters. No edits. Just pure, unfiltered moments shared in real-time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <WaitlistForm />
      </motion.div>
    </div>
  )
}

export default Hero

