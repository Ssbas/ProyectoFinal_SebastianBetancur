function showSelected(val) {
        document.getElementById("selected").innerHTML =  "  : " + val;
}

const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".slides");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");

let direction;

prevButton.addEventListener("click", function() {
  if (direction !== "prev") {
    direction = "prev";
    slides.appendChild(slides.firstElementChild);
  }
  slides.style.justifyContent = "flex-end";
  slides.style.transform = "translate(100%)";
  slides.addEventListener("transitionend", function() {
    slides.style.transform = "translate(0)";
    slides.style.transition = "none";
    slides.insertBefore(slides.lastElementChild, slides.firstElementChild);
    setTimeout(function() {
      slides.style.transition = "transform 0.3s ease-in-out";
    });
  });
  updateButtons();
});

nextButton.addEventListener("click", function() {
  if (direction !== "next") {
    direction = "next";
  }
  slides.style.justifyContent = "flex-start";
  slides.style.transform = "translate(-100%)";
  slides.addEventListener("transitionend", function() {
    slides.style.transform = "translate(0)";
    slides.style.transition = "none";
    slides.appendChild(slides.firstElementChild);
    setTimeout(function() {
      slides.style.transition = "transform 0.3s ease-in-out";
    });
  });
  updateButtons();
});

function updateButtons() {
  const currentSlide = slides.querySelector(".slide:first-child");
  const prevSlide = currentSlide.previousElementSibling;
  const nextSlide = currentSlide.nextElementSibling;

  if (!prevSlide) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (!nextSlide) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

updateButtons();
