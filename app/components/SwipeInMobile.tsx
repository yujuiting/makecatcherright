'use client'

import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwipeInMobile({
  children,
  className,
  ...props
}: Omit<React.HTMLAttributes<HTMLElement>, `on${string}`>) {
  const isGreaterThan1024 = useMediaQuery('(min-width: 1024px)')

  if (isGreaterThan1024)
    return (
      <div className={className} {...props}>
        {children}
      </div>
    )

  return (
    <Swiper
      className={className}
      wrapperClass="mb-10"
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      {...props}
    >
      {React.Children.toArray(children)?.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

function useMediaQuery(query: string, defaultValue = false) {
  const [isMatch, setIsMatch] = useState(defaultValue)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handleChange = (event: MediaQueryListEvent) =>
      setIsMatch(event.matches)

    setIsMatch(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [query])

  return isMatch
}
