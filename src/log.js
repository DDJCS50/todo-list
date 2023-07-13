const taskLog = () => {
  let myTasks = [];

  const taskFactory = (title, description, dueDate, priority) => {
    let taskInLog = false;

    const getTitle = () => {
      title = prompt('What is the title of the task?');
    }

    return {title, description, dueDate, priority};
  }

  function addTask(title, description, dueDate, priority) {
    let taskInLog = false;
    myTasks.forEach((task) => {
        if (title == task.title) {
            taskInLog = true;
        }
    });
    if (taskInLog == false) {
        let newTask = taskFactory(title, description, dueDate, priority);
        myTasks.push(newTask);
    }
    console.log(myTasks);
  }

  return {
    taskFactory,
    addTask
  }
};
export const initialTasks = taskLog();