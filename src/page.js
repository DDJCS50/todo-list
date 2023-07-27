import logo from './orb-logo.jpg';
import plus from './plus.svg';
import ellipsis from './dots-horizontal.svg';
import sectionSymbol from './circle-half-full.svg';
import projectSymbol from './package-variant-closed.svg';
import { initialTasks } from './log';
import { isBefore, format, isDate, parseISO } from 'date-fns'

const currentDate = new Date();

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
      let projectTitle = prompt('Project Title:');
      if (projectTitle == undefined) {
        return;
      } else if (projectTitle.title === null) {
        return;
      }
      let listSection = prompt('List Section:');
      if (listSection == undefined) {
        return;
      } else if (listSection.title === null) {
        return;
      }
      initialTasks.addProject(projectTitle, listSection );
      const containers = document.querySelectorAll('.projectContainer');
      containers.forEach((container) => {
        container.innerHTML = '';
      });
      initialTasks.renderProjects();
      initialTasks.localStorageInsert();
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
      if (newList == undefined) {
        return;
      } else if (newList.title == null) {
        return;
      }
      displayLists(newList.title);
      sidebar.insertBefore(listBtn, sidebar.lastChild.nextSibling);
      initialTasks.localStorageInsert();
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

    const container = document.createElement('div');
    container.classList = 'container';
    const dropdown = document.createElement('div');
    const dropdownBtn = document.createElement('button');
    dropdownBtn.id = 'dropdownBtnProject';
    dropdown.id = 'dropdownProject';
    dropdown.classList = 'dropdown';
    const deleteProjectBtn = document.createElement('button');

    
    deleteProjectBtn.id = 'delete-project-btn';
    deleteProjectBtn.innerText = 'Delete Project';
    
    dropdown.appendChild(deleteProjectBtn);
    container.appendChild(dropdownBtn);
    container.appendChild(dropdown);
    titleContainer.appendChild(container);

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

    function deleteProject(projectTitle) {
      initialTasks.myTasks = JSON.parse(localStorage.getItem("tasks"));

      for (let k = 0; k < initialTasks.myTasks.length; k++) {
        if (initialTasks.myTasks[k].parentTitle == projectTitle) {
          renderSubDropdown.deleteSection(initialTasks.myTasks[k].title);
          k = 0;
        }
      }

      for (let l = 0; l < initialTasks.myTasks.length; l++) {

        if (initialTasks.myTasks[l].parentTitle == projectTitle) {
          initialTasks.myTasks.splice(l, 1);
          localStorage.setItem("tasks", JSON.stringify(initialTasks.myTasks));
        }
      }

      for (let i = 0; i < initialTasks.myProjects.length; i++) {

        if (initialTasks.myProjects[i].title == projectTitle) {
          initialTasks.myProjects.splice(i, 1);
          localStorage.setItem("projects", JSON.stringify(initialTasks.myProjects));
        }
      }; 

      const mainContainerSelect = document.querySelector('#mainTitle');
      mainContainerSelect.innerHTML = '';
    }

    renderMainTitle.deleteProject = deleteProject;

    deleteProjectBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      header.innerHTML = '';
      renderLogo();
      renderPlus();
      initialTasks.myProjects = JSON.parse(localStorage.getItem("projects"));
      deleteProject(title);
      const projectSidebarSelect = document.querySelector(`#${title.replace(/\s+/g, '-').toLowerCase()}`);
      projectSidebarSelect.remove();
      initialTasks.localStorageInsert();
    });
  }

  function displayLists(title) {
    const projectSection = document.createElement('div');
    const projectContainer = document.createElement('div');
    projectContainer.classList = 'projectContainer';
    projectSection.id = title.replace(/\s+/g, '-').toLowerCase();
    projectSection.classList = 'projectSection';

    const symbol = document.createElement('img');
    symbol.alt = '#';
    symbol.src = sectionSymbol;

    const listTitle = document.createElement('h2');
    listTitle.innerText = title;

    projectSection.appendChild(symbol);
    projectSection.appendChild(listTitle);
    
    const container = document.createElement('div');
    container.classList = 'container';
    const dropdown = document.createElement('div');
    const dropdownBtn = document.createElement('button');
    dropdownBtn.id = 'dropdownBtnList';
    dropdown.id = 'dropdownList';
    dropdown.classList = 'dropdown';
    const deleteListBtn = document.createElement('button');
    
    
    
    deleteListBtn.id = 'delete-list-btn';
    deleteListBtn.innerText = 'Delete List';
    
    dropdown.appendChild(deleteListBtn);
    container.appendChild(dropdownBtn);
    container.appendChild(dropdown);
    projectSection.appendChild(container);
    
    sidebar.appendChild(projectSection);
    sidebar.appendChild(projectContainer);

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

    function deleteList(listTitle) {
      
      initialTasks.myProjects.forEach((project) => {
        if (project.parentTitle == listTitle) {
          renderMainTitle.deleteProject(project.title);
        }
      });

      for (let i = 0; i < initialTasks.myLists.length; i++) {

        if (initialTasks.myLists[i].title == title) {
          initialTasks.myLists.splice(i, 1);
          localStorage.setItem("lists", JSON.stringify(initialTasks.myLists));
        }
      }

      const listContainerSelect = document.querySelector(`#${title.replace(/\s+/g, '-').toLowerCase()}`);
      listContainerSelect.innerHTML = '';
    }

    deleteListBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      if (initialTasks.myProjects.length > 0) {
        main.innerHTML = '';
        renderMainTitle(initialTasks.myProjects[0].title);
        renderMainContainer();
        initialTasks.renderTasks(initialTasks.myProjects[0].title);
      }
      initialTasks.myLists = JSON.parse(localStorage.getItem("lists"));
      deleteList(title);
      main.innerHTML = '';
      header.innerHTML = '';
      renderLogo();
      renderPlus();
      const listSidebarSelect = document.querySelector(`#${title.replace(/\s+/g, '-').toLowerCase()}`);
      listSidebarSelect.nextSibling.remove();
      listSidebarSelect.remove();
      initialTasks.localStorageInsert();
    });



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
      let mainBoxSelect = document.querySelector('#cardBox');
        if (mainBoxSelect != null) {
          mainBoxSelect.innerHTML = '';
        }
      initialTasks.localStorageInsert(title);
    });
    
    subSectionBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      let subSectionHolder = prompt('New Sub-Section:');
      if (subSectionHolder == undefined) {
        return;
      } else if (subSectionHolder === null) {
        return;
      }
      const newSubSection = initialTasks.addTask(subSectionHolder, title);
      cardBox.innerHTML = '';
      initialTasks.renderTasks(title);
      let mainBoxSelect = document.querySelector('#cardBox');
        if (mainBoxSelect != null) {
          mainBoxSelect.innerHTML = '';
        }
      initialTasks.localStorageInsert(title);
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
      localStorage.setItem("todos", JSON.stringify(initialTasks.myToDos));
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
        initialTasks.myToDos = JSON.parse(localStorage.getItem("todos"));
        initialTasks.myTasks = JSON.parse(localStorage.getItem("tasks"));
        initialTasks.myProjects = JSON.parse(localStorage.getItem("projects"));
        initialTasks.myLists = JSON.parse(localStorage.getItem("lists"));
        deleteToDo(task);
        let taskHolder;
        let projectHolder;
        for (let i = 0; i < initialTasks.myTasks.length; i++) {
          if (initialTasks.myTasks[i].title == task.parentTitle) {
            taskHolder = initialTasks.myTasks[i];
          }
        }
        if (taskHolder != null && taskHolder != undefined) {
          for (let j = 0; j < initialTasks.myProjects.length; j++) {
            if (initialTasks.myProjects[j].title == taskHolder.parentTitle) {
              projectHolder = initialTasks.myProjects[j];
            }
          }
          localStorage.setItem("lists", JSON.stringify(initialTasks.myLists));
        }
        initialTasks.localStorageInsert(projectHolder.title, taskHolder.title);
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
      dueDateInput.placeholder = 'MM-dd-yyyy';
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

        
        let tempDueDate = dueDateInput.value;
        if (tempDueDate != undefined && tempDueDate != null && tempDueDate != '') {
          tempDueDate = format(new Date(tempDueDate), "MM-dd-yyyy");
        }
        const currentDueDateBox = document.querySelector('#dueDateInput');
        const today = format(new Date(), 'MM-dd-yyyy');
        if (isBefore(new Date(tempDueDate), new Date(today))) {
          currentDueDateBox.style.backgroundColor = "red";
        } else {
          currentDueDateBox.style.backgroundColor = "#f8fafc";
        }
        dueDateInput.value = tempDueDate;
        toDo.dueDate = tempDueDate;
        for (let i = 0; i < initialTasks.myToDos.length; i++) {
          if (initialTasks.myToDos[i].title == toDo.title) {
            initialTasks.myToDos[i].description = toDo.description;
            initialTasks.myToDos[i].priority = toDo.priority;
            initialTasks.myToDos[i].dueDate = toDo.dueDate;
          }
        }
        localStorage.setItem("todos", JSON.stringify(initialTasks.myToDos));
      });
      initialTasks.myToDos = JSON.parse(localStorage.getItem("todos"));
      initialTasks.myTasks = JSON.parse(localStorage.getItem("tasks"));
      initialTasks.myProjects = JSON.parse(localStorage.getItem("projects"));
      initialTasks.myLists = JSON.parse(localStorage.getItem("lists"));
      let toDoHolderThree;
      let taskHolderThree;
      let projectHolderThree;
      toDoHolderThree = toDo;
      if (toDoHolderThree != null && toDoHolderThree != undefined) {

        for (let j = 0; j < initialTasks.myTasks.length; j++) {
          if (initialTasks.myTasks[j].title == toDoHolderThree.parentTitle) {
            taskHolderThree = initialTasks.myTasks[j];
          }
        }
        for (let k = 0; k < initialTasks.myProjects.length; k++) {
          if (initialTasks.myProjects[k].title == taskHolderThree.parentTitle) {
            projectHolderThree = initialTasks.myProjects[k];
          }
        }
      }
      box.insertBefore(container, subContainer.nextSibling);
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
      let newToDo = initialTasks.addToDo(prompt('New Todo:'), title);
      initialTasks.renderToDos(title);
      initialTasks.myToDos = JSON.parse(localStorage.getItem("todos"));
      initialTasks.myTasks = JSON.parse(localStorage.getItem("tasks"));
      initialTasks.myProjects = JSON.parse(localStorage.getItem("projects"));
      initialTasks.myLists = JSON.parse(localStorage.getItem("lists"));
      let taskHolderTwo;
      let projectHolderTwo;
      for (let m = 0; m < initialTasks.myTasks.length; m++) {
        if (initialTasks.myTasks[m].title == title) {
          taskHolderTwo = initialTasks.myTasks[m];
        }
      }
      if (taskHolderTwo != null && taskHolderTwo != undefined) {
        for (let p = 0; p < initialTasks.myProjects.length; p++) {
          if (initialTasks.myProjects[p].title == taskHolderTwo.parentTitle) {
            projectHolderTwo = initialTasks.myProjects[p];
          }
        }
      }
      initialTasks.localStorageInsert(projectHolderTwo.title, taskHolderTwo.title);
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
        initialTasks.myToDos[i].toDoIndex = i;
        initialTasks.myToDos[i].toDoId = i.toString();
      }
      for (let i = 0; i < initialTasks.myToDos.length; i++) {
        initialTasks.myToDos.forEach((toDo) => {
          const index = toDo.toDoIndex;
          if (toDo.parentTitle == sectionTitle) {
            initialTasks.myToDos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(initialTasks.myToDos));
            for (let j = 0; j < initialTasks.myToDos.length; j++) {
              initialTasks.myToDos[j].toDoIndex = j;
              initialTasks.myToDos[j].toDoId = j.toString();
            }
          }
          const mainBox = document.querySelector('#cardBox');
          mainBox.innerHTML = '';
        });
      }
      for (let p = 0; p < initialTasks.myToDos.length; p++) {
        if (initialTasks.myToDos[p].parentTitle == sectionTitle) {
          initialTasks.myToDos.splice(p, 1);
          localStorage.setItem("todos", JSON.stringify(initialTasks.myToDos));
        }
      }
      let taskParent;
      let taskHolderInner;
      for (let i = 0; i < initialTasks.myTasks.length; i++) {
        if (initialTasks.myTasks[i].title == title) {
          taskHolderInner = initialTasks.myTasks[i];
        }
      }
      for (let j = 0; j < initialTasks.myProjects.length; j++) {
        if (initialTasks.myProjects[j].title == taskHolderInner.parentTitle) {
          taskParent = initialTasks.myProjects[j];
        }
      }
      initialTasks.renderTasks(taskParent.title);
      for (let k = 0; k < initialTasks.myTasks.length; k++) {

        if (initialTasks.myTasks[k].title == sectionTitle) {
          initialTasks.myTasks.splice(k, 1);
          localStorage.setItem("tasks", JSON.stringify(initialTasks.myTasks));
        }
      }; 
    }

    renderSubDropdown.deleteSection = deleteSection;

    deleteTaskBtn.addEventListener('click', function(event) {
      event.stopPropagation();
      initialTasks.myTasks = JSON.parse(localStorage.getItem("tasks"));
      let holderParentTitle;
      for (let n = 0; n < initialTasks.myTasks.length; n++) {
        if (initialTasks.myTasks[n].title == title) {
          holderParentTitle = initialTasks.myTasks[n].parentTitle;
        }
      }
      deleteSection(title);
      let mainBoxSelect = document.querySelector('#cardBox');
        if (mainBoxSelect != null) {
          mainBoxSelect.innerHTML = '';
        }
      initialTasks.renderTasks(title);
      initialTasks.localStorageInsert(holderParentTitle);
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