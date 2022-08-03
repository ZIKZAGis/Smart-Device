const textReplacement = () => {
  if (window.innerWidth <= 769) {
    document.querySelector('.welcome a').textContent = 'бесплатная консультация';
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

