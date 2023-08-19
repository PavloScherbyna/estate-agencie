function toggleMenu() {
    var burgerButton = document.getElementById("burgerButton");
    burgerButton.classList.toggle("active");
}

var burgerButton = document.getElementById("burgerButton");
burgerButton.addEventListener("click", toggleMenu);


var burgerButton = document.getElementById("burgerButton");
var menuInform = document.querySelector(".menu_inform");

burgerButton.addEventListener("click", function() {
    menuInform.classList.toggle("active");
});

// var burgerButton = document.getElementById("burgerButton");
// var blurOverlay = document.getElementById("blurOverlay");
// var menuInform = document.querySelector(".menu_inform");

// burgerButton.addEventListener("click", function() {
//     burgerButton.classList.toggle("active");
//     blurOverlay.classList.toggle("active");
//     menuInform.classList.toggle("active");
// });

