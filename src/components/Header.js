import React, { useContext } from 'react'
// import { ContextApp } from '../context/Context'

export const Header = () => {
  // const [state, dispatch] = useContext(ContextApp)
  return (
      <header className="header container">
        <h1 className="heading logo">Bangkok Express</h1>
        <h3 className="subheading">Great food・Free delivery・Fair price</h3>
        <button type="button" className="cart-icon cart-icon_visible">
          <div className="cart-icon__inner">
            <span className="cart-icon__count">5</span>
            <span className="cart-icon__price">€55.00</span>
          </div>
        </button>
      </header>
  )
}
