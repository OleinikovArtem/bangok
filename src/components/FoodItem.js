import React from 'react'
import PlusIcon from '../assets/icons/plus-icon.svg'
import { ADD_TO_BACKET } from '../context/actions'

export const FoodItem = ({ id, title, price, img, dispatch }) => {

  const addToBacket = (id, price, title, img) => dispatch({ type: ADD_TO_BACKET, payload: { id, price, title, img} })
  return (
    <div className="card">
      <div className="card__top">
        <img src={img} className="card__image" alt="product" />
        <span className="card__price">€{price}</span>
      </div>
      <div className="card__body">
        <div className="card__title">{title}</div>
        <button type="button" className="card__button" onClick={() => addToBacket(id, price, title, img)}>
          <img src={PlusIcon} alt="icon" />
        </button>
      </div>
    </div>
  )
}
