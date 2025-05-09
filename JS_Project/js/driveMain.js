const cards = document.querySelectorAll('.card');
const mainImage = document.getElementById('mainImage');
const defaultImage = '../image/intro_map.png';

function fadeToImage(src) {
  mainImage.style.opacity = '0';
  setTimeout(() => {
    mainImage.src = src;
    mainImage.style.opacity = '1';
  }, 200);
}

cards.forEach((card, idx) => {
  card.addEventListener('mouseenter', () => {
    const newSrc = card.getAttribute('data-img');
    fadeToImage(newSrc);

    
    cards.forEach((c, i) => {
      if (i !== idx) c.classList.add('dimmed');
    });
  });

  card.addEventListener('mouseleave', () => {
    fadeToImage(defaultImage);

    
    cards.forEach(c => c.classList.remove('dimmed'));
  });
});