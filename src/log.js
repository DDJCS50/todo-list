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
    let listInLog = false;
    myLists.forEach((list) => {
        if (title == list.title) {
          listInLog = true;
        }
    });
    if (listInLog == false) {
        let newList = listFactory(title);
        myLists.push(newList);
        localStorage.setItem("lists", JSON.stringify(myLists));
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
        localStorage.setItem("projects", JSON.stringify(myProjects));
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
        localStorage.setItem("tasks", JSON.stringify(myTasks));
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
      localStorage.setItem("todos", JSON.stringify(myToDos));
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
      if (document.querySelector(`#${id}`) == null) {
        alert('That list doesn\'t exist');
        return;
      } else {
        initialRender.displayProject(document.querySelector(`#${id}`).nextSibling, project.title, project.parentTitle);
      }
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
  } 

  function isLocalStorageAvailable() {
    let test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }
  
  function localStorageInsert(title, taskTitle) {
    if (isLocalStorageAvailable()) {

      if (localStorage.getItem("lists") === null) {
        localStorage.setItem("lists", JSON.stringify(myLists));
      } else {
        myLists = JSON.parse(localStorage.getItem("lists"));
        myLists.forEach((list) => {
          addList(list.title);
        });
        let sidebar = document.querySelector('#sidebar');
        sidebar.innerHTML = '';
        renderLists();
        initialRender.renderAddList();
      }

      if (localStorage.getItem("projects") === null) {
        localStorage.setItem("projects", JSON.stringify(myProjects));
      } else {
        myProjects = JSON.parse(localStorage.getItem("projects"));
        myProjects.forEach((project) => {
          addProject(project.title);
        });
        let sidebar = document.querySelector('#sidebar');
        sidebar.innerHTML = '';
        renderLists();
        renderProjects();
        initialRender.renderAddList();
      }

      if (localStorage.getItem("tasks") === null) {
        localStorage.setItem("tasks", JSON.stringify(myTasks));
      } else {
        myTasks = JSON.parse(localStorage.getItem("tasks"));
        myTasks.forEach((task) => {
          addTask(task.title);
        });
        let mainBox = document.querySelector('#cardBox');
        if (mainBox != null) {
          mainBox.innerHTML = '';
        }
        renderTasks(title);
      }

      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify(myToDos));
      } else {
        myToDos = JSON.parse(localStorage.getItem("todos"));
        myToDos.forEach((toDo) => {
          addToDo(toDo.title);
        });
        let sidebar = document.querySelector('#sidebar');
        sidebar.innerHTML = '';
        renderLists();
        renderProjects();
        initialRender.renderAddList();
        if (taskTitle != undefined) {
          renderToDos(taskTitle);
        }
      }
  
    
      let storedLists = JSON.parse(localStorage.getItem("lists"));
      let storedProjects = JSON.parse(localStorage.getItem("projects"));
      let storedTasks = JSON.parse(localStorage.getItem("tasks"));
      let storedToDos = JSON.parse(localStorage.getItem("todos"));
      console.log(storedLists, storedProjects, storedTasks, storedToDos);
    } else {
      alert('Local Storage Error');
    }
  }

  function memoryClean(lists, projects, tasks, todos) {
    localStorage.setItem("lists", JSON.stringify(myLists));
    localStorage.setItem("projects", JSON.stringify(myProjects));
    localStorage.setItem("tasks", JSON.stringify(myTasks));
    localStorage.setItem("todos", JSON.stringify(myToDos));
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
    localStorageInsert,
    memoryClean,
    myToDos,
    myTasks,
    myProjects,
    myLists,
  }
};
export const initialTasks = taskLog();