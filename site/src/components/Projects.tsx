'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaMusic, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const projects = [
  {
    title: 'Chorus',
    description: 'An iOS app for sharing song recommendations with friends. Send a track and earn points based on how much your friends end up loving it and how niche the find is.',
    image: null,
    technologies: ['Swift', 'SwiftUI'],
    completionDate: 'In Progress',
    inProgress: true
  },
  {
    title: 'TL;DR Chrome Extension',
    description: 'Summarize and explain selected pieces of text in articles, websites, and more. Learned the process for building a chrome extension and utilized an LLM and GenAI to analyze and generate text.',
    image: '/images/projects/tldr.png',
    technologies: ['Python', 'JavaScript', 'Node', 'Chrome', 'OpenAI API'],
    githubLink: 'https://github.com/danielyyi/TLDR-Chrome-Extension',
    liveLink: 'https://youtu.be/21A77E1vTYg',
    completionDate: 'Summer 2025'
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

const tossConfigs = [
  { rotateTo: -3, tape: 'bg-boho-mustard/80', tapeRotate: '-rotate-6' },
  { rotateTo: 2, tape: 'bg-boho-sage/70', tapeRotate: 'rotate-3' },
  { rotateTo: -2, tape: 'bg-boho-rose/70', tapeRotate: '-rotate-2' },
  { rotateTo: 4, tape: 'bg-boho-forest/70', tapeRotate: 'rotate-6' },
  { rotateTo: -4, tape: 'bg-boho-gold/70', tapeRotate: '-rotate-3' },
]

const polaroidVariants: Variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0 },
  },
}

const textVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } },
  exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -60 : 60, transition: { duration: 0.15 } }),
}

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const isAnimatingRef = useRef(false)

  const project = projects[index]
  const toss = tossConfigs[index % tossConfigs.length]
  const imageOnLeft = index % 2 === 0

  const preloadSrcs = [1, -1]
    .map((delta) => projects[(index + delta + projects.length) % projects.length].image)
    .filter((src): src is string => Boolean(src))

  const advance = (delta: 1 | -1) => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    setDirection(delta)
    setIndex((prev) => (prev + delta + projects.length) % projects.length)
    window.setTimeout(() => {
      isAnimatingRef.current = false
    }, 450)
  }

  const goNext = () => advance(1)
  const goPrev = () => advance(-1)

  return (
    <section id="projects" className="pt-10 pb-16 bg-boho-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-center mb-2 text-boho-espresso">Featured Projects</h2>
        <p className="font-hand text-2xl text-center text-boho-olive mb-6">
          {index + 1} / {projects.length}
        </p>

        <div className="relative">
          <div className="relative overflow-hidden py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${index}`}
                  variants={polaroidVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ rotate: toss.rotateTo }}
                  className={`polaroid relative mx-auto w-full max-w-sm ${imageOnLeft ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className={`washi-tape ${toss.tape} -top-3 left-1/2 -translate-x-1/2 ${toss.tapeRotate}`} />
                  <div className="relative h-72 sm:h-80 w-full">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 384px, 90vw"
                        priority
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-boho-mustard/30 to-boho-forest/30 flex items-center justify-center">
                        <div className="w-14 h-14 text-boho-forest"><FaMusic className="w-full h-full" /></div>
                      </div>
                    )}
                    {project.inProgress && (
                      <span className="absolute top-3 left-3 bg-boho-mustard text-boho-espresso text-xs font-semibold px-3 py-1 rounded-full shadow">
                        🚧 Currently Building
                      </span>
                    )}
                  </div>
                  <p className={`font-hand text-2xl text-center mt-3 ${project.inProgress ? 'text-boho-gold' : 'text-boho-espresso'}`}>
                    {project.completionDate}
                  </p>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`text-${index}`}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={`text-center md:text-left ${imageOnLeft ? 'md:order-2' : 'md:order-1'}`}
                >
                  <h3 className="font-serif text-3xl font-semibold text-boho-espresso mb-4">{project.title}</h3>
                  <p className="text-boho-brown/90 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-boho-sage/20 text-boho-olive text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center md:justify-start gap-5">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-boho-brown hover:text-boho-forest transition-colors"
                        title="GitHub Repository"
                      >
                        <div className="w-6 h-6"><FaGithub className="w-full h-full" /></div>
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-boho-brown hover:text-boho-forest transition-colors"
                        title="Live Demo"
                      >
                        <div className="w-6 h-6"><FaExternalLinkAlt className="w-full h-full" /></div>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden" aria-hidden="true">
            {preloadSrcs.map((src) => (
              <div key={src} className="relative w-full max-w-sm h-72 sm:h-80">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 384px, 90vw"
                  priority
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="absolute left-0 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-boho-cream shadow-md flex items-center justify-center text-boho-forest hover:bg-boho-forest hover:text-boho-cream transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goNext}
            aria-label="Next project"
            className="absolute right-0 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-boho-cream shadow-md flex items-center justify-center text-boho-forest hover:bg-boho-forest hover:text-boho-cream transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
