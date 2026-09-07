import { Check } from 'lucide-react'
import { images } from '../data'
import { FadeIn } from './motion'

const points = [
  'Board-certified specialists across 12 clinical departments',
  '24/7 emergency response with on-site trauma teams',
  'Modern diagnostic labs and digital imaging suites',
  'Patient-first pathways with transparent treatment plans',
  'International hygiene and safety protocols',
  'Family waiting lounges and dedicated care coordinators',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <FadeIn x={-30} className="relative">
          <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-mint" />
          <img
            src={images.consult}
            alt="Doctors discussing a patient care plan"
            className="relative z-10 h-[480px] w-full rounded-[28px] object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 -right-4 z-20 hidden rounded-2xl bg-brand px-5 py-4 text-white shadow-xl sm:block">
            <p className="text-3xl font-extrabold">14+</p>
            <p className="text-sm font-medium text-white/85">Years of excellence</p>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              About Medix
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-[40px]">
              Dedicated to your well-being with world-class medical expertise
            </h2>
            <p className="mt-5 leading-7 text-muted">
              Medix Hospital brings together compassionate clinicians, advanced technology, and a
              healing environment designed around you. Every visit is coordinated so care feels
              personal, timely, and trustworthy.
            </p>
          </FadeIn>
          <ul className="mt-8 grid gap-3">
            {points.map((point, i) => (
              <FadeIn key={point} delay={0.08 * i}>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-brand">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="font-medium text-navy">{point}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
