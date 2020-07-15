import foodTemplate from '../food-list.hbs';
import foodList from '../menu.json';

const htmlLinkRef = document.querySelector('.js-menu');
const markup = foodTemplate(foodList);
htmlLinkRef.insertAdjacentHTML('beforeend', markup);
