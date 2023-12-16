import {createElement} from '../render.js';

function createHeaderComponentTemplate() {
    return (
        `<header class="main-header">
        <div class="nav-bar">
            <div class="nav-bar-content-block">
                <h1 class="name-nav-bar">Список задач</h1>
            </div>
        </div>
    </header>`
      );
}
export class HeaderComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
