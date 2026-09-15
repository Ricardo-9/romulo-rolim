import Image from 'next/image'
import { MessageCircle, Star, Sparkles } from 'lucide-react'
import { WHATSAPP_URL, CLINIC } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="marble-bg relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Odontologia de Alto Padrão
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-silver sm:text-5xl lg:text-6xl">
            Transformando Vidas Através de{' '}
            <span className="gold-text">Sorrisos Únicos</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-silver/65 lg:mx-0 lg:text-lg">
            Uma experiência odontológica que une técnica de excelência, tecnologia
            de ponta e um cuidado profundamente humano. Cada sorriso é uma obra
            projetada exclusivamente para você.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 px-7 py-4 text-sm font-semibold text-[#0d0d0e] shadow-xl shadow-amber-500/25 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#especialidades"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-amber-500/25 px-7 py-4 text-sm font-semibold text-silver transition-colors hover:border-amber-400 hover:text-amber-400 sm:w-auto"
            >
              Conhecer Especialidades
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            <div className="flex items-center gap-3 rounded-2xl border border-amber-500/15 bg-white/[0.03] px-5 py-3 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-amber-400">
                  {CLINIC.rating}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-silver/50">
                  Google
                </span>
              </div>
              <div className="h-10 w-px bg-amber-500/15" />
              <div>
                <div className="flex gap-0.5">
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
                </div>
                <p className="mt-1 text-xs text-silver/60">
                  Avaliação de pacientes reais
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-300/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/20 shadow-2xl shadow-black/60">
            <Image
              src="/images/smile.png"
              alt="Sorriso radiante resultado de tratamento odontológico premium"
              width={720}
              height={860}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-amber-500/20 bg-[#0d0d0e]/70 px-5 py-3 backdrop-blur-md">
              <div>
                <p className="font-serif text-sm text-silver">Dr. Rômulo Rolim</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-400/80">
                  {CLINIC.cro}
                </p>
              </div>
              <Sparkles className="h-5 w-5 text-amber-400" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
