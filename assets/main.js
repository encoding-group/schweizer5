import PostRenderer from "../assets/post-renderer.js";
import ImageParentResizer from "../assets/image-parent-resizer.js";

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