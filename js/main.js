const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}