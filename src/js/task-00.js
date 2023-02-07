const cities = [
    'Kharkiv',
    'Kiev',
    ['Borispol', 'Irpin'],
    'Odessa',
    'Lviv',
    'Dnieper',
];
const body = document.querySelector("body")
const cityList = document.createElement("ul")

body.append(cityList)

cities.forEach(el => {
    if (el.length === 2) {
        const citySubList = document.createElement("ul")

        el.map(subEl => {
            const subCity = document.createElement("li")

            subCity.textContent = subEl
            citySubList.append(subCity)
        })
        cityList.append(citySubList)
    }
    else {
        const cityEl = document.createElement("li")

        cityEl.textContent = el
        cityList.append(cityEl)
    }
})

console.log(cities);