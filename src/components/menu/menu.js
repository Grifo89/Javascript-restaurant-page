import Card from '../card/card';

const json = require('../../menu.json');


const Title = (function () {
  const title = document.createElement('h1');
  title.textContent = 'Menu';
  title.classList.add('menu-title');
  title.id = 'menu';

  return title;
}());

const List = (function () {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');


  Object.keys(json).forEach((category) => {
    const list = document.createElement('ul');
    list.classList.add('menu-list');
    const menuSubtitle = document.createElement('h2');
    menuSubtitle.classList.add('menu-subtitle');
    menuSubtitle.textContent = category;
    json[category].forEach((dish) => {
      const listItem = document.createElement('li');
      listItem.classList.add('menu-item');
      listItem.appendChild(Card(dish));
      list.appendChild(listItem);
    });
    menuContainer.appendChild(menuSubtitle);
    menuContainer.appendChild(list);
  });

  return menuContainer;
}());

export default { Title, List };
