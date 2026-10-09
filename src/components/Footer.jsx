import { Link } from 'react-router-dom'
import { MapPin, MessageCircle } from 'lucide-react'
import logo from '../assets/logo-clean.webp'
import InstagramIcon from './InstagramIcon'
import { collections, contact, nav, social } from '../data/site'

export default function Footer({ onEnquire }) {
  return (
    <footer className="bg-[#100806] px-4 py-10 text-white sm:px-6 md:px-10 md:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img src={logo} alt="Hissaria Jewellers" className="h-12 w-12 object-contain" />
          <div className="mt-3 font-display text-2xl">NEW B. L. HISSARIA</div>
          <div className="mt-1 text-[9px] tracking-[0.5em] text-[#d8b56c]">JEWELLERS</div>
          <p className="mt-4 max-w-xs text-xs leading-6 text-white/40">
            Timeless jewellery, heritage craftsmanship and a personal experience — from our family to yours.
          </p>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs text-white/45 transition hover:text-[#d8b56c]"
          >
            <InstagramIcon size={16} className="text-[#d8b56c]" />
            {social.instagramHandle}
          </a>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#d8b56c]">Explore</div>
          <div className="mt-4 space-y-2.5 text-xs text-white/45">
            {nav.map((n) => (
              <Link key={n.label} className="block transition hover:text-white" to={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#d8b56c]">Collections</div>
          <div className="mt-4 space-y-2.5 text-xs text-white/45">
            {collections.slice(0, 4).map((c) => (
              <Link key={c.name} to="/#collections" className="block transition hover:text-white">
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#d8b56c]">Contact</div>
          <div className="mt-4 space-y-3 text-xs text-white/45">
            <div className="flex gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-[#d8b56c]" />
              {contact.addressShort}
            </div>
            <Link to="/contact" className="flex items-center gap-2 transition hover:text-white">
              <MessageCircle size={14} className="text-[#d8b56c]" />
              Contact Us
            </Link>
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <InstagramIcon size={14} className="text-[#d8b56c]" />
              Instagram
            </a>
            <button onClick={onEnquire} className="flex items-center gap-2 transition hover:text-white">
              <MessageCircle size={14} className="text-[#d8b56c]" />
              WhatsApp Enquiry
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.16em] text-white/25 md:flex-row">
        <span>© 2026 New B. L. Hissaria Jewellers</span>
        <span>Hissaria Gems Private Limited · GSTIN 08AAHCH0148N1ZC</span>
      </div>
    </footer>
  )
}
