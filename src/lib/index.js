// place files you want to import through the `$lib` alias in this folder.
export function setupCarousel(carouselId) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.children;
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function updateSlide() {
      const offset = -currentIndex * carousel.offsetWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    }
  
    return { nextSlide, prevSlide };
  }
  