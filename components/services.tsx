import Image from 'next/image'
import { Smile, Layers, Anchor, AlignHorizontalDistributeCenter, ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const SERVICES = [
  {
    icon: Smile,
    title: 'Estética Dental',
    description:
      'Lentes de contato, clareamento e design do sorriso para uma harmonia natural e impecável.',
  },
  {
    icon: Layers,
    title: 'Reabilitação Oral',
    description:
      'Recuperação completa da função e da estética com próteses e tratamentos integrados de precisão.',
  },
  {
    icon: Anchor,
    title: 'Implantes',
    description:
      'Substituição de dentes com implantes seguros, duradouros e indistinguíveis dos naturais.',
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: 'Ortodontia',
    description:
      'Alinhamento com aparelhos convencionais e estéticos para um sorriso equilibrado e saudável.',
  },
]

export function Services() {
  return (
    <section id="especialidades" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-500/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/20">
              <Image
                src="/images/teeth-comparison.jpg"
                alt="Comparação de sorriso antes e depois com facetas dentárias brancas e polidas"
                width={640}
                height={760}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e]/80 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500/80">
              Especialidades
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-silver sm:text-4xl">
              Tratamentos que unem{' '}
              <span className="gold-text">arte e ciência</span>
            </h2>
            <p className="mt-4 max-w-lg text-silver/60">
              Do detalhe estético à reabilitação completa, oferecemos soluções
              integradas com o mais alto nível de exigência.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-amber-500/20 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400 transition-transform duration-500 group-hover:scale-110">
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-silver">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver/60">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
            >
              Fale com o especialista sobre o seu caso
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
