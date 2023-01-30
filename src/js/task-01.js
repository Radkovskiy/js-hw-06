const elList = document.querySelectorAll(".item");
console.log(elList);

console.log(`Number of categories: ${elList.length}`);

elList.forEach(el => {
    console.log("Category: ", el.querySelector("h2").textContent)
    console.log("Elements: ", el.querySelector("ul").children.length)
    }
);
