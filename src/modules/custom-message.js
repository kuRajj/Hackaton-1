import { Module } from "../core/module";
import { getRandomColor } from "../utils"
import { random } from "../utils"

export class MessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }

  trigger() {
    const myText = [
      "Hello World",
      "Привет мир",
      "Bonjour le monde",
      "Ciao mondo",
      "Hallo Welt",
      "Hola Mundo",
      "Helló Világ",
      "Aloha Honua",
      "Hej Verden",
      "Dia duit Domhanda",
      "Halló heimur",
      "Hallo Wereld",
    ]
    const randomText = random(0, 11);
    const el = document.createElement('div');
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('message__close')) {
        el.classList.add('message_showing')
        el.addEventListener('transitionend', () => {
          el.classList.remove('message_showing');
          el.classList.remove('message_show');
          el.remove();
        }, {
          once: true
        });
      }
    });
    const autohide = true
    el.classList.add('message_showing');
    el.classList.add('message_show');
    window.setTimeout(() => {
      el.classList.remove('message_showing');
    });
    if (autohide) {
      setTimeout(() => {
        el.classList.add('message_showing');
        el.addEventListener('transitionend', () => {
          el.classList.remove('message_showing');
          el.classList.remove('message_show');
          el.remove();
        }, {
          once: true
        });
      }, 5000);
    }
    el.style.background = getRandomColor()
    el.style.width = random(100, 300) + 'px'
    el.classList.add('message');
    let html = `{header}<div class="message__body"></div><button class="message__close" type="button"></button>`;
    const htmlHeader = '<div class="message__header"></div>';
    html = html.replace('{header}', htmlHeader);
    el.innerHTML = html;
    el.querySelector('.message__header').textContent = 'Кастомное сообщение';
    el.querySelector('.message__body').textContent = myText[randomText]
    if (!document.querySelector('.message-container')) {
      const container = document.createElement('div');
      container.classList.add('message-container');
      document.body.append(container);
    }
    document.querySelector('.message-container').append(el);
  }
}