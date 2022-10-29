import "./styles.css";
import { ContextMenu } from "./menu";

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const contextMenu = new ContextMenu(".menu");
  contextMenu.open(event);
});
