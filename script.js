/* тут многое на костылях, сам понимаю, но сторонние библиотеки пока использовать не
 хотелось. А на вещи поумнее пока знаний не хватает, пока только основы прошли */

const page = document.querySelector('.page');
const tumbler = page.querySelector('.theme-tumbler_place_header');
const tumblerFooter = page.querySelector('.theme-tumbler_place_footer');
const tumblerWrapper = tumbler.querySelector('.theme-tumbler__wrapper');
const themeDay = tumbler.querySelector('.theme-tumbler__day');
const themeNight = tumbler.querySelector('.theme-tumbler__night');

const tumblerWrapperFooter = tumblerFooter.querySelector('.theme-tumbler__wrapper');
const themeDayFooter = tumblerFooter.querySelector('.theme-tumbler__day');
const themeNightFooter = tumblerFooter.querySelector('.theme-tumbler__night');

// переключение темы при клике на иконку день-ночь и по клику только по тумблеру

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
  checkTumbler();
})

tumblerFooter.addEventListener('click', () => {
  tumblerWrapperFooter.classList.toggle('theme-tumbler__wrapper_type_night');
  if(tumblerWrapperFooter.classList.contains('theme-tumbler__wrapper_type_night')) {
    page.style.backgroundColor = '#333';
  } else {
    page.style.backgroundColor = '#f4f4f4';
  }
})

tumblerFooter.addEventListener('click', (evt) => {
  if(evt.target === themeDayFooter && tumblerWrapperFooter.classList.contains('theme-tumbler__wrapper_type_night')) {
    tumblerWrapperFooter.classList.toggle('theme-tumbler__wrapper_type_night');
    page.style.backgroundColor = '#f4f4f4';
  }
  if(evt.target === themeNightFooter && !(tumblerWrapperFooter.classList.contains('theme-tumbler__wrapper_type_night'))) {
    tumblerWrapperFooter.classList.toggle('theme-tumbler__wrapper_type_night');
    page.style.backgroundColor = '#333';
  }
  checkTumblerFooter();
})


//функции для того чтобы тумблеры в хэдере и футере были синхронизированы

function checkTumbler() {
  if(tumblerWrapper.classList.contains('theme-tumbler__wrapper_type_night')) {
    tumblerWrapperFooter.classList.add('theme-tumbler__wrapper_type_night');
  } else if(!tumblerWrapper.classList.contains('theme-tumbler__wrapper_type_night')) {
    tumblerWrapperFooter.classList.remove('theme-tumbler__wrapper_type_night');
  }
}

function checkTumblerFooter() {
  if(tumblerWrapperFooter.classList.contains('theme-tumbler__wrapper_type_night')) {
    tumblerWrapper.classList.add('theme-tumbler__wrapper_type_night');
  } else if(!tumblerWrapperFooter.classList.contains('theme-tumbler__wrapper_type_night')) {
    tumblerWrapper.classList.remove('theme-tumbler__wrapper_type_night');
  }
}

//появление кнопки ОК в инпуте в футере при появлении там курсора

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


// смена блоков с велосипедами при  нажатии на ссылку в блоке велосипеды

const bikes = page.querySelector('.bikes');
const highwayLinks = bikes.querySelectorAll('.bikes__link');
const bikeCards = bikes.querySelectorAll('.bikes__cards');


highwayLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    for(let i = 0; i < highwayLinks.length; i++) {
      if(highwayLinks[i] === evt.target) {
        let attr = evt.target.getAttribute('data-type');
        evt.target.classList.add('bikes__link_type_active');
        for(let j = 0; j < bikeCards.length; j++) {
          if(bikeCards[j].getAttribute('data-type') === attr) {
            bikeCards[j].classList.remove('bikes__cards_disabled');
          } else {
            bikeCards[j].classList.add('bikes__cards_disabled');
          }
        }
      } else {
        highwayLinks[i].classList.remove('bikes__link_type_active');
      }
    }
  })
})

// смена блоков с велосипедами при выборе в select в блоке велосипеды

