import { Module } from "../core/module";
import { createFigureElement } from "../utils";
import { random } from "../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }

  trigger() {
    const figure = createFigureElement();
    const figures = document.querySelectorAll(".figure");
    document.body.append(figure);
    figures.forEach((figure) => {
      figure.style.left = `${random(1, 1920)}px`;
      figure.style.top = `${random(1, 1080)}px`;
    });
  }
}
