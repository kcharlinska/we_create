const btn = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');

// Menu shows on click
btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
})


//  Menu hides after scroll
window.addEventListener("scroll", function () {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        btn.classList.remove("active");
    }
})