import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.',
    image: '/project1.jpg',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubLink: 'https://github.com/yourusername/ecommerce',
    liveLink: 'https://ecommerce-demo.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking. Built using React, Firebase, and Material-UI.',
    image: '/project2.jpg',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://task-manager-demo.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current conditions and forecasts using OpenWeatherMap API. Features include location search, 5-day forecast, and weather alerts.',
    image: '/project3.jpg',
    technologies: ['JavaScript', 'OpenWeatherMap API', 'Chart.js', 'Bootstrap'],
    githubLink: 'https://github.com/yourusername/weather-dashboard',
    liveLink: 'https://weather-dashboard-demo.com'
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe search application that helps users discover new recipes based on available ingredients. Includes meal planning features and nutritional information.',
    image: '/project4.jpg',
    technologies: ['React', 'Spoonacular API', 'Tailwind CSS', 'Context API'],
    githubLink: 'https://github.com/yourusername/recipe-finder',
    liveLink: 'https://recipe-finder-demo.com'
  },
  {
    title: 'Fitness Tracker',
    description: 'A fitness tracking application that helps users monitor their workouts, set goals, and track progress. Includes exercise library and progress visualization.',
    image: '/project5.jpg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    githubLink: 'https://github.com/yourusername/fitness-tracker',
    liveLink: 'https://fitness-tracker-demo.com'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode, and smooth animations.',
    image: '/project6.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/portfolio',
    liveLink: 'https://portfolio-demo.com'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-6 h-6"><FaGithub /></div>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-6 h-6"><FaExternalLinkAlt /></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 