import React from 'react'
import { Carousel } from './Carousel'

export const Main = () => {
  return (
    <main>
      <div className="container">
        <Carousel />
      </div>
      {/* <div className="container">
        <h2 className="section-heading">Our Menu</h2>
        <div>
          <div className="container">
            <div className="ribbon">
              <div className="ribbon__arrow ribbon__arrow_left">
                <img src="assets/icons/angle-icon.svg" alt="icon" />
              </div>
              <nav className="ribbon__inner">
                <a href="#" className="ribbon__item ribbon__item_active">All</a><a href="#" className="ribbon__item">Salads</a><a href="#" className="ribbon__item">Soups</a><a href="#" className="ribbon__item">Chicken dishes</a><a href="#" className="ribbon__item">Beef dishes</a><a href="#" className="ribbon__item">Seafood dishes</a><a href="#" className="ribbon__item">Vegetable dishes</a><a href="#" className="ribbon__item">Bits and bites</a><a href="#" className="ribbon__item">On the side</a>
              </nav>
              <div className="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
                <img src="assets/icons/angle-icon.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <input className="styled-checkbox" id="nuts-checkbox" type="checkbox" defaultValue={1} />
              <label htmlFor="nuts-checkbox">
                <span className="filters__label">No nuts</span></label>
            </div>
          </div>
          <div className="filters__group">
            <div className="filters__checkbox">
              <input className="styled-checkbox" id="vegeterian-checkbox" type="checkbox" defaultValue={1} />
              <label htmlFor="vegeterian-checkbox">
                <span className="filters__label">Vegeterian only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="products-grid">
          <div className="products-grid__inner">
            <div className="card">
              <div className="card__top">
                <img src="assets/products/laab_kai_chicken_salad.png" className="card__image" alt="product" />
                <span className="card__price">€10.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Laab kai chicken salad</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/som_tam_papaya_salad.png" className="card__image" alt="product" />
                <span className="card__price">€9.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Som tam papaya salad</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/tom_yam.png" className="card__image" alt="product" />
                <span className="card__price">€7.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Tom yam kai</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/tom_kha.png" className="card__image" alt="product" />
                <span className="card__price">€7.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Tom kha kai</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/tom_kha.png" className="card__image" alt="product" />
                <span className="card__price">€8.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Tom kha koong</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/tom_yam.png" className="card__image" alt="product" />
                <span className="card__price">€7.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Tom yam vegetarian</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/tom_kha.png" className="card__image" alt="product" />
                <span className="card__price">€7.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Tom kha vegetarian</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/sweet_n_sour.png" className="card__image" alt="product" />
                <span className="card__price">€14.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Sweet 'n sour chicken</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/chicken_cashew.png" className="card__image" alt="product" />
                <span className="card__price">€14.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Chicken cashew</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/beef_massaman.png" className="card__image" alt="product" />
                <span className="card__price">€14.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Beef massaman</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/chu_chee.png" className="card__image" alt="product" />
                <span className="card__price">€16.00</span>
              </div>
              <div className="card__body">
                <div className="card__title">Seafood chu chee</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/green_curry.png" className="card__image" alt="product" />
                <span className="card__price">€12.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Green curry veggies</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/tofu_cashew.png" className="card__image" alt="product" />
                <span className="card__price">€12.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Tofu cashew</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/krapau_vega.png" className="card__image" alt="product" />
                <span className="card__price">€12.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Krapau tofu</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/kroepoek.png" className="card__image" alt="product" />
                <span className="card__price">€2.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Prawn crackers</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/fish_cakes.png" className="card__image" alt="product" />
                <span className="card__price">€6.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Fish cakes</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/sate.png" className="card__image" alt="product" />
                <span className="card__price">€6.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Chicken satay</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/satesaus.png" className="card__image" alt="product" />
                <span className="card__price">€1.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Satay sauce</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/koong_hom_pha.png" className="card__image" alt="product" />
                <span className="card__price">€6.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Shrimp springrolls</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/mini_vega_springrolls.png" className="card__image" alt="product" />
                <span className="card__price">€6.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Mini vegetarian spring rolls</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/chicken_loempias.png" className="card__image" alt="product" />
                <span className="card__price">€6.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Chicken springrolls</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/fried_rice.png" className="card__image" alt="product" />
                <span className="card__price">€7.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Thai fried rice</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/kroepoek.png" className="card__image" alt="product" />
                <span className="card__price">€2.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Fresh prawn crackers</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/stir_fried_vegetables.png" className="card__image" alt="product" />
                <span className="card__price">€7.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Stir fried vegetables</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/witte_rijst.png" className="card__image" alt="product" />
                <span className="card__price">€1.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">White rice</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/fried_noodles.png" className="card__image" alt="product" />
                <span className="card__price">€7.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Fried noodles Thai style</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/king_salad.png" className="card__image" alt="product" />
                <span className="card__price">€7.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">King salad</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card__top">
                <img src="assets/products/satesaus.png" className="card__image" alt="product" />
                <span className="card__price">€1.50</span>
              </div>
              <div className="card__body">
                <div className="card__title">Satésaus</div>
                <button type="button" className="card__button">
                  <img src="assets/icons/plus-icon.svg" alt="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </main> 
  )
}
