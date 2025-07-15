'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { SmartphoneIcon, ShieldCheckIcon, TruckIcon } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Boutique', href: '/boutique' },
    { name: 'Réparation', href: '/reparation' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Barre d'information */}
      <div className="bg-tech-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <span>+262 XXX XXX XXX</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <TruckIcon className="h-4 w-4" />
                <span>Livraison gratuite dès 50€</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <ShieldCheckIcon className="h-4 w-4" />
                <span>Garantie 6 mois</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Réunion 974 - Service local</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-tech-blue-600 p-2 rounded-lg">
              <SmartphoneIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-poppins font-bold text-anthracite-600">
                N.I Business
              </span>
              <p className="text-xs text-gray-500 -mt-1">Spécialiste Mobile</p>
            </div>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-anthracite-600 hover:text-tech-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Panier */}
            <Link
              href="/panier"
              className="relative p-2 text-anthracite-600 hover:text-tech-blue-600 transition-colors duration-200"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-emerald-action-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* CTA Devis */}
            <Link
              href="/devis"
              className="hidden md:inline-flex items-center px-4 py-2 bg-emerald-action-500 text-white font-medium rounded-lg hover:bg-emerald-action-600 transition-colors duration-200"
            >
              Devis gratuit
            </Link>

            {/* Menu mobile */}
            <button
              type="button"
              className="md:hidden p-2 text-anthracite-600 hover:text-tech-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-anthracite-600 hover:text-tech-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/devis"
              className="block mt-4 px-3 py-2 bg-emerald-action-500 text-white font-medium rounded-lg hover:bg-emerald-action-600 transition-colors duration-200 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  )
} 