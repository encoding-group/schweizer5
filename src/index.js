import ImageParentResizer from './js/image-parent-resizer';
import Rellax from 'rellax';
import './styles/design.scss';

// Handle image uploads
const requireAll = (r) => r.keys().forEach(r);
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
  .querySelectorAll(`[data-imagename]`)
  .forEach((figure) =>
    figure.appendChild(images[figure.getAttribute('data-imagename')])
  );

// Initialize Rellax js for parallaxing
const rellax = new Rellax('.rellax');
document.querySelector('main').classList.add('parallax');

// Initial resize
// window.onload = ImageParentResizer.resize;

// Resize when the viewport changes as well
// let onResizeTimeout;
// window.onresize = () => {
//   clearTimeout(onResizeTimeout);
//   onResizeTimeout = setTimeout(ImageParentResizer.resize, 150);
// };
