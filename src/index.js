import './style.scss';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Booking from './components/booking/booking';


const content = document.getElementById('content');

content.appendChild(Navbar);
content.appendChild(Home.Home);
content.appendChild(Menu.Title);
content.appendChild(Menu.List);
content.appendChild(Booking);
Home.carousel();
