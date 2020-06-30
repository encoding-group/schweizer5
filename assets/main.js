import PostRenderer from "../assets/post-renderer.js";
import ImageParentResizer from "../assets/image-parent-resizer.js";

PostRenderer.renderPosts();
ImageParentResizer.resize();

let _onResizeTimeout;
window.onresize = function(){
  clearTimeout(_onResizeTimeout);
  _onResizeTimeout = setTimeout(function(){
		console.log('resize');
		ImageParentResizer.resize();
  }, 150);
};
