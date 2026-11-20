import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Do I need to book in advance before coming to Glitch JSR?',
    a: 'Walk-ins are always welcome daily! However, on Friday and Saturday evenings our 55" screen and racing rig get booked fast. Messaging us on WhatsApp beforehand takes 30 seconds and holds your spot.',
  },
  {
    q: 'How does the per-player price split work?',
    a: 'You pay for the station time, not per-ticket! For example, a 55" PS5 is ₹200/hr for 2 players (₹100/hr each) or ₹280/hr for 4 players (only ₹70/hr each). The more friends you bring, the cheaper it gets per person.',
  },
  {
    q: 'What games are pre-installed and ready to play?',
    a: 'We keep the latest titles updated: EA Sports FC 25, Tekken 8, Mortal Kombat 1, Spider-Man 2, GTA V, God of War Ragnarök, F1 24, Forza Horizon 5, WWE 2K, and more.',
  },
  {
    q: 'Are soft drinks and snacks available at the lounge?',
    a: 'Yes, we keep cold soft drinks, chilled energy beverages (Red Bull, Monster), and snacks available right at the desk and delivered directly to your station table.',
  },
  {
    q: 'Where in Sakchi are you located?',
    a: 'We are located at Ground Floor, B-1, H.No. 15A, near Ambagan ground, SNP Area, Sakchi, Jamshedpur 831001. Central, convenient, and easy to reach.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-24 md:py-32 bg-[#0B0C10] text-[#EAEAF0] border-t border-[#14161D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-3"
        >
          <h2 className="font-serif-title text-4xl sm:text-6xl font-normal text-[#EAEAF0]">
            Before you book.<br />
            Here's what to know.
          </h2>
          <p className="text-sm sm:text-base text-[#A3A6B2]">
            Everything you need to know about pricing, walk-ins, multiplayer setups, and tournaments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl border border-[#232632] bg-[#14161D] p-5 sm:p-8 shadow-xl divide-y divide-[#232632]"
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left flex items-center justify-between gap-4 font-serif-title text-lg sm:text-2xl font-normal text-[#EAEAF0] hover:text-[#2B7FFF] transition-colors py-1 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#2B7FFF]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pb-1 text-xs sm:text-sm text-[#A3A6B2] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
