import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { images } from '../data'
import { fadeUp, stagger, SectionHeader } from './motion'

const services = [
  {
    title: 'Cardiology',
    text: 'Advanced heart diagnostics, interventional care, and long-term cardiac wellness programs.',
    image: images.cardiology,
  },
  {
    title: 'Neurology',
    text: 'Comprehensive brain and nerve care with expert neurologists and modern imaging.',
    image: images.neurology,
  },
  {
    title: 'Dental Surgery',
    text: 'Gentle, precise oral surgery and restorative dentistry for a confident smile.',
    image: images.dental,
  },
  {
    title: 'Pediatrics',
    text: 'Child-first clinics covering growth, vaccines, and specialist pediatric support.',
    image: images.pediatric,
  },
  {
    title: 'Maternity Care',
    text: 'Prenatal through postnatal support with private suites and experienced midwives.',
    image: images.maternity,
  },
  {
    title: 'Physical Therapy',
    text: 'Personalized rehab plans to restore mobility after injury, surgery, or illness.',
    image: images.therapy,
  },
]

export default function Specialties() {
  return (
    <section id="services" className="bg-mint py-20 md:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Specialties"
          title="Exceeding the way in medical treatment and patient care"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              className="group relative min-h-[340px] overflow-hidden rounded-3xl bg-white shadow-sm transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 z-0 h-44 overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-full">
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/35 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
              </div>

              <div className="relative z-10 flex min-h-[340px] flex-col justify-end">
                <div className="bg-white p-6 transition-colors duration-500 ease-out group-hover:bg-transparent group-hover:p-7">
                  <h3 className="text-xl font-extrabold text-navy transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted transition-colors duration-500 group-hover:text-white/85">
                    {service.text}
                  </p>
                  <a
                    href="#appointment"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full px-0 py-0 text-sm font-bold text-brand transition-all duration-500 ease-out group-hover:mt-5 group-hover:bg-brand group-hover:px-5 group-hover:py-2.5 group-hover:text-white"
                  >
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
