import { Quote, Star } from 'lucide-react'
import { images } from '../data'
import { FadeIn } from './motion'

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="container-page max-w-3xl text-center">
        <FadeIn>
          <Quote className="mx-auto mb-6 text-brand" size={48} strokeWidth={1.5} />
          <p className="text-xl font-medium leading-8 text-navy md:text-[26px] md:leading-10">
            “From the moment I arrived, the Medix team treated me like family. The doctors explained
            every step, the nurses were incredibly kind, and my recovery was faster than I expected.
            This is healthcare done with heart.”
          </p>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            {[images.avatar, images.avatar2, images.avatar3].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="-ml-2 h-11 w-11 rounded-full object-cover ring-2 ring-white first:ml-0"
              />
            ))}
          </div>
          <div>
            <p className="font-extrabold text-navy">Rahul Desai</p>
            <p className="text-sm text-muted">Cardiac Recovery Patient</p>
          </div>
          <div className="flex gap-1 text-brand">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
