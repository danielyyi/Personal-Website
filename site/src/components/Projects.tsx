import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'TL;DR Chrome Extension',
    description: 'Summarize selected pieces of text in articles, websites, and more',
    image: '/images/projects/chrome.png',
    technologies: ['Python', 'JavaScript', 'Chrome', 'OpenAI API'],
    githubLink: 'https://github.com/danielyyi/TLDR-Chrome-Extension',
    completionDate: 'In Progress'
  },
  {
    title: 'AutoIntelligence',
    description: 'AI-powered program that detects when drivers are distracted from the road. I built this alongside a mock-Lyft app that could utilize this technology to asses the safety rating of drivers. Runner-up of the 2024 Hack OHI/O Hackathon (Honda Track).',
    image: '/images/projects/blackcar.png',
    technologies: ['Python', 'React', 'OpenCV', 'MediaPipe'],
    githubLink: 'https://github.com/danielyyi/HackOHI-O-2024',
    liveLink: 'https://youtu.be/13aUxjURqYY',
    completionDate: 'November 2024'
  },
  {
    title: 'NewThreads',
    description: 'Full-stack website designed to help startup clothing brands gain exposure to shoppers looking to support small, niche businesses. Login, register, list products, view product info, search, filter by style, filter by niche.',
    image: '/images/projects/nt.png',
    technologies: ['React', 'Express', 'Node', 'MongoDB', 'GraphQL'],
    githubLink: 'https://github.com/danielyyi/NewThreads',
    liveLink: 'https://findnewthreads.com/',
    completionDate: 'Summer 2024'
  },
  {
    title: 'Buckeye Course Guide',
    description: 'At Ohio State, it\'s difficult to search for classes that cross off requirements. This website allows students to paste in chunks of courses from their Degree Audit and Advising Report to easily look up class information.',
    image: '/images/projects/osu.png',
    technologies: ['JavaScript', 'React', 'OSU API'],
    liveLink: 'https://youtu.be/OLZQMVueu0M',
    completionDate: 'Winter 2023'
  },
  {
    title: 'Youstagram',
    description: 'An Instagram-like social media site with CRUD functionality. Customize and share posts, leave comments, search for users, etc.',
    image: '/images/projects/you.png',
    technologies: ['React', 'Express', 'Node', 'MongoDB'],
    githubLink: 'https://github.com/danielyyi/Youstagram',
    liveLink: 'https://youtu.be/ThnOPYyiddI',
    completionDate: 'Fall 2022'
  },
  {
    title: 'Bedwarstats.com',
    description: 'A stat-tracker website for a Minecraft PvP mini-game called \"Bedwars\". Displays player data and gives insights on strengths and weaknesses in an organized manner.',
    image: '/images/projects/bed.png',
    technologies: ['Chart.js', 'React', 'Hypixel API', 'PlayerDB API', 'Craftatar API'],
    githubLink: 'https://github.com/danielyyi/Hypixel-Bedwars-Tracker',
    liveLink: 'https://www.youtube.com/watch?v=xhrr1NCp9Lw&feature=youtu.be',
    completionDate: 'Summer 2021'
  },
  {
    title: 'Super Smash Bros Parody',
    description: 'Remake of a popular video game, Super Smash Bros, with new characters like Waluigi, Goku, and The Mandalorian, and new arenas as well. I created all of the animations and effects myself, as well programmed all of the game\'s logic and mechanics.',
    image: '/images/projects/ssb.png',
    technologies: ['Unity', 'C#'],
    githubLink: 'https://github.com/danielyyi/Super-Copyright-Bros',
    liveLink: 'https://youtu.be/zw8oHsihJfg',
    completionDate: 'Fall 2021'
  },
  {
    title: 'mac',
    description: 'A first-person game where the objective is to navigate a set of rooms while blasting and eliminating 15 target boxes as quick as possible',
    image: '/images/projects/mac.png',
    technologies: ['Unity', 'C#'],
    githubLink: 'https://github.com/danielyyi/mac',
    liveLink: 'https://ysun.itch.io/mac',
    completionDate: 'Summer 2021'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured (Not All) Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title="GitHub Repository"
                      >
                        <div className="w-6 h-6"><FaGithub /></div>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        title="Live Demo"
                      >
                        <div className="w-6 h-6"><FaExternalLinkAlt /></div>
                      </a>
                    )}
                  </div>
                  <span className="text-blue-600 font-medium text-sm">{project.completionDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 