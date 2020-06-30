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

const makeImage = function (imagePath, imageText) {
  const wrapper = document.createElement("div");
  wrapper.className = "image";

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.setAttribute("src", imagePath);
  // console.log(generateSrcSetString(imagePath, [getImageWidthFromName(imagePath), 1000, 500]));
  image.setAttribute("srcset", generateSrcSetString(imagePath, [getImageWidthFromName(imagePath), 1000, 500]));
  image.setAttribute("alt", imageText);

  figure.appendChild(image);
  wrapper.appendChild(figure);
  return wrapper;
};

const getImageWidthFromName = function (imagePath) {
  let chunks = imagePath.split("-");
  return chunks[chunks.length - 1].split(".")[0];
}

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
    section.appendChild(makeImage(post.image, post.imageText));
  }

  if ("color" in post) {
    section.appendChild(makeColor(post.color));
  }

  content.appendChild(section);
});
