'use client'

import { FaCode, FaDatabase, FaTools, FaCloud } from 'react-icons/fa'

const borderColors = [
  'border-boho-terracotta/50 hover:border-boho-terracotta hover:bg-boho-terracotta/5',
  'border-boho-mustard/50 hover:border-boho-mustard hover:bg-boho-mustard/10',
  'border-boho-sage/50 hover:border-boho-sage hover:bg-boho-sage/10',
  'border-boho-rose/50 hover:border-boho-rose hover:bg-boho-rose/5',
  'border-boho-rust/50 hover:border-boho-rust hover:bg-boho-rust/5',
  'border-boho-olive/50 hover:border-boho-olive hover:bg-boho-olive/10',
  'border-boho-clay/50 hover:border-boho-clay hover:bg-boho-clay/10',
  'border-boho-gold/50 hover:border-boho-gold hover:bg-boho-gold/10',
]

const skills = [
  {
    category: 'Languages',
    icon: <div className="w-6 h-4 text-boho-terracotta"><FaCode /></div>,
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
    icon: <div className="w-6 h-4 text-boho-terracotta"><FaDatabase /></div>,
    items: [
      { name: 'MongoDB', description: 'Full-stack development projects and internship work' },
      { name: 'SQL', description: 'Backend projects and querying data during Humana internship' },
      { name: 'AWS S3', description: "Used to store photos"}
    ]
  },
  {
    category: 'Tools',
    icon: <div className="w-6 h-4 text-boho-terracotta"><FaTools /></div>,
    items: [
      { name: 'Git', description: 'Version control and team collaboration on projects and internships' },
      { name: 'Power BI', description: 'Used in internship to build dashboards with DAX for system visualization and reporting' },
      { name: 'Unity', description: 'Game development' },
      { name: 'Unix/Linux', description: 'Systems programming projects' },
      { name: 'Eclipse', description: 'IDE for Java development in coursework and projects' },
      { name: 'Claude Code', description: 'Learning harness engineering, subagent workflows, etc.' }
    ]
  },
  {
    category: 'Libraries',
    icon: <div className="w-6 h-4 text-boho-terracotta"><FaCloud /></div>,
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
    <section id="skills" className="py-16 bg-boho-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-center mb-12 text-boho-espresso">Skills & Expertise</h2>
        <div className="space-y-16">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-boho-sand/40 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-8">
                {skillGroup.icon}
                <h3 className="font-serif text-2xl font-semibold text-boho-espresso ml-3">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillGroup.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`border rounded-lg p-5 transition-colors shadow-sm ${borderColors[itemIndex % borderColors.length]}`}
                  >
                    <h4 className="text-lg font-semibold text-boho-terracotta mb-2">{item.name}</h4>
                    <p className="text-boho-brown/90 leading-relaxed">{item.description}</p>
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