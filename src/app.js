import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";
import { random } from "./utils";

const menu = document.querySelector("#menu");
const contextMenu = new ContextMenu(".menu");
const backgroundModule = new BackgroundModule(
  "backgroundModule",
  "Изменить фон страницы"
);
const clickModule = new ClicksModule("clickModule", "кликни на меня");
const shapeModule = new ShapeModule("shapeModule", "Фигуры");

contextMenu.add(backgroundModule);
contextMenu.add(clickModule);
contextMenu.add(shapeModule);

menu.addEventListener("click", (event) => {
  const dataInClickTarget = event.target.dataset["type"];
  if (dataInClickTarget === backgroundModule["type"]) {
    backgroundModule.trigger();
  } else if (dataInClickTarget === clickModule["type"]) {
    clickModule.trigger();
  } else if (dataInClickTarget === shapeModule["type"]) {
    shapeModule.trigger();
  }
});

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  contextMenu.open(event);
});

document.addEventListener("click", () => {
  contextMenu.close();
});
