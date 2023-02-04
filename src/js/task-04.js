const valueEl = document.querySelector("#value");
const buttonIncr = document.querySelector('button[data-action="increment"]');
const buttonDecr = document.querySelector('button[data-action="decrement"]');


const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
}

buttonIncr.addEventListener('click', function () {
    // боже, я еле додумался вставить пустые скобки после метода.
    // втыкал час в эту хуйню
    counterValue.increment()
    valueEl.textContent = counterValue.value
});

buttonDecr.addEventListener('click', function () {
    counterValue.decrement()
    valueEl.textContent = counterValue.value
});
