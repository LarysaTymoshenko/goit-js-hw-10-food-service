import { refs } from './js/refs.js'
import { cardListMarkup } from './js/cards.js'
import { onChangeThemeClick } from './js/theme-switcher.js'
import './css/styles.css'


// СОЗДАЕМ КАРТОЧКИ МЕНЮ НА СТРАНИЦЕ
refs.cardList.insertAdjacentHTML('beforeend', cardListMarkup) 


// ПЕРЕКЛЮЧАЕМ ТЕМУ СТРАНИЦЫ
refs.themeSwitcher.addEventListener('change', onChangeThemeClick)
