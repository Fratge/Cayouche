document.addEventListener('DOMContentLoaded', function() {
    const sectionImages = document.querySelectorAll('.photo-container img'); // Remplace '.section-class' par la classe de ta section
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');

    sectionImages.forEach(image => {
        image.addEventListener('click', () => {
            fullscreenImage.src = image.src;
            fullscreenContainer.style.display = 'flex';
        });
    });

    fullscreenContainer.addEventListener('click', () => {
        fullscreenContainer.style.display = 'none';
    });
});
