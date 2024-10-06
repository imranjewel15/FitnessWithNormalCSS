let hamburger = document.querySelector(".hamburger");
let menubar = document.querySelector(".list");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    menubar.classList.toggle("active");
} )
document.querySelectorAll(".navlink").forEach(n=> n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    menubar.classList.remove("active");
}))