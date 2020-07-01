import PostRenderer from './js/post-renderer.js';
import ImageParentResizer from './js/image-parent-resizer.js';
import './css/design.css';

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../uploads', true, /\.jpg$/));

// Render content
PostRenderer.renderPosts();

// Initial resize
window.onload = ImageParentResizer.resize;

// Resize when the viewport changes as well
let onResizeTimeout;
window.onresize = () => {
  clearTimeout(onResizeTimeout);
  onResizeTimeout = setTimeout(ImageParentResizer.resize, 150);
};
