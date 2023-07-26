import './css/main.css';
import { initialRender } from './page';
import { initialTasks } from './log';
import star from './star.svg';
import calendar from './calendar-month.svg';
import archive from './archive.svg';

initialRender.renderLogo();
initialRender.renderPlus();
initialTasks.renderLists();
initialTasks.renderProjects();
initialRender.renderAddList();
initialTasks.renderTasks();
initialTasks.localStorageInsert();