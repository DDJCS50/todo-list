import logo from './orb-logo.jpg';
import plus from './plus.svg';

const homePage = () => {
  const header = document.querySelector('header');

  function renderLogo() {
    const logo = document.createElement('img');
    logo.src = './images/orb-logo.jpg';
    logo.alt = 'Company logo';
    header.appendChild(logo);
  }

  function renderPlus() {
    const plus = document.createElement('img');
    plus.src = './images/plus.svg';
    plus.alt = 'Plus sign';
    plus.id = 'plus';
    header.appendChild(plus);
  }

  return {
    renderLogo,
    renderPlus
  }
}
export const initialRender = homePage();