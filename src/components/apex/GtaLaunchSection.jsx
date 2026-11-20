import { motion } from 'framer-motion'
import { MessageSquare, ArrowRight, Sparkles, Check } from 'lucide-react'
import { LOUNGE_DATA } from '../../data/loungeData'

export function GtaLaunchSection() {
  const gtaEnquiryUrl = `${LOUNGE_DATA.contact.whatsapp}?text=${encodeURIComponent(
    'Hi Glitch JSR, I want to enquire about GTA VI launch week session bookings in Sakchi.'
  )}`

  return (
    <section className="relative py-28 sm:py-36 md:py-44 bg-[#0B0C10] text-[#EAEAF0] overflow-hidden border-t border-[#14161D]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.img
          src="/images/gta6-launch.jpg"
          alt="GTA VI Cinematic Artwork"
          initial={{ scale: 1.12, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.45 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="w-full h-full object-cover object-right sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-[#0B0C10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-[#0B0C10]/95 sm:via-[#0B0C10]/85 to-transparent sm:w-4/5" />
        <div className="absolute inset-0 bg-[#0B0C10]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl space-y-6 sm:space-y-8"
        >
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#2B7FFF] uppercase">
            <Sparkles className="w-4 h-4 text-[#2B7FFF]" />
            <span>Upcoming Launch • Coming to Glitch JSR</span>
          </div>

          <h2 className="font-serif-title text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.0] sm:leading-[0.96] tracking-tight text-[#EAEAF0]">
            Grand Theft Auto VI.<br />
            Day-One on 55" OLED.
          </h2>

          <p className="text-base sm:text-lg text-[#A3A6B2] leading-relaxed max-w-xl">
            Vice City returns. Pre-book your squad launch week sessions at Glitch JSR. Experience native 4K visuals on Sony 55" OLED displays with DualSense wireless haptics and chilled drinks delivered straight to your couch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="p-3.5 rounded-xl bg-[#14161D]/75 backdrop-blur-md border border-[#232632] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#EAEAF0]">
                <Check className="w-3.5 h-3.5 text-[#2B7FFF]" />
                <span>Sony 55" OLED</span>
              </div>
              <div className="text-[11px] text-[#A3A6B2]">120Hz 4K HDR zero lag</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#14161D]/75 backdrop-blur-md border border-[#232632] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#EAEAF0]">
                <Check className="w-3.5 h-3.5 text-[#2B7FFF]" />
                <span>DualSense Haptics</span>
              </div>
              <div className="text-[11px] text-[#A3A6B2]">4-player squad couch</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#14161D]/75 backdrop-blur-md border border-[#232632] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#EAEAF0]">
                <Check className="w-3.5 h-3.5 text-[#2B7FFF]" />
                <span>Guaranteed Slots</span>
              </div>
              <div className="text-[11px] text-[#A3A6B2]">No queue, reserved rig</div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={gtaEnquiryUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs font-extrabold px-8 py-4 rounded-xl bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white transition-all shadow-xl shadow-[#2B7FFF]/25"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire for Launch Week</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-[#A3A6B2]">
              Rockstar Games • PlayStation 5 Launch Ready
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
