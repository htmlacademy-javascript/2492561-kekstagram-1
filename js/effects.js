import { resetScaleValue } from './scale-image.js';

const EFFECTS_FILTRES = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness'
};

const effectsList = document.querySelector('.effects__list');
const imagePreviewContainer = document.querySelector('.img-upload__preview');
export const imageInContainer = imagePreviewContainer.querySelector('img');
const effectLevel = document.querySelector('.effect-level__value');
export const slider = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
let effectCheck = '';

noUiSlider.create(sliderElement, {
  start: 100,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  }
});

const updateEffect = (effect) => {
  if (EFFECTS_FILTRES[effect] === 'blur') {
    imageInContainer.style.filter = `${EFFECTS_FILTRES[effect]}(${sliderElement.noUiSlider.get()}px)`;
  } else {
    imageInContainer.style.filter = `${EFFECTS_FILTRES[effect]}(${sliderElement.noUiSlider.get()})`;
  }
};

const resetSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    start:100
  });
};


const changeEffect = (evt) => {
  resetScaleValue();
  resetSlider();
  imageInContainer.className = `effects__preview--${evt.target.value}`;
  switch (evt.target.value) {
    case 'none':
      slider.classList.add('hidden');
      imageInContainer.style.filter = '';
      break;
    case 'chrome':
    case 'sepia':
      slider.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1
      });
      break;
    case 'marvin':
      slider.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1
      });
      break;
    case 'phobos':
    case 'heat':
      slider.classList.remove('hidden');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1
      });
      break;
  }

  updateEffect(evt.target.value);
  effectCheck = EFFECTS_FILTRES[evt.target.value];
};

const updateOnSlider = () => {
  if (effectCheck === 'blur') {
    imageInContainer.style.filter = `${effectCheck}(${sliderElement.noUiSlider.get()}px)`;
  } else if (effectCheck === 'invert') {
    imageInContainer.style.filter = `${effectCheck}(${sliderElement.noUiSlider.get()}%)`;
  } else {
    imageInContainer.style.filter = `${effectCheck}(${sliderElement.noUiSlider.get()})`;
  }
  effectLevel.value = sliderElement.noUiSlider.get();
};


effectsList.addEventListener('change', (evt) => {
  changeEffect(evt);
});

sliderElement.noUiSlider.on('update', updateOnSlider);
