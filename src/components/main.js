import {HeaderComponent} from './header-component.js';
import {FormAddTaskComponent} from './form-add-task-component.js';
import {FormTaskList} from './Form-tasks-list.js';
import {render, RenderPosition} from './render.js';


const bodyContainer= document.querySelector('.board-app');
const formContainer = document.querySelector('.content-block');
const formTaskList = document.querySelector('.type-of-content-block');
console.log(formContainer);

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(FormTaskList)
render(new FormTaskListComponent(), formTaskList.getElement())
