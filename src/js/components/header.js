import { createElement } from "../utils.js"

const createHeaderTemplate = () => {
  return (
    `<div>
    <article class="header-top">
      <h2 class="header-top__title">Магазин аквариумов</h2>
      <ul class="header-top__list">
        <li class="header-top__item">
          <a href="#" class="header-top__link" href="#">Закладки</a>
        </li>
        <li class="header-top__item">
          <a href="#" id="product-cart" class="header-top__link" href="#">Корзина</a>
        </li>
        <li class="header-top__item">
          <a href="#" class="header-top__link" href="#">Оформить заказ</a>
        </li>
      </ul>
    </article>
    <article class="header-middle">
      <p class="header-middle__desc">Интернет-магазин аквариумов и смежного оборудования</p>
      <div class="header-middle__contacts">
        <a href="#" class="header-middle__phone">+7 (943) 321-12-12</a>
        <address class="header-middle__address">г. Нижний Новгород, ул. Бекетова, д 21</address>
      </div>
      <div class="my-cabinet">
        <input class="my-cabinet__input" placeholder="Александр Тюрин">
        <div class="my-cabinet__data">
          <a href="#" class="my-cabinet__orders">Мои заказы</a>
          <a href="#" class="my-cabinet__cabinet">Личный кабинет</a>
        </div>
      </div>
    </article>
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" class="navigation__link" href="#">Главная</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link" href="#">Каталог</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link" href="#">Доставка</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link" href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  </div>`
  );
};

export default class SiteHeaderTemplate {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createHeaderTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
};