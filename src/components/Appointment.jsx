import { useState } from 'react'
import { CalendarDays, Mail, Phone, User } from 'lucide-react'
import { images } from '../data'
import { FadeIn } from './motion'

export default function Appointment() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="appointment" className="relative overflow-hidden py-24">
      <img
        src={images.surgeons}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="container-page relative grid items-center gap-10 lg:grid-cols-2">
        <FadeIn x={-24}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            Book a visit
          </p>
          <h2 className="max-w-lg text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Reserve a consultation with the specialist who is right for you
          </h2>
          <p className="mt-4 max-w-md leading-7 text-white/75">
            Share a few details and our care desk will confirm your slot within minutes — weekdays
            and weekends.
          </p>
        </FadeIn>

        <FadeIn x={24}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-7 shadow-2xl md:p-8"
          >
            <h3 className="mb-6 text-2xl font-extrabold text-navy">Book an Appointment</h3>
            {sent ? (
              <p className="rounded-2xl bg-mint px-4 py-8 text-center font-semibold text-brand-dark">
                Thank you. Our team will contact you shortly to confirm your appointment.
              </p>
            ) : (
              <div className="grid gap-4">
                <label className="relative block">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand" size={18} />
                  <input
                    required
                    name="name"
                    placeholder="Full name"
                    className="w-full rounded-xl border border-line bg-[#f7fafa] py-3.5 pl-12 pr-4 outline-none transition focus:border-brand"
                  />
                </label>
                <label className="relative block">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand" size={18} />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-line bg-[#f7fafa] py-3.5 pl-12 pr-4 outline-none transition focus:border-brand"
                  />
                </label>
                <label className="relative block">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand" size={18} />
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full rounded-xl border border-line bg-[#f7fafa] py-3.5 pl-12 pr-4 outline-none transition focus:border-brand"
                  />
                </label>
                <label className="relative block">
                  <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-brand" size={18} />
                  <input
                    required
                    type="date"
                    name="date"
                    className="w-full rounded-xl border border-line bg-[#f7fafa] py-3.5 pl-12 pr-4 outline-none transition focus:border-brand"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 rounded-xl bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
                >
                  Book Appointment
                </button>
              </div>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
