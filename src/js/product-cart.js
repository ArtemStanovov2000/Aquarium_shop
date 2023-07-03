export const createProductCartTemplate = () => {
    return (
      `<article class="product">
      <img class="product__img">
      <div class="product__desc">
        <p class="product__price">1467 рублей</p>
        <p class="product__volume">Аквариум 5 литров</p>
      </div>
      <button id="product-buy-btn" class="product__buy-btn" type="button">Купить</button>
      <button id="product-in-cart-btn" class="product__in-cart-btn" type="button">В корзину</button>
    </article>`
    )
  }