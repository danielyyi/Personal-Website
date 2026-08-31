'use client'

import Image from 'next/image'

const photos = [
  {
    src: '/images/gallery/band-performance.jpg',
    alt: 'Performing on stage with my band',
    caption: 'Playing a set with my band',
    rotate: '-rotate-3',
    tape: 'bg-boho-mustard/80',
    tapeRotate: '-rotate-6',
  },
  {
    src: '/images/gallery/concert-friends.jpg',
    alt: 'At a concert with friends',
    caption: 'Concert night with friends',
    rotate: 'rotate-2',
    tape: 'bg-boho-sage/70',
    tapeRotate: 'rotate-3',
  },
  {
    src: '/images/gallery/mirror-selfie.jpg',
    alt: 'Daniel Yi',
    caption: 'work fit',
    rotate: '-rotate-2',
    tape: 'bg-boho-rose/70',
    tapeRotate: '-rotate-2',
  }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-boho-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-center mb-16 text-boho-espresso">Beyond the Code</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16 px-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`polaroid group relative w-full max-w-xs mx-auto ${photo.rotate} hover:z-10`}
            >
              <div className={`washi-tape ${photo.tape} -top-3 left-1/2 -translate-x-1/2 ${photo.tapeRotate}`} />
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-hand text-2xl text-boho-espresso text-center mt-3">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
