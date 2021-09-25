import { refs } from './js/refs.js'
import { cardListMarkup } from './js/cards.js'
import { onChangeThemeClick } from './js/theme-switcher.js'
import '../src/css/styles.css'

// creat cart list
refs.cardList.insertAdjacentHTML('beforeend', cardListMarkup);


// turn off/on themes
refs.themeSwitcher.addEventListener('change', onChangeThemeClick);
