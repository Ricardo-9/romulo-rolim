import Image from 'next/image'
import {
  Sparkles,
  AlignHorizontalDistributeCenter,
  Anchor,
  Activity,
  FileSearch,
  HeartPulse,
  ArrowUpRight,
} from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Facetas & Restaurações',
    description:
      'Facetas de resina e restaurações estéticas de alta precisão para devolver a harmonia do seu sorriso.',
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: 'Ortodontia',
    description:
      'Alinhamento e correção funcional com aparelhos ortodônticos convencionais e estéticos.',
  },
  {
    icon: Anchor,
    title: 'Implantes & Próteses',
    description:
      'Implantes dentários seguros e próteses fixas ou removíveis para a reabilitação oral completa.',
  },
  {
    icon: Activity,
    title: 'Tratamento de Canal',
    description:
      'Procedimentos endodônticos com tecnologia avançada focados na preservação do dente natural.',
  },
  {
    icon: FileSearch,
    title: 'Radiografias & Cirurgias',
    description:
      'Exames de imagem precisos para diagnósticos seguros e procedimentos cirúrgicos com conforto.',
  },
  {
    icon: HeartPulse,
    title: 'Odontologia Integrada',
    description:
      'Atendimento preventivo, diagnóstico humanizado e cuidados de saúde bucal para sua família.',
  },
]

export function Services() {
  return (
    <section id="especialidades" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Cabeçalho isolado no topo (Livre do conflito com o menu) */}
        <div className="mb-10 text-center lg:text-left">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500/80">
            Especialidades
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-silver sm:text-4xl">
            Tratamentos que unem <span className="gold-text">arte e ciência</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-silver/60">
            Do detalhe estético à reabilitação completa, oferecemos soluções integradas com o mais alto nível de exigência.
          </p>
        </div>

        {/* Grid Principal: Foto com proporção travada na esquerda + 6 Cards na direita */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          
          {/* Card da Foto (Ocupa 4 colunas das 12 no PC / Altura proporcional controlada) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-zinc-900/40 h-[380px] lg:h-[410px] w-full">
              <Image
                src="/images/teeth-comparison.jpg"
                alt="Comparação de sorriso antes e depois"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                  Caso Clínico
                </span>
                <p className="text-xs font-medium text-silver mt-0.5">
                  Transformação estética com facetas de alta precisão.
                </p>
              </div>
            </div>
          </div>

          {/* Grid dos Cards de Serviços (Ocupa 8 colunas das 12 no PC: 3 colunas x 2 linhas) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="group flex flex-col justify-between rounded-xl border border-amber-500/20 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.05]"
                >
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/25 bg-amber-500/10 text-amber-400 transition-transform duration-300 group-hover:scale-110">
                      <s.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 font-serif text-sm font-semibold text-silver">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-silver/60">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link do WhatsApp abaixo do Grid */}
            <div className="mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300"
              >
                Fale com o especialista sobre o seu caso
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}