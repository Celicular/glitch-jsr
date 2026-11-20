import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import reviewData from '../../assets/review.json'

export function TestimonialSection() {
  const carouselRef = useRef(null)
  const reviews = reviewData.reviews

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#0B0C10] text-[#EAEAF0] border-t border-[#14161D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex text-[#2B7FFF]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <a
                href="https://maps.app.goo.gl/4wEsaSLGJcqBTSrh6"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#2B7FFF] hover:underline"
              >
                4.9 Stars • 78 Reviews on Google
              </a>
            </div>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal text-[#EAEAF0] leading-[1.0]">
              What Jamshedpur gamers say.
            </h2>
            <p className="text-sm sm:text-base text-[#A3A6B2] max-w-xl">
              Authentic verified player reviews from our lounge community in Sakchi, near Ambagan.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#232632] bg-[#14161D] flex items-center justify-center text-[#EAEAF0] hover:bg-[#232632] transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#232632] bg-[#14161D] flex items-center justify-center text-[#2B7FFF] hover:bg-[#2B7FFF] hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={carouselRef}
          className="relative overflow-x-auto scrollbar-none py-2"
        >
          <div className="flex gap-4 sm:gap-5 animate-marquee hover:[animation-play-state:paused] w-max">
            {[...reviews, ...reviews].map((r, i) => (
              <div
                key={i}
                className="w-[280px] sm:w-[350px] md:w-[380px] p-5 sm:p-6 rounded-2xl bg-[#14161D] border border-[#232632] shadow-xl flex flex-col justify-between shrink-0 space-y-4 hover:border-[#2B7FFF]/60 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#2B7FFF]">
                      {[...Array(r.stars)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-[#A3A6B2]">
                      Google Review
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#EAEAF0] leading-relaxed italic">
                    "{r.review}"
                  </p>
                </div>

                <div className="pt-2 border-t border-[#232632] flex items-center justify-between">
                  <div className="font-bold text-xs text-[#2B7FFF]">
                    — {r.reviewer}
                  </div>
                  <div className="text-[10px] text-[#E94DB8] font-semibold">
                    Verified Gamer
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="rounded-3xl overflow-hidden border border-[#232632] shadow-2xl bg-[#14161D]"
        >
          <img
            src="/images/friends-gaming.jpg"
            alt="Squad gaming together at Glitch JSR"
            className="w-full aspect-16/9 sm:aspect-21/9 object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
