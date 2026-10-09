import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Heart, Menu, MessageCircle, Search, X } from 'lucide-react'
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

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return false
    return pathname === href
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'border-b border-white/8 bg-[#120a08]/92 text-white shadow-[0_8px_32px_rgba(0,0,0,.25)] backdrop-blur-xl'
          : 'bg-gradient-to-b from-black/50 to-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8 lg:px-12 lg:py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="New B. L. Hissaria Jewellers"
            className="h-10 w-10 object-contain drop-shadow-[0_0_14px_rgba(217,178,93,.25)] md:h-12 md:w-12"
          />
          <div className="hidden sm:block">
            <div className="font-display text-[20px] leading-none tracking-[0.06em] text-[#e8c985] md:text-[24px]">
              NEW B. L. HISSARIA
            </div>
            <div className="mt-0.5 flex items-center gap-2 text-[8px] tracking-[0.48em] text-[#dfc17f]/80">
              <span className="h-px w-5 bg-[#dfc17f]/60" />
              JEWELLERS
              <span className="h-px w-5 bg-[#dfc17f]/60" />
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`relative text-[11px] tracking-[0.04em] transition hover:text-white ${
                isActive(item.href) ? 'text-white' : 'text-white/75'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-[#d4b06a]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 md:gap-2">
          <button
            aria-label="Search"
            className="hidden rounded-full p-2 text-white/75 transition hover:bg-white/10 hover:text-white md:block"
          >
            <Search size={17} />
          </button>
          <button
            aria-label="Favourites"
            className="hidden rounded-full p-2 text-white/75 transition hover:bg-white/10 hover:text-white md:block"
          >
            <Heart size={17} />
          </button>
          <button
            onClick={onEnquire}
            className="hidden items-center gap-2 rounded-full border border-[#d4b06a]/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e8c985] transition hover:bg-[#d4b06a] hover:text-[#170b09] sm:flex"
          >
            <MessageCircle size={14} /> Enquire Now
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-white/15 p-2.5 xl:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-[#120a08]/97 backdrop-blur-xl xl:hidden"
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
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#d4b06a] py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#170b09]"
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
