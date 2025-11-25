import { useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import PhoneScrollytelling from './components/PhoneScrollytelling'
import ImageFan from './components/ImageFan'
import ScrollIndicator from './components/ScrollIndicator'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import Footer from './components/Footer'
import { useMobile } from './hooks/useMobile'

function App() {
  const { containerRef, backgroundColor, textColor } = useScrollAnimations()
  const phoneSectionRef = useRef(null)
  const isMobile = useMobile()

  const handleScrollToPhone = () => {
    if (!phoneSectionRef.current) return

    const heroHeight = window.innerHeight * 0.8
    const phoneSection = phoneSectionRef.current
    
    if (isMobile) {
      const rect = phoneSection.getBoundingClientRect()
      const scrollY = window.scrollY + rect.top - 50
      window.scrollTo({
        top: scrollY,
        behavior: 'smooth'
      })
    } else {
      const phoneFadeInPosition = heroHeight + (window.innerHeight * 0.4)
      window.scrollTo({
        top: phoneFadeInPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor }}
      className="min-h-screen"
    >
      <main className="pb-32">

        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden py-20">
          <Hero />
          
          {/* SCROLL INDICATOR */}
          <ScrollIndicator
            className="cursor-pointer mt-[-20px] sm:mt-0"
            color={textColor}
            onClick={handleScrollToPhone}
          />
        </section>

        {/* PHONE SCROLLYTELLING */}
        <PhoneScrollytelling ref={phoneSectionRef} textColor={textColor} />

        {/* IMAGE FAN */}
        <div className="relative z-30 -mt-[20vh]">
          <ImageFan
            images={['/sc1.jpg', '/sc6.jpg', '/sc2.jpg', '/sc4.jpg', '/sc5.jpg']}
            title="Captured on Spontaneous"
          />
        </div>

        <Footer />
      </main>
    </motion.div>
  )
}

export default App