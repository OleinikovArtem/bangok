import React, { useContext } from 'react'
import { FoodItem } from './FoodItem'
import { ContextApp } from '../context/Context'



export const FoodList = () => {
  const { state, dispatch } = useContext(ContextApp);
// console.log(state?.productsFiltered)
  return (
    <div className="container">
      <div className="products-grid">
        <div className="products-grid__inner">
          {state.productsFiltered?.map((item, i) => {
            return <FoodItem key={item.id + i} {...item} dispatch={dispatch}/>
          })}
        </div>
      </div>
    </div>
  )
}
