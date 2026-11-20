import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/apex/Navbar'
import { Hero } from './components/apex/Hero'
import { GtaLaunchSection } from './components/apex/GtaLaunchSection'
import { SystemSection } from './components/apex/SystemSection'
import { ServicesSection } from './components/apex/ServicesSection'
import { RecentWorkSection } from './components/apex/RecentWorkSection'
import { ProcessSection } from './components/apex/ProcessSection'
import { TestimonialSection } from './components/apex/TestimonialSection'
import { WhyApexSection } from './components/apex/WhyApexSection'
import { FaqSection } from './components/apex/FaqSection'
import { BookingSection } from './components/apex/BookingSection'
import { MarqueeRibbon } from './components/apex/MarqueeRibbon'
import { Footer } from './components/apex/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      respectReducedMotion: false,
      autoRaf: true,
    })

    window.__lenis = lenis

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        lenis.scrollTo(target, {
          offset: -80,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#EAEAF0] selection:bg-[#2B7FFF] selection:text-white font-sans relative">
      <Navbar />
      <main>
        <Hero />
        <GtaLaunchSection />
        <SystemSection />
        <ServicesSection />
        <RecentWorkSection />
        <ProcessSection />
        <TestimonialSection />
        <WhyApexSection />
        <FaqSection />
        <BookingSection />
        <MarqueeRibbon />
      </main>
      <Footer />
    </div>
  )
}

export default App
