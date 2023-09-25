// components/Navbar.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="flex items-center justify-between">
        <Link href="/">

            <Image src="/logo.png" alt="Idev Logo" width={150} height={32} />

        </Link>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white"> Home </Link>
          <Link href="/services" className="text-white">Services </Link>
          <Link href="/portfolio" className="text-white">Portfolio </Link>
          <Link href="/contact" className="text-white">Contact </Link>
          <button onClick={toggleDarkMode} className="text-white">
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden space-y-2 mt-2">
          <Link href="/" className="block text-white"> Home </Link>
          <Link href="/services" className="block text-white">Services </Link>
          <Link href="/portfolio" className="block text-white">Portfolio </Link>
          <Link href="/contact"className="block text-white">Contact </Link>
          <button onClick={toggleDarkMode} className="text-white">
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
