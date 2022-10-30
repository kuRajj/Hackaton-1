export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getСoordinate(windowParam, clickCordinate, contextMenuCordinate) {
  if (windowParam < clickCordinate + contextMenuCordinate) {
    return windowParam - contextMenuCordinate;
  } else {
    return clickCordinate;
  }
}

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}