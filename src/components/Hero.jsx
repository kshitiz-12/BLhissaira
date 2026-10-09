import { motion } from 'framer-motion'
import { ArrowRight, Crown, Diamond, ShieldCheck } from 'lucide-react'
import heroMobile from '../assets/hero-mobile.jpg'
import heroDesktop from '../assets/hero-desktop.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.2, 0.65, 0.2, 1] },
  }),
}

const trusts = [
  { icon: Diamond, text: 'Trusted since generations' },
  { icon: Crown, text: 'Finest craftsmanship' },
  { icon: ShieldCheck, text: 'Certified purity & quality' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#120a08] text-white"
    >
      {/* Responsive hero art — portrait on phone, wide on desktop; no cut-off brand text */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="New B. L. Hissaria Jewellers boutique display"
            className="absolute inset-0 h-full w-full object-cover object-center lg:object-[72%_center]"
          />
        </picture>

        {/* Mobile veil — keep jewellery readable, darken bottom for copy */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#0c0705]/92 lg:hidden" />
        {/* Desktop left veil for copy */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0c0705]/88 via-[#0c0705]/40 to-transparent lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0c0705]/40 via-transparent to-black/15 lg:block" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-4 pb-8 pt-24 sm:justify-center sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20">
        <div className="w-full max-w-xl lg:max-w-[520px]">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white/85 sm:mb-5 sm:text-[11px] sm:tracking-[0.4em]"
          >
            Timeless Craftsmanship
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-[34px] leading-[1.08] tracking-[-0.02em] sm:text-[56px] lg:text-[68px] xl:text-[74px]"
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
            className="mt-3 max-w-md text-[13px] leading-6 text-white/70 sm:mt-5 sm:font-display sm:text-[18px] sm:leading-8"
          >
            Exquisite jewellery crafted with heritage, purity and unmatched artistry.
            Discover timeless pieces for every celebration.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 sm:mt-8"
          >
            <a
              href="#collections"
              className="group inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#c9a45b] to-[#e0c17c] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#170b09] transition hover:brightness-110 sm:w-auto sm:px-7 sm:text-[11px]"
            >
              Explore Collections
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 grid grid-cols-3 gap-2 border-t border-white/15 pt-4 sm:mt-12 sm:max-w-lg sm:gap-0 sm:pt-7"
          >
            {trusts.map(({ icon: Icon, text }, i) => (
              <div
                key={text}
                className={`flex flex-col items-start gap-1 sm:flex-row sm:gap-2.5 sm:px-3 ${
                  i > 0 ? 'sm:border-l sm:border-white/15' : 'sm:pl-0'
                }`}
              >
                <Icon size={14} strokeWidth={1.3} className="shrink-0 text-[#d4b06a] sm:mt-0.5" />
                <span className="text-[7px] font-medium uppercase leading-3 tracking-[0.04em] text-white/70 sm:text-[9px] sm:leading-4 sm:tracking-[0.12em]">
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
