/* тут многое на костылях, сам понимаю, но сторонние библиотеки пока использовать не
 хотелось. А на вещи поумнее пока знаний не хватает, пока только основы прошли */

const page = document.querySelector('.page');
const footer = page.querySelector('.footer');
const tumbler = page.querySelector('.theme-tumbler_place_header');
const tumblerFooter = page.querySelector('.theme-tumbler_place_footer');
const tumblerWrapper = tumbler.querySelector('.theme-tumbler__wrapper');
const themeDay = tumbler.querySelector('.theme-tumbler__day');
const themeNight = tumbler.querySelector('.theme-tumbler__night');

const tumblerWrapperFooter = tumblerFooter.querySelector('.theme-tumbler__wrapper');
const themeDayFooter = tumblerFooter.querySelector('.theme-tumbler__day');
const themeNightFooter = tumblerFooter.querySelector('.theme-tumbler__night');

const form = page.querySelector('.form-subscribe');
const input = form.querySelector('.form-subscribe__input');
const inputOk = form.querySelector('.form-subscribe__submit');

const headings = page.querySelectorAll('.heading');
const texts = page.querySelectorAll('.text');
const header = page.querySelector('.header');
const curtain = page.querySelector('.hamburger__curtain');
const hamCross = page.querySelector('.hamburger__line');
const arrowBtn = page.querySelectorAll('.slider__arrow');

const slider = page.querySelector('.slider');
const sliderButtons = slider.querySelector('.slider__buttons');
const leftArrow = slider.querySelector('.slider__arrow_type_left');
const rightArrow = slider.querySelector('.slider__arrow_type_right');
const sliderTitles = slider.querySelectorAll('.slider__title');
const sliderTexts = slider.querySelectorAll('.slider__text');
const sliderImages = slider.querySelectorAll('.slider__cards');
let counter = 0;

// переключение темы при клике на иконку день-ночь и по клику только по тумблеру

//переключатель в хэдере

tumbler.addEventListener('click', () => {
  tumblerWrapper.classList.toggle('theme-tumbler__wrapper_type_night');
  if(tumblerWrapper.classList.contains('theme-tumbler__wrapper_type_night')) {
    page.classList.add('theme-night_property_bg-color');
    header.classList.add('theme-night_property_bg-color');
    curtain.classList.add('theme-night_property_bg-color');
    inputOk.classList.add('footer_theme_night');
    footer.classList.add('footer_theme_night');
    input.classList.add('form-subscribe__input_theme_night');
    input.classList.add('theme-night_property_input-color');
    headings.forEach(heading => heading.classList.add('theme-night_property_title-color'));
    texts.forEach(text => text.classList.add('theme-night_property_text-color'));
    hamCross.classList.add('hamburger__line_type_night');
    arrowBtn.forEach(btn => btn.classList.add('theme-night_property_btn-bg'));
    leftArrow.classList.add('slider__arrow_type_left-night');
    rightArrow.classList.add('slider__arrow_type_right-night');
  } else {
    page.classList.remove('theme-night_property_bg-color');
    header.classList.remove('theme-night_property_bg-color');
    curtain.classList.remove('theme-night_property_bg-color');
    inputOk.classList.remove('footer_theme_night');
    footer.classList.remove('footer_theme_night');
    input.classList.remove('form-subscribe__input_theme_night');
    input.classList.remove('theme-night_property_input-color');
    headings.forEach(heading => heading.classList.remove('theme-night_property_title-color'));
    texts.forEach(text => text.classList.remove('theme-night_property_text-color'));
    hamCross.classList.remove('hamburger__line_type_night');
    arrowBtn.forEach(btn => btn.classList.remove('theme-night_property_btn-bg'));
    leftArrow.classList.remove('slider__arrow_type_left-night');
    rightArrow.classList.remove('slider__arrow_type_right-night');
  }
})

tumbler.addEventListener('click', (evt) => {
  if(evt.target === themeDay && tumblerWrapper.classList.contains('theme-tumbler__wrapper_type_night')) {
    tumblerWrapper.classList.toggle('theme-tumbler__wrapper_type_night');
    page.classList.remove('theme-night_property_bg-color');
    header.classList.remove('theme-night_property_bg-color');
    curtain.classList.remove('theme-night_property_bg-color');
    inputOk.classList.remove('footer_theme_night');
    footer.classList.remove('footer_theme_night');
    input.classList.remove('form-subscribe__input_theme_night');
    input.classList.remove('theme-night_property_input-color');
    headings.forEach(heading => heading.classList.remove('theme-night_property_title-color'));
    texts.forEach(text => text.classList.remove('theme-night_property_text-color'));
    hamCross.classList.remove('hamburger__line_type_night');
    arrowBtn.forEach(btn => btn.classList.remove('theme-night_property_btn-bg'));
    leftArrow.classList.remove('slider__arrow_type_left-night');
    rightArrow.classList.remove('slider__arrow_type_right-night');
  }
  if(evt.target === themeNight && !(tumblerWrapper.classList.contains('theme-tumbler__wrapper_type_night'))) {
    tumblerWrapper.classList.toggle('theme-tumbler__wrapper_type_night');
    page.classList.add('theme-night_property_bg-color');
    header.classList.add('theme-night_property_bg-color');
    curtain.classList.add('theme-night_property_bg-color');
    inputOk.classList.add('footer_theme_night');
    footer.classList.add('footer_theme_night');
    input.classList.add('form-subscribe__input_theme_night');
    input.classList.add('theme-night_property_input-color');
    headings.forEach(heading => heading.classList.add('theme-night_property_title-color'));
    texts.forEach(text => text.classList.add('theme-night_property_text-color'));
    hamCross.classList.add('hamburger__line_type_night');
    arrowBtn.forEach(btn => btn.classList.add('theme-night_property_btn-bg'));
    leftArrow.classList.add('slider__arrow_type_left-night');
    rightArrow.classList.add('slider__arrow_type_right-night');
  }
  checkTumbler();
})

