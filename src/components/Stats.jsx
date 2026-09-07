import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger } from './motion'

const stats = [
  { value: 23000, suffix: '+', label: 'Total Patients' },
  { value: 75, suffix: '+', label: 'Expert Doctors' },
  { value: 12, suffix: '+', label: 'Departments' },
  { value: 14, suffix: '+', label: 'Experience Years' },
  { value: 96, suffix: '%', label: 'Happy Clients' },
  { value: 45, suffix: '+', label: 'Awards Won' },
]

function CountUp({ end, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * end))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, end])

  const formatted = end >= 1000 ? value.toLocaleString() : String(value)

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-white py-8">
      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6"
        >
          {stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl bg-[#f4f7f6] px-4 py-6 text-center"
            >
              <p className="text-2xl font-extrabold text-navy md:text-[28px]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
