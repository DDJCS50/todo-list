import { initialRender } from "./page";

const taskLog = () => {
  let myProjects = [];
  let myTasks = [];
  let myToDos = [];

  const taskFactory = (title, description, dueDate, priority, notes) => {
    let taskInLog = false;
    let taskIndex = 2;
    let taskId = '2';

    const getTitle = () => {
      title = prompt('What is the title of the task?');
    }

    return {title, description, dueDate, priority, notes};
  }

  const toDoFactory = (title, parentTitle) => {
    let toDoInLog = false;
    let toDoIndex = 2;

    return {title, parentTitle};
  }

  function addToDo(title, parentTitle) {
    let toDoInLog = false;
    myToDos.forEach((toDo) => {
      if (toDo.title == title) {
        toDoInLog = true;
      }
    });
    if (toDoInLog == false) {
      let newToDo = toDoFactory(title, parentTitle);
      myToDos.push(newToDo);
    }
    console.log(myToDos);
  }

  function addTask(title, description, dueDate, priority, notes) {
    let taskInLog = false;
    myTasks.forEach((task) => {
        if (title == task.title) {
            taskInLog = true;
        }
    });
    if (taskInLog == false) {
        let newTask = taskFactory(title, description, dueDate, priority, notes);
        myTasks.push(newTask);
    }
    console.log(myTasks);
  }

  function renderTasks() {
    for (let i = 0; i < myTasks.length; i++) {
      myTasks[i].taskIndex = i;
      myTasks[i].taskId = i.toString();
    }
    myTasks.forEach((task) => {
      initialRender.renderMainSub(document.querySelector('#cardBox'), task.title);
    });
  }

  function renderToDos() {
    for (let i = 0; i < myToDos.length; i++) {
      myToDos[i].toDoIndex = i;
    }
    myToDos.forEach((toDo) => {
      let id = toDo.parentTitle.replace(/\s+/g, '-').toLowerCase();
      initialRender.displayTask(document.querySelector(`#${id}`).nextSibling, toDo.title, toDo.parentTitle);
    });
  }

  return {
    taskFactory,
    addTask,
    renderTasks, 
    addToDo,
    renderToDos
  }
};
export const initialTasks = taskLog();