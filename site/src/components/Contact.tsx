'use client'

import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <div className="w-7 h-7"><FaEnvelope className="w-full h-full" /></div>,
    label: 'Email',
    value: 'daniel.youngsun@gmail.com',
    link: 'mailto:daniel.youngsun@gmail.com'
  },
  {
    icon: <div className="w-7 h-7"><FaLinkedin className="w-full h-full" /></div>,
    label: 'LinkedIn',
    value: 'linkedin.com/in/danielyyi',
    link: 'https://linkedin.com/in/danielyyi'
  },
  {
    icon: <div className="w-7 h-7"><FaGithub className="w-full h-full" /></div>,
    label: 'GitHub',
    value: 'github.com/danielyyi',
    link: 'https://github.com/danielyyi'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col items-center text-center w-full max-w-md"
            >
              <div className="text-blue-600 mb-6">{info.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.label}</h3>
              <p className="text-gray-600">{info.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 