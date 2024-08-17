const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider li');
const animationDuration = 3000; // 3 seconds in milliseconds

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[slideIndex].classList.add('active');
}

function autoplay() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);

  setTimeout(autoplay, animationDuration);
}

// Start the automatic slide transition
autoplay();
