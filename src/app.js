import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { MessageModule } from "./modules/custom-message";

const menu = document.querySelector('#menu');
const contextMenu = new ContextMenu(".menu");
const backgroundModule = new BackgroundModule('backgroundModule', 'Изменить фон страницы');
const clickModule = new ClicksModule('clickModule', 'кликни на меня');
const messageModule = new MessageModule('messageModule', 'Кастомное сообщение');

contextMenu.add(backgroundModule);
contextMenu.add(clickModule);
contextMenu.add(messageModule);

menu.addEventListener('click', (event) => {
  const dataInClickTarget = event.target.dataset['type'];
  if(dataInClickTarget === backgroundModule['type']) {
    backgroundModule.trigger();
  } else if(dataInClickTarget === clickModule['type']) {
    clickModule.trigger();
  } else if(dataInClickTarget === messageModule['type']) {
    messageModule.trigger()
  }
})

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();  
  contextMenu.open(event);
});

document.addEventListener("click", () => {
  contextMenu.close();
});
