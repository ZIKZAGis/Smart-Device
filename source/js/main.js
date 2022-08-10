const requestCall = document.querySelector('#call');
const popupBox = document.querySelector('#popup');
const popupButtonClose = document.querySelector('.popup__close');
const inputName = document.querySelector('#name');
const aboutAsText = document.querySelectorAll('.about-as p');
const showMoreButton = document.querySelector('.about-as button');


document.addEventListener('DOMContentLoaded', function () {

  let eventCalllback = function (e) {

    let el = e.target;
    let clearVal = el.dataset.phoneClear;
    let pattern = el.dataset.phonePattern;
    let matrix_def = '+7(___) ___-__-__';
    let matrix = pattern ? pattern : matrix_def;
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = e.target.value.replace(/\D/g, '');

    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) {
      val = def;
    }
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  };

  let phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});

const close = () => {
  document.querySelector('body').style.overflow = 'scroll';
  popupBox.classList.add('popup--closed');
};

const clickOverlay = (e) => {
  if (e.target === popupBox) {
    close();
  }
};

const closePopup = () => {
  const isEscapeKey = (evt) => evt.key === 'Escape';
  if (!popupBox.classList.contains('popup--closed')) {
    document.querySelector('body').addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        close();
      }
    });
    document.addEventListener('click', (e) => {
      if (e.target === popupButtonClose) {
        close();
      }
    });

    document.addEventListener('click', clickOverlay);
  }
};

const openPopup = () => {
  requestCall.addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'hidden';
    popupBox.classList.remove('popup--closed');
    inputName.focus();
    document.querySelector('main').setAttribute('tabindex', '-1');
    document.querySelector('footer').setAttribute('tabindex', '-1');
    document.querySelector('header').setAttribute('tabindex', '-1');
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
};

runsScripts();

