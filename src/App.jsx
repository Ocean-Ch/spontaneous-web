import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import PhoneMockup from './components/PhoneMockup'
import FeaturesGrid from './components/FeaturesGrid'
import ImageFan from './components/ImageFan'

function App() {
  const containerRef = useRef(null)
  
  // Optional: Subtle background shift from White -> Warm Light Grey
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#fafaf9", "#f5f5f4"] // stone-50 -> stone-100 (Very subtle depth)
  )

  return (
    <motion.div 
      ref={containerRef}
      style={{ backgroundColor }}
      className="min-h-screen overflow-x-hidden" // Prevents horizontal scrollbar issues
    >
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        {/* SECTION 1: Centered Hero + Phone Rising */}
        <section className="min-h-screen flex flex-col pt-10 sm:pt-20 relative">
          <Hero />
          
          {/* Phone sits below text now, centered */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="mt-12 sm:mt-20 flex justify-center perspective-1000 z-20"
          >
             {/* Pass width/height to make it look grand */}
             <div className="scale-100 sm:scale-110">
               <PhoneMockup imageSrc="/iphone_screenshot.png" />
             </div>
          </motion.div>
        </section>

        {/* SECTION 2: Image Fan (High Visual Impact) */}
        <section className="py-20 sm:py-32 flex flex-col items-center relative z-30">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">
              Captured on <span className="text-[#F18E48]">Spontaneous</span>
            </h2>
          </div>
          <ImageFan 
            images={[
              '/sc1.jpg', '/sc6.jpg', '/sc2.jpg', '/sc4.jpg', '/sc5.jpg'
            ]}
          />
        </section>

        {/* SECTION 3: Features */}
        <section className="py-20">
          <FeaturesGrid />
        </section>

      </main>
    </motion.div>
  )
}

export default App