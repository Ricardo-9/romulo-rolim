import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 py-3.5 pl-3.5 pr-4 shadow-xl shadow-amber-500/30 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-amber-400/40" />
      <MessageCircle className="h-6 w-6 text-[#0d0d0e]" aria-hidden="true" />
      <span className="hidden text-sm font-semibold text-[#0d0d0e] sm:inline">
        Agendar
      </span>
    </a>
  )
}
