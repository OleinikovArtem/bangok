import React from "react"
import { data } from '../data'
import { GET_FILTERED_PRODUCTS, ADD_TO_BACKET, TOGGLE_NUTS, TOGGLE_VEGAN, CHANGE_TAG } from './actions'

export const ContextApp = React.createContext()

export const initialState = {
  products: data,
  productsFiltered: null,
  tag: 'all',
  filterNuts: false,
  filterVegan: false,
  filterSpicinness: 4,
  backet: {
    total: 0,
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
    default:
      return state
  }
}