import { motion } from 'framer-motion'
import { Star, MapPin, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 bg-[#0B0C10] text-[#EAEAF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div className="text-xs font-bold tracking-widest text-[#2B7FFF] uppercase">
              Sakchi, Jamshedpur • Near Ambagan
            </div>

            <h1 className="font-serif-title text-5xl sm:text-6xl md:text-7xl font-normal leading-[1.0] sm:leading-[0.98] tracking-tight">
              Glitch JSR.<br />
              Done in 4K HDR.<br />
              Built for Squads.
            </h1>

            <p className="text-sm sm:text-base text-[#A3A6B2] max-w-lg leading-relaxed">
              Sakchi’s premier console and sim gaming lounge. High-refresh 55-inch PS5 stations, precision force-feedback steering wheel racing rig, and chilled refreshments served straight to your seat.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#booking"
                className="px-6 py-3.5 rounded-xl bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white font-bold text-xs transition-all shadow-lg shadow-[#2B7FFF]/25 flex items-center gap-2"
              >
                <span>Reserve a Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#venue"
                className="px-6 py-3.5 rounded-xl bg-[#14161D] hover:bg-[#232632] text-[#EAEAF0] border border-[#232632] font-semibold text-xs transition-all"
              >
                <span>Tour Battle Bays</span>
              </a>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs text-[#A3A6B2] border-t border-[#14161D]">
              <a
                href="https://maps.app.goo.gl/4wEsaSLGJcqBTSrh6"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#EAEAF0] transition-colors group"
              >
                <div className="flex text-[#2B7FFF]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#EAEAF0] group-hover:underline">4.9 stars</span>
                <span className="text-[#A3A6B2]">(78 reviews on Google)</span>
              </a>
              <a
                href="https://maps.app.goo.gl/4wEsaSLGJcqBTSrh6"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#EAEAF0] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E94DB8] shrink-0" />
                <span>Sakchi, Jamshedpur • Walk-ins Daily</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl border border-[#232632] overflow-hidden shadow-2xl bg-[#14161D] group aspect-16/10 sm:aspect-16/10">
              <img
                src="/images/hero-lounge.jpg"
                alt="Glitch JSR Gaming Lounge Battle Stations"
                className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-xs text-[#EAEAF0]">
                <div>
                  <div className="font-serif-title text-xl font-normal text-[#EAEAF0]">
                    Live Battle Stations
                  </div>
                  <div className="text-[11px] text-[#A3A6B2]">
                    Three 4K HDR displays • PS5 DualSense • Ambient Neon Lounge
                  </div>
                </div>
                <div className="text-xs font-bold text-[#2B7FFF] shrink-0 bg-[#0B0C10]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#232632]">
                  Ground Floor, Sakchi
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
