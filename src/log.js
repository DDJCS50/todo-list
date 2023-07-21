import { initialRender } from "./page";

const taskLog = () => {
  let myLists = [];
  let myProjects = [];
  let myTasks = [];
  let myToDos = [];

  const listFactory = (title) => {
    return {title};
  }

  const projectFactory = (title, parentTitle) => {
    return {title, parentTitle};
  }

  const taskFactory = (title, parentTitle) => {
    return {title, parentTitle};
  }

  const toDoFactory = (title, parentTitle, description, dueDate, priority) => {
    let toDoIndex = 2;
    let toDoId = '2';

    return {title, parentTitle, description, dueDate, priority};
  }

  function addList(title) {
    let lisInLog = false;
    myLists.forEach((list) => {
        if (title == list.title) {
          lisInLog = true;
        }
    });
    if (lisInLog == false) {
        let newList = listFactory(title);
        myLists.push(newList);
        return newList;
    }
  }

  function addProject(title, parentTitle) {
    let projectInLog = false;
    myProjects.forEach((project) => {
        if (title == project.title) {
          projectInLog = true;
        }
    });
    if (projectInLog == false) {
        let newProject = projectFactory(title, parentTitle);
        myProjects.push(newProject);
    }
  }

  function addTask(title, parentTitle) {
    let taskInLog = false;
    myTasks.forEach((task) => {
        if (title == task.title) {
          taskInLog = true;
        }
    });
    if (taskInLog == false) {
        let newTask = taskFactory(title, parentTitle);
        myTasks.push(newTask);
    }
  }

  function addToDo(title, parentTitle, description, dueDate, priority) {
    let toDoInLog = false;
    myToDos.forEach((toDo) => {
      if (toDo.title == title) {
        toDoInLog = true;
      }
    });
    if (toDoInLog == false) {
      let newToDo = toDoFactory(title, parentTitle, description, dueDate, priority);
      myToDos.push(newToDo);
    }
  }

  function renderLists() {
    myLists.forEach((list) => {
      let id = list.title.replace(/\s+/g, '-').toLowerCase();
      initialRender.displayLists(list.title);
    });
  }

  function renderProjects() {
    myProjects.forEach((project) => {
      let id = project.parentTitle.replace(/\s+/g, '-').toLowerCase();
      initialRender.displayProject(document.querySelector(`#${id}`).nextSibling, project.title, project.parentTitle);
    });
  }

  function renderTasks(parentTitle) {
    myTasks.forEach((task) => {
      if (task.parentTitle == parentTitle) {
        initialRender.renderMainSub(document.querySelector('#cardBox'), task.title);
      } else {
        return;
      }
      renderToDos(task.title);
    });
  }

  function renderToDos(parentTitle) {
    for (let i = 0; i < myToDos.length; i++) {
      myToDos[i].toDoIndex = i;
      myToDos[i].toDoId = i.toString();
    }
    const idContainer = document.querySelector(`#${parentTitle.replace(/\s+/g, '-').toLowerCase()}`);
    idContainer.nextSibling.innerHTML = '';
    myToDos.forEach((toDo) => {
      if (toDo.parentTitle == parentTitle) {
        let id = toDo.parentTitle.replace(/\s+/g, '-').toLowerCase();
        initialRender.displayTask(document.querySelector(`#${id}`).nextSibling, toDo.title, toDo.parentTitle, toDo);
      }
    });
    console.log(myToDos);
  }

  return {
    addList,
    addProject,
    addTask,
    addToDo,
    renderLists,
    renderProjects,
    renderTasks, 
    renderToDos,
    myToDos,
  }
};
export const initialTasks = taskLog();