import {createElement} from './render.js';


function createFormTaskListTemplate() {
    return (
        `<ul class="backlog-block">
        <h3 class="name-of-backlog-block">Бэклог</h3>
        <li class="backlog-li">Выучить JS</li>
        <li class="backlog-li">Выучить React</li>
        <li class="backlog-li">Сделать домашку</li>
        </ul>`
      );
}


export class FormTaskList {
  getTemplate() {
    return createFormTaskListTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}