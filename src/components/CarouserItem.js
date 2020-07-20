import React, { useContext } from 'react'
import PlusIcon from '../assets/icons/plus-icon.svg'
import { ContextApp } from '../context/Context'
import { ADD_TO_BACKET } from '../context/actions'

export const CarouserItem = ({ img, price, title, id}) => {
  const { state, dispatch } = useContext(ContextApp)
  const addToBacket = () => dispatch({ type: ADD_TO_BACKET, payload: { id, price, img, title } })

  return (
    <div className="carousel__slide">
      <img src={img} className="carousel__img" alt="slide" />
      <div className="carousel__caption">
        <span className="carousel__price">€{price}</span>
        <div className="carousel__title">{title}</div>
        <button type="button" className="carousel__button" onClick={addToBacket}>
          <img src={PlusIcon} alt="icon" />
        </button>
      </div>
    </div>
  )
}
