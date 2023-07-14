import { initialRender } from "./page";

const taskLog = () => {
  let myTasks = [];

  const taskFactory = (title, description, dueDate, priority, notes) => {
    let taskInLog = false;

    const getTitle = () => {
      title = prompt('What is the title of the task?');
    }

    return {title, description, dueDate, priority, notes};
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
    myTasks.forEach((task) => {
      initialRender.renderMainSub(document.querySelector('#cardBox'), task.title);
    });
  }

  return {
    taskFactory,
    addTask,
    renderTasks
  }
};
export const initialTasks = taskLog();