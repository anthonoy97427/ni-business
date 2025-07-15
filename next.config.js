/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.woocommerce.com https://*.woocommerce.com",
              "frame-src 'self' https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // Autres headers de sécurité
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  
  // Configuration des images
  images: {
    domains: ['localhost', 'your-woocommerce-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Optimisations
  experimental: {
    optimizeCss: true,
  },
  
  // Configuration pour la Réunion
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  
  // Variables d'environnement publiques
  env: {
    SITE_NAME: 'N.I Business',
    SITE_DESCRIPTION: 'Spécialiste accessoires et réparation mobile à la Réunion',
  }
}

module.exports = nextConfig 