import { HeartHandshake, Microscope, Gem } from 'lucide-react'

const FEATURES = [
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    description:
      'Escutamos você antes de tratar. Cada plano é construído com empatia, acolhimento e respeito ao seu tempo e à sua história.',
  },
  {
    icon: Microscope,
    title: 'Tecnologia Avançada',
    description:
      'Diagnósticos digitais, planejamento preciso e equipamentos de última geração para resultados previsíveis e duradouros.',
  },
  {
    icon: Gem,
    title: 'Ambiente Premium',
    description:
      'Uma clínica pensada nos mínimos detalhes para oferecer conforto, privacidade e uma experiência verdadeiramente exclusiva.',
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500/80">
            Por que nos escolher
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-silver sm:text-4xl">
            Excelência em cada <span className="gold-text">detalhe</span>
          </h2>
          <p className="mt-4 text-silver/60">
            Combinamos ciência, arte e cuidado para entregar muito mais do que um
            tratamento — uma verdadeira transformação.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/[0.05]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="relative mt-6 font-serif text-xl font-semibold text-silver">
                {f.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-silver/60">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
