import './css/main.css';
import { initialRender } from './page';
import { initialTasks } from './log';
import star from './star.svg';
import calendar from './calendar-month.svg';
import archive from './archive.svg';

initialRender.renderLogo();
initialRender.renderPlus();
initialRender.renderDueDates('Today', star, 'star');
initialRender.renderDueDates('Upcoming', calendar, 'calendar');
initialRender.renderDueDates('Someday', archive, 'archive');
initialTasks.addList('Vacations');
initialTasks.addList('Family');
initialTasks.addList('Work');
initialTasks.addList('Hobbies');
initialTasks.renderLists();
initialTasks.addProject('Another Presentation', 'Work');
initialTasks.addProject('See Mom', 'Family');
initialTasks.addProject('Go Skateboarding', 'Hobbies');
initialTasks.renderProjects();
initialRender.renderAddList();
initialTasks.addTask('Receive Funds', 'See Mom');
initialTasks.addTask('Open Account', 'Another Presentation');
initialTasks.addTask('Spend Money', 'Go Skateboarding');
initialTasks.renderTasks();
initialTasks.addToDo('Something', 'Open Account');
initialTasks.addToDo('Something Else', 'Spend Money');
initialTasks.addToDo('We really need to get funds', 'Receive Funds');
initialTasks.addToDo('We need funds', 'Receive Funds');
initialTasks.addToDo('We really need to get dosh', 'Receive Funds');