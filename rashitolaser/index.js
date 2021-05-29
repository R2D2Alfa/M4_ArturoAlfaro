document.addEventListener('DOMContentLoaded', () => {
document.getElementById("hamburguesa").addEventListener("click", () => {
    let navbar = document.querySelector(".navbar")
    navbar.classList.toggle("ddown-nav");
    navbar.classList.toggle("navbar-vista");
})

});