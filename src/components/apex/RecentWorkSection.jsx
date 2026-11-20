import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { LOUNGE_DATA } from '../../data/loungeData'

const TILES = [
  {
    title: 'PS5 55" OLED Battle Bay',
    loc: 'Station 01 Live',
    img: '/images/ps5-station.jpg',
  },
  {
    title: 'PC Steering-Wheel Rig',
    loc: 'Station 02 • Hot-Lap Rig',
    img: '/images/sim-rig.jpg',
  },
  {
    title: 'Squad Couch Multiplayer',
    loc: 'FC 25 & Tekken Brackets',
    img: '/images/friends-gaming.jpg',
  },
]

export function RecentWorkSection() {
  return (
    <section id="venue" className="py-20 sm:py-24 md:py-32 bg-[#0B0C10] text-[#EAEAF0] border-t border-[#14161D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal text-[#EAEAF0] leading-[1.0]">
              Recent sessions.<br />
              Across Sakchi<br />
              Jamshedpur.
            </h2>
            <p className="text-sm sm:text-base text-[#A3A6B2] leading-relaxed">
              Raw, authentic view inside our gaming lounge near Ambagan. Three dedicated battle stations side-by-side with genuine DualSense controllers, custom neon ambient lighting, and group coffee tables.
            </p>
            <a
              href={LOUNGE_DATA.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold px-6 py-3.5 rounded-xl bg-[#14161D] hover:bg-[#232632] text-[#EAEAF0] border border-[#232632] transition-all shadow-md"
            >
              <span>Explore All Stations</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#2B7FFF]" />
            </a>
          </motion.div>

          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="relative rounded-2xl overflow-hidden group shadow-lg bg-[#14161D] border border-[#232632] aspect-16/10"
            >
              <img
                src="/images/neon-gaming-room.jpg"
                alt="Neon Gaming Room Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="font-serif-title text-xl sm:text-2xl font-normal leading-tight text-[#EAEAF0]">
                  Neon Gaming Room Showcase
                </div>
                <div className="text-xs text-[#A3A6B2] mt-0.5">Ground Floor, B-1, near Ambagan, Sakchi</div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {TILES.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  className="relative rounded-2xl overflow-hidden group shadow-md bg-[#14161D] border border-[#232632] aspect-4/3"
                >
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="font-serif-title text-base font-normal leading-tight text-[#EAEAF0]">
                      {t.title}
                    </div>
                    <div className="text-[11px] text-[#A3A6B2]">{t.loc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
