import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Menu, X, ArrowRight } from 'lucide-react'
import { LOUNGE_DATA } from '../../data/loungeData'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 ${
        scrolled
          ? 'py-3.5 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#14161D] shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/images/glitch-logo.jpg"
            alt="Glitch Gaming Lounge Logo"
            className="w-9 h-9 rounded-xl object-cover border border-[#232632] group-hover:border-[#2B7FFF]/60 transition-colors"
          />
          <span className="font-serif-title text-2xl sm:text-3xl font-bold text-[#EAEAF0] tracking-tight group-hover:text-[#2B7FFF] transition-colors">
            Glitch
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#A3A6B2]">
          <a href="#bays" className="hover:text-[#EAEAF0] transition-colors">Battle Bays</a>
          <a href="#hardware" className="hover:text-[#EAEAF0] transition-colors">Hardware</a>
          <a href="#venue" className="hover:text-[#EAEAF0] transition-colors">Venue Tour</a>
          <a href="#process" className="hover:text-[#EAEAF0] transition-colors">How It Works</a>
          <a href="#why-glitch" className="hover:text-[#EAEAF0] transition-colors">Why Glitch</a>
          <a href="#faq" className="hover:text-[#EAEAF0] transition-colors">FAQ</a>
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <a
            href={LOUNGE_DATA.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-[#EAEAF0] flex items-center gap-2 hover:text-[#2B7FFF] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#2B7FFF]" />
            <span className="hidden lg:inline">+91 87978 00779</span>
            <span className="lg:hidden">WhatsApp</span>
          </a>
          <a
            href="#booking"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-[#14161D] hover:bg-[#232632] text-[#EAEAF0] border border-[#232632] transition-all flex items-center gap-1.5"
          >
            <span>Book a station</span>
            <ArrowRight className="w-3 h-3 text-[#2B7FFF]" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2.5 rounded-xl bg-[#14161D] text-[#EAEAF0] border border-[#232632] hover:border-[#2B7FFF]/40 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden mt-3"
          >
            <div className="p-5 rounded-2xl bg-[#14161D] border border-[#232632] shadow-2xl space-y-4">
              <div className="flex flex-col space-y-3 text-sm text-[#A3A6B2]">
                <a
                  href="#bays"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#2B7FFF] transition-colors py-1"
                >
                  Battle Bays
                </a>
                <a
                  href="#hardware"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#2B7FFF] transition-colors py-1"
                >
                  Hardware Setup
                </a>
                <a
                  href="#venue"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#2B7FFF] transition-colors py-1"
                >
                  Venue Tour
                </a>
                <a
                  href="#process"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#2B7FFF] transition-colors py-1"
                >
                  How It Works
                </a>
                <a
                  href="#why-glitch"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#2B7FFF] transition-colors py-1"
                >
                  Why Glitch
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#2B7FFF] transition-colors py-1"
                >
                  FAQ
                </a>
              </div>

              <div className="pt-3 border-t border-[#232632] flex flex-col gap-2.5">
                <a
                  href={LOUNGE_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#EAEAF0] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0F1015] border border-[#232632]"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#2B7FFF]" />
                  <span>WhatsApp: +91 87978 00779</span>
                </a>
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold py-3 rounded-xl bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white text-center shadow-lg shadow-[#2B7FFF]/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book a Station</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
