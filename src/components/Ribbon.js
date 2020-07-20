import React, { useState, useContext } from 'react'
import RightIcon from '../assets/icons/angle-icon.svg'
import { ContextApp } from '../context/Context'
import { CHANGE_TAG } from '../context/actions'

const typesList = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Salads' },
  { id: 3, title: 'Soups' },
  { id: 4, title: 'Chicken dishes' },
  { id: 5, title: 'Beef dishes' },
  { id: 6, title: 'Seafood dishes' },
  { id: 7, title: 'Vegetable dishes' },
  { id: 8, title: 'Bits and bites' },
  { id: 9, title: 'On the side' },
]

const Item = ({ title, id, changeActiveId, activeID}) => {
  const {dispatch} = useContext(ContextApp)
  const changeTag = () => dispatch({ type: CHANGE_TAG, payload: title.toLowerCase()})
  let cls = ['ribbon__item', `${activeID === id ? ' ribbon__item_active': ''}`]
  
  const handleClick = () => {
    changeActiveId(id)
    changeTag()
  }

  return (
    <span
      className={cls.join(' ')}
      onClick={handleClick}
    >{title}
    </span>)
}

export const Ribbon = () => {
  const [activeID, setActiveID] = useState(1)
  const [filters, setFilters] = useState(typesList)

  const changeActiveId = (id) => activeID !== id ? setActiveID(id) : null

  return (
    <div className="container">
      <div className="ribbon">
        <div className="ribbon__arrow ribbon__arrow_left">
          <img src="assets/icons/angle-icon.svg" alt="icon" />
        </div>
        <nav className="ribbon__inner">
          {filters.map(({ title, id}) => (
            <Item key={id}
              title={title}
              id={id}
              activeID={activeID}
              changeActiveId={changeActiveId}
            />
          ))}
        </nav>
        <div className="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src={RightIcon} alt="icon" />
        </div>
      </div>
    </div>
  )
}