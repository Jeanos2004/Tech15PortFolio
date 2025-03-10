// Fichier : src/components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 pb-4 pt-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-32">
            {/* Logo avec texte stylisé */}
            <span className="font-bold text-2xl">
              <Image src={'/images/logo.jpg'} alt='Le logo de Tech 15 Vision' width={55} height={50}/>
            </span>
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-extrabold text-gray-700 hover:text-orange-500 transition">
            Accueil
          </Link>
          <Link href="/services" className="font-extrabold text-gray-700 hover:text-orange-500 transition">
            Services
          </Link>
          <Link href="/a-propos" className="font-extrabold text-gray-700 hover:text-orange-500 transition">
            À propos
          </Link>
          <Link href="/portfolio" className="font-extrabold text-gray-700 hover:text-orange-500 transition">
            Portfolio
          </Link>
          <Link href="/contact" className="font-extrabold text-gray-700 transition border-2 border-orange-500 rounded-lg px-4 py-1 hover:bg-orange-500 hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-orange-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="font-medium text-gray-700 hover:text-orange-500 transition">
              Accueil
            </Link>
            <Link href="/services" className="font-medium text-gray-700 hover:text-orange-500 transition">
              Services
            </Link>
            <Link href="/a-propos" className="font-medium text-gray-700 hover:text-orange-500 transition">
              À propos
            </Link>
            <Link href="/portfolio" className="font-medium text-gray-700 hover:text-orange-500 transition">
              Portfolio
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-600 transition border-2 border-orange-500 rounded-lg px-4 py-1 hover:bg-orange-500">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
