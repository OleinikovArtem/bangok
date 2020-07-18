import React, { useState } from 'react'
import { Modal } from './components/Modal'
import { Header } from './components/Header'
import { Main } from './components/Main'

//* 
function App() {
  const [isModalOpen, setIsModalOpen] = useState()
  return (
    <div className={`App ${isModalOpen && "is-modal-open"}`}>
      <Header />
      <Main />
      {isModalOpen && <Modal />}
    </div>
  )
}

export default App
