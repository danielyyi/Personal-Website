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
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-boho-espresso mb-6"
            >
              Hi, I&apos;m <span className="italic text-boho-forest">Daniel</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="font-serif italic text-2xl sm:text-3xl font-medium text-boho-olive mb-8"
            >
              Honors Computer Science Student at The Ohio State University
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg text-boho-brown/90 mb-12 leading-relaxed"
            >
              In <span className="text-lg text-boho-rose mb-12 font-bold">elementary school</span>, I was first introduced to "coding" through Minecraft command blocks. In <span className="text-lg text-boho-forest mb-12 font-bold">7th grade</span>, I started experimenting with Arduinos. By <span className="text-lg text-boho-forest mb-12 font-bold">highschool</span>, I was hooked on programming my own
              video games. By <span className="text-lg text-boho-forest mb-12 font-bold">graduation</span>, I was staying up learning web development. <span className="text-lg text-boho-rose mb-12 font-bold">Now</span>, as a senior in college, I have built multiple full-stack
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
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="bg-boho-forest text-boho-cream px-8 py-3.5 rounded-lg font-medium tracking-wide shadow-md shadow-boho-espresso/20 hover:bg-boho-pine hover:shadow-lg hover:shadow-boho-espresso/25 transition-all"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="border border-boho-forest/60 text-boho-forest px-8 py-3.5 rounded-lg font-medium tracking-wide hover:border-boho-forest hover:bg-boho-forest/5 transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="polaroid relative mx-auto w-full max-w-sm"
          >
            <div
              className="washi-tape bg-boho-mustard/80 -top-3 left-1/2 -translate-x-1/2 -rotate-6"
            />
            <div className="relative h-[380px] w-full">
              <Image
                src="/images/profile/profile2.jpg"
                alt="Daniel Yi"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="font-hand text-4xl text-boho-espresso text-center mt-3">
              that&apos;s me!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
