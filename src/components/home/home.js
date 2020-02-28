
const Home = (function() {
  'use strict';

  const divHome = document.createElement("div")
  const divHomeText = document.createElement("div")
  const title = document.createElement("h1")
  const content = document.createElement("p")

  divHome.id = "home"
  divHome.classList.add("hero-image")

  title.textContent = "My restaurant"
  content.textContent = "This is the best food ever you can try"

  divHomeText.appendChild(title)
  divHomeText.appendChild(content)
  divHome.appendChild(divHomeText)

  return divHome
}());

export default Home
