import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Services } from '@/components/services'
import { Reviews } from '@/components/reviews'
import { CtaBand } from '@/components/cta-band'
import { Location } from '@/components/location'
import { SiteFooter } from '@/components/site-footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0d0d0e] text-silver">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Services />
        <Reviews />
        <CtaBand />
        <Location />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
