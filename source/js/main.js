const textReplacement = () => {
  if (window.innerWidth <= 769) {
    document.querySelector('.welcome a').textContent = 'бесплатная консультация';
    document.querySelector('.products__wrapper h2').textContent = 'Товары и услуги Smart Device';
  }
};

const listItem = Array.from(document.querySelectorAll('.footer__block'));

const accardion = () => {
  if (window.innerWidth <= 769) {
    listItem.forEach(function (e) {
      e.addEventListener('click', () => {
        e.classList.toggle('footer__block--opened');
      });
    });
  }
};

const runsScripts = () => {
  textReplacement();
  accardion();
};

runsScripts();

