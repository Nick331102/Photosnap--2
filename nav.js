const burger = document.querySelector(".hamburger")
const menu = document.querySelector(".nav__links--container")


burger.addEventListener("click", () => {
    menu.classList.toggle("show")
    burger.classList.toggle("clicked")
   
})
