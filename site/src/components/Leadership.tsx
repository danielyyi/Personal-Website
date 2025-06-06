import Image from 'next/image'

const leadershipRoles = [
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
    title: 'Hackathon Organizer',
    organization: 'University Hackathon Committee',
    period: '2023',
    image: '/leadership2.jpg',
    description: [
      'Co-organized a 24-hour hackathon with 200+ participants',
      'Coordinated with sponsors and secured $10,000 in prizes',
      'Managed logistics, including venue, food, and technical support',
      'Created and executed marketing strategy for the event'
    ]
  }
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
                    <ul className="space-y-3 text-gray-600">
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