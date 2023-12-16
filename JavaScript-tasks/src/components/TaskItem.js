import { createElement } from '../render.js';

export class TaskItem {
  constructor(text) {
    this.text = text;
  }

  getTemplate() {
    return `<li class="backlog-li">${this.text}</li>`;
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

