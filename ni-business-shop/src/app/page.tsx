'use client'

import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  TruckIcon, 
  ClockIcon, 
  StarIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
  UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function HomePage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const servicesAnimation = useScrollAnimation({ threshold: 0.1 })
  const historyAnimation = useScrollAnimation({ threshold: 0.1 })
  const statsAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tech-blue-600 to-tech-blue-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={heroAnimation.elementRef}
              className={`space-y-8 ${heroAnimation.isVisible ? 'animate-slide-right' : 'opacity-0'}`}
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-poppins font-bold leading-tight">
                  <span className="inline-block animate-fade-in">Spécialiste Mobile & Réparation</span>
                  <span className="block text-emerald-action-500 animate-slide-up delay-300">à la Réunion</span>
                </h1>
                <p className="text-xl text-blue-100 mt-4 animate-fade-in delay-500">
                  N.I Business vous accompagne pour tous vos besoins en accessoires téléphone, 
                  réparation d&apos;écrans et maintenance mobile. Service rapide et garantie qualité.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/boutique"
                  className="inline-flex items-center justify-center px-8 py-3 bg-emerald-action-500 text-white font-semibold rounded-lg hover:bg-emerald-action-600 transition-all duration-300 hover-lift animate-bounce-in delay-600"
                >
                  Voir la boutique
                </Link>
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-tech-blue-600 transition-all duration-300 hover-scale animate-bounce-in delay-700"
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
            
            <div className={`relative ${heroAnimation.isVisible ? 'animate-slide-left delay-400' : 'opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-glow">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center hover-scale animate-bounce-in delay-800">
                    <DevicePhoneMobileIcon className="h-12 w-12 text-emerald-action-500 mx-auto mb-2 animate-pulse-glow" />
                    <h3 className="font-semibold">Accessoires</h3>
                    <p className="text-sm text-blue-100">Coques, protections, chargeurs</p>
                  </div>
                  <div className="text-center hover-scale animate-bounce-in delay-900">
                    <WrenchScrewdriverIcon className="h-12 w-12 text-emerald-action-500 mx-auto mb-2" />
                    <h3 className="font-semibold">Réparation</h3>
                    <p className="text-sm text-blue-100">Écrans, batteries, diagnostics</p>
                  </div>
                  <div className="text-center hover-scale animate-bounce-in delay-1000">
                    <ShieldCheckIcon className="h-12 w-12 text-emerald-action-500 mx-auto mb-2" />
                    <h3 className="font-semibold">Garantie</h3>
                    <p className="text-sm text-blue-100">6 mois sur toutes réparations</p>
                  </div>
                  <div className="text-center hover-scale animate-bounce-in delay-1100">
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
          <div 
            ref={servicesAnimation.elementRef}
            className={`text-center mb-16 ${servicesAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h2 className="text-3xl font-poppins font-bold text-anthracite-600 mb-4 animate-slide-up delay-200">
              Nos Services à la Réunion
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in delay-400">
              Découvrez notre gamme complète de services pour votre smartphone. 
              Expertise locale, qualité garantie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover-lift ${servicesAnimation.isVisible ? 'animate-slide-up delay-600' : 'opacity-0'}`}>
              <div className="bg-tech-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 hover-scale">
                <DevicePhoneMobileIcon className="h-8 w-8 text-tech-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-anthracite-600 mb-4">
                Boutique Accessoires
              </h3>
              <p className="text-gray-600 mb-6">
                Large choix de coques, protections d&apos;écran, chargeurs et accessoires 
                pour toutes les marques de smartphones.
              </p>
              <Link
                href="/boutique"
                className="inline-flex items-center text-tech-blue-600 hover:text-tech-blue-700 font-medium hover-scale transition-all duration-200"
              >
                Voir les produits
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover-lift ${servicesAnimation.isVisible ? 'animate-slide-up delay-700' : 'opacity-0'}`}>
              <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 hover-scale">
                <WrenchScrewdriverIcon className="h-8 w-8 text-emerald-action-600 mx-auto" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-anthracite-600 mb-4">
                Réparation Express
              </h3>
              <p className="text-gray-600 mb-6">
                Réparation rapide d&apos;écrans, changement de batteries, diagnostics complets. 
                Service professionnel avec garantie.
              </p>
              <Link
                href="/reparation"
                className="inline-flex items-center text-emerald-action-600 hover:text-emerald-action-700 font-medium hover-scale transition-all duration-200"
              >
                Nos réparations
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover-lift ${servicesAnimation.isVisible ? 'animate-slide-up delay-800' : 'opacity-0'}`}>
              <div className="bg-energy-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 hover-scale">
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
                className="inline-flex items-center text-energy-orange-600 hover:text-energy-orange-700 font-medium hover-scale transition-all duration-200"
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

      {/* Notre Histoire Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={historyAnimation.elementRef}
              className={`${historyAnimation.isVisible ? 'animate-slide-right' : 'opacity-0'}`}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-poppins font-bold text-anthracite-600 mb-6 animate-fade-in delay-200">
                  Notre Histoire : 
                  <span className="text-tech-blue-600 animate-slide-up delay-400">La Passion Mobile depuis 2020</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p className="animate-fade-in delay-600">
                    <strong className="text-anthracite-600">N.I Business</strong> est né d&apos;une passion : 
                    démocratiser l&apos;accès aux technologies mobiles pour tous les Réunionnais. 
                    Fondée en 2020 par des passionnés de technologie, notre entreprise s&apos;est 
                    rapidement imposée comme <em>la référence</em> en matière de réparation mobile 
                    et d&apos;accessoires sur l&apos;île.
                  </p>
                  <p className="animate-fade-in delay-700">
                    Partant du constat que les Réunionnais méritaient un service de qualité, 
                    proche et accessible, nous avons développé une expertise unique qui combine 
                    <strong>savoir-faire technique</strong> et <strong>service humain</strong>. 
                    Chaque réparation, chaque conseil est pensé pour prolonger la vie de vos appareils.
                  </p>
                  <p className="animate-fade-in delay-800">
                    Aujourd&apos;hui, avec plus de <strong>2000 clients satisfaits</strong> et 
                    <strong>5000+ réparations</strong> effectuées, N.I Business continue d&apos;innover 
                    pour vous offrir les meilleurs services mobile de l&apos;océan Indien.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center animate-bounce-in delay-900 hover-scale">
                  <AnimatedCounter 
                    end={2020} 
                    className="text-2xl font-bold text-tech-blue-600"
                    duration={1500}
                  />
                  <div className="text-sm text-gray-500">Année de création</div>
                </div>
                <div className="text-center animate-bounce-in delay-1000 hover-scale">
                  <AnimatedCounter 
                    end={2000} 
                    suffix="+"
                    className="text-2xl font-bold text-emerald-action-600"
                    duration={2000}
                  />
                  <div className="text-sm text-gray-500">Clients satisfaits</div>
                </div>
                <div className="text-center animate-bounce-in delay-1100 hover-scale">
                  <AnimatedCounter 
                    end={5000} 
                    suffix="+"
                    className="text-2xl font-bold text-energy-orange-600"
                    duration={2500}
                  />
                  <div className="text-sm text-gray-500">Réparations</div>
                </div>
                <div className="text-center animate-bounce-in delay-1200 hover-scale">
                  <AnimatedCounter 
                    end={974} 
                    className="text-2xl font-bold text-tech-blue-600"
                    duration={1000}
                  />
                  <div className="text-sm text-gray-500">Notre île ❤️</div>
                </div>
              </div>
            </div>
            
            <div className={`relative ${historyAnimation.isVisible ? 'animate-slide-left delay-500' : 'opacity-0'}`}>
              <div className="bg-gradient-to-br from-tech-blue-50 to-emerald-50 rounded-2xl p-8 hover-glow">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover-lift animate-scale-up delay-600">
                    <HeartIcon className="h-8 w-8 text-alert-red-500 mx-auto mb-3 animate-pulse-glow" />
                    <h4 className="font-semibold text-anthracite-600 mb-2">Passion</h4>
                    <p className="text-sm text-gray-600">Amoureux de la tech depuis toujours</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover-lift animate-scale-up delay-700">
                    <MapPinIcon className="h-8 w-8 text-tech-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-anthracite-600 mb-2">Local</h4>
                    <p className="text-sm text-gray-600">Ancré dans le territoire réunionnais</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover-lift animate-scale-up delay-800">
                    <UserGroupIcon className="h-8 w-8 text-emerald-action-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-anthracite-600 mb-2">Équipe</h4>
                    <p className="text-sm text-gray-600">Techniciens certifiés et passionnés</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover-lift animate-scale-up delay-900">
                    <ShieldCheckIcon className="h-8 w-8 text-energy-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-anthracite-600 mb-2">Confiance</h4>
                    <p className="text-sm text-gray-600">Garantie et transparence toujours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages & Chiffres Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-poppins font-bold text-anthracite-600 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez les avis de nos clients et notre impact sur l&apos;île de la Réunion
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Témoignage 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <StarIcon key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Service excellent ! Mon iPhone 12 était complètement cassé, 
                l&apos;équipe de N.I Business l&apos;a réparé en moins de 24h. 
                Comme neuf et garanti 6 mois. Je recommande vivement !&quot;
              </p>
              <div>
                <div className="font-semibold text-anthracite-600">Marie L.</div>
                <div className="text-sm text-gray-500">Saint-Denis • Septembre 2024</div>
              </div>
            </div>
            
            {/* Témoignage 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <StarIcon key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Boutique en ligne top ! Large choix d&apos;accessoires, 
                livraison rapide à Saint-Pierre. Les prix sont corrects et 
                la qualité au rendez-vous. Mon shop préféré à la Réunion.&quot;
              </p>
              <div>
                <div className="font-semibold text-anthracite-600">Thomas R.</div>
                <div className="text-sm text-gray-500">Saint-Pierre • Octobre 2024</div>
              </div>
            </div>
            
            {/* Témoignage 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map((star) => (
                    <StarIcon key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Professionnels et réactifs ! Diagnostic gratuit, 
                devis clair, réparation nickel. N.I Business a sauvé 
                mon Samsung qui n&apos;allait plus. Merci l&apos;équipe !&quot;
              </p>
              <div>
                <div className="font-semibold text-anthracite-600">Amélie D.</div>
                <div className="text-sm text-gray-500">Le Port • Novembre 2024</div>
              </div>
            </div>
          </div>
          
          {/* Statistiques */}
          <div 
            ref={statsAnimation.elementRef}
            className={`bg-white rounded-2xl shadow-xl p-8 hover-glow ${statsAnimation.isVisible ? 'animate-scale-up' : 'opacity-0'}`}
          >
            <h3 className="text-2xl font-poppins font-bold text-center text-anthracite-600 mb-8 animate-fade-in delay-200">
              N.I Business en chiffres
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center hover-scale animate-bounce-in delay-400">
                <AnimatedCounter 
                  end={98} 
                  suffix="%"
                  className="text-3xl font-bold text-tech-blue-600 mb-2"
                  duration={2000}
                />
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center hover-scale animate-bounce-in delay-500">
                <AnimatedCounter 
                  end={24} 
                  suffix="h"
                  className="text-3xl font-bold text-emerald-action-600 mb-2"
                  duration={1500}
                />
                <div className="text-sm text-gray-600">Délai moyen réparation</div>
              </div>
              <div className="text-center hover-scale animate-bounce-in delay-600">
                <AnimatedCounter 
                  end={6} 
                  suffix=" mois"
                  className="text-3xl font-bold text-energy-orange-600 mb-2"
                  duration={1000}
                />
                <div className="text-sm text-gray-600">Garantie réparations</div>
              </div>
              <div className="text-center hover-scale animate-bounce-in delay-700">
                <AnimatedCounter 
                  end={100} 
                  suffix="%"
                  className="text-3xl font-bold text-tech-blue-600 mb-2"
                  duration={2500}
                />
                <div className="text-sm text-gray-600">Réunionnais pur miel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Réunion Section */}
      <section className="py-20 bg-tech-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-poppins font-bold mb-4">
              L&apos;expertise mobile 100% Réunionnaise
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Parce que nous connaissons les spécificités de l&apos;île intense, 
              nous adaptons nos services aux besoins uniques des Réunionnais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-6">
                <MapPinIcon className="h-8 w-8 mx-auto text-emerald-action-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Présence locale</h3>
              <p className="text-blue-100">
                Desserte de toute l&apos;île : Nord, Sud, Est, Ouest. 
                Livraison gratuite dès 50€ partout à la Réunion. 
                Une proximité qui fait la différence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-6">
                <PhoneIcon className="h-8 w-8 mx-auto text-emerald-action-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Support créole</h3>
              <p className="text-blue-100">
                Équipe multilingue : français, créole réunionnais. 
                Nous parlons votre langue pour mieux vous conseiller 
                et vous accompagner dans vos démarches.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-6">
                <ClockIcon className="h-8 w-8 mx-auto text-emerald-action-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Horaires adaptés</h3>
              <p className="text-blue-100">
                Ouvert du lundi au samedi, horaires flexibles. 
                Urgences mobiles ? Nous trouvons toujours une solution 
                pour vous dépanner rapidement.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              🏝️ Fiers d&apos;être Réunionnais !
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              N.I Business, c&apos;est avant tout une entreprise réunionnaise qui croit en l&apos;avenir 
              technologique de notre île. Nous participons au développement économique local 
              en créant des emplois et en soutenant nos partenaires locaux.
            </p>
            <div className="text-emerald-action-400 font-semibold">
              &quot; La tech au service du 974 ! &quot;
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
              <p className="text-gray-600 text-sm">Dès 50€ d&apos;achat sur toute la Réunion</p>
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
            Besoin d&apos;une réparation ou d&apos;accessoires ?
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