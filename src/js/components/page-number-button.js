export const createSitePageNumberBtnTemplate = (number) => {
    return (
        `<input type="radio" id="page-number-${number}" name="page-number" value="${number}" class="page-number-radio">
        <label for="page-number-${number}" class="page-number-label">${number}</label>`
    )
}