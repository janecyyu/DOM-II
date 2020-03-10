//mouseover on logo
const logoEl = document.querySelector("h1");
logoEl.addEventListener("mouseover", event => {
  event.target.style.color = "DodgerBlue";
});

// keydown on input
const emailEl = document.querySelector("input");
emailEl.addEventListener("keydown", event => {
  const bodyEl = document.querySelector("body");
  bodyEl.style.border = "20px solid Gold";
});

//  drag / drop
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
}

//  dblclick
const btnEl = document.querySelectorAll(".btn");
btnEl.forEach(item =>
  item.addEventListener(
    "dblclick",
    event => (event.target.style.backgroundColor = "Maroon")
  )
);

//  load on window
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
});

//  resize
window.addEventListener("resize", event => {
  const bodyEl = document.querySelector("body");
  bodyEl.style.border = "10px dotted gray";
});

//  focus on input
emailEl.addEventListener("focus", event => {
  event.target.style.backgroundColor = "LightGoldenRodYellow";
});

//  select
const selectEl = document.querySelectorAll("input")[1];
selectEl.addEventListener("select", event => {
  const log = document.getElementById("log");
  log.textContent = "You selected!";
});

//wheel on banner
const bannerEl = document.querySelector("img");
bannerEl.addEventListener("wheel", event => {
  event.target.src =
    "https://live.staticflickr.com/8587/28018096810_7a8c2fda0a_b.jpg";
});

//  scroll on window
window.addEventListener("scroll", event => {
  const bodyEl = document.querySelector("body");
  bodyEl.style.border = "20px solid pink";
});

//gsap