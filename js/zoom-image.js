document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            fullscreenImage.src = image.src;
            fullscreenContainer.style.display = 'flex';
        });
    });

    fullscreenContainer.addEventListener('click', () => {
        fullscreenContainer.style.display = 'none';
    });
});