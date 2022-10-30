import { Module } from "../core/module";
import { getRandomColor } from "../utils";
export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }

  trigger() {
    document.body.style.backgroundColor = getRandomColor();
  }
}