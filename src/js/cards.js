
import cards from './menu.json'
import cardsTpl from '../templates/cards.hbs'
// console.log(cards);


// cards.map(el=>console.log(el))
const createCardList = (cards) => {
    return cardsTpl(cards);
}

export const cardListMarkup = createCardList(cards);
