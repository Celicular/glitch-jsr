import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react'
import { LOUNGE_DATA } from '../../data/loungeData'

const DATES = [
  { day: 'Today', date: '21', label: 'Today' },
  { day: 'Tomorrow', date: '22', label: 'Tmrw' },
  { day: 'Sunday', date: '23', label: 'Sun' },
  { day: 'Monday', date: '24', label: 'Mon' },
  { day: 'Tuesday', date: '25', label: 'Tue' },
  { day: 'Wednesday', date: '26', label: 'Wed' },
]

const SLOTS = ['12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM', '10:00 PM']

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState(DATES[0])
  const [selectedSlot, setSelectedSlot] = useState(SLOTS[2])

  const bookingUrl = `${LOUNGE_DATA.contact.whatsapp}?text=${encodeURIComponent(
    `Hi Glitch JSR, I want to reserve a session for ${selectedDate.day} (${selectedDate.date}th) at ${selectedSlot}.`
  )}`

  return (
    <section id="booking" className="py-20 sm:py-24 md:py-32 bg-[#0B0C10] text-[#EAEAF0] border-t border-[#14161D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-3"
        >
          <h2 className="font-serif-title text-4xl sm:text-6xl font-normal text-[#EAEAF0]">
            Pick a day.<br />
            We'll hold the rig.
          </h2>
          <p className="text-sm sm:text-base text-[#A3A6B2]">
            Reserve your preferred station and time slot with a quick message to our Sakchi desk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="rounded-3xl border border-[#232632] bg-[#14161D] p-5 sm:p-10 shadow-2xl space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-5 flex flex-col justify-between space-y-6 border-b md:border-b-0 md:border-r border-[#232632] pb-6 md:pb-0 md:pr-8">
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#2B7FFF] uppercase tracking-wider">
                  Session Reservation
                </div>
                <h3 className="font-serif-title text-2xl font-normal text-[#EAEAF0]">
                  Console & Sim Rig Booking
                </h3>
                <p className="text-xs text-[#A3A6B2] leading-relaxed">
                  Fast WhatsApp confirmation directly with our front desk in Sakchi near Ambagan.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-[#A3A6B2] pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2B7FFF] shrink-0" />
                  <span>Flexible hourly durations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2B7FFF] shrink-0" />
                  <span>Transparent group rate splitting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#2B7FFF] shrink-0" />
                  <span>Selected: {selectedDate.day} at {selectedSlot}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#EAEAF0]">Select Day:</span>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {DATES.map((d) => {
                    const isSelected = selectedDate.date === d.date
                    return (
                      <button
                        key={d.date}
                        onClick={() => setSelectedDate(d)}
                        className={`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#2B7FFF] bg-[#2B7FFF] text-white font-bold shadow-md shadow-[#2B7FFF]/20'
                            : 'border-[#232632] bg-[#0F1015] text-[#EAEAF0] hover:bg-[#232632]'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-semibold tracking-wide">
                          {d.label}
                        </div>
                        <div className="text-sm font-bold mt-0.5">
                          {d.date}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#EAEAF0]">Select Preferred Time:</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SLOTS.map((s) => {
                    const isSelected = selectedSlot === s
                    return (
                      <button
                        key={s}
                        onClick={() => setSelectedSlot(s)}
                        className={`py-2.5 px-3 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#2B7FFF] bg-[#2B7FFF] text-white font-bold shadow-md shadow-[#2B7FFF]/20'
                            : 'border-[#232632] bg-[#0F1015] text-[#A3A6B2] hover:text-[#EAEAF0] hover:bg-[#232632]'
                        }`}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
              </div>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#2B7FFF] hover:bg-[#2B7FFF]/90 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2B7FFF]/25"
              >
                <span>Confirm on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
