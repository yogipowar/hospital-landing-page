import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { images } from '../data'
import { fadeUp, stagger, SectionHeader } from './motion'

const services = [
  {
    title: 'Cardiology',
    text: 'Advanced heart diagnostics, interventional care, and long-term cardiac wellness programs.',
    image: images.cardiology,
    featured: true,
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
              whileHover={{ y: -8 }}
              className={`group overflow-hidden rounded-3xl shadow-sm transition hover:shadow-xl ${
                service.featured ? 'relative min-h-[280px]' : 'bg-white'
              }`}
            >
              {service.featured ? (
                <>
                  <img
                    src={service.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
                  <div className="relative flex h-full min-h-[280px] flex-col justify-end p-7 text-white">
                    <h3 className="text-2xl font-extrabold">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">{service.text}</p>
                    <a
                      href="#appointment"
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white"
                    >
                      Learn More <ArrowRight size={16} />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-navy">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{service.text}</p>
                    <a
                      href="#appointment"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand"
                    >
                      Read More <ArrowRight size={14} />
                    </a>
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
