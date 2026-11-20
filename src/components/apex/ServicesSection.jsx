import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { LOUNGE_DATA } from '../../data/loungeData'

const BAYS = [
  {
    id: 'bay-01',
    title: 'PlayStation 5 · 55" OLED',
    desc: 'Sony 4K HDR 120Hz display, 4 DualSense controllers, couch seating. FC 25 & Mortal Kombat 1. From ₹160/hr.',
    image: '/images/ps5-station.jpg',
  },
  {
    id: 'bay-02',
    title: 'PC Steering-Wheel Rig',
    desc: 'Force-feedback steering wheel and precision floor pedal setup for hot-laps in F1 24 and Forza. From ₹100 / 30m.',
    image: '/images/sim-rig.jpg',
  },
  {
    id: 'bay-03',
    title: 'PlayStation 5 · 43" Arena',
    desc: 'Fast IPS 120Hz display tailored for 1v1 Tekken 8, Mortal Kombat 1, and fighting titles. From ₹120/hr.',
    image: '/images/friends-gaming.jpg',
  },
  {
    id: 'bay-04',
    title: 'PlayStation 4 Casual Bay',
    desc: 'Classic PlayStation library, DualShock 4 controllers, group couch multiplayer. From ₹80/hr.',
    image: '/images/neon-gaming-room.jpg',
  },
]

export function ServicesSection() {
  return (
    <section id="bays" className="py-20 sm:py-24 md:py-32 bg-[#0B0C10] text-[#EAEAF0] border-t border-[#14161D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal text-[#EAEAF0] leading-[1.0]">
              One local lounge.<br />
              <span className="text-[#2B7FFF] italic">The whole squad.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A3A6B2] max-w-xl leading-relaxed">
              Four dedicated gaming setups designed for solo speedruns, racing hot-laps, or 4-player split-screen couch battles in Sakchi.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#booking"
              className="px-4 py-2 rounded-full border border-[#232632] bg-[#14161D] text-xs font-semibold text-[#EAEAF0] hover:text-[#2B7FFF] hover:border-[#2B7FFF]/50 transition-colors flex items-center gap-1.5"
            >
              <span>Reserve a Station</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2B7FFF]" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BAYS.map((bay, idx) => (
            <motion.div
              key={bay.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-3xl border border-[#232632] bg-[#14161D] overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#2B7FFF]/60 transition-colors"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-[#0F1015]">
                <img
                  src={bay.image}
                  alt={bay.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-serif-title text-2xl font-normal leading-tight text-[#EAEAF0]">
                    {bay.title}
                  </div>
                  <div className="text-xs text-[#A3A6B2] mt-1.5 line-clamp-2">
                    {bay.desc}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#14161D] flex items-center justify-between text-xs font-semibold text-[#EAEAF0]">
                <span>Reserve Bay</span>
                <a
                  href={LOUNGE_DATA.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0F1015] text-[#2B7FFF] flex items-center justify-center group-hover:bg-[#2B7FFF] group-hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
