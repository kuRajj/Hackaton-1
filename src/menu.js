import { Menu } from "./core/menu";
import { getСoordinate } from "./utils";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open() {
    this.el.style.display = "initial";
    const contextObj = this.el.getBoundingClientRect();
    const bodyObj = document.body.getBoundingClientRect();

    const li = document.createElement("li");
    li.className = ".menu-item";
    li.textContent = "AAAAAAAAAAAAAAA";
    li.style.color = "white";
    this.el.append(li);

    this.el.style.left =
      getСoordinate(bodyObj.width, event.pageX, contextObj.width) + "px";
    this.el.style.top =
      getСoordinate(bodyObj.height, event.pageY, contextObj.height) + "px";
  }
  

  

  // open() {
  //   document.addEventListener("contextmenu", (event) => {
  //     event.preventDefault();
  //     this.el.style.display = "initial";
  //     const contextObj = this.el.getBoundingClientRect();
  //     const bodyObj = document.body.getBoundingClientRect();

  //     const li = document.createElement("li");
  //     li.className = ".menu-item";
  //     li.textContent = "AAAAAAAAAAAAAAA";
  //     li.style.color = "white";
  //     this.el.append(li);

  //     this.el.style.left =
  //       getСoordinate(bodyObj.width, event.pageX, contextObj.width) + "px";
  //     this.el.style.top =
  //       getСoordinate(bodyObj.height, event.pageY, contextObj.height) + "px";
  //   });
  // }

  close() {
    document.addEventListener("click", () => {
      this.el.style.display = "none";
    });
  }
}
