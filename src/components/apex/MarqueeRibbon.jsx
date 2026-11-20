const MARQUEE_TEXT = [
  'GLITCH JSR',
  'PLAY • RELAX • REPEAT',
  'SAKCHI JAMSHEDPUR',
  'NEAR AMBAGAN',
  'PS5 55" 4K OLED',
  'PRO SIM RACING RIG',
  'DUALSENSE WIRELESS',
  'WEEKLY TEKKEN 8 TOURNAMENTS',
  'COLD REFRESHMENTS AT RIG',
  'WALK-INS WELCOME DAILY',
]

export function MarqueeRibbon() {
  return (
    <div className="bg-[#2B7FFF] text-white py-3.5 font-bold text-xs uppercase tracking-widest overflow-hidden select-none border-y border-[#2B7FFF]/30">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {[...MARQUEE_TEXT, ...MARQUEE_TEXT, ...MARQUEE_TEXT].map((item, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span>{item}</span>
            <span>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
