'use client'

import Image from 'next/image'

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
    title: 'Vice President of DE&I',
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
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Leadership & Activities</h2>
        <div className="space-y-16">
          {leadershipRoles.map((role, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-blue-500 rounded-full"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4 relative h-64 lg:h-full">
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="lg:col-span-8 p-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {role.title}
                        </h3>
                        <p className="text-blue-600 text-lg">{role.organization}</p>
                      </div>
                      <span className="text-gray-600 mt-2 lg:mt-0">{role.period}</span>
                    </div>
                    <ul className="space-y-3 text-gray-600  mb-4">
                      {role.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 