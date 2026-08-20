'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export type TimelineEntry = {
  title: string
  subtitle: string
  period: string
  image: string
  description: string[]
}

const tossConfigs = [
  { rotate: -3, tape: 'bg-boho-mustard/80', tapeRotate: '-rotate-6' },
  { rotate: 2, tape: 'bg-boho-sage/70', tapeRotate: 'rotate-3' },
  { rotate: -2, tape: 'bg-boho-rose/70', tapeRotate: '-rotate-2' },
  { rotate: 4, tape: 'bg-boho-forest/70', tapeRotate: 'rotate-6' },
  { rotate: -4, tape: 'bg-boho-gold/70', tapeRotate: '-rotate-3' },
]

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-boho-olive/30" />
      <div className="md:hidden absolute left-4 top-2 bottom-2 w-px bg-boho-olive/30" />

      <div className="space-y-16 md:space-y-24">
        {entries.map((entry, index) => {
          const toss = tossConfigs[index % tossConfigs.length]
          const imageOnLeft = index % 2 === 0

          return (
            <motion.div
              key={`${entry.title}-${entry.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center pl-12 md:pl-0"
            >
              <div className="absolute left-4 md:left-1/2 top-2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-boho-forest ring-4 ring-boho-cream z-10" />

              <div className={`${imageOnLeft ? 'md:order-1 md:justify-end' : 'md:order-2 md:justify-start'} flex justify-center`}>
                <div
                  className="polaroid relative w-full max-w-[240px]"
                  style={{ transform: `rotate(${toss.rotate}deg)` }}
                >
                  <div className={`washi-tape ${toss.tape} -top-3 left-1/2 -translate-x-1/2 ${toss.tapeRotate}`} />
                  <div className="relative h-52 w-full">
                    <Image src={entry.image} alt={entry.title} fill className="object-cover" />
                  </div>
                  <p className="font-hand text-xl text-boho-espresso text-center mt-2">{entry.period}</p>
                </div>
              </div>

              <div className={`${imageOnLeft ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
                <h3 className="font-serif text-2xl font-semibold text-boho-espresso mb-1">
                  {entry.title}
                </h3>
                <p className="text-boho-forest text-lg mb-4">{entry.subtitle}</p>
                <ul className="space-y-2 text-boho-brown/90 text-left">
                  {entry.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-boho-forest mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
