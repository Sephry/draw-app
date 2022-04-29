let text = document.querySelector("input");
let buttonAdd = document.getElementById("add");
let buttonDraw = document.getElementById("draw")
let result = document.querySelector("h2");
let options = document.querySelector("option");

const array = []

buttonAdd.addEventListener("click", list);
buttonDraw.addEventListener("click", randomChoose);

function list() {
    let data = text.value;
    array.push(data);
    for (let index = 0; index < array.length; index++) {
        options.innerText = array
    }
    return array;
}

function random_item(items){
    return items[Math.floor(Math.random()*items.length)];
}

function randomChoose() {
    let finish = random_item(array);
    result.innerText = finish;
}