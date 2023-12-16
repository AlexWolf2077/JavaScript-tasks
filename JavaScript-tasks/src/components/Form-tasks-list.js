import { createElement } from '../render.js';
import { TaskItem } from './TaskItem.js';

export class FormTaskList {
  

  getTemplate() {
    return (
      `<ul class="backlog-block">
        <h3 class="name-of-backlog-block">Бэклог</h3>
        
      </ul>`
    );
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


