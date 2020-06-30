import { posts } from "../content/posts.js";

let content = document.querySelector("#content");

const makeText = function (sectionText) {
  const text = document.createElement("div");
  text.className = "text text-bottom";
  text.innerHTML = `<p>${sectionText}</p>`;

  return text;
};

const makeColor = function (colorName) {
  const color = document.createElement("div");
  color.className = `color color-${colorName}`;

  return color;
};

const makeImage = function (imagePath) {
  // TODO
};
console.log(posts);

posts.forEach((post) => {
  const section = document.createElement("section");

  if ("text" in post) {
    section.appendChild(makeText(post.text));
  }

  if ("color" in post) {
    section.appendChild(makeColor(post.color));
  }

  content.appendChild(section);
});
