const Card = (dish) => {
  'use strict';
  const cardContainer = document.createElement("div")
  const cardInner = document.createElement("div")
  const cardFront = document.createElement("div")
  const cardBack = document.createElement("div")
  const cardImage = document.createElement("img")
  const cardTitle = document.createElement("h1")
  const cardDescription = document.createElement("p")

  cardContainer.classList.add("flip-card")
  cardInner.classList.add("flip-card-inner")
  cardFront.classList.add("flip-card-front")
  cardBack.classList.add("flip-card-back")

  cardTitle.textContent = dish.title
  cardDescription.textContent = dish.description

  cardFront.appendChild(cardImage)
  cardBack.appendChild(cardTitle)
  cardBack.appendChild(cardDescription)
  cardInner.appendChild(cardFront)
  cardInner.appendChild(cardBack)
  cardContainer.appendChild(cardInner)

  cardImage.src = dish ? dish.src : ""

  return cardContainer
}

export default Card
