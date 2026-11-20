import { motion } from 'framer-motion'
import { Tv, Compass, Wifi } from 'lucide-react'

const SYSTEM_CARDS = [
  {
    step: '01',
    title: 'Sony 55" & 43" 4K Displays',
    desc: 'Calibrated game mode with 120Hz refresh rate, HDR color depth, and ultra-low input lag for instant twitch reactions in fighting and sports titles.',
    icon: Tv,
  },
  {
    step: '02',
    title: 'Force-Feedback Sim Racing Rig',
    desc: 'Precision steering wheel with realistic road and curb feedback, responsive pedals, and high-refresh display for competitive hot-laps in F1 24 and Assetto Corsa.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'DualSense Pads & Chilled Drinks',
    desc: 'Sanitized wireless haptic controllers for every player, plus cold Monster Energy, Red Bull, iced beverages, and snacks brought to your station.',
    icon: Wifi,
  },
]

export function SystemSection() {
  return (
    <section id="hardware" className="py-20 sm:py-24 md:py-32 bg-[#0B0C10] text-[#EAEAF0] border-t border-[#14161D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl space-y-4"
        >
          <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.0] text-[#EAEAF0]">
            More than consoles.<br />
            A complete battle setup.
          </h2>
          <p className="text-sm sm:text-base text-[#A3A6B2] leading-relaxed">
            Every station at Glitch JSR is calibrated from screen to seating so you and your friends experience smooth 120Hz gameplay without lag, screen tearing, or compromises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#232632] bg-[#14161D] shadow-2xl p-4 sm:p-8">
              <img
                src="/images/sim-rig.jpg"
                alt="Glitch JSR Precision Sim Racing Rig"
                className="w-full aspect-16/10 object-cover rounded-2xl"
              />
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-sm text-[#EAEAF0]">Precision Force-Feedback Racing Rig</div>
                  <div className="text-[#A3A6B2]">Force Feedback Wheel • Floor Pedals • 120Hz Low Latency • F1 & GT Racing</div>
                </div>
                <div className="text-xs font-bold text-[#2B7FFF] self-start sm:self-auto">
                  120 FPS High Refresh
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-4">
            {SYSTEM_CARDS.map((card, idx) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#14161D] text-[#EAEAF0] shadow-xl space-y-3 border border-[#232632] hover:border-[#2B7FFF]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#2B7FFF]">{card.step}</span>
                    <Icon className="w-4 h-4 text-[#2B7FFF]" />
                  </div>
                  <h3 className="font-serif-title text-xl font-normal text-[#EAEAF0]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#A3A6B2] leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
