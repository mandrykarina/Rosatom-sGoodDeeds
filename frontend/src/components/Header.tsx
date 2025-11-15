'use client';

import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#e0e0e0] sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-[#003366] to-[#004d99] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ДД</span>
            </div>
            <span className="hidden sm:inline font-bold text-[#003366] text-lg">
              Добрые дела
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/news" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Новости
          </Link>
          <Link href="/calendar" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Календарь
          </Link>
          <Link href="/organizations" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            Организации
          </Link>
          <Link href="/knowledge-base" className="text-gray-700 hover:text-[#003366] transition-colors font-medium">
            База знаний
          </Link>
        </div>

        {/* Right Side: Account */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard/profile">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-6 h-6 text-[#003366]" />
            </button>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#003366]" />
            ) : (
              <Menu className="w-6 h-6 text-[#003366]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#e0e0e0] bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link href="/news" className="text-gray-700 hover:text-[#003366] font-medium">
              Новости
            </Link>
            <Link href="/calendar" className="text-gray-700 hover:text-[#003366] font-medium">
              Календарь
            </Link>
            <Link href="/organizations" className="text-gray-700 hover:text-[#003366] font-medium">
              Организации
            </Link>
            <Link href="/knowledge-base" className="text-gray-700 hover:text-[#003366] font-medium">
              База знаний
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
