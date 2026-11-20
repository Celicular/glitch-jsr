import { motion } from 'framer-motion'
import { LOUNGE_DATA } from '../../data/loungeData'

export function Footer() {
  return (
    <footer className="bg-[#0B0C10] text-[#A3A6B2] overflow-hidden pt-16 pb-12 border-t border-[#14161D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="sm:col-span-2 md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/glitch-logo.jpg"
                alt="Glitch JSR Logo"
                className="w-10 h-10 rounded-xl object-cover border border-[#232632]"
              />
              <h3 className="font-serif-title text-3xl font-bold text-[#EAEAF0] tracking-tight">
                Glitch JSR
              </h3>
            </div>
            <p className="font-serif-title text-xl text-[#EAEAF0]">
              Play • Relax • Repeat
            </p>
            <p className="text-xs text-[#A3A6B2] max-w-sm leading-relaxed">
              {LOUNGE_DATA.address}
            </p>
            <div className="text-xs text-[#2B7FFF] font-semibold">
              Landmark: Near Ambagan, SNP Area, Sakchi, Jamshedpur 831001
            </div>
          </div>

          <div className="md:col-span-2 space-y-2 text-xs">
            <div className="font-bold text-[#EAEAF0] mb-2 uppercase tracking-wider text-[11px]">Stations</div>
            <div><a href="#bays" className="hover:text-[#EAEAF0] transition-colors">PlayStation 5 (55" OLED)</a></div>
            <div><a href="#bays" className="hover:text-[#EAEAF0] transition-colors">PlayStation 5 (43" Arena)</a></div>
            <div><a href="#bays" className="hover:text-[#EAEAF0] transition-colors">PC Steering-Wheel Rig</a></div>
            <div><a href="#bays" className="hover:text-[#EAEAF0] transition-colors">PlayStation 4 Hangout</a></div>
          </div>

          <div className="md:col-span-2 space-y-2 text-xs">
            <div className="font-bold text-[#EAEAF0] mb-2 uppercase tracking-wider text-[11px]">Explore</div>
            <div><a href="#hardware" className="hover:text-[#EAEAF0] transition-colors">Hardware Setup</a></div>
            <div><a href="#venue" className="hover:text-[#EAEAF0] transition-colors">Venue Tour</a></div>
            <div><a href="#why-glitch" className="hover:text-[#EAEAF0] transition-colors">Why Glitch JSR</a></div>
            <div><a href="#faq" className="hover:text-[#EAEAF0] transition-colors">FAQ</a></div>
          </div>

          <div className="sm:col-span-2 md:col-span-3 space-y-2 text-xs">
            <div className="font-bold text-[#EAEAF0] mb-2 uppercase tracking-wider text-[11px]">Connect</div>
            <div>
              <a href={LOUNGE_DATA.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-[#EAEAF0] transition-colors">
                Instagram (@glitch.jsr)
              </a>
            </div>
            <div>
              <a href={LOUNGE_DATA.contact.linktree} target="_blank" rel="noreferrer" className="hover:text-[#EAEAF0] transition-colors">
                Linktree Tournament Hub
              </a>
            </div>
            <div>
              <a href={LOUNGE_DATA.contact.whatsapp} target="_blank" rel="noreferrer" className="hover:text-[#2B7FFF] transition-colors">
                WhatsApp: +91 87978 00779
              </a>
            </div>
            <div className="pt-2 text-[#A3A6B2]">Hours: 11:00 AM – 11:00 PM Daily</div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#14161D] flex flex-col md:flex-row items-baseline justify-between gap-6 overflow-hidden">
          <div className="text-xs text-[#A3A6B2] space-y-1 shrink-0">
            <div>© {new Date().getFullYear()} Glitch JSR. All rights reserved.</div>
            <div className="text-[#A3A6B2]/70 text-[11px]">
              Made by <span className="text-[#EAEAF0] font-medium">Himadri</span> for <span className="text-[#2B7FFF] font-medium">Glitch JSR</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="select-none pointer-events-none font-serif-title text-[18vw] md:text-[13vw] leading-none text-white/[0.06] font-bold tracking-tighter w-full text-right"
          >
            Glitch JSR
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
