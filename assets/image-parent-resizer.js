const resize = function() {
    const images = document.querySelectorAll(".img");
    images.forEach((image) => {
        image.closest("section").style.height = `${image.offsetHeight}px`;
    })
}

export default {
    resize
}