const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 0;

function nextImage() {
  slideNumber = (slideNumber + 1) % images.length;
  slider.style.transform = `translateX(-${slideNumber * 100}%)`;
}

function prevImage() {
  slideNumber = (slideNumber - 1 + images.length) % images.length;
  slider.style.transform = `translateX(-${slideNumber * 100}%)`;
}

right.addEventListener("click", () => {
  clearInterval(autoPlay);
  nextImage();
  autoPlay = setInterval(nextImage, 3000);
});

left.addEventListener("click", () => {
  clearInterval(autoPlay);
  prevImage();
  autoPlay = setInterval(nextImage, 3000);
});

let autoPlay = setInterval(nextImage, 3000);

slider.style.transform = `translateX(0%)`;
