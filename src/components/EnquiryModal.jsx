import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../data/site'

export default function EnquiryModal({ open, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const name = fd.get('name')
    const phone = fd.get('phone')
    const interest = fd.get('interest')
    const message = fd.get('message') || ''
    const text = encodeURIComponent(
      `Hello, I'm ${name} (${phone}). I'm interested in: ${interest}. ${message}`.trim()
    )
    if (WHATSAPP_NUMBER.includes('X')) {
      alert('Thank you! Add your WhatsApp number in src/data/site.js to enable live enquiries.')
    } else {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 px-4 backdrop-blur-md sm:items-center sm:px-5"
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.98 }}
            className="relative mb-4 max-h-[90vh] w-full max-w-md overflow-y-auto bg-[#f8f1e5] p-5 text-[#170b09] shadow-2xl sm:mb-0 sm:p-7 md:p-9"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-black/10 p-2 transition hover:bg-black/5 sm:right-5 sm:top-5"
            >
              <X size={17} />
            </button>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#987339]">Private appointment</div>
            <h3 className="mt-2 pr-8 font-display text-3xl sm:text-4xl">Let's find your piece.</h3>
            <p className="mt-3 text-sm leading-6 text-black/55">
              Leave your details and our team will help with a collection, custom design, or private store visit.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              <input
                required
                name="name"
                placeholder="Your name"
                className="input-premium"
              />
              <input
                required
                name="phone"
                placeholder="Phone number"
                className="input-premium"
              />
              <select name="interest" className="input-premium">
                <option>I'm interested in...</option>
                <option>Bridal Jewellery</option>
                <option>Gold Jewellery</option>
                <option>Gemstone Jewellery</option>
                <option>Custom Jewellery</option>
                <option>Store Visit</option>
              </select>
              <textarea
                name="message"
                rows={2}
                placeholder="Tell us more (optional)"
                className="input-premium resize-none"
              />
              <button className="btn-primary w-full justify-center">
                Send Enquiry <ArrowRight size={15} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
