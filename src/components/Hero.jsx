import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import WaitlistForm from './WaitlistForm'
import AppStoreButtons from './AppStoreButtons'

const Hero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center pt-10 sm:pt-20 pb-10">
      
      {/* 1. Logo Section (Square Megaphone Placeholder) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        {/* Replace this div with: <img src="/logo.png" className="w-24 h-24 rounded-2xl shadow-xl hover:rotate-6 transition-transform" /> */}
        <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-xl flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform duration-300">
           <Sparkles className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      {/* 2. Main Headline - Centered & High Contrast */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
      >
        <span className="text-slate-900">Be</span>{' '}
        {/* Your Brand Orange #F18E48 */}
        <span className="text-[#F18E48]">Spontaneous.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
      >
        Spark creativity with daily prompts. The whimsical antidote to the algorithm.
      </motion.p>

      {/* 3. Waitlist & Buttons - Centered Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center gap-8 w-full"
      >
        <div className="w-full max-w-md">
            <WaitlistForm />
        </div>
        
        {/* Scaled up buttons for emphasis */}
        <div className="scale-110 sm:scale-125 transform origin-top">
            <AppStoreButtons />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero