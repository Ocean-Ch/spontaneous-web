import { motion } from 'framer-motion'
import { Zap, Clock, Heart } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'No Filters',
    description: 'Share authentic moments exactly as they happen. No editing, no perfection—just real life.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Clock,
    title: 'Real Time',
    description: 'Posts disappear after 24 hours. Live in the moment, not in the past.',
    color: 'from-blurple-500 to-purple-500',
  },
  {
    icon: Heart,
    title: 'Memories',
    description: 'Save your favorite moments privately. Some things are just for you.',
    color: 'from-pink-500 to-rose-500',
  },
]

const FeaturesGrid = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Why <span className="bg-gradient-to-r from-blurple-400 to-purple-400 bg-clip-text text-transparent">Spontaneous</span>?
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A new way to connect through unfiltered, real-time moments
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl glass border border-white/10 hover:border-white/20 transition-all backdrop-blur-xl">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-xl -z-10 transition-opacity`} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturesGrid

