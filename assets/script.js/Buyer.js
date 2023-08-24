const showInputButton = document.getElementById("show_input");
const shadowInput = document.querySelector(".shadow_input");

showInputButton.addEventListener("click", function() {
    showInputButton.style.display = "none";
    shadowInput.style.display = "flex";
});
