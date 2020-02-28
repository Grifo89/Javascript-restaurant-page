const Navbar = (function() {
  'use strict';

  const nav = document.createElement("nav")
  const ul = document.createElement("ul")
  const liHome = document.createElement("li")
  const liMenu = document.createElement("li")
  const liBooking = document.createElement("li")
  const aHome = document.createElement("a")
  const aMenu = document.createElement("a")
  const aBooking = document.createElement("a")

  ul.classList.add("navbar")

  aHome.textContent = "Home"
  aHome.href = "#home"
  liHome.classList.add("nav-link")
  liHome.appendChild(aHome)
  aMenu.textContent = "Menu"
  aMenu.href = "#menu"
  liMenu.classList.add("nav-link")
  liMenu.appendChild(aMenu)
  aBooking.textContent = "Booking"
  aBooking.href = "#booking"
  liBooking.classList.add("nav-link")
  liBooking.appendChild(aBooking)

  ul.appendChild(liHome)
  ul.appendChild(liMenu)
  ul.appendChild(liBooking)
  nav.appendChild(ul)

  return nav

}());

export default Navbar
