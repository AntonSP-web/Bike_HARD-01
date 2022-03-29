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

const sliderSection = page.querySelector('.slider');
const leftArrow = sliderSection.querySelector('.slider__arrow_type_left');
const rightArrow = sliderSection.querySelector('.slider__arrow_type_right');
const paragraphs = sliderSection.querySelectorAll('.paragraph');
const sliderLinks = sliderSection.querySelector('.slider__links');
console.log(paragraphs);

let counter = 0;

rightArrow.addEventListener('click', (evt) => {
    evt.preventDefault();
    for(let i = 0; i < paragraphs.length; i++){
      if(paragraphs[i] === paragraphs[counter + 1]) {
        paragraphs[counter + 1].classList.remove('paragraph_disabled');
      } else {
        paragraphs[i].classList.add('paragraph_disabled');
      }

    }
    counter += 1;
    if(counter > 2) {
      counter = 0;
      paragraphs[counter].classList.remove('paragraph_disabled');
    }
    console.log(counter)
  }
)

