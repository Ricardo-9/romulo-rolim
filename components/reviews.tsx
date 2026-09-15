import { Star, Quote } from 'lucide-react'
import { CLINIC } from '@/lib/site'

const REVIEWS = [
  {
    name: 'Klefeson',
    initial: 'K',
    quote:
      'Capacitado para entregar o melhor, não apenas na parte técnica mas também humana. Um profissional que se importa de verdade com o paciente.',
  },
  {
    name: 'Felipe',
    initial: 'F',
    quote:
      'Profissionalismo é o carro chefe! Atendimento impecável do início ao fim, superou todas as minhas expectativas.',
  },
  {
    name: 'Ana Paula',
    initial: 'A',
    quote:
      'Ambiente sofisticado e uma equipe extremamente atenciosa. Saí com o sorriso que sempre sonhei e me senti acolhida em cada etapa.',
  },
]

export function Reviews() {
  return (
    <section id="depoimentos" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500/80">
            Prova social
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-silver sm:text-4xl">
            Histórias de quem <span className="gold-text">confiou</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-white/[0.03] px-5 py-2">
            <span className="font-serif text-xl font-bold text-amber-400">
              {CLINIC.rating}
            </span>
            <span className="flex gap-0.5">
              {[0, 1, 2, 3].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
              <Star
                className="h-4 w-4 fill-amber-400/50 text-amber-400"
                aria-hidden="true"
              />
            </span>
            <span className="text-sm text-silver/60">no Google</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="relative flex h-full flex-col rounded-2xl border border-amber-500/20 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.05]"
            >
              <Quote
                className="h-8 w-8 text-amber-500/40"
                aria-hidden="true"
              />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-silver/75">
                {`"${r.quote}"`}
              </blockquote>
              <div className="mt-6 flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-amber-500/10 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 font-serif text-lg font-semibold text-amber-400">
                  {r.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-silver">{r.name}</p>
                  <p className="text-xs text-silver/50">Avaliação Google</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
