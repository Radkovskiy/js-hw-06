function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('.input')
const createBtn = document.querySelector('.createBtn')
const destroyBtn = document.querySelector('.destroyBtn')
const boxesContainer = document.querySelector('#boxes')


createBtn.addEventListener('click', () => {

  const inputValue = input.value;
  const colorsArr = [];
  let scale = 20

  for (let i = 0; i < inputValue; i += 1) {
    colorsArr.push(getRandomHexColor());
  }

  colorsArr.map((el) => {
    const colorBlock = document.createElement("div");
    scale += 10
    colorBlock.style.width = `${scale}px`;
    colorBlock.style.height = `${scale}px`;
    colorBlock.style.backgroundColor = el;
    boxesContainer.append(colorBlock);
  })

  destroyBtn.addEventListener('click', () => {
    boxesContainer.innerHTML = ""
  })
})