import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import { LOUNGE_DATA } from '../../data/loungeData'

const COMPARISON_ROWS = [
  {
    feature: 'Screen & Display',
    glitch: '55" & 43" 4K 120Hz OLED Displays',
    home: 'Small 24" desk monitor',
    cafe: 'Basic 22" 60Hz screens',
  },
  {
    feature: 'Sim Racing Rig',
    glitch: 'Force-Feedback Wheel & Floor Pedals',
    home: 'Keyboard or thumbstick',
    cafe: 'Not available',
  },
  {
    feature: 'Squad Couch Seating',
    glitch: 'Plush 4-Player Lounge Sofas',
    home: 'Floor, bed, or desk chair',
    cafe: 'Plastic office stools',
  },
  {
    feature: 'Game Library',
    glitch: '50+ Pre-Installed Next-Gen Hits',
    home: 'Costly purchases & downloads',
    cafe: 'Limited pirated copies',
  },
  {
    feature: 'Tournaments & Prizes',
    glitch: 'Weekly Tekken 8 Cash Brackets',
    home: 'Solo online ranked grind',
    cafe: 'None',
  },
  {
    feature: 'Hourly Split Cost',
    glitch: 'From ₹43 – ₹70 / person in groups',
    home: 'Requires ₹55,000+ hardware',
    cafe: 'Hidden add-on fees',
  },
]

export function WhyApexSection() {
  return (
    <section id="why-glitch" className="py-16 sm:py-20 md:py-28 bg-[#0B0C10] border-t border-[#14161D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl bg-[#14161D] text-[#EAEAF0] p-5 sm:p-10 lg:p-14 border border-[#232632] shadow-2xl space-y-8 sm:space-y-12"
        >
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal text-[#EAEAF0]">
              Why Glitch?
            </h2>
            <p className="text-sm sm:text-base text-[#A3A6B2]">
              See how our dedicated Sakchi lounge compares to playing alone at home or traditional cyber cafes.
            </p>
          </div>

          <div className="block md:hidden space-y-3">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0F1015] border border-[#232632] space-y-3"
              >
                <div className="text-xs font-bold text-[#A3A6B2] uppercase tracking-wider">
                  {row.feature}
                </div>

                <div className="p-3 rounded-xl bg-[#2B7FFF]/10 border border-[#2B7FFF]/30 space-y-1">
                  <div className="text-[10px] uppercase font-bold text-[#2B7FFF]">
                    Glitch Gaming Lounge
                  </div>
                  <div className="flex items-start gap-2 text-sm font-bold text-[#EAEAF0]">
                    <Check className="w-4 h-4 text-[#2B7FFF] shrink-0 mt-0.5" />
                    <span>{row.glitch}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#A3A6B2]">
                  <div className="p-2.5 rounded-xl bg-[#14161D]/60 border border-[#232632]/60 space-y-1">
                    <div className="text-[10px] uppercase font-medium text-[#A3A6B2]/70 flex items-center gap-1">
                      <X className="w-3 h-3 text-[#A3A6B2]/50" />
                      <span>At Home</span>
                    </div>
                    <div className="text-[#EAEAF0]/80 text-[11px] leading-tight">
                      {row.home}
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#14161D]/60 border border-[#232632]/60 space-y-1">
                    <div className="text-[10px] uppercase font-medium text-[#A3A6B2]/70 flex items-center gap-1">
                      <X className="w-3 h-3 text-[#A3A6B2]/50" />
                      <span>Cyber Cafe</span>
                    </div>
                    <div className="text-[#EAEAF0]/80 text-[11px] leading-tight">
                      {row.cafe}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block rounded-2xl border border-[#232632] bg-[#0F1015] overflow-hidden shadow-inner">
            <div className="grid grid-cols-12 p-4 sm:p-5 border-b border-[#232632] text-xs font-bold text-[#A3A6B2] items-center">
              <div className="col-span-4">Experience Feature</div>
              <div className="col-span-4 bg-[#2B7FFF] text-white p-2.5 rounded-xl font-extrabold text-sm text-center shadow-md">
                Glitch Gaming Lounge
              </div>
              <div className="col-span-2 text-center pt-2">Playing at Home</div>
              <div className="col-span-2 text-center pt-2">Typical Cyber Cafes</div>
            </div>

            <div className="divide-y divide-[#232632] text-xs">
              {COMPARISON_ROWS.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 sm:p-4.5 items-center hover:bg-white/[0.02] transition-colors">
                  <div className="col-span-4 font-semibold text-[#EAEAF0]">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-center font-bold text-[#2B7FFF] flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-[#2B7FFF] shrink-0" />
                    <span>{row.glitch}</span>
                  </div>
                  <div className="col-span-2 text-center text-[#A3A6B2] flex items-center justify-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-[#A3A6B2]/50 shrink-0" />
                    <span>{row.home}</span>
                  </div>
                  <div className="col-span-2 text-center text-[#A3A6B2] flex items-center justify-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-[#A3A6B2]/50 shrink-0" />
                    <span>{row.cafe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#0F1015] border border-[#232632] text-[#EAEAF0] p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif-title text-xl sm:text-2xl font-normal text-[#EAEAF0]">
                Ready to reserve a station for your squad?
              </h3>
              <p className="text-xs text-[#A3A6B2]">
                Message us on WhatsApp to hold your screen or ask about weekend Tekken brackets.
              </p>
            </div>
            <a
              href={LOUNGE_DATA.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2B7FFF]/20 shrink-0"
            >
              <span>Book Session on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
