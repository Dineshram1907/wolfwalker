const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mouseover', () => {
    imageContainer.style.animationPlayState = 'paused';
});

imageContainer.addEventListener('mouseout', () => {
    imageContainer.style.animationPlayState = 'running';
});
