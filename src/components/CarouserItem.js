import React from 'react'
import PlusIcon from '../assets/icons/plus-icon.svg'

export const CarouserItem = ({ img, price, title }) => {
  return (
    <div className="carousel__slide">
      <img src={img} className="carousel__img" alt="slide" />
      <div className="carousel__caption">
        <span className="carousel__price">€{price}</span>
        <div className="carousel__title">{title}</div>
        <button type="button" className="carousel__button">
          <img src={PlusIcon} alt="icon" />
        </button>
      </div>
    </div>
  )
}
