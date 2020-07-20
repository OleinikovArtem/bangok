import React from "react"
import { data } from '../data'
import { GET_FILTERED_PRODUCTS, ADD_TO_BACKET, TOGGLE_NUTS, TOGGLE_VEGAN, CHANGE_TAG, OPEN_BACKET, CLOSE_BACKET, MINUS_TO_BACKET } from './actions'

export const ContextApp = React.createContext()

export const initialState = {
  products: data,
  productsFiltered: null,
  tag: 'all',
  filterNuts: false,
  filterVegan: false,
  filterSpicinness: 4,
  isOpenBacket: false,
  backet: {
    totalPrice: 0,
    totalCount: 0,
    orderList: []
  }
}

export const reducer = (state, { type, payload }) => {
  const { products, tag, filterNuts, filterVegan, filterSpicinness, backet } = state
  switch (type) {
    case GET_FILTERED_PRODUCTS:
      const filtered = state.products.filter((food) => {
        const { noNuts, vegan, spicinness, tags } = food

        const isNuts = filterNuts ? noNuts === filterNuts : true
        const isVegan = filterVegan ? vegan === filterVegan : true
        const isTag = tag === 'all' ? true : tags.includes(tag)
        const isSpicinness = filterSpicinness >= spicinness

        if (isNuts && isVegan && isTag && isSpicinness) {
          return food
        }
      })
      return {
        ...state,
        productsFiltered: filtered
      }
    case TOGGLE_NUTS:
      const updateToggleNute = !filterNuts
      return {
        ...state,
        filterNuts: updateToggleNute
      }
    case TOGGLE_VEGAN:
      const updateToggleVegan = !filterVegan
      return {
        ...state,
        filterVegan: updateToggleVegan
      }
    case CHANGE_TAG:
      return {
        ...state,
        tag: payload
      }
    case ADD_TO_BACKET:
      const { id, price, title, img } = payload
      const totalCount = state.backet.totalCount + 1
      const totalPrice = state.backet.totalPrice + price
      const isHaveThisFood = state.backet.orderList.findIndex(el => el.id === id)
      let orderList
      if (isHaveThisFood === -1) {
        orderList = [...state.backet.orderList, { id, count: 1, price, title, img }]
      } else {
        orderList = state.backet.orderList.map((el, i) => {
          if (i === isHaveThisFood) {
            const count = el.count + 1
            return { ...el, count }
          }
          return el
        })
      }

      return {
        ...state,
        backet: {
          totalCount,
          totalPrice,
          orderList
        }
      }
    // case MINUS_TO_BACKET:
    //   const { id, price } = payload
    //   return {
    //     ...state
    //   }
    case OPEN_BACKET:
      return {
        ...state,
        isOpenBacket: true
      }
    case CLOSE_BACKET:
      return {
        ...state,
        isOpenBacket: false
      }
    default:
      return state
  }
}