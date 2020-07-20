import React, { useContext } from 'react'
import { ContextApp } from '../../context/Context'
import { CLOSE_BACKET } from '../../context/actions'

import closeIcon from '../../assets/icons/cross-icon.svg'
import { Product } from './Product'
import { Form } from './Form'


export const Modal = () => {
  const { state, dispatch } = useContext(ContextApp)
  const orderList = state.backet.orderList
  const handleCloseBacket = () => dispatch({ type: CLOSE_BACKET })

  return (
    <div className="modal">
      <div className="modal__overlay" />
      <div className="modal__inner">
        <div className="modal__header">
          <button type="button" className="modal__close"
            onClick={handleCloseBacket}
          >
            <img src={closeIcon} alt="close-icon" />
          </button>
          <h3 className="modal__title">Your order</h3>
        </div>
        <div className="modal__body">
          <div>
            {orderList.map(food => <Product key={food.id} {...food}/>)}
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}
