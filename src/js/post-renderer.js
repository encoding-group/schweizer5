const makeText = (sectionText) => {
  const text = document.createElement('div');
  text.className = 'text text-bottom';
  text.innerHTML = sectionText;

  return text;
};

const makeColor = () => {
  const color = document.createElement('div');
  color.className = 'color';

  return color;
};

const makeImage = ({ path, alt, width, height }) => {
  const image = document.createElement('img');
  image.className = 'img';
  image.setAttribute('src', path);
  image.setAttribute('srcset', generateSrcSetString(path, [width, 1000, 500]));
  image.setAttribute('alt', alt);
  image.setAttribute('width', width);
  image.setAttribute('height', height);

  const figure = document.createElement('figure');
  figure.appendChild(image);

  const wrapper = document.createElement('div');
  wrapper.className = 'image';
  wrapper.appendChild(figure);
  return wrapper;
};

const generateSrcSetString = (imagePath, sizes) => {
  const chunks = imagePath.split('-');
  chunks.pop();
  imagePath = chunks.join('-');

  let srcSetStrings = [];
  sizes.forEach((size) =>
    srcSetStrings.push(`${imagePath}-${size}.jpg ${size}w`)
  );

  return srcSetStrings.join(',');
};

const renderPosts = (posts) => {
  const contentNode = document.querySelector('#content');

  for (let item in posts) {
    let post = posts[item];

    const section = document.createElement('section');

    if ('color' in post.attributes) {
      section.className = `color-${post.attributes.color}`;
    }

    if (post.html !== '') {
      section.appendChild(makeText(post.html));
    }

    if ('image' in post.attributes) {
      section.appendChild(makeImage(post.attributes.image));
    }

    if ('color' in post.attributes) {
      section.appendChild(makeColor(post.attributes.color));
    }

    contentNode.appendChild(section);
  }
};

export default {
  renderPosts,
};
