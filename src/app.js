import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";

const contextMenu = new ContextMenu(".menu");

const backgroundModule = new BackgroundModule('type', 'change backgroun color');
contextMenu.add(backgroundModule);

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();  
  contextMenu.open(event);
});

document.addEventListener("click", () => {
  contextMenu.close();
});
