import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m <span className="text-blue-600">Your Name</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 mb-8">
              Computer Science Student & Software Developer
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              I&apos;m passionate about building innovative solutions and creating impactful software.
              Currently pursuing my degree in Computer Science while working on exciting projects
              that combine technical expertise with creative problem-solving.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Your Name"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 