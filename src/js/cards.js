import cards from '../js/menu.json'
import cardsTpl from '../templates/cards.hbs'

const createCardListMarkup = (cards) => {
    return cardsTpl(cards);
}

export const cardListMarkup = createCardListMarkup(cards);

console.log(fjkjf);