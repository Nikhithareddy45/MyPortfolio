const art = document.querySelectorAll(".art-imgs");
const img = document.querySelectorAll(".art-imgs img");
const clicked = document.querySelector(".clicked");
console.log(img);
img.forEach((imgs) => {
  console.log(imgs);
  imgs.addEventListener("click", function () {
    if ((imgs.classList.contains = "clicked")) {
      art.classList.remove("clicked");
    } else {
      art.classList.add("clicked");
    }
  });
});
