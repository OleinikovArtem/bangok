import React from 'react'
import { Carousel } from './Carousel'
import { Ribbon } from './Ribbon'
import { Filtres } from './Filtres'
import { FoodList } from './FoodList'

export const Main = () => {
  return (
    <main>
      <Carousel />

      <div className="container">
        <h2 className="section-heading">Our Menu</h2>
        <div>
          <Ribbon />
        </div>
      </div>
      <Filtres />

      <FoodList />
      
    </main> 
  )
}
