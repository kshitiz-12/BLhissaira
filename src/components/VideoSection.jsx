import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import Reveal from './Reveal'
import storeVideo from '../assets/Video-55865.mp4'

export default function VideoSection() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  // Load video only when section is near viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Autoplay once loaded and visible
  useEffect(() => {
    if (!shouldLoad) return
    const v = videoRef.current
    if (!v) return

    const playWhenVisible = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.muted = true
          v.play()
            .then(() => setPlaying(true))
            .catch(() => setPlaying(false))
        } else {
          v.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.35 }
    )

    playWhenVisible.observe(v)
    return () => playWhenVisible.disconnect()
  }, [shouldLoad])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section
      ref={sectionRef}
      id="film"
      className="luxury-bg noise relative overflow-hidden px-4 py-12 text-white sm:px-6 md:px-10 md:py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <div className="max-w-lg">
            <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#d8b56c]">
              <span className="h-px w-7 bg-[#d8b56c]" />
              From the boutique
            </div>
            <h2 className="font-display text-3xl tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-6xl">
              A glimpse of <span className="gold-text italic">our craft.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/50 sm:mt-5">
              Step inside New B. L. Hissaria Jewellers — where every piece is shaped with heritage and care.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-sm border border-[#d8b56c]/20 bg-black shadow-[0_30px_80px_rgba(0,0,0,.45)] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[3/4] max-h-[58vh] w-full overflow-hidden bg-[#1a0f0c] sm:max-h-[64vh] lg:max-h-[640px]">
              {shouldLoad ? (
                <video
                  ref={videoRef}
                  src={storeVideo}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  playsInline
                  loop
                  muted
                  preload="metadata"
                />
              ) : (
                <div className="absolute inset-0 animate-pulse bg-[#241510]" />
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-3 right-3 flex items-center gap-2 sm:bottom-5 sm:right-5">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMute}
                  disabled={!shouldLoad}
                  aria-label={muted ? 'Unmute video' : 'Mute video'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur disabled:opacity-40"
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  disabled={!shouldLoad}
                  aria-label={playing ? 'Pause video' : 'Play video'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur disabled:opacity-40"
                >
                  {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </motion.button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
