export const createHeaderTemplate = () => {
    return (
        `<header class="header">
        <article class="header-top">
          <h2 class="header-top__title">Магазин аквариумов</h2>
          <ul class="header-top__list">
            <li class="header-top__item">
              <a class="header-top__link" href="#">Закладки</a>
            </li>
            <li class="header-top__item">
              <a class="header-top__link" href="#">Корзина</a>
            </li>
            <li class="header-top__item">
              <a class="header-top__link" href="#">Оформить заказ</a>
            </li>
          </ul>
        </article>
        <article class="header-middle">
          <p class="header-middle__desc">Интернет-магазин аквариумов и смежного оборудования</p>
          <div class="header-middle__contacts">
            <a class="header-middle__phone">+7 (943) 321-12-12</a>
            <address class="header-middle__address">г. Нижний Новгород, ул. Бекетова, д 21</address>
          </div>
          <div class="my-cabinet">
            <input class="my-cabinet__input" placeholder="Александр Тюрин">
            <div class="my-cabinet__data">
              <a class="my-cabinet__orders">Мои заказы</a>
              <a class="my-cabinet__cabinet">Личный кабинет</a>
            </div>
          </div>
        </article>
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a class="navigation__link" href="#">Главная</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="#">Каталог</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="#">Доставка</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link" href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      </header>`
    )
}