'use client'

import { useState, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'

export default function ProjectImagesPreview ({
  urlDesktop = "/projects/password-generator-desktop.webp",
  urlMobile = "/projects/password-generator-mobile.webp",
  name = 'Name'
}) {
  const [transformX, setTransformX] = useState(0)  
  const [transformY, setTransformY] = useState(0)
  const wrapperRef = useRef(null)

  useLayoutEffect(() => {
    const { width, height } = wrapperRef.current.getBoundingClientRect();

    const halfWidth = width / 2
    const halfHeight = height / 2

    wrapperRef.current.addEventListener('mousemove', event => {
      const { offsetX, offsetY } = event

      const rotationX = ((offsetX - halfWidth) / halfWidth) * 10
      const rotationY = ((offsetY - halfHeight) / halfHeight) * 10

      setTransformX(rotationX)
      setTransformY(rotationY)
    })

    wrapperRef.current.addEventListener('mouseleave', () => {
      setTransformX(0)
      setTransformY(0)
    })
  }, [transformX, transformY])

  return (
    <div className='relative flex items-center justify-center h-[200px] w-[96%] mx-auto bg-gray-700/30 rounded-md p-2'>
      <div
        className="relative [transition:transform_ease_0.3s] [perspective:1000px] w-full p-2"
        style={{
          transform: `rotateX(${transformX}deg) rotateY(${transformY}deg)`
        }}
        ref={wrapperRef}
      >
        <Image
          width={300}
          height={175}
          src={urlDesktop}
          className='w-full h-[175px]'
          alt={`${name} preview in Desktop`}
        />

        <Image
          width={85}
          height={175}
          src={urlMobile}
          className='absolute top-0 left-3 h-[175px] w-auto'
          alt={`${name} preview in Mobile`}
        />
      </div>
    </div>
  )
}
