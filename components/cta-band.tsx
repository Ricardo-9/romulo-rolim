import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { WHATSAPP_URL, INSTAGRAM_URL } from '@/lib/site'

export function CtaBand() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/20">
          <Image
            src="/images/clinic-facade.jpg"
            alt="Fachada da clínica Rômulo Rolim Odontologia Integrada"
            fill
            sizes="(max-width: 1024px) 100vw, 1400px"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0e]/85 via-[#0d0d0e]/80 to-[#0d0d0e]/90 sm:bg-gradient-to-r sm:from-[#0d0d0e] sm:via-[#0d0d0e]/85 sm:to-[#0d0d0e]/40" />
          <div className="relative flex items-center">
            <div className="w-full max-w-xl px-6 py-12 text-center sm:px-8 sm:py-16 sm:text-left lg:px-14">
              <h2 className="font-serif text-3xl font-semibold leading-tight text-silver sm:text-4xl">
                Seu novo sorriso começa com{' '}
                <span className="gold-text">uma conversa</span>
              </h2>
              <p className="mt-4 text-pretty text-silver/70">
                Agende sua avaliação e descubra como podemos transformar não
                apenas o seu sorriso, mas a sua confiança.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 px-7 py-3.5 text-sm font-semibold text-[#0d0d0e] shadow-lg shadow-amber-500/25 transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Falar no WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-amber-500/30 bg-[#0d0d0e]/40 px-7 py-3.5 text-sm font-semibold text-silver backdrop-blur-sm transition-colors hover:border-amber-400 hover:text-amber-400 sm:w-auto"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @rr_odontologiaintegrada
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
