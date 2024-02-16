let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-tag")
//Projects
const container = document.querySelectorAll(".project-img");
const show=document.querySelector(".proj-desp")
container.forEach(e => {
    e.addEventListener("mouseover", function () {
        console.log("mouse entered");
        show.classList.add("hovered");
      });
      e.addEventListener("mouseout", function () {
        console.log("moo");
        show.classList.remove("hovered");
      });
});