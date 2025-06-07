'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Hi, I&apos;m <span className="text-blue-600">Daniel</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-2xl sm:text-3xl text-gray-600 mb-8"
            >
              Honors Computer Science Student at The Ohio State University
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg text-gray-600 mb-12"
            >
              In <span className="text-lg text-red-600 mb-12 font-bold">elementary school</span>, I was first introduced to "coding" through Minecraft command blocks. In <span className="text-lg text-blue-600 mb-12 font-bold">7th grade</span>, I started experimenting with Arduinos. By <span  className="text-lg text-blue-600 mb-12 font-bold">highschool</span>, I was hooked on programming my own 
              video games. By <span  className="text-lg text-blue-600 mb-12 font-bold">graduation</span>, I was staying up learning web development. <span  className="text-lg text-red-600 mb-12 font-bold">Now</span>, as a junior in college, I have built multiple full-stack 
              applications and am actively exploring Big Data and machine learning. All my life, I have been passionate about finding innovative ways to solve problems
              and I am eager to continue exploring my curiosities through technology.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/profile/profile2.jpg"
              alt="Daniel Yi"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 