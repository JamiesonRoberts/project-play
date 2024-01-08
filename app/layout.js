import CloudflareWebAnalyticsProvider from 'next-cloudflare-web-analytics'
import { Source_Sans_3, Ubuntu } from 'next/font/google'

import '@/components/_globals/globals.css'

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--ubuntu',
})
const sourceSansPro = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--source',
  display: 'swap',
})

export const viewport = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#0061C2',
  colorScheme: 'light',
}

export const metadata = {
  metadataBase: new URL('https://projectplay.ca/'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en-CA'
      className={`${ubuntu.variable} ${sourceSansPro.variable}`}
    >
      <CloudflareWebAnalyticsProvider
        token={'a897cdb6937f4c04b7cea8d97965370c'}
      />
      <body>{children}</body>
    </html>
  )
}
