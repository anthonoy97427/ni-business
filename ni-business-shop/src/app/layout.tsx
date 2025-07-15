import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'N.I Business - Spécialiste Mobile & Réparation à la Réunion',
  description: 'N.I Business, votre spécialiste en accessoires téléphone, écrans et réparation mobile à la Réunion. Service rapide, garantie qualité. Devis gratuit.',
  keywords: [
    'réparation téléphone réunion',
    'écran iphone réunion',
    'accessoires mobile réunion',
    'coque téléphone réunion',
    'réparation samsung réunion',
    'boutique mobile 974',
    'N.I Business',
  ].join(', '),
  authors: [{ name: 'N.I Business' }],
  creator: 'N.I Business',
  publisher: 'N.I Business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: 'N.I Business - Spécialiste Mobile & Réparation à la Réunion',
    description: 'N.I Business, votre spécialiste en accessoires téléphone, écrans et réparation mobile à la Réunion. Service rapide, garantie qualité.',
    siteName: 'N.I Business',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N.I Business - Spécialiste Mobile Réunion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N.I Business - Spécialiste Mobile & Réparation à la Réunion',
    description: 'N.I Business, votre spécialiste en accessoires téléphone, écrans et réparation mobile à la Réunion.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// Schema.org JSON-LD pour le SEO local
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'N.I Business',
  description: 'Spécialiste en accessoires téléphone, écrans et réparation mobile à la Réunion',
  url: process.env.NEXT_PUBLIC_SITE_URL,
  telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE,
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS,
    addressLocality: 'Réunion',
    addressCountry: 'FR',
    postalCode: '97400',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -21.1151,
    longitude: 55.5364,
  },
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 08:00-16:00',
  ],
  priceRange: '€',
  acceptsReservations: true,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de réparation mobile',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Réparation écran téléphone',
          description: 'Réparation et remplacement d\'écrans pour tous types de smartphones',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vente accessoires mobile',
          description: 'Coques, protections d\'écran, chargeurs et accessoires pour smartphones',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/nibusiness',
    'https://www.instagram.com/nibusiness',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter bg-white text-anthracite-600 antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 