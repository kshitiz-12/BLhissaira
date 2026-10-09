import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import EnquiryModal from './components/EnquiryModal'
import Home from './pages/Home'

const Contact = lazy(() => import('./pages/Contact'))

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

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-[#fbf8f1]">
      <div className="h-8 w-8 animate-pulse rounded-full border border-[#d8b56c]/40 border-t-[#d8b56c]" />
    </div>
  )
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

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home onEnquire={() => setEnquiryOpen(true)} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

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
