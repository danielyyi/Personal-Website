'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

// size = bubble diameter in px, placeholder random values — tweak per skill to taste
const skills = [
  { category: 'Languages', name: 'JavaScript', description: 'Used for various web development projects', size: 150 },
  { category: 'Languages', name: 'Python', description: 'Big data and computer vision in both internship and hackathon settings', size: 185 },
  { category: 'Languages', name: 'C++', description: 'Learned through coursework at Ohio State (and Arduino)', size: 110 },
  { category: 'Languages', name: 'Java', description: 'Learned through coursework in high school and Ohio State', size: 130 },
  { category: 'Languages', name: 'C#', description: 'Used in Unity for game development and simulations', size: 105 },
  { category: 'Languages', name: 'PHP', description: 'Web development', size: 90 },
  { category: 'Languages', name: 'Assembly', description: 'Learned through Systems 1 course', size: 95 },
  { category: 'Databases', name: 'MongoDB', description: 'Full-stack development projects and internship work', size: 140 },
  { category: 'Databases', name: 'SQL', description: 'Backend projects and querying data during Humana internship', size: 165 },
  { category: 'Databases', name: 'AWS S3', description: 'Used to store photos', size: 95 },
  { category: 'Tools', name: 'Git', description: 'Version control and team collaboration on projects and internships', size: 175 },
  { category: 'Tools', name: 'Power BI', description: 'Used in internship to build dashboards with DAX for system visualization and reporting', size: 120 },
  { category: 'Tools', name: 'Unity', description: 'Game development', size: 145 },
  { category: 'Tools', name: 'Unix/Linux', description: 'Systems programming projects', size: 100 },
  { category: 'Tools', name: 'Eclipse', description: 'IDE for Java development in coursework and projects', size: 85 },
  { category: 'Tools', name: 'Claude Code', description: 'Learning harness engineering, subagent workflows, etc.', size: 195 },
  { category: 'Libraries', name: 'React', description: 'Frontend development for various web projects', size: 190 },
  { category: 'Libraries', name: 'Node', description: 'Backend runtime used to build APIs and manage server logic in full-stack applications', size: 155 },
  { category: 'Libraries', name: 'Next', description: 'Utilized for frontend development for web projects', size: 135 },
  { category: 'Libraries', name: 'Express', description: 'Used in Node.js backend to handle routing and middleware', size: 115 },
  { category: 'Libraries', name: 'GraphQL', description: 'Helps with querying structured MongoDB data', size: 100 },
  { category: 'Libraries', name: 'MediaPipe', description: 'Track body movement with camera', size: 90 },
  { category: 'Libraries', name: 'OpenCV', description: 'Used for image processing and computer vision tasks in machine learning projects', size: 125 },
]

// bg/text pairs pre-checked for readable contrast against each fill
const bubbleStyles = [
  { bg: 'bg-boho-terracotta', text: 'text-boho-cream' },
  { bg: 'bg-boho-mustard', text: 'text-boho-espresso' },
  { bg: 'bg-boho-clay', text: 'text-boho-espresso' },
  { bg: 'bg-boho-rust', text: 'text-boho-cream' },
  { bg: 'bg-boho-gold', text: 'text-boho-espresso' },
  { bg: 'bg-boho-olive', text: 'text-boho-cream' },
  { bg: 'bg-boho-rose', text: 'text-boho-espresso' },
]

const EXPANDED_SIZE = 300
const PUSH_MARGIN = 14
const EDGE_MARGIN = 8

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

// avoids the "useLayoutEffect does nothing on the server" warning for this client component
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

type Point = { x: number; y: number }

