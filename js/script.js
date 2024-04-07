window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const btn = document.querySelector(".book");
const modal = document.querySelector(".popupForm");
const xMark = document.querySelector(".fa-xmark");


btn.addEventListener("click", function(){
modal.classList.add("active");
})

xMark.addEventListener("click", function(){
modal.classList.remove("active");
})
