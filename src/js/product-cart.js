export const createProductCartTemplate = (price, volume, articleNumber) => {
  return (
    `<article class="product">
      <img class="product__img" src="./img/background.png">
      <div class="product__desc">
        <p class="product__price">${price} рублей</p>
        <p class="product__volume">Аквариум ${volume} литров</p>
      </div>
      <button class="cart-button product__buy-btn" id="buy-btn-article-number-${articleNumber}" type="button">Купить</button>
      <button class="cart-button product__in-cart-btn" id="cart-btn-article-number-${articleNumber}" type="button">В корзину</button>
    </article>`
  )
}