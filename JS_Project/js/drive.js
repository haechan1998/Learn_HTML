let currentIndex = 0;
  const swiper = document.querySelector('.swiper');
  const slides = document.querySelectorAll('.swiper > div');

  document.querySelector('.btn_prev').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      swiper.scrollTo({
        left: swiper.clientWidth * currentIndex,
        behavior: 'smooth'
      });
    }
  });

  document.querySelector('.btn_next').addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      swiper.scrollTo({
        left: swiper.clientWidth * currentIndex,
        behavior: 'smooth'
      });
    }
  });