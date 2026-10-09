import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

function CollectionCard({ item, className = '' }) {
  return (
    <a
      href="#showcase"
      className={`group block overflow-hidden rounded-sm border border-[#3d2618]/10 bg-[#1a0f0c] shadow-sm ${className}`}
    >
      <div className="relative aspect-[3/4] max-h-[62vh] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="image-luxury h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160c08]/85 via-[#160c08]/15 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 text-white sm:bottom-4 sm:left-4 sm:right-4">
          <div className="font-display text-xl tracking-[-0.02em] sm:text-2xl">{item.name}</div>
          <div className="mt-1 text-[8px] uppercase tracking-[0.22em] text-[#dfc17f]/80 sm:text-[9px]">{item.sub}</div>
        </div>
        <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-black/20 p-2 text-white backdrop-blur transition group-hover:border-[#d8b56c] group-hover:bg-[#d8b56c] group-hover:text-[#170b09] sm:right-4 sm:top-4">
          <ArrowRight size={14} />
        </span>
      </div>
    </a>
  )
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function CollectionCarousel({ items }) {
  const [[index, direction], setSlide] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4 })

  const paginate = useCallback(
    (dir) => {
      setSlide(([i]) => {
        const next = (i + dir + items.length) % items.length
        return [next, dir]
      })
    },
    [items.length]
  )

  useEffect(() => {
    if (!inView || paused) return
    const timer = setInterval(() => paginate(1), 4500)
    return () => clearInterval(timer)
  }, [inView, paused, paginate])

  return (
    <div
      ref={ref}
      className="md:hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}
    >
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 || info.velocity.x < -400) paginate(1)
              else if (info.offset.x > 60 || info.velocity.x > 400) paginate(-1)
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <CollectionCard item={items[index]} />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          aria-label="Previous collection"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#3d2618]/15 bg-white/90 p-2 shadow-md backdrop-blur transition hover:bg-white"
        >
          <ChevronLeft size={18} className="text-[#624724]" />
        </button>
        <button
          onClick={() => paginate(1)}
          aria-label="Next collection"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#3d2618]/15 bg-white/90 p-2 shadow-md backdrop-blur transition hover:bg-white"
        >
          <ChevronRight size={18} className="text-[#624724]" />
        </button>
      </div>

      {/* Dots + counter */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setSlide([i, i > index ? 1 : -1])}
              aria-label={`Go to ${item.name}`}
              className="group p-1"
            >
              <motion.span
                animate={{
                  width: i === index ? 24 : 6,
                  backgroundColor: i === index ? '#987339' : 'rgba(152,115,57,0.25)',
                }}
                transition={{ duration: 0.3 }}
                className="block h-1.5 rounded-full"
              />
            </button>
          ))}
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#987339]">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
      </div>

      {/* Peek strip — next item hint */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, i) => (
          <button
            key={item.name}
            onClick={() => setSlide([i, i > index ? 1 : -1])}
            className={`shrink-0 overflow-hidden rounded-sm border transition ${
              i === index
                ? 'border-[#987339] opacity-100'
                : 'border-[#3d2618]/10 opacity-50 hover:opacity-80'
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-14 w-14 object-cover"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export function CollectionGrid({ items }) {
  return (
    <div className="hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-5">
      {items.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
        >
          <CollectionCard
            item={c}
            className="transition hover:-translate-y-0.5 hover:shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  )
}
