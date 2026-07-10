'use client'

import Image from 'next/image'

const photos = [
  {
    src: '/images/gallery/band-performance.jpg',
    alt: 'Performing on stage with my band',
    caption: 'Playing a set with my band'
  },
  {
    src: '/images/gallery/concert-friends.jpg',
    alt: 'At a concert with friends',
    caption: 'Concert night with friends'
  },
  {
    src: '/images/gallery/mirror-selfie.jpg',
    alt: 'Daniel Yi',
    caption: 'On the go'
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Beyond the Code</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          When I&apos;m not programming, you can probably find me playing music with my band or catching a show with friends.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-medium">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