const bikesForm = bikes.querySelector('.bikes__form');
const select = bikes.querySelector('.bikes__form-select');
const optionForm = bikesForm.querySelectorAll('option');

select.addEventListener('change', (evt) => {
  bikeCards.forEach(card => {
    if(card.getAttribute('data-type') === select.value) {
      card.classList.remove('bikes__cards_disabled');
    } else {
      card.classList.add('bikes__cards_disabled');
    }
  })
})

// смена карточек велосипеда одного блока в мобильной версии
// они не синхронизированы с версией десктоп, поэтому при уменьшении размера до мобильного
// будут работать если сначала выбрать в селекте тип велосипеда



const bikesItems = bikes.querySelectorAll('.bikes__cards-item');
const dots = bikes.querySelectorAll('.bikes__dot');
const dotsArr = Array.from(dots);

dotsArr.forEach(dot => {
  dot.addEventListener('click', (evt) => {
    for(let i = 0; i < dotsArr.length; i++) {
      if(dotsArr[i] === evt.target) {
        dotsArr[i].classList.add('bikes__dot_active')
      } else {
        dotsArr[i].classList.remove('bikes__dot_active');
      }
    }

    let bikeType = select.value;
    let bikeCard = bikes.querySelector(`ul[data-type="${bikeType}"]`);
    let bikeItem = bikeCard.querySelectorAll('.bikes__cards-item');
    let index = dotsArr.indexOf(dot);
    for(let i = 0; i < bikeItem.length; i++) {
      if(bikeItem[i] !== bikeItem[index]) {
        bikeItem[i].classList.add('bikes__cards-item_type_disabled');
      } else {
        bikeItem[i].classList.remove('bikes__cards-item_type_disabled');
      }
    }
  })
})


// закртытие шторки меню при нажатии одного из элементов навигации в меню

const hamburgerToggle = page.querySelector('.hamburger__toggle');
const headerMobile = page.querySelector('.header__list_type_mobile');
const menuLinks = headerMobile.querySelectorAll('.header__link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerToggle.checked = false;
  })
})

// смена блоков шоссее гревел тт и картинок к ним по нажатию на кнопку

const slider = page.querySelector('.slider');
const sliderButtons = slider.querySelector('.slider__buttons');
const leftArrow = slider.querySelector('.slider__arrow_type_left');
const rightArrow = slider.querySelector('.slider__arrow_type_right');
const sliderTitles = slider.querySelectorAll('.slider__title');
const sliderTexts = slider.querySelectorAll('.slider__text');
const sliderImages = slider.querySelectorAll('.slider__cards');
let counter = 0;

sliderButtons.addEventListener('click', (evt) => {
  let target = evt.target;

  if(target === rightArrow) {
    counter ++;
    if(counter > 2) {
      counter = 0;
    }
    console.log(counter)
    for(let i = 0; i < sliderImages.length; i++) {
      if(sliderImages[i] === sliderImages[counter]) {
        sliderImages[i].classList.remove('slider_disabled');
        sliderTexts[i].classList.remove('slider_disabled');
        sliderTitles[i].classList.remove('slider_disabled');
      } else {
        sliderImages[i].classList.add('slider_disabled');
        sliderTexts[i].classList.add('slider_disabled');
        sliderTitles[i].classList.add('slider_disabled');
      }
    }
  }

  if(target === leftArrow) {
    counter--;
    console.log(counter)
    if(counter < 0) {
      counter = 2;
    }

    for(let i = 0; i < sliderImages.length; i++) {
      if(sliderImages[i] === sliderImages[counter]) {
        sliderImages[i].classList.remove('slider_disabled');
        sliderTexts[i].classList.remove('slider_disabled');
        sliderTitles[i].classList.remove('slider_disabled');
      } else {
        sliderImages[i].classList.add('slider_disabled');
        sliderTexts[i].classList.add('slider_disabled');
        sliderTitles[i].classList.add('slider_disabled');
      }
    }
  }
})
