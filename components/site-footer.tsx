import Image from 'next/image'
import { MessageCircle, MapPin, ShieldCheck } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { WHATSAPP_URL, INSTAGRAM_URL, CLINIC } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-amber-500/15 bg-[#0a0a0b]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-amber-500/30">
                <Image
                  src="/images/romulo-rolim-logo.jpg"
                  alt="Logo Rômulo Rolim Odontologia Integrada"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-silver">
                  Rômulo Rolim
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-amber-500/80">
                  Odontologia Integrada
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver/55">
              Odontologia de alto padrão dedicada a transformar vidas através de
              sorrisos únicos, com técnica de excelência e cuidado humano.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 text-[11px] font-medium text-amber-300/90">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {CLINIC.cro}
            </span>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-amber-400/90">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-silver/55">
              <li><a href="#inicio" className="transition-colors hover:text-amber-400">Início</a></li>
              <li><a href="#diferenciais" className="transition-colors hover:text-amber-400">Diferenciais</a></li>
              <li><a href="#especialidades" className="transition-colors hover:text-amber-400">Especialidades</a></li>
              <li><a href="#depoimentos" className="transition-colors hover:text-amber-400">Depoimentos</a></li>
              <li><a href="#localizacao" className="transition-colors hover:text-amber-400">Localização</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-amber-400/90">
              Contato
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-silver/55">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/70" aria-hidden="true" />
                {CLINIC.address}
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-amber-400"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-amber-500/70" aria-hidden="true" />
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-amber-400"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-amber-500/70" />
                  @rr_odontologiaintegrada
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-amber-500/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-silver/45">
            © {year} Rômulo Rolim — Odontologia Integrada. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-silver/40">
            {CLINIC.cro} · Barro - CE
          </p>
        </div>
      </div>
    </footer>
  )
}
