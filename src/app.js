import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";

const menu = document.querySelector('#menu');
const contextMenu = new ContextMenu(".menu");
const backgroundModule = new BackgroundModule('backgroundModule', 'Изменить фон страницы');
const clickModule = new ClicksModule('clickModule', 'кликни на меня');

contextMenu.add(backgroundModule);
contextMenu.add(clickModule);

menu.addEventListener('click', (event) => {
  const dataInClickTarget = event.target.dataset['type'];
  if(dataInClickTarget === backgroundModule['type']) {
    backgroundModule.trigger();
  } else if(dataInClickTarget === clickModule['type']) {
    clickModule.trigger();
  }
})

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();  
  contextMenu.open(event);
});

document.addEventListener("click", () => {
  contextMenu.close();
});
