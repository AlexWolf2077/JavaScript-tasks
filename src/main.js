import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/form-add-task-component.js';
import {FormTaskList} from './components/Form-tasks-list.js';
import { TaskItem } from './components/TaskItem.js';
import {render, RenderPosition} from './render.js';


const bodyContainer= document.querySelector('.board-app');
const formContainer = document.querySelector('.content-block');
const formTaskList = document.querySelector('.content-block');

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);

const container = document.querySelector('.type-of-content-block');

for (let i = 0; i < 4; i++) {
  const formTaskList = new FormTaskList();
  const ulElement = formTaskList.getElement();
  
  for (let j = 0; j < 3; j++) {
    const liElement = document.createElement('li');
    liElement.classList.add('backlog-li');
    liElement.textContent = `Task ${j + 1}`;
    ulElement.appendChild(liElement);
  }
  
  container.appendChild(ulElement);
}
