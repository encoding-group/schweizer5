import ImageParentResizer from './js/image-parent-resizer';
import Rellax from 'rellax';
import './styles/design.scss';

// Handle image uploads
const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context('../uploads', true, /\.(png|svg|jpg|gif)$/));

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
