import Link from 'next/link'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-anthracite-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">N.I Business</h3>
            <p className="text-gray-300 mb-4">
              Votre spécialiste en réparation mobile et accessoires téléphone à la Réunion. 
              Service rapide, garantie qualité.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/boutique" className="text-gray-300 hover:text-white transition-colors">Boutique</Link></li>
              <li><Link href="/reparation" className="text-gray-300 hover:text-white transition-colors">Réparation</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li><Link href="/reparation/ecran" className="text-gray-300 hover:text-white transition-colors">Réparation écran</Link></li>
              <li><Link href="/reparation/batterie" className="text-gray-300 hover:text-white transition-colors">Changement batterie</Link></li>
              <li><Link href="/boutique/coques" className="text-gray-300 hover:text-white transition-colors">Coques & Protection</Link></li>
              <li><Link href="/boutique/accessoires" className="text-gray-300 hover:text-white transition-colors">Accessoires</Link></li>
              <li><Link href="/devis" className="text-gray-300 hover:text-white transition-colors">Devis gratuit</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-emerald-action-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Adresse à la Réunion</p>
                  <p className="text-gray-300">97400 Saint-Denis</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-emerald-action-500 flex-shrink-0" />
                <p className="text-gray-300">+262 XXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-emerald-action-500 flex-shrink-0" />
                <p className="text-gray-300">contact@ni-business.re</p>
              </div>
              <div className="flex items-start space-x-3">
                <ClockIcon className="h-5 w-5 text-emerald-action-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Lun-Ven: 8h-18h</p>
                  <p className="text-gray-300">Sam: 8h-16h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 N.I Business. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-300 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-300 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-generales" className="text-gray-300 hover:text-white text-sm transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 