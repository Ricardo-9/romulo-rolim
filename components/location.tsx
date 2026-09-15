import { MapPin, MessageCircle, Clock, Phone } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { WHATSAPP_URL, INSTAGRAM_URL, MAPS_URL, CLINIC } from '@/lib/site'

export function Location() {
  return (
    <section id="localizacao" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-amber-500/20 bg-white/[0.03] backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-amber-500/80">
                Onde nos encontrar
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-silver sm:text-4xl">
                Venha viver a <span className="gold-text">experiência</span>
              </h2>
              <p className="mt-4 text-silver/60">
                Estamos prontos para receber você em um espaço pensado para o seu
                conforto. Agende sua avaliação e dê o primeiro passo.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-silver">Endereço</p>
                    <p className="text-sm text-silver/60">{CLINIC.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-silver">WhatsApp</p>
                    <p className="text-sm text-silver/60">{CLINIC.phoneDisplay}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-amber-400">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-silver">
                      Horário de atendimento
                    </p>
                    <p className="text-sm text-silver/60">
                      Segunda a Sexta, 08h às 18h
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 px-6 py-3.5 text-sm font-semibold text-[#0d0d0e] shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Agendar Consulta
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-amber-500/25 px-6 py-3.5 text-sm font-semibold text-silver transition-colors hover:border-amber-400 hover:text-amber-400"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Seguir no Instagram
                </a>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir localização no Google Maps"
              className="group relative min-h-[320px] overflow-hidden border-t border-amber-500/15 lg:border-l lg:border-t-0"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)]" />
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)',
                  backgroundSize: '44px 44px',
                }}
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/30 bg-[#0d0d0e]/60 text-amber-400 transition-transform duration-500 group-hover:scale-110">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </span>
                <p className="font-serif text-lg text-silver">
                  Rômulo Rolim — Odontologia Integrada
                </p>
                <p className="max-w-xs text-sm text-silver/60">{CLINIC.address}</p>
                <span className="rounded-full border border-amber-500/25 px-4 py-2 text-xs font-medium text-amber-400 transition-colors group-hover:border-amber-400">
                  Ver rota no Google Maps
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