export default function Skills() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const measureWrapRef = useRef<HTMLDivElement>(null)
  const measureRefs = useRef<Array<HTMLDivElement | null>>([])

  const [contentWidth, setContentWidth] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [positions, setPositions] = useState<Point[]>([])
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useIsomorphicLayoutEffect(() => {
    if (!wrapRef.current) return
    setContentWidth(wrapRef.current.clientWidth)
    const ro = new ResizeObserver((entries) => {
      setContentWidth(entries[0].contentRect.width)
    })
    ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!contentWidth || !measureWrapRef.current) return
    const wrapRect = measureWrapRef.current.getBoundingClientRect()
    const next = measureRefs.current.map((el) => {
      if (!el) return { x: 0, y: 0 }
      const r = el.getBoundingClientRect()
      return { x: r.left - wrapRect.left + r.width / 2, y: r.top - wrapRect.top + r.height / 2 }
    })
    setPositions(next)
    setContainerHeight(wrapRect.height)
  }, [contentWidth])

  useEffect(() => {
    if (expandedIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expandedIndex])

  const expandedCenter = useMemo<Point | null>(() => {
    if (expandedIndex === null || !positions[expandedIndex] || !contentWidth || !containerHeight) return null
    const p = positions[expandedIndex]
    const r = EXPANDED_SIZE / 2
    return {
      x: clamp(p.x, r + EDGE_MARGIN, Math.max(r + EDGE_MARGIN, contentWidth - r - EDGE_MARGIN)),
      y: clamp(p.y, r + EDGE_MARGIN, Math.max(r + EDGE_MARGIN, containerHeight - r - EDGE_MARGIN)),
    }
  }, [expandedIndex, positions, contentWidth, containerHeight])

  // pushing a neighbor out of the expanding bubble's way can shove it into ITS
  // neighbors too, so resolve all pairwise overlaps iteratively (not just
  // "distance from the expanded bubble") to avoid new collisions cascading unfixed
  const pushOffsets = useMemo<Point[]>(() => {
    const none = skills.map(() => ({ x: 0, y: 0 }))
    if (!expandedCenter || expandedIndex === null || !positions.length || !contentWidth || !containerHeight) return none

    const radius = skills.map((s, i) => (i === expandedIndex ? EXPANDED_SIZE / 2 : s.size / 2))
    const pos = positions.map((p, i) => (i === expandedIndex ? { ...expandedCenter } : { ...p }))

    for (let iter = 0; iter < 8; iter++) {
      for (let i = 0; i < pos.length; i++) {
        for (let j = i + 1; j < pos.length; j++) {
          const minDist = radius[i] + radius[j] + PUSH_MARGIN
          const dx = pos[j].x - pos[i].x
          const dy = pos[j].y - pos[i].y
          const dist = Math.hypot(dx, dy) || 0.001
          if (dist >= minDist) continue
          const overlap = minDist - dist
          const nx = dx / dist
          const ny = dy / dist
          const iFixed = i === expandedIndex
          const jFixed = j === expandedIndex
          if (iFixed && jFixed) continue
          if (iFixed) {
            pos[j].x += nx * overlap
            pos[j].y += ny * overlap
          } else if (jFixed) {
            pos[i].x -= nx * overlap
            pos[i].y -= ny * overlap
          } else {
            pos[i].x -= nx * overlap * 0.5
            pos[i].y -= ny * overlap * 0.5
            pos[j].x += nx * overlap * 0.5
            pos[j].y += ny * overlap * 0.5
          }
        }
      }
      for (let i = 0; i < pos.length; i++) {
        if (i === expandedIndex) continue
        const r = radius[i]
        pos[i].x = clamp(pos[i].x, r, Math.max(r, contentWidth - r))
        pos[i].y = clamp(pos[i].y, r, Math.max(r, containerHeight - r))
      }
    }

    return pos.map((p, i) => (i === expandedIndex ? { x: 0, y: 0 } : { x: p.x - positions[i].x, y: p.y - positions[i].y }))
  }, [expandedCenter, expandedIndex, positions, contentWidth, containerHeight])

  const ready = positions.length === skills.length && contentWidth > 0

  return (
    <section id="skills" className="py-16 bg-boho-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-center mb-2 text-boho-espresso">Skills & Expertise</h2>
        <p className="text-center text-boho-brown/70 mb-10">Tap a bubble to expand it</p>

        {/* off-screen mirror used only to measure the natural wrapped layout */}
        <div
          ref={measureWrapRef}
          aria-hidden
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4"
          style={{ position: 'fixed', top: -99999, left: -99999, width: contentWidth || undefined, visibility: 'hidden', pointerEvents: 'none' }}
        >
          {skills.map((skill, i) => (
            <div key={skill.name} ref={(el) => { measureRefs.current[i] = el }} style={{ width: skill.size, height: skill.size }} />
          ))}
        </div>

        <div
          ref={wrapRef}
          className="relative mx-auto"
          style={{ height: containerHeight || 400 }}
          onClick={(e) => { if (e.target === e.currentTarget) setExpandedIndex(null) }}
        >
          {ready && skills.map((skill, index) => {
            const style = bubbleStyles[index % bubbleStyles.length]
            const isExpanded = expandedIndex === index
            const base = positions[index]
            const push = pushOffsets[index]
            const size = isExpanded ? EXPANDED_SIZE : skill.size
            const center = isExpanded && expandedCenter ? expandedCenter : base

            return (
              <motion.div
                key={skill.name}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={skill.name}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setExpandedIndex(isExpanded ? null : index) }}
                whileHover={!isExpanded ? { scale: 1.08 } : undefined}
                whileTap={!isExpanded ? { scale: 0.95 } : undefined}
                animate={{
                  left: center.x,
                  top: center.y,
                  width: size,
                  height: size,
                  x: -size / 2 + (isExpanded ? 0 : push.x),
                  y: -size / 2 + (isExpanded ? 0 : push.y),
                  borderRadius: size / 2,
                  zIndex: isExpanded ? 30 : 1,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                className={`absolute flex items-center justify-center text-center shadow-md font-semibold cursor-pointer select-none ${isExpanded ? 'px-10' : 'px-3'} ${style.bg} ${style.text}`}
              >
                {isExpanded ? (
                  <div className="flex flex-col items-center gap-2 max-w-[75%]">
                    <button
                      onClick={(e) => { e.stopPropagation(); setExpandedIndex(null) }}
                      aria-label="Close"
                      className="absolute top-14 right-14 opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <FaTimes />
                    </button>
                    <span className="font-serif text-xl font-bold">{skill.name}</span>
                    <span className="text-sm leading-snug opacity-90">{skill.description}</span>
                  </div>
                ) : (
                  <span style={{ fontSize: Math.max(12, skill.size * 0.14) }} className="leading-tight">{skill.name}</span>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
