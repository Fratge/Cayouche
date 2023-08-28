const button = document.querySelector('.burger-button');
const menuItems = document.querySelectorAll('.header-nav > ul > li');
const burgerImage = document.querySelector('.burger-button');

button.addEventListener('click', function(){
    menuItems.forEach(item => {
        if (item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'inline';
        } else {
            item.style.display = 'none';
        }
    });

    // Changer l'image du bouton burger
    if (burgerImage.src.includes('burger.svg')) {
        burgerImage.src = './img/croix.svg';
    } else {
        burgerImage.src = './img/burger.svg';
    }
});
