import Timeline, { type TimelineEntry } from './Timeline'

const experiences: TimelineEntry[] = [
  {
    title: 'Software Engineering Intern',
    subtitle: 'Capital One',
    period: 'Summer 2026',
    image: '/images/experience/capitalone.png',
    description: [
      'Intern on the Cyber Detection and Mitigation Engineering team',
    ]
  },
  {
    title: 'Software Engineering Intern',
    subtitle: 'Humana',
    period: 'Present',
    image: '/images/experience/humana.png',
    description: [
      'Intern on the Claims Administration Systems (CAS) team',
    ]
  },
  {
    title: 'Teaching Assistant',
    subtitle: 'The Ohio State University',
    period: 'Fall 2024',
    image: '/images/projects/osu.png',
    description: [
      'Taught 70+ students core engineering principles, technical writing, and MATLAB programming'
    ]
  },
  {
    title: 'Host',
    subtitle: 'Jeff Ruby Culinary Entertainment',
    period: 'Summer 2024',
    image: '/images/experience/jeff.png',
    description: [
      'Served as a host and food runner for 300+ guests daily'
    ]
  },
  {
    title: 'Product Management Intern',
    subtitle: 'GE Aerospace',
    period: 'Summer 2022',
    image: '/images/experience/GE.png',
    description: [
      'Shadowed the role of Technical Product Manager in the Edison Works military division, creating dashboards in Rally to track progress and productivity, creating a new document management system for the department, and learning AGILE and LEAN best practices'
    ]
  },
  {
    title: 'Instructor',
    subtitle: 'iDaP Academy',
    period: 'Summer 2021',
    image: '/images/experience/idap.png',
    description: [
      'Taught core programming concepts to elementary and middle school students through Lego Robotics and game development'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-boho-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-center mb-2 text-boho-espresso">Professional Experience</h2>
        <p className="font-hand text-2xl text-center text-boho-olive mb-14">a few stops along the way</p>
        <Timeline entries={experiences} />
      </div>
    </section>
  )
}
