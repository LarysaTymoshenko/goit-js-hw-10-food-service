import { refs } from './js/refs.js'
import { cardListMarkup } from './js/cards.js'
import { LIGHT, DARK } from './js/theme.js'
import '../src/css/styles.css'



// creat cart list
refs.cardList.insertAdjacentHTML('beforeend', cardListMarkup);


// turn off/on themes

let newTheme = localStorage.getItem('n-theme');
 if (!newTheme) {
    newTheme = LIGHT;
    localStorage.setItem('n-theme', LIGHT);

} else 
    document.querySelector('body').classList.add(newTheme);
 refs.checkBox.checked = newTheme === LIGHT ? false : true;




refs.checkBox.addEventListener('change', changeTheme);
    
function changeTheme(e) {
    document.querySelector('body').classList.toggle(DARK);
  
    document.querySelector('body').classList.toggle(LIGHT);

  localStorage.setItem('n-theme', e.target.checked? DARK :LIGHT);
}





