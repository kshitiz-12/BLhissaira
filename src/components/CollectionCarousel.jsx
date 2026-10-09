import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const CARD_W = {
  base: 220,
  sm: 250,
  md: 270,
}

function useCardWidth() {
  const [width, setWidth] = useState(CARD_W.base)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setWidth(CARD_W.md)
      else if (window.matchMedia('(min-width: 640px)').matches) setWidth(CARD_W.sm)
      else setWidth(CARD_W.base)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return width
}

function CollectionCard({ item }) {
  return (
    <a
      href="#showcase"
      className="group block h-full overflow-hidden rounded-sm border border-[#3d2618]/10 bg-[#1a0f0c] shadow-sm"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="image-luxury absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160c08]/85 via-[#160c08]/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="font-display text-lg tracking-[-0.02em] sm:text-xl">{item.name}</div>
          <div className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-[#dfc17f]/80">
            {item.sub}
          </div>
        </div>
        <span className="absolute right-2.5 top-2.5 rounded-full border border-white/25 bg-black/25 p-1.5 text-white backdrop-blur transition group-hover:border-[#d8b56c] group-hover:bg-[#d8b56c] group-hover:text-[#170b09]">
          <ArrowRight size={12} />
        </span>
      </div>
    </a>
  )
}

export default function CollectionCarousel({ items }) {
  const GAP = 16
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.25 })
  const cardWidth = useCardWidth()
  const step = cardWidth + GAP
  const maxIndex = Math.max(0, items.length - 1)

  const paginate = useCallback(
    (dir) => {
      setIndex((i) => {
        const next = i + dir
        if (next < 0) return maxIndex
        if (next > maxIndex) return 0
        return next
      })
    },
    [maxIndex]
  )

  useEffect(() => {
    if (!inView || paused) return
    const timer = setInterval(() => paginate(1), 3500)
    return () => clearInterval(timer)
  }, [inView, paused, paginate])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 2500)}
    >
      <div className="relative overflow-hidden px-1">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{ gap: GAP, width: items.length * step }}
          animate={{ x: -index * step }}
          transition={{ type: 'spring', stiffness: 320, damping: 36 }}
          drag="x"
          dragConstraints={{
            left: -(maxIndex * step),
            right: 0,
          }}
          dragElastic={0.08}
          onDragEnd={(_, info) => {
            const shifted = index - Math.round(info.offset.x / step)
            const clamped = Math.max(0, Math.min(maxIndex, shifted))
            if (clamped !== index) setIndex(clamped)
            else if (info.offset.x < -40) paginate(1)
            else if (info.offset.x > 40) paginate(-1)
          }}
        >
          {items.map((item) => (
            <div
              key={item.name}
              className="shrink-0"
              style={{ width: cardWidth }}
            >
              <CollectionCard item={item} />
            </div>
          ))}
        </motion.div>

        <button
          onClick={() => paginate(-1)}
          aria-label="Previous collection"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#3d2618]/12 bg-white/95 p-2 shadow-md backdrop-blur transition hover:bg-white"
        >
          <ChevronLeft size={16} className="text-[#624724]" />
        </button>
        <button
          onClick={() => paginate(1)}
          aria-label="Next collection"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#3d2618]/12 bg-white/95 p-2 shadow-md backdrop-blur transition hover:bg-white"
        >
          <ChevronRight size={16} className="text-[#624724]" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {items.map((item, i) => (
          <button
            key={item.name}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${item.name}`}
            className="p-1"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-[#987339]' : 'w-1.5 bg-[#987339]/25'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
