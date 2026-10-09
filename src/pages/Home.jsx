import {
  ArrowRight,
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
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import VideoSection from '../components/VideoSection'

import {
  collections,
  contact,
  showcaseBridal,
  statement,
  temple,
} from '../data/site'

export default function Home({ onEnquire }) {
  return (
    <main>
      <Hero />

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
                  src={temple}
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


      <VideoSection />

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

              <div className="group relative aspect-[5/4] max-h-[340px] overflow-hidden bg-[#1a0f0c] md:max-h-[380px]">

                <img
                  src={showcaseBridal}
                  alt="Bridal jewellery"
                  className="image-luxury h-full w-full object-cover object-center"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white md:p-6">

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

              <div className="group relative aspect-[4/5] max-h-[340px] overflow-hidden bg-[#1a0f0c] md:max-h-[380px]">

                <img
                  src={statement}
                  alt="Statement jewellery"
                  className="image-luxury h-full w-full object-cover object-top"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white md:p-6">

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

      <section id="visit-store" className="luxury-bg px-6 py-14 text-white md:px-10 lg:py-20">

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