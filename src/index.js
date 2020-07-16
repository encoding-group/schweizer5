import Paraport from './js/paraport';
import './styles/design.scss';

const paraport = new Paraport('.para');

// Handle image uploads
const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context('./images', true, /\.(png|svg|jpg|gif)$/));
requireAll(require.context('../uploads', true, /\.(png|svg|jpg|gif)$/));

// responsive images
const requireImages = () => {
  const images = [
    'schweizer5-eventlocation-frankfurt-1',
    'schweizer5-eventlocation-frankfurt-2',
    'schweizer5-eventlocation-frankfurt-3',
    'schweizer5-eventlocation-frankfurt-4',
    'schweizer5-eventlocation-frankfurt-5',
    'schweizer5-eventlocation-frankfurt-6',
    'schweizer5-eventlocation-frankfurt-7',
  ];
  let responsiveImages = {};
  for (let image of images) {
    let imageData = require(`../uploads/responsive/${image}.jpg?sizes[]=600,sizes[]=900,sizes[]=1200,sizes[]=1800`);
    const img = document.createElement('img');
    img.setAttribute('srcSet', imageData.srcSet);
    img.setAttribute('src', imageData.src);
    img.setAttribute('width', '100%');
    img.setAttribute('height', 'auto');
    img.setAttribute('alt', 'Schweizer5');
    responsiveImages[image] = img;
  }

  return responsiveImages;
};

const images = requireImages();

document
  .querySelectorAll('[data-imagename]')
  .forEach((figure) =>
    figure.appendChild(images[figure.getAttribute('data-imagename')])
  );

// Initializing layout
for (const element of document.querySelectorAll('.layout')) {
  if (element.dataset.left) {
    let left = parseFloat(element.dataset.left || 0) * 10;
    element.style.marginLeft = `${left}vw`;
  }
  if (element.dataset.top) {
    let top = parseFloat(element.dataset.top || 0) * 10;
    element.style.marginTop = `${top}vw`;
  }
  if (element.dataset.width) {
    let width = parseFloat(element.dataset.width || 0) * 10;
    element.style.width = `${width}vw`;
  }
  if (element.dataset.height) {
    let height = parseFloat(element.dataset.height || 0) * 10;
    element.style.height = `${height}vw`;
  }
}
