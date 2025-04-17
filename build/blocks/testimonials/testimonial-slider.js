/******/ (() => { // webpackBootstrap
/*!*******************************************************!*\
  !*** ./src/blocks/testimonials/testimonial-slider.js ***!
  \*******************************************************/
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.testimonial-slider');
  sliders.forEach(slider => {
    const slides = slider.querySelector('.slides');
    const testimonials = slider.querySelectorAll('.testimonial');
    const dots = slider.querySelectorAll('.dot');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    let currentIndex = 0;
    const updateDots = () => {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    };
    const scrollToIndex = index => {
      if (index < 0 || index >= testimonials.length) return;
      const offset = testimonials[index].offsetLeft;
      slides.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
      currentIndex = index;
      updateDots();
    };
    prevBtn?.addEventListener('click', () => scrollToIndex(currentIndex - 1));
    nextBtn?.addEventListener('click', () => scrollToIndex(currentIndex + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => scrollToIndex(i)));

    // Optional scroll sync (e.g. for touch gestures)
    slides.addEventListener('scroll', () => {
      const scrollLeft = slides.scrollLeft;
      let closestIndex = 0;
      let closestDistance = Infinity;
      testimonials.forEach((slide, i) => {
        const dist = Math.abs(slide.offsetLeft - scrollLeft);
        if (dist < closestDistance) {
          closestIndex = i;
          closestDistance = dist;
        }
      });
      if (closestIndex !== currentIndex) {
        currentIndex = closestIndex;
        updateDots();
      }
    });
    updateDots(); // Init
  });
});
/******/ })()
;
//# sourceMappingURL=testimonial-slider.js.map