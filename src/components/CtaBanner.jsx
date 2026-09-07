import { FadeIn } from './motion'

export default function CtaBanner() {
  return (
    <section className="bg-white pb-4">
      <div className="container-page">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand px-8 py-10 text-white shadow-xl shadow-brand/20 md:flex-row md:items-center md:px-12">
            <h2 className="max-w-xl text-2xl font-extrabold leading-snug md:text-[32px]">
              Your health is our first priority — booking an appointment is quick and easy.
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-brand transition hover:bg-mint"
              >
                Get Appointment
              </a>
              <a
                href="tel:+1234567890"
                className="rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
