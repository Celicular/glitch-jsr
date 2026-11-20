import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { LOUNGE_DATA } from '../../data/loungeData'

const STEPS = [
  {
    num: '01',
    title: 'Walk In or Message Us',
    desc: 'Drop in directly at our Sakchi lounge near Ambagan or message on WhatsApp to reserve your favorite screen.',
    thumb: '/images/ps5-station.jpg',
  },
  {
    num: '02',
    title: 'Choose Bay & Party Size',
    desc: 'Pick between 55" PS5, 43" 1v1 arena, PS4 lounge, or the PC steering-wheel driving simulator.',
    thumb: '/images/sim-rig.jpg',
  },
  {
    num: '03',
    title: 'Grab Cold Drinks',
    desc: 'Chilled energy beverages, cold sodas, and snacks delivered right to your table so you never pause a match.',
    thumb: '/images/neon-gaming-room.jpg',
  },
  {
    num: '04',
    title: 'Game on with DualSense',
    desc: 'Play Tekken 8, FC 25, God of War, or Gran Turismo with genuine wireless controllers and zero input lag.',
    thumb: '/images/friends-gaming.jpg',
  },
  {
    num: '05',
    title: 'Split the Bill Easily',
    desc: 'Enjoy transparent rates that decrease per person as your squad grows, as low as ₹43 to ₹70/hr per player.',
    thumb: '/images/ps5-station.jpg',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 bg-[#0B0C10] border-t border-[#14161D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl bg-[#14161D] text-[#EAEAF0] p-6 sm:p-10 lg:p-14 border border-[#232632] shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.0] text-[#EAEAF0]">
                Five steps.<br />
                Start to finish.
              </h2>
              <p className="text-sm sm:text-base text-[#A3A6B2] leading-relaxed">
                No complicated signups or subscriptions required. Walk in, pick your station, and start playing within minutes.
              </p>
              <a
                href={LOUNGE_DATA.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold px-7 py-3.5 rounded-xl bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white transition-all shadow-lg shadow-[#2B7FFF]/20"
              >
                <span>Book on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {STEPS.map((s, idx) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0F1015] border border-[#232632] flex items-start gap-4 sm:gap-5 hover:border-[#2B7FFF]/60 transition-colors"
                >
                  <img
                    src={s.thumb}
                    alt={s.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 border border-[#232632]"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#2B7FFF]">{s.num}</span>
                      <h3 className="font-serif-title text-lg sm:text-xl font-normal text-[#EAEAF0]">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#A3A6B2] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
