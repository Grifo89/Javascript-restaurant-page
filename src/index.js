import './style.scss';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Booking from './components/booking/booking';


const content = document.getElementById('content');

content.appendChild(Navbar);
content.appendChild(Home.Home);
Home.carousel();
const links = document.querySelectorAll('.nav-link > a');
const nav = document.querySelector('nav');
links.forEach((item) => {
  if (item.textContent === 'Home') {
    item.addEventListener('click', (e) => {
      nav.nextSibling.remove();
      content.appendChild(Home.Home);
      Home.carousel();
      e.preventDefault();
    });
  } else if (item.textContent === 'Menu') {
    item.addEventListener('click', (e) => {
      nav.nextSibling.remove();
      content.appendChild(Menu.List);
      e.preventDefault();
    });
  } else if (item.textContent === 'Booking') {
    item.addEventListener('click', (e) => {
      nav.nextSibling.remove();
      content.appendChild(Booking);
      e.preventDefault();
    });
  }
});
