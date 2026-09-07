import { motion } from 'framer-motion'
import { Search, Star } from 'lucide-react'
import { images } from '../data'
import { FadeIn } from './motion'

export default function Hero() {
  return (
    <section id="home" className="relative bg-mint-soft pt-[110px] pb-28 md:pb-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-dot absolute right-[8%] top-28 h-40 w-40 opacity-70" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <FadeIn>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand shadow-sm">
              Trusted Healthcare Partner
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-navy md:text-5xl lg:text-[56px]">
              Advanced Medical Excellence – Compassionate Care for Every Patient
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-lg text-[16.5px] leading-7 text-muted">
              From preventive care to complex surgery, our specialists combine modern technology
              with genuine human warmth — so you and your family feel safe at every step.
            </p>
          </FadeIn>
          <FadeIn delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#appointment"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Get Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-navy/15 bg-white px-7 py-3.5 text-sm font-bold text-navy transition hover:border-brand hover:text-brand"
            >
              Explore Services
            </a>
          </FadeIn>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand/15" />
            <img
              src={images.nurse}
              alt="Medix nurse smiling with a clipboard"
              className="relative z-10 h-[460px] w-full rounded-[28px] object-cover object-top shadow-2xl shadow-navy/15 md:h-[500px]"
            />

            <motion.img
              initial={{ opacity: 0, x: -24, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              src={images.seniorDoctor}
              alt="Senior physician"
              className="absolute -left-6 top-16 z-20 hidden h-36 w-28 rounded-2xl object-cover shadow-xl ring-4 ring-white sm:block"
            />
            <motion.img
              initial={{ opacity: 0, x: 24, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              src={images.motherChild}
              alt="Mother and child patient"
              className="absolute -right-4 bottom-16 z-20 hidden h-32 w-40 rounded-2xl object-cover shadow-xl ring-4 ring-white sm:block"
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="absolute -bottom-4 left-8 z-20 rounded-2xl bg-white px-4 py-3 shadow-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">24/7 Service</p>
              <p className="text-sm font-bold text-navy">Emergency care always on</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <FadeIn delay={0.2} className="container-page relative z-20 mt-16 md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:translate-y-1/2">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 rounded-2xl bg-brand p-4 text-white shadow-2xl shadow-brand/30 sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-5"
        >
          <div className="flex min-w-[180px] items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
              <Star size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs font-medium text-white/80">Our satisfied customers</p>
              <p className="text-2xl font-extrabold leading-none">4.99</p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-white/25 sm:block" />
          <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-navy">
            <Search size={18} className="text-brand" />
            <input
              type="search"
              placeholder="Find the best doctor or nearest care center..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-navy px-4 py-2 text-sm font-bold text-white hover:bg-navy-soft"
            >
              Search
            </button>
          </div>
        </form>
      </FadeIn>
    </section>
  )
}
