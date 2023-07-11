import logo from './orb-logo.jpg';
import plus from './plus.svg';

const homePage = () => {
  const header = document.querySelector('header');
  const sidebar = document.querySelector('#sidebar');

  function renderLogo() {
    const logo = document.createElement('img');
    logo.src = './images/orb-logo.jpg';
    logo.alt = 'Company logo';
    header.appendChild(logo);
  }

  function renderPlus() {
    const plus = document.createElement('img');
    const plusText = document.createElement('p');
    plusText.innerText = 'New Task';
    plus.src = './images/plus.svg';
    plus.alt = 'Plus sign';
    plus.id = 'plusTask';
    header.appendChild(plus);
    header.appendChild(plusText);
  }

  function renderDueDates(section) {
    const dueDateDiv = document.createElement('div');
    dueDateDiv.id = section.toLowerCase();

    const symbol = document.createElement('img');
    symbol.alt = '#';

    const title = document.createElement('p');
    title.innerText = section;

    dueDateDiv.appendChild(symbol);
    dueDateDiv.appendChild(title);
    sidebar.appendChild(dueDateDiv);
  }

  function renderProjectSections(section) {
    const projectSection = document.createElement('div');
    projectSection.id = section;
    projectSection.classList = 'projectSection';

    const symbol = document.createElement('img');
    symbol.alt = '#';

    const title = document.createElement('h2');
    title.innerText = section;

    projectSection.appendChild(symbol);
    projectSection.appendChild(title);
    sidebar.appendChild(projectSection);
  }

  function renderProject(section) {
    const project = document.createElement('div');
    project.id = section;
    project.classList = 'project';

    const symbol = document.createElement('img');
    symbol.alt = '#';

    const title = document.createElement('p');
    title.innerText = section;

    project.appendChild(symbol);
    project.appendChild(title);
    sidebar.appendChild(project);
  }

  function renderAddList() {
    const newList = document.createElement('div');
    newList.id = 'newList';
    const plus = document.createElement('img');
    const plusText = document.createElement('p');
    plusText.innerText = 'New List';
    plus.src = './images/plus.svg';
    plus.alt = 'Plus sign';
    plus.id = 'plusList';
    newList.appendChild(plus);
    newList.appendChild(plusText);
    sidebar.appendChild(newList);
  }

  return {
    renderLogo,
    renderPlus,
    renderDueDates,
    renderProjectSections,
    renderProject,
    renderAddList
  }
}
export const initialRender = homePage();