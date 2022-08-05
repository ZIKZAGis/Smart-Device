import IMask from 'imask';

const requestCall = document.querySelector('#call');
const popupBox = document.querySelector('#popup');
const popupButtonClose = document.querySelector('.popup__close');
const inputName = document.querySelector('#name');
const inputPhone = document.querySelectorAll('input[name="number-phone"]');


const phoneMask = () => {
  let maskOptions = {
    mask: '+{7} (000) 000 00 00',
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
  openPopup();
  textReplacement();
  accardion();
  phoneMask();
};

runsScripts();

