export const createSortTemplate = () => {
    return (
      `<article class="sort">
      <h2 class="sort__title">Сортировка товаров:</h2>
      <div class="price-sort sort-param">
        <input type="radio" id="more-expensive-first-btn" name="price" value="3" class="sort__radio" value="expensive">
        <label for="more-expensive-first-btn" class="sort__label">Сначала подороже</label>
        <input type="radio" id="cheaper-first-btn" name="price" value="3" class="sort__radio" value="cheap" checked>
        <label for="cheaper-first-btn" class="sort__label">Сначала подешевле</label>
      </div>
      <div class="volume-sort sort-param">
        <input type="radio" id="more-volume" name="volume" value="3" class="sort__radio" value="small">
        <label for="more-volume" class="sort__label">Поменьше объем</label>
        <input type="radio" id="less-volume" name="volume" value="3" class="sort__radio" value="large" checked>
        <label for="less-volume" class="sort__label">Побольше объем</label>
      </div>
    </article>`
    )
  }