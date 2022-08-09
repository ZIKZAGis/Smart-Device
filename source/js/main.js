import IMask from 'imask';

const requestCall = document.querySelector('#call');
const popupBox = document.querySelector('#popup');
const popupButtonClose = document.querySelector('.popup__close');
const inputName = document.querySelector('#name');
const inputPhone = document.querySelectorAll('input[name="number-phone"]');
const aboutAsText = document.querySelectorAll('.about-as p');
const showMoreButton = document.querySelector('.about-as button');

const phoneMask = () => {
  let maskOptions = {
    mask: '+{7}(000)0000000',
    lazy: false,
  };

  inputPhone.forEach((e) => {
    e.addEventListener('focus', () => {
      let mask = new IMask(e, maskOptions);
    });
  });
};

const closePopup = () => {
  popupButtonClose.addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'scroll';
    popupBox.classList.add('popup--closed');
  });
};

const openPopup = () => {
  requestCall.addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'hidden';
    popupBox.classList.remove('popup--closed');
    inputName.focus();
    closePopup();
  });
};

const textReplacement = () => {
  const textChange = () => {
    if (window.screen.width <= 769) {
      document.querySelector('.welcome a').textContent = 'бесплатная консультация';
      document.querySelector('.products__wrapper h2').textContent = 'Товары и услуги Smart Device';
    } else {
      document.querySelector('.welcome a').textContent = 'получить бесплатную консультацию';
      document.querySelector('.products__wrapper h2').textContent = 'Smart Device предлагает следующие товары и услуги';
    }
  };

  window.addEventListener('load', () => {
    textChange();
  });

  window.addEventListener('resize', () => {
    textChange();
  });
};

const accardion = () => {
  const listItem = Array.from(document.querySelectorAll('.footer__block'));
  const mobileAccardion = () => {
    if (window.screen.width <= 769) {
      listItem.forEach(function (e) {
        e.addEventListener('click', () => {
          listItem.forEach(function (elem) {
            elem.classList.remove('footer__block--opened');
          });
          e.classList.toggle('footer__block--opened');
        });
      });
    }
  };

  window.addEventListener('load', () => {
    mobileAccardion();
  });

  window.addEventListener('resize', () => {
    mobileAccardion();
  });
};

const showMore = () => {
  aboutAsText[2].style.display = 'none';
  aboutAsText[3].style.display = 'none';

  showMoreButton.addEventListener('click', () => {
    if (aboutAsText[2].style.display === 'block') {
      aboutAsText[2].style.display = 'none';
      aboutAsText[3].style.display = 'none';
      showMoreButton.textContent = 'подробнее';
    } else {
      aboutAsText[2].style.display = 'block';
      aboutAsText[3].style.display = 'block';
      showMoreButton.textContent = 'свернуть';
    }
  });
};

const runsScripts = () => {
  document.querySelector('.footer__links').classList.remove('footer__links--nojs');
  openPopup();
  showMore();
  textReplacement();
  accardion();
  phoneMask();
};

runsScripts();

