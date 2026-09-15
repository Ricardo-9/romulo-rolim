'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { MessageCircle, Menu, X, ShieldCheck } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { WHATSAPP_URL, INSTAGRAM_URL, CLINIC } from '@/lib/site'

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Localização', href: '#localizacao' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-amber-500/15 bg-[#0d0d0e]/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-amber-500/30">
            <Image
              src="/images/romulo-rolim-logo.jpg"
              alt="Logo Rômulo Rolim Odontologia Integrada"
              fill
              className="object-cover"
              sizes="44px"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-wide text-silver">
              Rômulo Rolim
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-amber-500/80">
              Odontologia Integrada
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-silver/70 transition-colors hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 text-[11px] font-medium text-amber-300/90 md:flex">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {CLINIC.cro}
          </span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-amber-500/20 text-silver/80 transition-colors hover:border-amber-400 hover:text-amber-400 sm:flex"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 px-5 py-2.5 text-sm font-semibold text-[#0d0d0e] shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.03] sm:flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agendar Consulta
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-500/20 text-silver lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-amber-500/15 bg-[#0d0d0e]/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-silver/80 transition-colors hover:bg-amber-500/10 hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 px-5 py-3 text-sm font-semibold text-[#0d0d0e]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
