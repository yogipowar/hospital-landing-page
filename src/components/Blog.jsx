import { Calendar } from 'lucide-react'
import { images } from '../data'
import { FadeIn, SectionHeader } from './motion'

const posts = [
  {
    title: 'How to protect your heart during high-stress seasons',
    date: '12 Aug 2026',
    image: images.blog2,
  },
  {
    title: 'Pediatric wellness visits every parent should schedule',
    date: '04 Aug 2026',
    image: images.blog3,
  },
  {
    title: 'Recovery tips after minimally invasive surgery',
    date: '21 Jul 2026',
    image: images.blog4,
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-mint-soft pt-20 pb-28 md:pt-24 md:pb-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Health Journal"
          title="Health & well-being — trends and innovations from our experts"
        />
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <img src={images.blog1} alt="" className="h-72 w-full object-cover" />
              <div className="p-7">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand">
                  <Calendar size={15} /> 18 Aug 2026
                </p>
                <h3 className="text-2xl font-extrabold text-navy">
                  Five innovations reshaping hospital care this year
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  From AI-assisted imaging to faster recovery pathways, our specialists share the
                  advances already improving outcomes on the Medix campus.
                </p>
                <a href="#contact" className="mt-4 inline-block text-sm font-bold text-brand">
                  Continue reading
                </a>
              </div>
            </article>
          </FadeIn>

          <div className="grid gap-4">
            {posts.map((post, i) => (
              <FadeIn key={post.title} delay={0.1 * i}>
                <article className="flex gap-4 rounded-2xl bg-white p-3 shadow-sm">
                  <img
                    src={post.image}
                    alt=""
                    className="h-24 w-28 shrink-0 rounded-xl object-cover"
                  />
                  <div className="py-1 pr-2">
                    <p className="text-xs font-semibold text-brand">{post.date}</p>
                    <h3 className="mt-1 font-bold leading-snug text-navy">{post.title}</h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
