import React, { useContext } from 'react'
import PlusIcon from '../../assets/icons/square-plus-icon.svg'
import MinusIcon from '../../assets/icons/square-minus-icon.svg'
import { ContextApp } from '../../context/Context'
import { ADD_TO_BACKET, MINUS_TO_BACKET } from '../../context/actions'

export const Product = ({ img, price, count, id, title}) => {
  const {state, dispatch} = useContext(ContextApp)

  const addToBacket = () => dispatch({ type: ADD_TO_BACKET, payload: { id, price, title, img } })
  const minusToBacket = () => dispatch({ type: MINUS_TO_BACKET, payload: { id, price } })

  return (
    <div className="cart-product">
      <div className="cart-product__img">
        <img src={img} alt="product" />
      </div>
      <div className="cart-product__info">
        <div className="cart-product__title">{title}</div>
        <div className="cart-product__price-wrap">
          <div className="cart-counter">
            <button type="button" className="cart-counter__button cart-counter__button_minus">
              <img src={MinusIcon} alt="minus" onClick={minusToBacket}/>
            </button>
            <span className="cart-counter__count">{count}</span>
            <button type="button" className="cart-counter__button cart-counter__button_plus">
              <img src={PlusIcon} alt="plus" onClick={addToBacket} />
            </button>
          </div>
          <div className="cart-product__price">€{price}</div>
        </div>
      </div>
    </div>
  )
}