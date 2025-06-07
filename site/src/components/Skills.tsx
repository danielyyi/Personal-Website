'use client'

import { FaCode, FaDatabase, FaTools, FaCloud } from 'react-icons/fa'

const borderColors = [
  'border-blue-400 hover:border-blue-500 hover:bg-blue-50',
  'border-yellow-400 hover:border-yellow-500 hover:bg-yellow-50',
  'border-green-400 hover:border-green-500 hover:bg-green-50',
  'border-purple-400 hover:border-purple-500 hover:bg-purple-50',
  'border-red-400 hover:border-red-500 hover:bg-red-50',
  'border-pink-400 hover:border-pink-500 hover:bg-pink-50',
  'border-indigo-400 hover:border-indigo-500 hover:bg-indigo-50',
  'border-orange-400 hover:border-orange-500 hover:bg-orange-50',
  'border-teal-400 hover:border-teal-500 hover:bg-teal-50',
  'border-cyan-400 hover:border-cyan-500 hover:bg-cyan-50',
]

const skills = [
  {
    category: 'Languages',
    icon: <div className="w-6 h-4 text-blue-600"><FaCode /></div>,
    items: [
      { name: 'JavaScript', description: 'Used for full-stack development in personal and team projects including social media and e-commerce apps' },
      { name: 'Python', description: 'Utilized for data access, machine learning, and computer vision in both internship and hackathon settings' },
      { name: 'C++', description: 'Applied in robotics competitions and engineering coursework for control systems and problem-solving' },
      { name: 'Java', description: 'Used in foundational coursework including Java I/II and for object-oriented programming assignments' },
      { name: 'C#', description: 'Used in Unity for game development and simulations' },
      { name: 'SQL', description: 'Used for querying structured data and backend projects' },
      { name: 'PHP', description: 'Used for backend scripting and web applications' },
      { name: 'Assembly', description: 'Applied in Systems I coursework for low-level hardware interactions' },
      { name: 'HTML/CSS', description: 'Used for creating structured and styled web interfaces' }
    ]
  },
  {
    category: 'Databases',
    icon: <div className="w-6 h-4 text-blue-600"><FaDatabase /></div>,
    items: [
      { name: 'MongoDB', description: 'Proficient in NoSQL schema design, used in full-stack apps and internship projects' },
      { name: 'SQL', description: 'Used in relational data storage and integration with backend services' },
      { name: 'AWS S3', description: 'Used for storage of photos and management of assets in cloud environments' }
    ]
  },
  {
    category: 'Tools',
    icon: <div className="w-6 h-4 text-blue-600"><FaTools /></div>,
    items: [
      { name: 'Git', description: 'Used for version control and team collaboration on projects and internships' },
      { name: 'Power BI', description: 'Used in internship to build dashboards with DAX for system visualization and reporting' },
      { name: 'Unity', description: 'Used for building simulations and interfacing with C# in engineering projects' },
      { name: 'Unix/Linux', description: 'Used for systems programming and development environment setup' },
      { name: 'Eclipse', description: 'Used as an IDE for Java/C++ development in coursework and projects' }
    ]
  },
  {
    category: 'Libraries',
    icon: <div className="w-6 h-4 text-blue-600"><FaCloud /></div>,
    items: [
      { name: 'React', description: 'Frontend library used to build interactive UIs for web apps including e-commerce and hackathon projects' },
      { name: 'Node.js', description: 'Backend runtime used to build APIs and manage server logic in full-stack applications' },
      { name: 'Next.js', description: 'Used for React-based static and dynamic site generation in personal portfolio and projects' },
      { name: 'Express.js', description: 'Used in Node.js backend to handle routing and middleware in full-stack applications' },
      { name: 'GraphQL', description: 'Used with Apollo server/client for querying and mutating NoSQL data in web apps' },
      { name: 'MediaPipe', description: 'Used with OpenCV in a hackathon project to track eye/head movement for driver distraction detection' },
      { name: 'OpenCV', description: 'Used for image processing and computer vision tasks in machine learning projects' }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills & Expertise</h2>
        <div className="space-y-16">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-8">
                {skillGroup.icon}
                <h3 className="text-2xl font-semibold text-gray-900 ml-3">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillGroup.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`border rounded-lg p-5 transition-colors shadow-sm ${borderColors[itemIndex % borderColors.length]}`}
                  >
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">{item.name}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 