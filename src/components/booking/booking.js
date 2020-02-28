const Booking = (function() {
  'use strict';
  const bookingTitle = document.createElement("h1")
  const bookingContainer = document.createElement("div")
  const bookingText = document.createElement("p")
  const bookingButton = document.createElement("button")

  bookingTitle.classList.add("booking-title")
  bookingTitle.textContent = "Booking"
  bookingText.classList.add("booking-text")
  bookingText.textContent = "Take a changes to try new things"
  bookingButton.classList.add("booking-button")
  bookingButton.textContent = "Booking now"
  bookingContainer.classList.add("booking-container")
  bookingContainer.id = "booking"

  bookingContainer.appendChild(bookingTitle)
  bookingContainer.appendChild(bookingText)
  bookingContainer.appendChild(bookingButton)

  return bookingContainer
}());

export default Booking
