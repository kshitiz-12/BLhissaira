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
  showcaseStatement,
  storyHeritage,
  videoBoutique,
  videoCraft,
} from '../data/site'

export default function Home({ onEnquire }) {
  return (
    <main>
      <Hero />

      {/* Video right after first scroll */}
      <VideoSection
        id="film-intro"
        eyebrow="Inside the store"
        title={
          <>
            Moments from our <span className="gold-text italic">boutique.</span>
          </>
        }
        description="Watch the glow of heritage gold and the quiet craft of New B. L. Hissaria Jewellers."
        videoSrc={videoCraft}
      />

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
          ].map(([a, b, I], i) => (
            <div
              key={a}
              className={`flex items-start gap-2.5 px-3 py-4 sm:items-center sm:gap-3 sm:px-4 sm:py-5 md:px-6 md:py-6 ${
                i % 2 === 0 ? 'border-r border-[#2e1a12]/10' : ''
              } ${i < 2 ? 'border-b border-[#2e1a12]/10 md:border-b-0' : ''} ${
                i < 3 ? 'md:border-r md:border-[#2e1a12]/10' : ''
              }`}
            >
              <I size={18} strokeWidth={1.2} className="mt-0.5 shrink-0 text-[#a37b36] sm:mt-0 sm:size-[22px]" />
              <div>
                <div className="text-[8px] font-semibold uppercase leading-snug tracking-[0.12em] text-[#2b1b14] sm:text-[9px] sm:tracking-[0.16em]">
                  {a}
                </div>
                <div className="mt-0.5 text-[8px] text-[#7d6d60] sm:text-[9px]">{b}</div>
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
        className="marble px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-8 flex flex-col justify-between gap-3 md:mb-10 md:flex-row md:items-end md:gap-4">
              <div>
                <div className="mb-2 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#987339]">
                  <span className="h-px w-7 bg-[#987339]" />
                  Our collections
                </div>
                <h2 className="font-display text-3xl tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-6xl">
                  Jewellery for <span className="italic">Every Story</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#75695f]">
                From heirloom-inspired gold to contemporary gemstones, discover pieces for life's most
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
        className="luxury-bg noise relative overflow-hidden px-4 py-12 text-white sm:px-6 md:px-10 md:py-16 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px]">
              <div className="absolute -inset-3 border border-[#d8b56c]/20 sm:-inset-4" />
              <div className="aspect-[4/5] max-h-[320px] overflow-hidden sm:max-h-[380px]">
                <img
                  src={storyHeritage}
                  alt="Heritage jewellery craftsmanship"
                  className="image-luxury h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 bg-[#f2e6d2] px-4 py-3 text-[#170b09] shadow-2xl sm:-bottom-5 sm:-right-5 sm:px-5 sm:py-4">
                <div className="font-display text-xl sm:text-2xl">Since</div>
                <div className="text-sm tracking-[0.15em] sm:text-lg">GENERATIONS</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#d8b56c]">
                <span className="h-px w-8 bg-[#d8b56c]" />
                Our story
              </div>
              <h2 className="font-display text-3xl leading-[0.95] sm:text-4xl md:text-5xl lg:text-6xl">
                Where heritage
                <br />
                <span className="gold-text italic">meets artistry.</span>
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
        className="bg-[#fbf8f1] px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#987339]">
                The Hissaria standard
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Crafted to be <span className="italic">cherished.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-5 md:grid-cols-3">

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

                  <h3 className="mt-5 font-display text-2xl sm:mt-8 sm:text-3xl">
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


      <VideoSection
        id="film"
        eyebrow="From the boutique"
        title={
          <>
            A glimpse of <span className="gold-text italic">our craft.</span>
          </>
        }
        description="Step inside New B. L. Hissaria Jewellers — where every piece is shaped with heritage and care."
        videoSrc={videoBoutique}
        reverse
      />

      {/* =========================================================
          SHOWCASE
      ========================================================= */}

      <section
        id="showcase"
        className="bg-[#eee4d5] px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#987339]">
                  The edit
                </div>
                <h2 className="mt-1 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Pieces worth <span className="italic">pausing for.</span>
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

              <div className="group relative aspect-[4/5] overflow-hidden bg-[#1a0f0c] sm:aspect-[5/4] sm:max-h-[340px] md:max-h-[380px]">
                <img
                  src={showcaseBridal}
                  alt="Bridal jewellery"
                  className="image-luxury h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-white sm:p-5 md:p-6">
                  <div className="text-[8px] uppercase tracking-[0.3em] text-[#e7ca8b]">
                    Bridal edit
                  </div>
                  <div className="mt-1 font-display text-xl sm:text-2xl md:text-3xl">
                    For the day you'll remember forever.
                  </div>
                </div>
              </div>

            </Reveal>


            <Reveal
              className="md:col-span-5"
              delay={0.08}
            >

              <div className="group relative aspect-[4/5] overflow-hidden bg-[#1a0f0c] sm:max-h-[340px] md:max-h-[380px]">
                <img
                  src={showcaseStatement}
                  alt="Statement jewellery"
                  className="image-luxury h-full w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-white sm:p-5 md:p-6">
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

      <section
        id="visit-store"
        className="luxury-bg px-4 py-12 text-white sm:px-6 md:px-10 md:py-14 lg:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-[1fr_auto] md:gap-8">
          <Reveal>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#d8b56c]">
                Visit the boutique
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl">
                Come see the details <span className="italic">in person.</span>
              </h2>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55 sm:mt-5">
                <span className="flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#d8b56c]" />
                  <span className="leading-6">{contact.addressShort}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="btn-primary group inline-flex w-full justify-center md:w-auto"
            >
              Contact Us
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  )
}