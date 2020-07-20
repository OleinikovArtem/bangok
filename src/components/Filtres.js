import React, { useContext } from 'react'
import { ContextApp } from '../context/Context'
import { TOGGLE_NUTS, TOGGLE_VEGAN } from '../context/actions'


export const Filtres = () => {
  const { state, dispatch } = useContext(ContextApp)

  const toggleNoNutes = () => dispatch({ type: TOGGLE_NUTS })
  const toggleVegan = () => dispatch({ type: TOGGLE_VEGAN })

  return (
    <div className="container">
      <div className="filters">
        <div className="filters__group">
          <label className="filters__label">Max spiciness</label>
          <div className="filters__slider">
            <div className="slider">
              <div className="slider__thumb" style={{ left: '75%' }}>
                <span className="slider__value">3</span>
              </div>
              <div className="slider__progress" style={{ width: '75%' }} />
              <div className="slider__steps">
                <span /><span /><span /><span className="slider__step-active" /><span />
              </div>
            </div> 
           </div>
        </div>
        <div className="filters__group">
          <div className="filters__checkbox">
            <input className="styled-checkbox" id="nuts-checkbox" type="checkbox" defaultValue={1} onChange={toggleNoNutes} />
            <label htmlFor="nuts-checkbox">
              <span className="filters__label">No nuts</span></label>
          </div>
        </div>
        <div className="filters__group">
          <div className="filters__checkbox">
            <input className="styled-checkbox" id="vegeterian-checkbox" type="checkbox" defaultValue={1} onChange={toggleVegan}/>
            <label htmlFor="vegeterian-checkbox">
              <span className="filters__label">Vegeterian only</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}