import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-[0_8px_30px_rgba(12,35,64,0.08)] backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <div className="container-page flex h-[78px] items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M7 1h4v6h6v4h-6v6H7v-6H1V7h6V1z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-navy">Medix</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-ink/80 transition hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-semibold text-navy">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-brand">
              <Phone size={16} />
            </span>
            +123 456 7890
          </a>
          <a
            href="#appointment"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-line text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 font-semibold text-navy hover:bg-mint"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-brand px-5 py-3 text-center font-bold text-white"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
