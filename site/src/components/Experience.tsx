import Image from 'next/image'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    image: '/experience1.jpg',
    description: [
      'Developed and maintained full-stack applications using React, Node.js, and PostgreSQL',
      'Implemented CI/CD pipelines using GitHub Actions and Docker',
      'Collaborated with cross-functional teams to deliver features on schedule',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    title: 'Software Development Intern',
    company: 'Digital Solutions Ltd.',
    period: '2021',
    image: '/experience2.jpg',
    description: [
      'Built responsive web applications using React and TypeScript',
      'Integrated REST APIs and implemented state management using Redux',
      'Participated in daily stand-ups and sprint planning meetings',
      'Wrote unit tests and documentation for new features'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Professional Experience</h2>
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-blue-500 rounded-full"></div>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4 relative h-64 lg:h-full">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="lg:col-span-8 p-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-blue-600 text-lg">{experience.company}</p>
                      </div>
                      <span className="text-gray-600 mt-2 lg:mt-0">{experience.period}</span>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      {experience.description.map((item, itemIndex) => (
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