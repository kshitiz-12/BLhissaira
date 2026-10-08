import { motion, useScroll, useTransform } from 'framer-motion'

import {
  ArrowRight,
  ChevronDown,
  Diamond,
  Gem,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import CollectionCarousel, {
  CollectionGrid,
} from '../components/CollectionCarousel'

import Reveal from '../components/Reveal'

import {
  collections,
  contact,
  necklace1,
  necklace2,
  necklace4,
  necklace5,
} from '../data/site'

export default function Home({ onEnquire }) {
  const { scrollYProgress } = useScroll()

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 60]
  )

  return (
    <main>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="luxury-bg noise relative min-h-[580px] overflow-hidden text-white md:min-h-[680px] lg:min-h-[85vh]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_48%,rgba(168,119,54,.14),transparent_32%)]" />

        <motion.div
          style={{ y: heroY }}
          className="absolute -right-16 top-32 h-[420px] w-[420px] rounded-full bg-[#b98c47]/10 blur-3xl"
        />

        <div className="mx-auto grid min-h-[85vh] max-w-6xl items-center gap-8 px-6 pb-10 pt-28 md:px-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14 lg:pt-24">

          <Reveal className="relative z-10 max-w-lg">

            <div className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-[#d9bb7a]">
              <span className="h-px w-8 bg-[#d9bb7a]" />
              A LEGACY OF CRAFT
            </div>

            <h1 className="font-display text-[42px] leading-[0.9] tracking-[-0.03em] sm:text-[54px] lg:text-[68px]">
              Tradition in
              <br />
              <span className="gold-text italic">
                Every Golden
              </span>
              <br />
              Detail.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
              Exquisite jewellery crafted with heritage,
              purity and unmatched artistry — designed to
              become part of your story for generations.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href="#collections"
                className="btn-primary group"
              >
                Explore Collections

                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <button
                onClick={onEnquire}
                className="btn-outline"
              >
                Book a Consultation
              </button>

            </div>

            <div className="mt-10 grid max-w-sm grid-cols-3 border-t border-white/10 pt-5">

              {[
                ['01', 'Trusted'],
                ['02', 'Crafted'],
                ['03', 'Certified'],
              ].map(([n, t]) => (
                <div
                  key={n}
                  className="border-r border-white/10 pl-1 last:border-0"
                >
                  <div className="font-display text-xl text-[#d9bb7a]">
                    {n}
                  </div>

                  <div className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/45">
                    {t}
                  </div>
                </div>
              ))}

            </div>

          </Reveal>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.2, 0.7, 0.2, 1],
            }}
            className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:max-w-[420px]"
          >

            <div className="absolute -inset-4 rounded-[45%] bg-[#c69b52]/8 blur-2xl" />

            <div className="group relative overflow-hidden rounded-2xl border border-[#d6b66e]/25 bg-[#271310] p-1.5 shadow-[0_20px_80px_rgba(0,0,0,.45)]">

              <div className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-xl">

                <img
                  src={necklace1}
                  alt="Traditional gold jewellery collection"
                  className="image-luxury h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#170b09]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                  <div>
                    <div className="text-[8px] uppercase tracking-[0.3em] text-[#dfc17f]">
                      Featured Collection
                    </div>

                    <div className="font-display text-2xl">
                      Heritage Gold
                    </div>
                  </div>

                  <span className="rounded-full border border-white/25 bg-black/20 p-2.5 backdrop-blur">
                    <ArrowRight size={16} />
                  </span>

                </div>

              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-[#d6b66e]/25 bg-[#21100d]/90 px-4 py-3 shadow-xl backdrop-blur md:block">

              <div className="flex items-center gap-2.5">

                <ShieldCheck
                  className="text-[#d8b56c]"
                  size={18}
                />

                <div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                    Our promise
                  </div>

                  <div className="font-display text-base">
                    Purity & precision
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/35 lg:flex">
          <span>Scroll to discover</span>
          <ChevronDown
            size={14}
            className="animate-bounce"
          />
        </div>

      </section>


      {/* =========================================================
          TRUST STRIP
      ========================================================= */}

      <section className="border-b border-[#2e1a12]/10 bg-[#f6efe2]">

        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">

          {[
            ['Pure & Hallmarked', 'Assured quality', Diamond],
            ['Trusted Legacy', 'Generations of trust', ShieldCheck],
            ['Exquisite Craftsmanship', 'Finest details', Sparkles],
            ['Bespoke Service', 'Designed around you', Heart],
          ].map(([a, b, I]) => (

            <div
              key={a}
              className="flex items-center gap-3 border-r border-[#2e1a12]/10 px-4 py-5 last:border-0 md:px-6 md:py-6"
            >

              <I
                size={22}
                strokeWidth={1.2}
                className="shrink-0 text-[#a37b36]"
              />

              <div>

                <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#2b1b14]">
                  {a}
                </div>

                <div className="mt-0.5 text-[9px] text-[#7d6d60]">
                  {b}
                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          COLLECTIONS
      ========================================================= */}

      <section
        id="collections"
        className="marble px-6 py-16 md:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">

              <div>

                <div className="mb-2 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#987339]">
                  <span className="h-px w-7 bg-[#987339]" />
                  Our collections
                </div>

                <h2 className="font-display text-4xl tracking-[-0.02em] md:text-5xl lg:text-6xl">
                  Jewellery for{' '}
                  <span className="italic">
                    Every Story
                  </span>
                </h2>

              </div>

              <p className="max-w-xs text-sm leading-6 text-[#75695f]">
                From heirloom-inspired gold to contemporary
                gemstones, discover pieces for life's most
                unforgettable moments.
              </p>

            </div>

          </Reveal>

          <CollectionCarousel items={collections} />

          <CollectionGrid items={collections} />

        </div>

      </section>


      {/* =========================================================
          OUR STORY
      ========================================================= */}

      <section
        id="our-story"
        className="luxury-bg noise relative overflow-hidden px-6 py-16 text-white md:px-10 lg:py-24"
      >

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <Reveal>

            <div className="relative mx-auto max-w-[360px]">

              <div className="absolute -inset-4 border border-[#d8b56c]/20" />

              <div className="aspect-[4/5] max-h-[380px] overflow-hidden">

                <img
                  src={necklace4}
                  alt="Heritage temple jewellery"
                  className="image-luxury h-full w-full object-cover"
                />

              </div>

              <div className="absolute -bottom-5 -right-5 bg-[#f2e6d2] px-5 py-4 text-[#170b09] shadow-2xl">

                <div className="font-display text-2xl">
                  Since
                </div>

                <div className="text-lg tracking-[0.15em]">
                  GENERATIONS
                </div>

              </div>

            </div>

          </Reveal>


          <Reveal delay={0.1}>

            <div>

              <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#d8b56c]">
                <span className="h-px w-8 bg-[#d8b56c]" />
                Our story
              </div>

              <h2 className="font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">
                Where heritage
                <br />
                <span className="gold-text italic">
                  meets artistry.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">
                At New B. L. Hissaria Jewellers, jewellery
                is more than an adornment. It is a memory,
                a celebration, a promise — shaped by skilled
                hands and an appreciation for enduring design.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/45">
                Every detail is selected with the same care
                we would give to a piece destined to become
                a family heirloom.
              </p>

              <a
                href="#craftsmanship"
                className="mt-7 inline-flex items-center gap-2 border-b border-[#d8b56c]/50 pb-2 text-[10px] uppercase tracking-[0.22em] text-[#d8b56c]"
              >
                Discover our philosophy
                <ArrowRight size={14} />
              </a>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =========================================================
          CRAFTSMANSHIP
      ========================================================= */}

      <section
        id="craftsmanship"
        className="bg-[#fbf8f1] px-6 py-16 md:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <div className="text-center">

              <div className="text-[10px] uppercase tracking-[0.3em] text-[#987339]">
                The Hissaria standard
              </div>

              <h2 className="mt-2 font-display text-4xl md:text-5xl lg:text-6xl">
                Crafted to be{' '}
                <span className="italic">
                  cherished.
                </span>
              </h2>

            </div>

          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {[
              [
                '01',
                'Design',
                'A balance of timeless Indian forms and refined contemporary expression.',
              ],
              [
                '02',
                'Detail',
                'Intricate workmanship where every curve, setting and finish earns its place.',
              ],
              [
                '03',
                'Trust',
                'A considered buying experience built around transparency, purity and service.',
              ],
            ].map(([n, t, d], i) => (

              <Reveal
                key={n}
                delay={i * 0.08}
              >

                <div className="border-t border-[#2d1b12]/15 pt-5">

                  <div className="flex items-center justify-between">

                    <span className="font-display text-3xl text-[#b38b46]">
                      {n}
                    </span>

                    <Gem
                      size={20}
                      strokeWidth={1.2}
                      className="text-[#b38b46]"
                    />

                  </div>

                  <h3 className="mt-8 font-display text-3xl">
                    {t}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-7 text-[#75695f]">
                    {d}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          SHOWCASE
      ========================================================= */}

      <section
        id="showcase"
        className="bg-[#eee4d5] px-6 py-16 md:px-10 lg:py-24"
      >

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <div className="mb-10 flex items-end justify-between gap-4">

              <div>

                <div className="text-[10px] uppercase tracking-[0.3em] text-[#987339]">
                  The edit
                </div>

                <h2 className="mt-1 font-display text-4xl md:text-5xl lg:text-6xl">
                  Pieces worth{' '}
                  <span className="italic">
                    pausing for.
                  </span>
                </h2>

              </div>

              <button
                onClick={onEnquire}
                className="hidden items-center gap-2 border-b border-[#987339] pb-2 text-[10px] uppercase tracking-[0.2em] text-[#624724] md:flex"
              >
                Enquire about a piece
                <ArrowRight size={14} />
              </button>

            </div>

          </Reveal>


          <div className="grid gap-4 md:grid-cols-12">

            <Reveal className="md:col-span-7">

              <div className="group relative aspect-[5/4] max-h-[320px] overflow-hidden bg-[#d4c1a4] md:max-h-[360px]">

                <img
                  src={necklace2}
                  alt="Bridal jewellery"
                  className="image-luxury h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">

                  <div className="text-[8px] uppercase tracking-[0.3em] text-[#e7ca8b]">
                    Bridal edit
                  </div>

                  <div className="mt-1 font-display text-2xl md:text-3xl">
                    For the day you'll remember forever.
                  </div>

                </div>

              </div>

            </Reveal>


            <Reveal
              className="md:col-span-5"
              delay={0.08}
            >

              <div className="group relative aspect-[4/5] max-h-[320px] overflow-hidden bg-[#d4c1a4] md:max-h-[360px]">

                <img
                  src={necklace5}
                  alt="Statement gemstone jewellery"
                  className="image-luxury h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">

                  <div className="text-[8px] uppercase tracking-[0.3em] text-[#e7ca8b]">
                    Statement edit
                  </div>

                  <div className="mt-1 font-display text-xl md:text-2xl">
                    Colour with character.
                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =========================================================
          VISIT BOUTIQUE
      ========================================================= */}

      <section className="luxury-bg px-6 py-14 text-white md:px-10 lg:py-20">

        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]">

          <Reveal>

            <div>

              <div className="text-[10px] uppercase tracking-[0.3em] text-[#d8b56c]">
                Visit the boutique
              </div>

              <h2 className="mt-2 font-display text-4xl md:text-5xl">
                Come see the details{' '}
                <span className="italic">
                  in person.
                </span>
              </h2>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">

                <span className="flex items-center gap-2">

                  <MapPin
                    size={15}
                    className="text-[#d8b56c]"
                  />

                  {contact.addressShort}

                </span>

              </div>

            </div>

          </Reveal>


          <Reveal delay={0.1}>

            <Link
              to="/contact"
              className="btn-primary group inline-flex"
            >
              Contact Us

              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </Reveal>

        </div>

      </section>

    </main>
  )
}