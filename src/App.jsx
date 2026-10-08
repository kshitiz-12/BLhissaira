import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import EnquiryModal from './components/EnquiryModal'
import Home from './pages/Home'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function AppShell() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-[#fbf8f1]">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[#d8b56c]"
        style={{ scaleX: scrollYProgress }}
      />

      <Header onEnquire={() => setEnquiryOpen(true)} />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home onEnquire={() => setEnquiryOpen(true)} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer onEnquire={() => setEnquiryOpen(true)} />
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
