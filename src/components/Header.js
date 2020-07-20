import React, { useContext } from 'react'
import { ContextApp } from '../context/Context'
import { OPEN_BACKET } from '../context/actions'

export const Header = () => {
  const { state, dispatch } = useContext(ContextApp)
  const { backet: { totalCount, totalPrice } } = state

  const handleOpenBacket = () => dispatch({ type: OPEN_BACKET })

  return (
    <header className="header container">
      <h1 className="heading logo">Bangkok Express</h1>
      <h3 className="subheading">Great food・Free delivery・Fair price</h3>
      {!!totalCount && (
        <button type="button" className="cart-icon cart-icon_visible"
          onClick={handleOpenBacket}
        >
          <div className="cart-icon__inner">
            <span className="cart-icon__count">{totalCount}</span>
            <span className="cart-icon__price">€{totalPrice}</span>
          </div>
        </button>
      )}
    </header>
  )
}
