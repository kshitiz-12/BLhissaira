import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Clock, ExternalLink, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { WHATSAPP_NUMBER, contact } from '../data/site'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.2, 0.65, 0.2, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.2, 0.65, 0.2, 1] } },
}

const addressFields = [
  { label: 'Premises', value: contact.address.building },
  { label: 'Road / Street', value: contact.address.street },
  { label: 'Landmark', value: contact.address.landmark },
  { label: 'City', value: contact.address.city },
  { label: 'District', value: contact.address.district },
  { label: 'State', value: contact.address.state },
  { label: 'PIN Code', value: contact.address.pin },
]

function ContactCard({ icon: Icon, title, children, delay = 0, dark = false }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`group overflow-hidden rounded-sm border p-5 shadow-sm transition-shadow hover:shadow-lg ${
        dark
          ? 'border-[#d8b56c]/20 bg-[#170b09] text-white'
          : 'border-[#3d2618]/10 bg-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <motion.span
          whileHover={{ rotate: 8, scale: 1.05 }}
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            dark ? 'bg-[#d8b56c]/15' : 'bg-[#f6efe2]'
          }`}
        >
          <Icon size={18} className={dark ? 'text-[#d8b56c]' : 'text-[#a37b36]'} strokeWidth={1.5} />
        </motion.span>
        <div
          className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
            dark ? 'text-[#d8b56c]' : 'text-[#987339]'
          }`}
        >
          {title}
        </div>
      </div>
      <div className={`mt-4 text-sm leading-6 ${dark ? 'text-white/70' : 'text-[#5a4d44]'}`}>{children}</div>
    </motion.div>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const name = fd.get('name')
    const phone = fd.get('phone')
    const email = fd.get('email') || ''
    const subject = fd.get('subject')
    const message = fd.get('message')
    const text = encodeURIComponent(
      `Contact enquiry from ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
    )
    if (WHATSAPP_NUMBER.includes('X')) {
      setSubmitted(true)
    } else {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
      setSubmitted(true)
    }
  }

  return (
    <main className="bg-[#fbf8f1]">
      {/* Hero */}
      <section className="luxury-bg noise relative overflow-hidden px-6 pb-20 pt-28 text-white md:px-10 md:pb-24 md:pt-32">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#c9a45b]/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-[#681d26]/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#d9bb7a]">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-[#d9bb7a]"
              />
              Get in touch
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">
              We'd love to{' '}
              <span className="gold-text italic">hear from you.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 max-w-lg text-sm leading-7 text-white/60">
              Visit our boutique on Thana Road, Hanumangarh — or send us a message and we'll help you find the perfect
              piece.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href={contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex"
              >
                Get Directions <Navigation size={15} className="transition group-hover:translate-x-0.5" />
              </a>
              <a
                href={WHATSAPP_NUMBER.includes('X') ? '#' : `https://wa.me/${WHATSAPP_NUMBER}`}
                onClick={(e) => WHATSAPP_NUMBER.includes('X') && e.preventDefault()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-20 md:px-10 lg:pb-28">
        <div className="mx-auto -mt-12 max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
            {/* Left — info */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="space-y-4">
              <ContactCard icon={MapPin} title="Visit Our Boutique">
                <div className="space-y-2.5">
                  {addressFields.map(({ label, value }) => (
                    <div key={label} className="flex gap-3 border-b border-[#3d2618]/6 pb-2 last:border-0 last:pb-0">
                      <span className="w-24 shrink-0 text-[10px] uppercase tracking-[0.12em] text-[#987339]">
                        {label}
                      </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={contact.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#987339] transition hover:text-[#624724]"
                >
                  Open in Google Maps <ExternalLink size={12} />
                </a>
              </ContactCard>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <ContactCard icon={Phone} title="Call Us">
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="transition hover:text-[#987339]">
                    {contact.phone}
                  </a>
                </ContactCard>

                <ContactCard icon={Mail} title="Email">
                  <a href={`mailto:${contact.email}`} className="transition hover:text-[#987339]">
                    {contact.email}
                  </a>
                </ContactCard>

                <ContactCard icon={Clock} title="Store Hours">
                  <div className="space-y-1">
                    {contact.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4">
                        <span className="text-[#987339]">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </ContactCard>
              </div>

              <ContactCard icon={MessageCircle} title="WhatsApp" dark>
                <p className="mb-3">Prefer a quick chat? Message us directly on WhatsApp for instant assistance.</p>
                <a
                  href={WHATSAPP_NUMBER.includes('X') ? '#' : `https://wa.me/${WHATSAPP_NUMBER}`}
                  onClick={(e) => WHATSAPP_NUMBER.includes('X') && e.preventDefault()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#d8b56c] transition hover:text-white"
                >
                  Start a conversation <ArrowRight size={14} />
                </a>
              </ContactCard>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.2, 0.65, 0.2, 1] }}
              className="rounded-sm border border-[#3d2618]/10 bg-white p-6 shadow-sm md:p-8 lg:sticky lg:top-28 lg:self-start"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.45, ease: [0.2, 0.65, 0.2, 1] }}
                    className="py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                      className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6efe2]"
                    >
                      <MessageCircle size={28} className="text-[#a37b36]" />
                    </motion.div>
                    <h2 className="font-display text-3xl">Thank you.</h2>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#75695f]">
                      We've received your message. Our team will get back to you shortly.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#987339] underline-offset-4 hover:underline"
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#987339]">Send a message</div>
                    <h2 className="mt-1 font-display text-3xl">How can we help?</h2>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {['name', 'phone'].map((field) => (
                          <motion.div
                            key={field}
                            animate={focused === field ? { scale: 1.01 } : { scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <input
                              required
                              name={field}
                              placeholder={field === 'name' ? 'Full name' : 'Phone number'}
                              className="input-premium"
                              onFocus={() => setFocused(field)}
                              onBlur={() => setFocused(null)}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <motion.div animate={focused === 'email' ? { scale: 1.01 } : { scale: 1 }}>
                        <input
                          name="email"
                          type="email"
                          placeholder="Email (optional)"
                          className="input-premium"
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                        />
                      </motion.div>
                      <motion.div animate={focused === 'subject' ? { scale: 1.01 } : { scale: 1 }}>
                        <select
                          name="subject"
                          required
                          className="input-premium"
                          onFocus={() => setFocused('subject')}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="">Select a subject</option>
                          <option>Bridal Consultation</option>
                          <option>Custom Design</option>
                          <option>Gold Jewellery</option>
                          <option>Gemstone Collection</option>
                          <option>Store Visit</option>
                          <option>General Enquiry</option>
                        </select>
                      </motion.div>
                      <motion.div animate={focused === 'message' ? { scale: 1.01 } : { scale: 1 }}>
                        <textarea
                          required
                          name="message"
                          rows={4}
                          placeholder="Tell us about the piece or occasion you have in mind..."
                          className="input-premium resize-none"
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                        />
                      </motion.div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-dark w-full justify-center"
                      >
                        Send Message <ArrowRight size={15} />
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 overflow-hidden rounded-sm border border-[#3d2618]/10 bg-white shadow-sm"
          >
            <div className="flex flex-col justify-between gap-3 border-b border-[#3d2618]/10 px-5 py-4 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#987339]">Find us</div>
                <div className="mt-1 font-display text-2xl">Near Hind Variety Store, Thana Road</div>
              </div>
              <a
                href={contact.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#987339] transition hover:text-[#624724]"
              >
                Get directions <Navigation size={14} />
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[21/9] max-h-[300px] w-full bg-[#e8dfd0]"
            >
              <iframe
                title="Hissaria Jewellers location"
                src={contact.mapEmbed}
                className="absolute inset-0 h-full w-full border-0 grayscale-[25%] contrast-[1.05] transition-[filter] duration-700 hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
