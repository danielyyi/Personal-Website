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
      { name: 'JavaScript', description: 'Used for various web development projects' },
      { name: 'Python', description: 'Big data and computer vision in both internship and hackathon settings' },
      { name: 'C++', description: 'Learned through coursework at Ohio State (and Arduino)' },
      { name: 'Java', description: 'Learned through coursework in high school and Ohio State' },
      { name: 'C#', description: 'Used in Unity for game development and simulations' },
      { name: 'PHP', description: 'Web development' },
      { name: 'Assembly', description: 'Learned through Systems 1 course' }
    ]
  },
  {
    category: 'Databases',
    icon: <div className="w-6 h-4 text-blue-600"><FaDatabase /></div>,
    items: [
      { name: 'MongoDB', description: 'Full-stack development projects and internship work' },
      { name: 'SQL', description: 'Backend projects and querying data during Humana internship' },
      { name: 'AWS S3', description: "Used to store photos"}
    ]
  },
  {
    category: 'Tools',
    icon: <div className="w-6 h-4 text-blue-600"><FaTools /></div>,
    items: [
      { name: 'Git', description: 'Version control and team collaboration on projects and internships' },
      { name: 'Power BI', description: 'Used in internship to build dashboards with DAX for system visualization and reporting' },
      { name: 'Unity', description: 'Game development' },
      { name: 'Unix/Linux', description: 'Systems programming projects' },
      { name: 'Eclipse', description: 'IDE for Java development in coursework and projects' }
    ]
  },
  {
    category: 'Libraries',
    icon: <div className="w-6 h-4 text-blue-600"><FaCloud /></div>,
    items: [
      { name: 'React', description: 'Frontend development for various web projects' },
      { name: 'Node', description: 'Backend runtime used to build APIs and manage server logic in full-stack applications' },
      { name: 'Next', description: 'Utilized for frontend development for web projects' },
      { name: 'Express', description: 'Used in Node.js backend to handle routing and middleware' },
      { name: 'GraphQL', description: 'Helps with querying structured MongoDB data' },
      { name: 'MediaPipe', description: 'Track body movement with camera' },
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