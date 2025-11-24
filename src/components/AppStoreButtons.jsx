import { motion } from 'framer-motion'
import { Apple, Smartphone } from 'lucide-react'

const AppStoreButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-wrap justify-center gap-6"
    >
      {/* Apple App Store */}
      <motion.button
        // 1. Tighter Scale: 1.05 is standard for UI buttons
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        // 2. Snappy Physics: High stiffness = fast start. Higher damping = no wobble.
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        // 3. Removed 'transition-all': This is crucial to fix the "gluey" feel
        className="relative group flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-xl hover:shadow-2xl"
      >
        <Apple className="w-8 h-8 fill-current" />
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-wider opacity-70">Download on the</div>
          <div className="text-lg font-bold leading-none">App Store</div>
        </div>
        
        <div className="absolute -top-3 -right-3 px-2 py-1 bg-orange-500 rounded-full text-[10px] font-bold text-white shadow-sm border-2 border-[#FFFBF7]">
          SOON
        </div>
      </motion.button>

      {/* Google Play */}
      <motion.button
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        // Removed 'transition-all' here too
        className="relative group flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-xl hover:shadow-2xl"
      >
        <Smartphone className="w-8 h-8 fill-current" />
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
          <div className="text-lg font-bold leading-none">Google Play</div>
        </div>
        
        <div className="absolute -top-3 -right-3 px-2 py-1 bg-orange-500 rounded-full text-[10px] font-bold text-white shadow-sm border-2 border-[#FFFBF7]">
          SOON
        </div>
      </motion.button>
    </motion.div>
  )
}

export default AppStoreButtons