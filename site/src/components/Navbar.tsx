'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [

  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/danielyyi',
    icon: <FaLinkedin className="w-5 h-5" />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/danielyyi',
    icon: <FaGithub className="w-5 h-5" />
  }
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="#home"
            className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
          >
            Daniel Yi
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <button className="md:hidden text-gray-600 hover:text-gray-900">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 