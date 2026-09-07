import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { FadeIn } from './motion'
import SocialIcon, { socialLinks } from './SocialIcon'

const highlights = [
  {
    title: 'Support 24 Hours',
    text: 'A dedicated nurse line and emergency desk, every hour of every day.',
    bg: 'bg-mint',
  },
  {
    title: 'Smart Technology',
    text: 'Digital records, precision imaging, and safer operating theatres.',
    bg: 'bg-butter',
  },
  {
    title: 'Patient Care',
    text: 'Personal care coordinators who stay with you from consult to recovery.',
    bg: 'bg-peach',
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container-page -translate-y-10">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <article className={`rounded-2xl px-6 py-7 text-navy ${item.bg}`}>
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy/75">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="container-page grid gap-10 pb-10 pt-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
                <path d="M7 1h4v6h6v4h-6v6H7v-6H1V7h6V1z" fill="currentColor" />
              </svg>
            </span>
            <span className="text-xl font-extrabold">Medix</span>
          </a>
          <p className="mt-4 text-sm leading-6 text-white/65">
            Advanced medical excellence with compassionate care — serving families with dignity,
            skill, and warmth.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-brand" />
              124 Wellness Avenue, Medical District
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand" /> +123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand" /> hello@medix.hospital
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {socialLinks.map(({ key, label }) => (
              <a
                key={key}
                href="#contact"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-brand"
              >
                <SocialIcon name={key} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-extrabold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {['About Us', 'Our Doctors', 'Health Packages', 'Careers', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <a href="#about" className="hover:text-brand">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-extrabold">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {['Cardiology', 'Neurology', 'Pediatrics', 'Dental Surgery', 'Emergency Care'].map(
              (item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-brand">
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-extrabold">Subscribe Our Newsletter</h4>
          <p className="mb-4 text-sm text-white/65">
            Health tips and clinic updates, sent once a month.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex overflow-hidden rounded-full bg-white"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="min-w-0 flex-1 px-4 py-3 text-sm text-navy outline-none"
            />
            <button
              type="submit"
              className="m-1 grid h-10 w-10 place-items-center rounded-full bg-brand text-white"
              aria-label="Subscribe"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Medix Hospital. All rights reserved.
      </div>
    </footer>
  )
}
