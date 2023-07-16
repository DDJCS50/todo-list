import logo from './orb-logo.jpg';
import plus from './plus.svg';
import ellipsis from './dots-horizontal.svg';
import sectionSymbol from './circle-half-full.svg';
import projectSymbol from './package-variant-closed.svg';

const homePage = () => {
  const header = document.querySelector('header');
  const sidebar = document.querySelector('#sidebar');
  const main = document.querySelector('main');

  function renderLogo() {
    const logo = document.createElement('img');
    logo.src = './images/orb-logo.jpg';
    logo.alt = 'Company logo';
    header.appendChild(logo);
  }

  function renderPlus() {
    const plus = document.createElement('img');
    const plusText = document.createElement('p');
    const plusBtn = document.createElement('button');
    plusText.innerText = 'New Project';
    plus.src = './images/plus.svg';
    plus.alt = 'Plus sign';
    plus.id = 'plusTask';
    plusBtn.appendChild(plus);
    plusBtn.appendChild(plusText);
    header.appendChild(plusBtn);
  }

  function renderDueDates(section, svg, id) {
    const dueDateDiv = document.createElement('div');
    dueDateDiv.id = section.toLowerCase();

    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = svg;
    symbol.id = id;

    const title = document.createElement('p');
    title.innerText = section;

    dueDateDiv.appendChild(symbol);
    dueDateDiv.appendChild(title);
    sidebar.appendChild(dueDateDiv);
  }

  function renderProjectSections(section) {
    const projectSection = document.createElement('div');
    const projectContainer = document.createElement('div');
    projectSection.id = section.toLowerCase();
    projectSection.classList = 'projectSection';

    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = sectionSymbol;

    const title = document.createElement('h2');
    title.innerText = section;

    projectSection.appendChild(symbol);
    projectSection.appendChild(title);
    sidebar.appendChild(projectSection);
    sidebar.appendChild(projectContainer);
  }

  function renderProject(section) {
    const project = document.createElement('div');
    project.id = section.replace(/\s+/g, '-').toLowerCase();
    project.classList = 'project';

    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = projectSymbol;

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

  function renderMainContainer() {
    const mainBox = document.createElement('div');
    mainBox.id = 'cardBox';

    main.appendChild(mainBox);
  }

  function renderMainTitle() {
    const titleContainer = document.createElement('div');
    titleContainer.id = 'mainTitle';
    const mainTitle = document.createElement('h1');
    const mainBlurb = document.createElement('p');

    mainTitle.innerText = 'Prepare Presentation';
    mainBlurb.innerText = 'Keep the talk and slides simple: what are three things everyone should remember?';

    titleContainer.appendChild(mainTitle);
    titleContainer.appendChild(mainBlurb);
    main.appendChild(titleContainer);
  }

  function renderMainSub(box, title) {
    const subContainer = document.createElement('div');
    subContainer.classList = 'subContainer';

    const titleContainer = document.createElement('div');
    titleContainer.classList = 'titleContainer';
    titleContainer.id = title.replace(/\s+/g, '-').toLowerCase();
    const subTitle = document.createElement('h3');
    subTitle.innerText = title;
    const edit = document.createElement('img');
    edit.alt = 'ellipsis';
    edit.src = ellipsis;

    const taskContainer = document.createElement('div');
    taskContainer.classList = 'taskContainer';

    titleContainer.appendChild(subTitle);
    titleContainer.appendChild(edit);
    subContainer.appendChild(titleContainer);
    subContainer.appendChild(taskContainer);
    box.appendChild(subContainer);
  }

  function displayProject(container, title, parentTitle) {
    const project = document.createElement('div');
    project.classList = 'project';

    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = projectSymbol;

    const projectTitle = document.createElement('p');
    projectTitle.innerText = title;

    project.appendChild(symbol);
    project.appendChild(projectTitle);
    container.appendChild(project);
  }

  function displayTask(container, title, parentTitle, description, dueDate, priority) {
    const taskContainer = document.createElement('div');
    taskContainer.classList = 'taskContainer';

    const taskLabel = document.createElement('label');
    taskLabel.innerText = title;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskLabel);
    container.appendChild(taskContainer);
  }

  return {
    renderLogo,
    renderPlus,
    renderDueDates,
    renderProjectSections,
    renderProject,
    renderAddList,
    renderMainContainer,
    renderMainTitle,
    renderMainSub,
    displayProject,
    displayTask,
  }
};
export const initialRender = homePage();