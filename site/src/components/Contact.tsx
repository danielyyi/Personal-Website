'use client'

import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <div className="w-6 h-6"><FaEnvelope /></div>,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: <div className="w-6 h-6"><FaLinkedin /></div>,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    link: 'https://linkedin.com/in/yourprofile'
  },
  {
    icon: <div className="w-6 h-6"><FaGithub /></div>,
    label: 'GitHub',
    value: 'github.com/yourusername',
    link: 'https://github.com/yourusername'
  },
  {
    icon: <div className="w-6 h-6"><FaTwitter /></div>,
    label: 'Twitter',
    value: '@yourusername',
    link: 'https://twitter.com/yourusername'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-4">{info.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.label}</h3>
              <p className="text-gray-600">{info.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 