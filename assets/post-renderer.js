import Posts from "../content/posts.js";

const makeText = (sectionText) => {
  const text = document.createElement("div");
  text.className = "text text-bottom";
  text.innerHTML = `<p>${sectionText}</p>`;

  return text;
};

const makeColor = () => {
  const color = document.createElement("div");
  color.className = "color";

  return color;
};

const makeImage = ({ path, alt, width, height }) => {
  const image = document.createElement("img");
  image.className = "img";
  image.setAttribute("src", path);
  image.setAttribute("srcset", generateSrcSetString(path, [width, 1000, 500]));
  image.setAttribute("alt", alt);
  image.setAttribute("width", width);
  image.setAttribute("height", height);

  const figure = document.createElement("figure");
  figure.appendChild(image);

  const wrapper = document.createElement("div");
  wrapper.className = "image";
  wrapper.appendChild(figure);
  return wrapper;
};

const generateSrcSetString = (imagePath, sizes) => {
  const chunks = imagePath.split("-");
  chunks.pop();
  imagePath = chunks.join("-");

  let srcSetStrings = [];
  sizes.forEach((size) =>
    srcSetStrings.push(`${imagePath}-${size}.jpg ${size}w`)
  );

  return srcSetStrings.join(",");
};

const renderPosts = () => {
  const contentNode = document.querySelector("#content");

  Posts.forEach((post) => {
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

    contentNode.appendChild(section);
  });
};

export default {
  renderPosts,
};
