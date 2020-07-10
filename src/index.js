import PostRenderer from './js/post-renderer.js';
import ImageParentResizer from './js/image-parent-resizer.js';
import './index.html';
import './styles/design.scss';

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../uploads', true, /\.jpg$/));

let context = require.context('../content', true, /\.md$/);
let files = {};

context.keys().forEach((filename) => {
  files[filename] = context(filename);
});

// Render content
PostRenderer.renderPosts(files);

// Initial resize
window.onload = ImageParentResizer.resize;

// Resize when the viewport changes as well
let onResizeTimeout;
window.onresize = () => {
  clearTimeout(onResizeTimeout);
  onResizeTimeout = setTimeout(ImageParentResizer.resize, 150);
};
