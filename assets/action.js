import Data from "../content/index.js"

let content = document.querySelector('#content');

const makeText = function(sectionText) {
    const text = document.createElement("div");
    text.className = "text text-bottom";
    text.innerHTML = `<p>${sectionText}</p>`;

    return text;
}

const makeColor = function(colorName) {
    const color = document.createElement("div");
    color.className = `color color-${colorName}`;

    return color;
}

const makeImage = function(imagePath) {
    // TODO
}
console.log(Data.data);

Data.data.forEach(item => {
    const section = document.createElement("section");

    if ("text" in item) {
        section.appendChild(makeText(item.text));
    }

    if ("color" in item) {
        section.appendChild(makeColor(item.color));
    }

    content.appendChild(section);
})