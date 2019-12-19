window.addEventListener("load", init);

function init () {
  document.getElementById("magGlass").addEventListener("click", moveGlass);
}

function moveGlass() {
  this.style.animationName = "dance";
  this.style.animationIterationCount = 1;
  this.style.animationDuration = "4s";
}
