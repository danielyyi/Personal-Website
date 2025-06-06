import { FaCode, FaDatabase, FaTools, FaCloud } from 'react-icons/fa'

const skills = [
  {
    category: 'Languages',
    icon: <div className="w-6 h-4 text-blue-600"><FaCode /></div>,
    items: [
      { name: 'Python', description: 'Advanced proficiency in Python for data analysis, machine learning, and web development' },
      { name: 'JavaScript', description: 'Expert in modern JavaScript (ES6+) for frontend and backend development' },
      { name: 'TypeScript', description: 'Strong experience with TypeScript for type-safe application development' },
      { name: 'Java', description: 'Proficient in Java for enterprise applications and Android development' }
    ]
  },
  {
    category: 'Databases',
    icon: <div className="w-6 h-4 text-blue-600"><FaDatabase /></div>,
    items: [
      { name: 'PostgreSQL', description: 'Experience with complex queries, optimization, and database design' },
      { name: 'MongoDB', description: 'Proficient in NoSQL database design and implementation' },
      { name: 'Redis', description: 'Knowledge of caching strategies and in-memory data structures' }
    ]
  },
  {
    category: 'Tools',
    icon: <div className="w-6 h-4 text-blue-600"><FaTools /></div>,
    items: [
      { name: 'Git', description: 'Expert in version control, branching strategies, and collaborative development' },
      { name: 'Docker', description: 'Experience with containerization and microservices architecture' },
      { name: 'AWS', description: 'Proficient in cloud services including EC2, S3, and Lambda' }
    ]
  },
  {
    category: 'Frameworks',
    icon: <div className="w-6 h-4 text-blue-600"><FaCloud /></div>,
    items: [
      { name: 'React', description: 'Advanced experience in building complex user interfaces and state management' },
      { name: 'Node.js', description: 'Strong backend development skills with Express and other Node.js frameworks' },
      { name: 'Next.js', description: 'Experience with server-side rendering and static site generation' }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-3">
                {skillGroup.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="border-b border-gray-100 pb-2 last:border-0">
                    <h4 className="font-medium text-gray-900 text-base">{item.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 