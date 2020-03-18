
const Home = (function () {
  const divHome = document.createElement('div');
  const divHomeText = document.createElement('div');
  const title = document.createElement('h1');
  const content = document.createElement('p');

  divHome.id = 'home';
  divHome.classList.add('hero-image');
  divHomeText.classList.add('hero-text');

  title.textContent = 'My restaurant';
  content.textContent = 'This is the best food ever you can try';

  divHomeText.appendChild(title);
  divHomeText.appendChild(content);
  divHome.appendChild(divHomeText);

  return divHome;
}());

const carousel = () => {
  let counter = 1;
  const div = document.querySelector('.hero-image');
  div.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images/restaurant/restaurant-0.jpg")';

  setInterval(() => {
    counter = counter > 2 ? 0 : counter;
    div.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./images/restaurant/restaurant-${counter}.jpg")`;
    counter++;
  }, 5000);
};

export default { Home, carousel };
