//const variables used
const text = document.querySelector(".fadeIn");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
//this for loop lets me loop through each letter, turning them into <span> so they can be treated as individual elements
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}