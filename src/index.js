import './style.scss';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'

const content = document.getElementById('content')

content.appendChild(Navbar)
content.appendChild(Home)
