function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonChangeColor = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

// почему заработало тогда, когда я добавил стрелку, 
// но когда я писал название вункции, то онон не работало?
// опять тупил со скобками при вызове функции....
buttonChangeColor.addEventListener('click', () => {
  const generateColor = getRandomHexColor()
  bodyEl.style.backgroundColor = generateColor
  colorName.textContent = generateColor
})
