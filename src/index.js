import './css/main.css';
import { initialRender } from './page';

initialRender.renderLogo();
initialRender.renderPlus();
initialRender.renderDueDates('Today');
initialRender.renderDueDates('Upcoming');
initialRender.renderDueDates('Someday');
initialRender.renderProjectSections('Family');
initialRender.renderProject('Vacation in Rome');
initialRender.renderProjectSections('Work');
initialRender.renderProject('Prepare Presentation');
initialRender.renderProjectSections('Hobbies');
initialRender.renderProject('Learn Basic Italian');
initialRender.renderAddList();
initialRender.renderMainTitle();
initialRender.renderMainContainer();
initialRender.renderMainSub(document.querySelector('#cardBox'));