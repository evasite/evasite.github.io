let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    currentIndex = index;
    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    resetTimer();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

let slideInterval = setInterval(nextSlide, 3000);

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}