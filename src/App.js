import React, { useReducer, useEffect } from 'react'
import 'swiper/swiper.scss'

import { Modal } from './components/Modal'
import { Header } from './components/Header'
import { Main } from './components/Main'

import { ContextApp, initialState, reducer } from "./context/Context"
import { GET_FILTERED_PRODUCTS } from './context/actions'

//* 
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { filterVegan, filterNuts, filterSpicinness, tag } = state

  useEffect(() => {
    dispatch({ type: GET_FILTERED_PRODUCTS })
  }, [filterNuts, filterVegan, filterSpicinness, tag])
  
  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <div className={`App ${false && "is-modal-open"}`}>
        <Header />
        <Main />
        {false && <Modal />}
      </div>
    </ContextApp.Provider>
  )
}

export default App
