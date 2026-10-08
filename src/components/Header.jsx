import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, MessageCircle, Search, X } from 'lucide-react'
import logo from '../assets/logo-clean.webp'
import { nav } from '../data/site'

export default function Header({ onEnquire }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const solid = scrolled || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-white/8 bg-[#170b09]/92 text-white shadow-[0_8px_32px_rgba(0,0,0,.25)] backdrop-blur-xl'
          : 'text-white'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8 lg:py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="New B. L. Hissaria Jewellers"
            className="h-10 w-10 object-contain drop-shadow-[0_0_14px_rgba(217,178,93,.2)] md:h-12 md:w-12"
          />
          <div className="hidden sm:block">
            <div className="font-display text-[22px] leading-none tracking-[0.05em] md:text-[26px]">
              NEW B. L. HISSARIA
            </div>
            <div className="mt-0.5 flex items-center gap-2 text-[8px] tracking-[0.48em] text-[#dfc17f]">
              <span className="h-px w-5 bg-[#dfc17f]/70" />
              JEWELLERS
              <span className="h-px w-5 bg-[#dfc17f]/70" />
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-[10px] uppercase tracking-[0.18em] transition hover:text-white ${
                pathname === item.href ? 'text-[#d8b56c]' : 'text-white/70'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button className="hidden rounded-full p-2 text-white/75 transition hover:bg-white/10 hover:text-white md:block">
            <Search size={17} />
          </button>
          <button
            onClick={onEnquire}
            className="hidden items-center gap-2 rounded-full border border-[#d8b56c]/55 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:bg-[#d8b56c] hover:text-[#170b09] sm:flex"
          >
            <MessageCircle size={14} /> Enquire
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/15 p-2.5 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#170b09]/97 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-5">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="border-b border-white/10 py-4 text-xs uppercase tracking-[0.18em] text-white/75"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onEnquire()
                }}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#d8b56c] py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#170b09]"
              >
                Enquire Now <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
