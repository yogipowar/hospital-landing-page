import { motion } from 'framer-motion'
import { images } from '../data'
import { fadeUp, stagger, SectionHeader } from './motion'
import SocialIcon, { socialLinks } from './SocialIcon'

const doctors = [
  { name: 'Dr. Arjun Mehta', role: 'Cardiologist', image: images.doc1 },
  { name: 'Dr. Priya Sharma', role: 'Chief Surgeon', image: images.doc2 },
  { name: 'Dr. Rohan Iyer', role: 'Neurology Specialist', image: images.doc3 },
  { name: 'Dr. Ananya Reddy', role: 'Pediatrician', image: images.doc4 },
]

export default function Doctors() {
  return (
    <section id="doctors" className="bg-white py-20 md:py-24">
      <div className="container-page">
        <SectionHeader
          align="center"
          eyebrow="Our Experts"
          title="Dedicated to your well-being — world-class medical experts"
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {doctors.map((doc) => (
            <motion.article
              key={doc.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-mint-soft shadow-sm"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 transition group-hover:opacity-100">
                  {socialLinks.map(({ key, label }) => (
                    <a
                      key={key}
                      href="#contact"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white text-brand shadow"
                    >
                      <SocialIcon name={key} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-white px-5 py-5 text-center">
                <h3 className="font-extrabold text-navy">{doc.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{doc.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
