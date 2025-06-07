import Image from 'next/image'

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Humana',
    period: 'Present',
    image: '/images/experience/humana.png',
    description: [
      'Intern on the Claims Administration Systems (CAS) team',
    ]
  },
  {
    title: 'Teaching Assistant',
    company: 'The Ohio State University',
    period: 'Fall 2024',
    image: '/images/projects/OSU.png',
    description: [
      'Taught 70+ students core engineering principles, technical writing, and MATLAB programming'
    ]
  },
  {
    title: 'Host',
    company: 'Jeff Ruby Culinary Entertainment',
    period: 'Summer 2024',
    image: '/images/experience/jeff.png',
    description: [
      'Served as a host and food runner for 300+ guests daily'
    ]
  },
  {
    title: 'Product Management Intern',
    company: 'GE Aerospace',
    period: 'Summer 2022',
    image: '/images/experience/GE.png',
    description: [
      'Shadowed the role of Technical Product Manager in the Edison Works military division, creating dashboards in Rally to track progress and productivity, creating a new document management system for the department, and learning AGILE and LEAN best practices'
    ]
  },
  {
    title: 'Instructor',
    company: 'iDaP Academy',
    period: 'Summer 2021',
    image: '/images/experience/idap.png',
    description: [
      'Taught core programming concepts to elementary and middle school students through Lego Robotics and game development'
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
                    <ul className="space-y-3 text-gray-600 mb-4">
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