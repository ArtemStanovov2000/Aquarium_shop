export const render = (container, template, place = `beforeend`) => {
    container.insertADjacentHTML(place, template)
};