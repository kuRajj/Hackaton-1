import { Menu } from "./core/menu";
import { getСoordinate } from "./utils";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open(event) {
    this.el.style.display = "initial";
    const contextObj = this.el.getBoundingClientRect();
    const bodyObj = document.body.getBoundingClientRect();
    this.el.style.left =
      getСoordinate(bodyObj.width, event.pageX, contextObj.width) + "px";
    this.el.style.top =
      getСoordinate(bodyObj.height, event.pageY, contextObj.height) + "px";
  }   

  close() {    
    this.el.style.display = "none";
  }

  add(someModule) {    
    this.el.insertAdjacentHTML('afterbegin', someModule.toHTML()); 
  }
  
}