// переключатель в футере

tumblerFooter.addEventListener('click', () => {
  tumblerWrapperFooter.classList.toggle('theme-tumbler__wrapper_type_night');
  if(tumblerWrapperFooter.classList.contains('theme-tumbler__wrapper_type_night')) {
    page.classList.add('theme-night_property_bg-color');
    header.classList.add('theme-night_property_bg-color');
    curtain.classList.add('theme-night_property_bg-color');
    inputOk.classList.add('footer_theme_night');
    footer.classList.add('footer_theme_night');
    input.classList.add('form-subscribe__input_theme_night');
    input.classList.add('theme-night_property_input-color');
    headings.forEach(heading => heading.classList.add('theme-night_property_title-color'));
    texts.forEach(text => text.classList.add('theme-night_property_text-color'));
    hamCross.classList.add('hamburger__line_type_night');
    arrowBtn.forEach(btn => btn.classList.add('theme-night_property_btn-bg'));
    leftArrow.classList.add('slider__arrow_type_left-night');
    rightArrow.classList.add('slider__arrow_type_right-night');
  } else {
    page.classList.remove('theme-night_property_bg-color');
    header.classList.remove('theme-night_property_bg-color');
    curtain.classList.remove('theme-night_property_bg-color');
    inputOk.classList.remove('footer_theme_night');
    footer.classList.remove('footer_theme_night');
    input.classList.remove('form-subscribe__input_theme_night');
    input.classList.remove('theme-night_property_input-color');
    headings.forEach(heading => heading.classList.remove('theme-night_property_title-color'));
    texts.forEach(text => text.classList.remove('theme-night_property_text-color'));
    hamCross.classList.remove('hamburger__line_type_night');
    arrowBtn.forEach(btn => btn.classList.remove('theme-night_property_btn-bg'));
    leftArrow.classList.remove('slider__arrow_type_left-night');
    rightArrow.classList.remove('slider__arrow_type_right-night');
  }
})

tumblerFooter.addEventListener('click', (evt) => {
  if(evt.target === themeDayFooter && tumblerWrapperFooter.classList.contains('theme-tumbler__wrapper_type_night')) {
    tumblerWrapperFooter.classList.toggle('theme-tumbler__wrapper_type_night');
    page.classList.remove('theme-night_property_bg-color');
    header.classList.remove('theme-night_property_bg-color');
    curtain.classList.remove('theme-night_property_bg-color');
    inputOk.classList.remove('footer_theme_night');
    footer.classList.remove('footer_theme_night');
    input.classList.remove('form-subscribe__input_theme_night');
    input.classList.remove('theme-night_property_input-color');
    headings.forEach(heading => heading.classList.remove('theme-night_property_title-color'));
    texts.forEach(text => text.classList.remove('theme-night_property_text-color'));
    hamCross.classList.remove('hamburger__line_type_night');
    arrowBtn.forEach(btn => btn.classList.remove('theme-night_property_btn-bg'));
    leftArrow.classList.remove('slider__arrow_type_left-night');
    rightArrow.classList.remove('slider__arrow_type_right-night');
  }
  if(evt.target === themeNightFooter && !(tumblerWrapperFooter.classList.contains('theme-tumbler__wrapper_type_night'))) {
    tumblerWrapperFooter.classList.toggle('theme-tumbler__wrapper_type_night');
    page.classList.add('theme-night_property_bg-color');
    header.classList.add('theme-night_property_bg-color');
    curtain.classList.add('theme-night_property_bg-color');
    inputOk.classList.add('footer_theme_night');
    footer.classList.add('footer_theme_night');
    input.classList.add('form-subscribe__input_theme_night');
    input.classList.add('theme-night_property_input-color');
    headings.forEach(heading => heading.classList.add('theme-night_property_title-color'));
    texts.forEach(text => text.classList.add('theme-night_property_text-color'));
    hamCross.classList.add('hamburger__line_type_night');
    arrowBtn.forEach(btn => btn.classList.add('theme-night_property_btn-bg'));
    leftArrow.classList.add('slider__arrow_type_left-night');
    rightArrow.classList.add('slider__arrow_type_right-night');
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
        sliderImages[i].classList.remove('slider__cards_disabled');
        sliderTexts[i].classList.remove('slider__text_disabled');
        sliderTitles[i].classList.remove('slider__title_disabled');
      } else {
        sliderImages[i].classList.add('slider__cards_disabled');
        sliderTexts[i].classList.add('slider__text_disabled');
        sliderTitles[i].classList.add('slider__title_disabled');
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
        sliderImages[i].classList.remove('slider__cards_disabled');
        sliderTexts[i].classList.remove('slider__text_disabled');
        sliderTitles[i].classList.remove('slider__title_disabled');
      } else {
        sliderImages[i].classList.add('slider__cards_disabled');
        sliderTexts[i].classList.add('slider__text_disabled');
        sliderTitles[i].classList.add('slider__title_disabled');
      }
    }
  }
})
