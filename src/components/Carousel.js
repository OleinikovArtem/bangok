import React from 'react'

import Item1 from '../assets/carousel/chicken_cashew.png'
import Item2 from '../assets/carousel/chicken_loempias.png'
import Item3 from '../assets/carousel/penang_shrimp.png'
import Item4 from '../assets/carousel/red_curry_vega.png'

import { CarouserItem } from './CarouserItem'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation])


const carouserlItems = [
  { img: Item1, price: 16.00, title: 'Penang shrimp', id: 1 },
  { img: Item2, price: 14.00, title: 'Chicken cashew', id: 2 },
  { img: Item3, price: 12.50, title: 'Red curry veggies', id: 3 },
  { img: Item4, price: 6.50, title: 'Chicken springrolls', id: 4 }
]

export const Carousel = () => {
  const slides = carouserlItems.map(slide => <SwiperSlide key={slide.id}><CarouserItem {...slide} /></SwiperSlide>)
  return (
    <div className="container">
      <div className="carousel">
        <Swiper
          loop
          navigation
        >
          {slides}
        </Swiper>
      </div >
    </div>
  )
}
