'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const leadershipRoles = [
  {
    title: 'Hackathon Committee Member',
    organization: 'Humana',
    period: 'Present',
    image: '/images/experience/humana.png',
    description: [
      '1 of 6 interns selected to organize Humana Hackathon consisting of 70+ intern participants.',
      'Provide programming advice and support to participants during event, discuss prompts with executives, write-up rules, experiment with provided tools and resources, assist judges with scoring.'
    ]
  },
  {
    title: 'Vice President',
    organization: 'Pi Sigma Epsilon',
    period: 'Fall 2024 - Present',
    image: '/images/leadership/psephoto.jpg',
    description: [
      'Foster professional development for 140+ members by planning cultural outings, presenting on current events, and scheduling panels with diverse business leaders'
    ]
  },
  {
    title: 'Co-leader (Student of the Year Candidate)',
    organization: 'Leukemia and Lymphoma Society',
    period: 'Spring 2022',
    image: '/images/leadership/leukemia and lymphoma society.jpg',
    description: [
      'Led a team of 12 high school students to organize fundraising events and raise over $30,000 for the Leukemia and Lymphoma Society. Activities included meeting with sponsors, partnering with local restaurants, raising awareness on social media, and hosting a 3v3 basketball tournament.'
    ]
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-boho-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-center mb-2 text-boho-espresso">Leadership & Activities</h2>
        <p className="text-center text-boho-brown/70 mb-14">giving back where I can</p>

        <div className="divide-y divide-boho-olive/15">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 py-9 first:pt-0 last:pb-0"
            >
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:w-36 shrink-0">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-1 ring-boho-olive/25 shrink-0">
                  <Image src={role.image} alt={role.organization} fill className="object-cover" />
                </div>
                <span className="text-sm text-boho-brown/60 tracking-wide">{role.period}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-boho-espresso">{role.title}</h3>
                <p className="text-boho-forest mb-3">{role.organization}</p>
                <ul className="space-y-2 text-boho-brown/90">
                  {role.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-boho-forest mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
