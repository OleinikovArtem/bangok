import React, { useState } from 'react'
import RightIcon from '../assets/icons/angle-icon.svg'
import LeftIcon from '../assets/icons/angle-left-icon.svg'

import Item1 from '../assets/carousel/chicken_cashew.png'
import Item2 from '../assets/carousel/chicken_loempias.png'
import Item3 from '../assets/carousel/penang_shrimp.png'
import Item4 from '../assets/carousel/red_curry_vega.png'

import { CarouserItem } from './CarouserItem'
import SwiperCore, { Virtual, Navigation, Pagination, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

SwiperCore.use([ Navigation, Pagination, Controller])



const carouserlItems = [
  { img: Item1, price: 16.00, title: 'Penang shrimp', id: 1 },
  { img: Item2, price: 14.00, title: 'Chicken cashew', id: 2 },
  { img: Item3, price: 12.50, title: 'Red curry veggies', id: 3 },
  { img: Item4, price: 6.50, title: 'Chicken springrolls', id: 4 }
]

export const Carousel = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null)


  console.log(<Swiper />)
  return (
    <div className="carousel">
      <div className="carousel__arrow carousel__arrow_right"
        onClick={() => setControlledSwiper(true)}>
        <img src={RightIcon} alt="icon" />
      </div>
      <div className="carousel__arrow carousel__arrow_left">
        <img src={LeftIcon} alt="icon" />
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        controller={{ control: controlledSwiper }}
        style={{ height: '100%' }}
        pagination={{ clickable: true }}
        >
      {carouserlItems.map(slide => <SwiperSlide key={slide.id}><CarouserItem {...slide} /></SwiperSlide>)}
      </Swiper>

    </div >
  )
}
