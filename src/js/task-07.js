const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

slider.addEventListener('input', callback)
function callback() {
    const sliderValue = slider.value
    text.style.fontSize = `${sliderValue}px`
}