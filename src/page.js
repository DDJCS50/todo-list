import logo from './orb-logo.jpg';
import plus from './plus.svg';
import ellipsis from './dots-horizontal.svg';
import sectionSymbol from './circle-half-full.svg';
import projectSymbol from './package-variant-closed.svg';
import { initialTasks } from './log';

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
    plusBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      initialTasks.addProject(prompt('Project Title:'), prompt('List Section:'));
      const containers = document.querySelectorAll('.projectContainer');
      containers.forEach((container) => {
        container.innerHTML = '';
      });
      initialTasks.renderProjects();
    });
  }

  function renderAddList() {
    const newList = document.createElement('div');
    const listBtn = document.createElement('button');
    listBtn.id = 'newList';
    const plus = document.createElement('img');
    const plusText = document.createElement('p');
    plusText.innerText = 'New List';
    plus.src = './images/plus.svg';
    plus.alt = 'Plus sign';
    plus.id = 'plusList';
    newList.appendChild(plus);
    newList.appendChild(plusText);
    listBtn.appendChild(newList);
    sidebar.appendChild(listBtn);
    listBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      const newList = initialTasks.addList(prompt('New List:'));
      displayLists(newList.title);
      sidebar.insertBefore(listBtn, sidebar.lastChild.nextSibling);
    });
  }

  function renderMainContainer() {
    const mainBox = document.createElement('div');
    mainBox.id = 'cardBox';

    main.appendChild(mainBox);
  }

  function renderMainTitle(title) {
    const titleContainer = document.createElement('div');
    titleContainer.id = 'mainTitle';
    const mainTitle = document.createElement('h1');

    mainTitle.innerText = title;

    titleContainer.appendChild(mainTitle);
    main.appendChild(titleContainer);
  }

  function displayLists(title) {
    const projectSection = document.createElement('div');
    const projectContainer = document.createElement('div');
    projectContainer.classList = 'projectContainer';
    projectSection.id = title.toLowerCase();
    projectSection.classList = 'projectSection';

    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = sectionSymbol;

    const listTitle = document.createElement('h2');
    listTitle.innerText = title;

    projectSection.appendChild(symbol);
    projectSection.appendChild(listTitle);
    sidebar.appendChild(projectSection);
    sidebar.appendChild(projectContainer);
  }
  
  function displayProject(container, title, parentTitle) {
    const project = document.createElement('div');
    const projectBtn = document.createElement('button');
    const subImg = document.createElement('img');
    const subTxt = document.createElement('p');
    
    subImg.src = './images/plus.svg';
    subImg.alt = 'Plus sign';
    subImg.id = 'plusSub';
    subTxt.innerText = 'New Sub-Section';
    const subSectionBtn = document.createElement('button');
    subSectionBtn.id = 'sub-section-btn';
    projectBtn.id = title.replace(/\s+/g, '-').toLowerCase();
    project.classList = 'project';
    
    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = projectSymbol;
    
    const projectTitle = document.createElement('p');
    projectTitle.innerText = title;
    
    project.appendChild(symbol);
    project.appendChild(projectTitle);
    projectBtn.appendChild(project);
    container.appendChild(projectBtn);
    subSectionBtn.appendChild(subImg);
    subSectionBtn.appendChild(subTxt);
    
    projectBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      header.innerHTML = '';
      renderLogo();
      renderPlus();
      header.appendChild(subSectionBtn);
      main.innerHTML = '';
      renderMainTitle(title);
      renderMainContainer();
      initialTasks.renderTasks(title);
    });
    
    subSectionBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      const newSubSection = initialTasks.addTask(prompt('New Sub-Section:'), title);
      cardBox.innerHTML = '';
      initialTasks.renderTasks(title);
      console.log(initialTasks.myTasks);
    });

  }
  
  function renderMainSub(box, title) {
    const subContainer = document.createElement('div');
    subContainer.classList = 'subContainer';

    const titleContainer = document.createElement('div');
    titleContainer.classList = 'titleContainer';
    titleContainer.id = title.replace(/\s+/g, '-').toLowerCase();
    const subTitle = document.createElement('h3');
    subTitle.innerText = title;
    
    const taskContainer = document.createElement('div');
    taskContainer.classList = 'taskContainer';
    
    titleContainer.appendChild(subTitle);
    renderSubDropdown(titleContainer, title);
    subContainer.appendChild(titleContainer);
    subContainer.appendChild(taskContainer);
    box.appendChild(subContainer);
  }

  function displayTask(container, title, parentTitle, task) {
    const taskContainer = document.createElement('div');
    taskContainer.classList = 'taskContainer';
    const taskLabelBtn = document.createElement('button');

    const taskLabel = document.createElement('label');
    taskLabel.innerText = title;
    taskLabelBtn.id = title.replace(/\s+/g, '-').toLowerCase();
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    
    function deleteToDo(toDoDeleteTarget) {
      const selectedDropdown = document.querySelector('.containerToDoDropdown');
      taskContainer.remove();
      if (selectedDropdown != null) {
        selectedDropdown.remove();
      }
      initialTasks.myToDos.splice(toDoDeleteTarget.toDoIndex, 1);
    }
    
    displayTask.deleteToDo = deleteToDo;
    
    taskContainer.appendChild(checkbox);
    taskLabelBtn.appendChild(taskLabel);
    taskContainer.appendChild(taskLabelBtn);
    container.appendChild(taskContainer);
    
    checkbox.addEventListener('click', function(event) {
      checkbox.value = 'on';
    });

    checkbox.addEventListener("click", function () {
      if (checkbox.value == 'on') {
        deleteToDo(task);
      }
    });

    renderToDoDropdown(container, taskLabelBtn, taskContainer, task);
  }

  function renderToDoDropdown(box, toDoBtn, subContainer, toDo) {
    
    toDoBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      const visibleDropdown = document.querySelectorAll('.containerToDoDropdown');
      visibleDropdown.forEach((dropdown) => {
        dropdown.remove();
      });

      const container = document.createElement('div');
      container.classList = 'containerToDoDropdown';
      const dropdown = document.createElement('div');
      dropdown.id = 'dropdownToDo';
      dropdown.classList.add('dropdown', 'show');
      
      const saveDescriptionBtn = document.createElement('button');
      saveDescriptionBtn.innerText = 'Save';
      const description = document.createElement('textarea');
      const dueDateInput = document.createElement('textarea');
      dueDateInput.id = 'dueDateInput';
      const priorityInput = document.createElement('textarea');
      priorityInput.id = 'priorityInput';
      const priorityTitle = document.createElement('h2');
      priorityTitle.innerText = 'Priority:';
      const dateTitle = document.createElement('h2');
      dateTitle.innerText = 'Due:';
      const descriptionTitle = document.createElement('h2');
      descriptionTitle.innerText = 'Description:';

      if (toDo.priority == undefined || toDo.priority == null) {
        priorityInput.innerText = '';
      } else {
        priorityInput.innerText = toDo.priority;
      }
      if (toDo.dueDate == undefined || toDo.dueDate == null) {
        dueDateInput.innerText = '';
      } else {
        dueDateInput.innerText = toDo.dueDate;
      }
      if (toDo.description == undefined || toDo.description == null) {
        description.innerText = '';
      } else {
        description.innerText = toDo.description;
      }
      
      dropdown.appendChild(priorityTitle);
      dropdown.appendChild(priorityInput);
      dropdown.appendChild(dateTitle);
      dropdown.appendChild(dueDateInput);
      dropdown.appendChild(descriptionTitle);
      dropdown.appendChild(description);
      dropdown.appendChild(saveDescriptionBtn);
      container.appendChild(dropdown);
      box.insertBefore(container, subContainer.nextSibling);

      saveDescriptionBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const tempDescription = description.value;
        tempDescription.toString();
        description.value = tempDescription;
        toDo.description = tempDescription;

        const tempPriority = priorityInput.value;
        tempPriority.toString();
        priorityInput.value = tempPriority;
        toDo.priority = tempPriority;

        const tempDueDate = dueDateInput.value;
        tempDueDate.toString();
        dueDateInput.value = tempDueDate;
        toDo.dueDate = tempDueDate;
      });
    });
  }

  function renderSubDropdown(box, title) {
    const container = document.createElement('div');
    container.classList = 'container';
    const dropdown = document.createElement('div');
    const dropdownBtn = document.createElement('button');
    dropdownBtn.id = 'dropdownBtn';
    dropdown.id = 'dropdown';
    dropdown.classList = 'dropdown';

    const toDoBtn = document.createElement('button');
    const toDoImg = document.createElement('img');
    const toDoTxt = document.createElement('p');

    const deleteTaskBtn = document.createElement('button');

    deleteTaskBtn.id = 'delete-task-btn';
    deleteTaskBtn.innerText = 'Delete Section';

    toDoBtn.id = 'to-do-btn';
    toDoImg.src = './images/plus.svg';
    toDoImg.alt = 'Plus sign';
    toDoImg.id = 'plusToDo';
    toDoTxt.innerText = 'New Todo';

    toDoBtn.appendChild(toDoImg);
    toDoBtn.appendChild(toDoTxt);
    dropdown.appendChild(toDoBtn);
    dropdown.appendChild(deleteTaskBtn);
    container.appendChild(dropdownBtn);
    container.appendChild(dropdown);
    box.appendChild(container);

    toDoBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      const newToDo = initialTasks.addToDo(prompt('New Todo:'), title);
      initialTasks.renderToDos(title);
    });

    const toggleDropdown = function () {
      dropdown.classList.toggle("show");
    };

    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleDropdown();
    });

    document.documentElement.addEventListener("click", function () {
      if (dropdown.classList.contains("show")) {
        toggleDropdown();
      }
    });

    function deleteSection(sectionTitle) {
      for (let i = 0; i < initialTasks.myToDos.length; i++) {
        initialTasks.myToDos.forEach((toDo) => {
          const index = toDo.toDoIndex;
          if (toDo.parentTitle == sectionTitle) {
            initialTasks.myToDos.splice(index, 1);
            for (let j = 0; j < initialTasks.myToDos.length; j++) {
              initialTasks.myToDos[j].toDoIndex = j;
              initialTasks.myToDos[j].toDoId = j.toString();
            }
          }
          const mainBox = document.querySelector('#cardBox');
          mainBox.innerHTML = '';
        });
      }

      initialTasks.renderTasks(sectionTitle);
      for (let k = 0; k < initialTasks.myTasks.length; k++) {

        if (initialTasks.myTasks[k].title == sectionTitle) {
          initialTasks.myTasks.splice(k, 1);
        }
        console.log(initialTasks.myTasks);
      }; 
    }

    deleteTaskBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      deleteSection(title);
    });
  }

  return {
    renderLogo,
    renderPlus,
    renderAddList,
    renderMainContainer,
    renderMainTitle,
    displayLists,
    displayProject,
    renderMainSub,
    displayTask,
  }
};
export const initialRender = homePage();