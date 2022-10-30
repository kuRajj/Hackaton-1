export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function createFigureElement() {
  const randomNumber = random(1, 9);
  const figure = document.createElement("div");
  figure.className = `figure figure${randomNumber}`;
  return figure;
}