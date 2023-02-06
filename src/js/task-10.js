function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('.input')

input.addEventListener('input', (event) => {
  input.textContent = event.currentTarget.value;
})