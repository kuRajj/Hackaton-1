import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }

  trigger() {
    let leftClickCounter = 0;
    const timeFromUser = prompt("введите количество секунд");
    const timeInSec = timeFromUser * 1000;

    const divClickCount = document.createElement("div");
    divClickCount.className = 'meaasge-to-player';
    divClickCount.textContent = `Сейчас мы узнаем на сколько ты быстр, у тебя есть ${timeFromUser} секунд`;
    divClickCount.style.userSelect = "none";
    document.body.append(divClickCount);

    const img = document.createElement('img');
    img.style.display = 'inherit';
    img.src = 'https://st.depositphotos.com/1281871/3025/i/450/depositphotos_30253233-stock-photo-red-balloon.jpg';
    document.body.append(img);   

    function getCounterClick() {
      leftClickCounter++;
    }

    img.addEventListener("click", getCounterClick);

    setTimeout(() => {
      img.removeEventListener("click", getCounterClick);
      divClickCount.textContent = `Ты осилил ${leftClickCounter} кликов :)`;
    }, timeInSec, 
      setTimeout(() => {
      img.style.display = 'none';
      divClickCount.style.display = 'none';
    }, 5000));
    
  }
}
