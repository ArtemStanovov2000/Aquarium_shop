import { createElement } from "../utils.js"

const createFooterTemplate = () => {
  return (
    `<div>
    <div class="footer__top footer-top">
      <div class="footer-top__left">
        <a href="#" class="shop-logo"></a>
        <p class="shop-logo-desc">г. Нижний Новгород, ул. Бекетова, д 21</p>
      </div>
      <div class="footer-top__bar footer-bar">
        <ul class="footer-bar__list">
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Главная</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Каталог</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Доставка</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Контакты</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Аквариумы</a>
          </li>
          <li class="footer-bar__item">
            <a href="#" class="footer-bar__link">Дополнительное оборудование</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="copyright-memo">© Все права защищены</p>
      <div class="messengers">
        <ul class="messengers__list">
          <li class="messengers__item">
            <a href="#" class="messengers__link messengers__link--telegram-logo"></a>
          </li>
          <li class="messengers__item">
            <a href="#" class="messengers__link messengers__link--facebook-logo"></a>
          </li>
          <li class="messengers__item">
            <a href="#" class="messengers__link messengers__link--vk-logo"></a>
          </li>
        </ul>
      </div>
      <div class="developers-name">
        <p class="developers-name__desc">Разработано:</p>
        <p class="developers-name__desc">g7g7g8</p>
      </div>
    </div>
  </div>`
  )
}

export default class SiteFooterTemplate {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterTemplate();
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