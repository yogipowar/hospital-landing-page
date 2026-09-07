import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function FadeIn({
  children,
  className = '',
  delay = 0,
  y = 36,
  x = 0,
  duration = 0.7,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

export function SectionHeader({ eyebrow, title, align = 'left', className = '' }) {
  return (
    <FadeIn className={`mb-10 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-[40px]">
        {title}
      </h2>
    </FadeIn>
  )
}
