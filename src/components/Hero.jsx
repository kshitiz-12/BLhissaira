import { motion } from 'framer-motion'
import { ArrowRight, Crown, Diamond, ShieldCheck } from 'lucide-react'
import heroBg from '../assets/hero-bg.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.2, 0.65, 0.2, 1] },
  }),
}

const trusts = [
  { icon: Diamond, text: 'Trusted since generations' },
  { icon: Crown, text: 'Finest craftsmanship' },
  { icon: ShieldCheck, text: 'Certified purity & quality' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-[#120a08] text-white">
      {/* Exact showroom background — full bleed */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="h-full w-full object-cover object-[68%_center] sm:object-[72%_center] lg:object-center"
        />
        {/* Soft left veil so copy sits above the image like the mockup */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0705]/92 via-[#0c0705]/55 to-transparent lg:via-[#0c0705]/35 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0705]/55 via-transparent to-[#0c0705]/35" />
      </div>

      {/* Copy layered ON TOP of the background image */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] items-end px-5 pb-16 pt-28 sm:items-center sm:px-8 lg:px-12 lg:pb-20 lg:pt-24">
        <div className="w-full max-w-xl lg:max-w-[520px]">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-white/85"
          >
            Timeless Craftsmanship
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-[56px] lg:text-[68px] xl:text-[74px]"
          >
            <span className="text-[#f4eee6]">Tradition in Every</span>
            <br />
            <span className="gold-text">Golden Detail</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-md font-display text-[17px] leading-8 text-white/70 sm:text-[18px]"
          >
            Exquisite jewellery crafted with heritage, purity and unmatched artistry.
            Discover timeless pieces for every celebration.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="mt-8">
            <a
              href="#collections"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#c9a45b] to-[#e0c17c] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#170b09] transition hover:brightness-110"
            >
              Explore Collections
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 grid max-w-lg grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3 sm:gap-0"
          >
            {trusts.map(({ icon: Icon, text }, i) => (
              <div
                key={text}
                className={`flex items-start gap-2.5 sm:px-3 ${
                  i > 0 ? 'sm:border-l sm:border-white/15' : 'sm:pl-0'
                }`}
              >
                <Icon size={17} strokeWidth={1.3} className="mt-0.5 shrink-0 text-[#d4b06a]" />
                <span className="text-[9px] font-medium uppercase leading-4 tracking-[0.12em] text-white/70">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
