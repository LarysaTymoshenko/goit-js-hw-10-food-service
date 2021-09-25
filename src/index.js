import { refs } from './js/refs.js'
import { cardListMarkup } from './js/cards.js'
import { LIGHT, DARK } from './js/theme.js'
import '../src/css/styles.css'



// creat cart list
refs.cardList.insertAdjacentHTML('beforeend', cardListMarkup);


// turn off/on themes

refs.themeSwitch.addEventListener('change', changeTheme);



 let theme = localStorage.getItem('theme');

    
function changeTheme(event) {
  document.querySelector('body').classList.toggle(DARK);
  document.querySelector('body').classList.toggle(LIGHT);
  localStorage.setItem('theme', theme? DARK : LIGHT);
}


if (!theme) {
    theme = LIGHT;
    localStorage.setItem('theme', theme);
    document.querySelector('body').classList.add(LIGHT);
}else refs.themeSwitch.checked = theme === LIGHT ? false : true;



