let video = document.getElementById("video");
let button = document.getElementById("btn");

button.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    button.innerHTML = "Durdur"
  } else {
    video.pause();
    button.innerHTML = "Devam"
  }
});