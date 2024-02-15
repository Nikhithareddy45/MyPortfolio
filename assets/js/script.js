let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-tag")
window.onscroll=()=>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')
    if(top>=offset && top < offset + height){
      navLinks.forEach(links=>{
        links.classList.remove("active");
        document.querySelector("nav a[href+=' + id + '] ").classList.add(".active");
      })
    }
  })
}
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