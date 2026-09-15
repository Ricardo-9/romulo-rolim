import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rômulo Rolim — Odontologia Integrada | Sorrisos Únicos',
  description:
    'Odontologia de alto padrão em Barro - CE. Estética dental, reabilitação oral, implantes e ortodontia com atendimento humanizado e tecnologia avançada. Agende sua consulta.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png', // ou '/icon.png' / '/favicon.svg'
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png', // Opcional: ícone para quando salvar na tela inicial do iOS
  },
  openGraph: {
    title: 'Rômulo Rolim — Odontologia Integrada',
    description:
      'Transformando vidas através de sorrisos únicos. Odontologia premium em Barro - CE.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0d0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}