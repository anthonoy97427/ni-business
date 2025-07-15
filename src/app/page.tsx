import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  TruckIcon, 
  ClockIcon, 
  StarIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tech-blue-600 to-tech-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight">
                  Spécialiste Mobile & Réparation
                  <span className="block text-emerald-action-500">à la Réunion</span>
                </h1>
                <p className="text-xl text-blue-100 mt-4">
                  N.I Business vous accompagne pour tous vos besoins en accessoires téléphone, 
                  réparation d'écrans et maintenance mobile. Service rapide et garantie qualité.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/boutique"
                  className="inline-flex items-center justify-center px-8 py-3 bg-emerald-action-500 text-white font-semibold rounded-lg hover:bg-emerald-action-600 transition-colors duration-200"
                >
                  Voir la boutique
                </Link>
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-tech-blue-600 transition-colors duration-200"
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <DevicePhoneMobileIcon className="h-12 w-12 text-emerald-action-500 mx-auto mb-2" />
                    <h3 className="font-semibold">Accessoires</h3>
                    <p className="text-sm text-blue-100">Coques, protections, chargeurs</p>
                  </div>
                  <div className="text-center">
                    <WrenchScrewdriverIcon className="h-12 w-12 text-emerald-action-500 mx-auto mb-2" />
                    <h3 className="font-semibold">Réparation</h3>
                    <p className="text-sm text-blue-100">Écrans, batteries, diagnostics</p>
                  </div>
                  <div className="text-center">
                    <ShieldCheckIcon className="h-12 w-12 text-emerald-action-500 mx-auto mb-2" />
                    <h3 className="font-semibold">Garantie</h3>
                    <p className="text-sm text-blue-100">6 mois sur toutes réparations</p>
                  </div>
                  <div className="text-center">
                    <TruckIcon className="h-12 w-12 text-emerald-action-500 mx-auto mb-2" />
                    <h3 className="font-semibold">Livraison</h3>
                    <p className="text-sm text-blue-100">Gratuite dès 50€ Réunion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-poppins font-bold text-anthracite-600 mb-4">
              Nos Services à la Réunion
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services pour votre smartphone. 
              Expertise locale, qualité garantie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-tech-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <DevicePhoneMobileIcon className="h-8 w-8 text-tech-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-anthracite-600 mb-4">
                Boutique Accessoires
              </h3>
              <p className="text-gray-600 mb-6">
                Large choix de coques, protections d'écran, chargeurs et accessoires 
                pour toutes les marques de smartphones.
              </p>
              <Link
                href="/boutique"
                className="inline-flex items-center text-tech-blue-600 hover:text-tech-blue-700 font-medium"
              >
                Voir les produits
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <WrenchScrewdriverIcon className="h-8 w-8 text-emerald-action-600 mx-auto" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-anthracite-600 mb-4">
                Réparation Express
              </h3>
              <p className="text-gray-600 mb-6">
                Réparation rapide d'écrans, changement de batteries, diagnostics complets. 
                Service professionnel avec garantie.
              </p>
              <Link
                href="/reparation"
                className="inline-flex items-center text-emerald-action-600 hover:text-emerald-action-700 font-medium"
              >
                Nos réparations
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-energy-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <ClockIcon className="h-8 w-8 text-energy-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-anthracite-600 mb-4">
                Service Rapide
              </h3>
              <p className="text-gray-600 mb-6">
                Devis gratuit sous 24h, réparation express, livraison rapide. 
                Votre satisfaction est notre priorité.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-energy-orange-600 hover:text-energy-orange-700 font-medium"
              >
                Nous contacter
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-poppins font-bold text-anthracite-600 mb-4">
              Pourquoi choisir N.I Business ?
            </h2>
            <p className="text-lg text-gray-600">
              Votre partenaire de confiance pour tous vos besoins mobile à la Réunion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-tech-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-anthracite-600 mb-2">Garantie 6 mois</h3>
              <p className="text-gray-600 text-sm">Sur toutes nos réparations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-action-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <TruckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-anthracite-600 mb-2">Livraison gratuite</h3>
              <p className="text-gray-600 text-sm">Dès 50€ d'achat sur toute la Réunion</p>
            </div>
            
            <div className="text-center">
              <div className="bg-energy-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-anthracite-600 mb-2">Service rapide</h3>
              <p className="text-gray-600 text-sm">Réparation express sous 24h</p>
            </div>
            
            <div className="text-center">
              <div className="bg-tech-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-anthracite-600 mb-2">Expertise locale</h3>
              <p className="text-gray-600 text-sm">Spécialiste mobile depuis 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-action-500 to-emerald-action-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold mb-4">
            Besoin d'une réparation ou d'accessoires ?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit. 
            Service professionnel et garantie qualité à la Réunion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-action-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Demander un devis
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-action-600 transition-colors duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 