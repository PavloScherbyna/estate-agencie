document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const blurBg = document.querySelector(".blur-bg");
  
    hamburgerMenu.addEventListener("click", function () {
      blurBg.style.display = "block";
    });

    // Додайте код для обробки події закриття меню
    const menuToggle = document.getElementById("menu__toggle");
    menuToggle.addEventListener("change", function () {
        if (!this.checked) {
            blurBg.style.display = "none";
        }
    });
});
