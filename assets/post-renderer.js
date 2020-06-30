import Content from "../content/posts.js";

let content = document.querySelector("#content");

const makeText = function (sectionText) {
  const text = document.createElement("div");
  text.className = "text text-bottom";
  text.innerHTML = `<p>${sectionText}</p>`;

  return text;
};

const makeColor = function (colorName) {
  const color = document.createElement("div");
  color.className = "color";

  return color;
};

const makeImage = function ({ path, alt, width, height }) {
  const wrapper = document.createElement("div");
  wrapper.className = "image";

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.setAttribute("src", path);
  image.setAttribute("srcset", generateSrcSetString(path, [width, 1000, 500]));
  image.setAttribute("alt", alt);

  figure.appendChild(image);
  wrapper.appendChild(figure);
  return wrapper;
};

const generateSrcSetString = function (imagePath, sizes) {
  let srcSetStrings = [];
  const chunks = imagePath.split("-");
  chunks.pop();
  imagePath = chunks.join("-");
  sizes.forEach(size => srcSetStrings.push(`${imagePath}-${size}.jpg ${size}w`));

  return srcSetStrings.join(",");
}

const makeTextWithImage = function (text, imagePath, imageText) {
  const wrapper = document.createElement("div");
  wrapper.className = "image";

  wrapper.appendChild(makeText(text));
  wrapper.appendChild(makeImage(imagePath, imageText));
  return wrapper;
};

Content.posts.forEach((post) => {
  const section = document.createElement("section");
  if ("color" in post) {
    section.className = `color-${post.color}`;
  }

  if ("text" in post) {
    section.appendChild(makeText(post.text));
  }

  if ("image" in post) {
    section.appendChild(makeImage(post.image));
  }

  if ("color" in post) {
    section.appendChild(makeColor(post.color));
  }

  content.appendChild(section);
});
