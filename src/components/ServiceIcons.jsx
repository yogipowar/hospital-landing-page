import { motion } from 'framer-motion'
import {
  Activity,
  Ambulance,
  Bone,
  HeartPulse,
  Home,
  Microscope,
  Stethoscope,
  Syringe,
} from 'lucide-react'
import { fadeUp, stagger, SectionHeader } from './motion'

const items = [
  { icon: Ambulance, label: '24/7 Emergency Care' },
  { icon: HeartPulse, label: 'Expert Cardiology' },
  { icon: Stethoscope, label: 'General Consultation' },
  { icon: Microscope, label: 'Modern Laboratory' },
  { icon: Bone, label: 'Surgery Department' },
  { icon: Syringe, label: 'Blood Donation' },
  { icon: Activity, label: 'Diagnostic Imaging' },
  { icon: Home, label: 'Home Care Visits' },
]

export default function ServiceIcons() {
  return (
    <section className="bg-white pt-28 pb-16 md:pt-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="What We Offer"
          title="We are compassionate in delivering the best in all ranges of healthcare"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8"
        >
          {items.map(({ icon: Icon, label }) => (
            <motion.article
              key={label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center rounded-2xl border border-line bg-white px-3 py-6 text-center shadow-sm transition hover:border-brand/30 hover:shadow-lg"
            >
              <span className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-mint text-brand">
                <Icon size={22} />
              </span>
              <p className="text-[13px] font-bold leading-snug text-navy">{label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
