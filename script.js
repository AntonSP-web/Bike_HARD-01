const page = document.querySelector('.page');
const tumbler = page.querySelector('.theme-tumbler');
const tumblerWrapper = tumbler.querySelector('.theme-tumbler__wrapper');
const themeDay = tumbler.querySelector('.theme-tumbler__day');
const themeNight = tumbler.querySelector('.theme-tumbler__night');

tumbler.addEventListener('click', () => {
  tumblerWrapper.classList.toggle('theme-tumbler__wrapper_type_night');
  if(tumblerWrapper.classList.contains('theme-tumbler__wrapper_type_night')) {
    page.style.backgroundColor = '#333';
  } else {
    page.style.backgroundColor = '#f4f4f4';
  }
})

tumbler.addEventListener('click', (evt) => {
  if(evt.target === themeDay && tumblerWrapper.classList.contains('theme-tumbler__wrapper_type_night')) {
    tumblerWrapper.classList.toggle('theme-tumbler__wrapper_type_night');
    page.style.backgroundColor = '#f4f4f4';
  }
  if(evt.target === themeNight && !(tumblerWrapper.classList.contains('theme-tumbler__wrapper_type_night'))) {
    tumblerWrapper.classList.toggle('theme-tumbler__wrapper_type_night');
    page.style.backgroundColor = '#333';
  }
})

const input = page.querySelector('.form-subscribe__input');
const inputOk = page.querySelector('.form-subscribe__submit');
const form = page.querySelector('.form-subscribe');

// form.addEventListener("focusin", () => inputOk.classList.remove('form-subscribe__submit_type_disabled'));

// form.addEventListener("focusout", () =>  inputOk.classList.add('form-subscribe__submit_type_disabled'));

input.onblur = function() {
  if (input.value.includes('@')) {
    input.value = 'Круто!';
    inputOk.classList.add('form-subscribe__submit_type_disabled');
  } else {
    form.addEventListener("focusout", () => {
      inputOk.classList.add('form-subscribe__submit_type_disabled');
    });
  }
};

input.onfocus = function() {
  inputOk.classList.remove('form-subscribe__submit_type_disabled');
};
