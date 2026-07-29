let hamburger = document.querySelector(".hamburger")
let hamburgerdropcontent = document.querySelector(".hamburger-dropcontent")
hamburger.addEventListener("click", () => {
    hamburgerdropcontent.classList.toggle("active");
});
