const ico = document.querySelector('.menu__burger');
ico.addEventListener("click", function () {
    ico.classList.toggle("active");
})

// jQuery - to samo co wyżej za pomocą blibliotki jQuery
// $('.burger').on('click', function () {
//    $(this).toggleClass('active');
//   })