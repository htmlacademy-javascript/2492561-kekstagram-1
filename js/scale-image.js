const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const smallerScaleButton = document.querySelector('.scale__control--smaller');
const biggerScaleButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imagePerview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imagePerview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const smallerScaleButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const biggerScaleButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

export const addEventOnScaleButtons = () => {
  imagePerview.style.transform = 'scale(1)';
  scaleInput.value = '100%';
  smallerScaleButton.addEventListener('click', smallerScaleButtonClick);
  biggerScaleButton.addEventListener('click', biggerScaleButtonClick);
};

export const resetScaleValue = () => scaleImage(DEFAULT_SCALE);
export const deleteEventsOnScaleButtons = () => {
  smallerScaleButton.removeEventListener('click', smallerScaleButtonClick);
  biggerScaleButton.removeEventListener('click', biggerScaleButtonClick);
  resetScaleValue();
};


