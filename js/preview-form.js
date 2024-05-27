import { deleteEventsOnScaleButtons, addEventOnScaleButtons } from './scale-image.js';
import { imageInContainer, slider } from './effects.js';

export const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const preview = uploadOverlay.querySelector('img');
export const perviewForm = document.querySelector('.img-upload__form');
const perviewFormSubmitButton = perviewForm.querySelector('#upload-submit');

const HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнено поле c тегами';

const hashtagField = uploadOverlay.querySelector('.text__hashtags');
const descriptionField = uploadOverlay.querySelector('.text__description');

//Валидация
const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const isUniqueTags = (tags) => {
  const toStandartTags = tags.map((tag) => tag.toLowerCase());
  return toStandartTags.length === new Set(toStandartTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return tags.length <= HASHTAG_COUNT && isUniqueTags(tags) && tags.every(isValidTag);
};
const pristine = new Pristine(perviewForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const isFormValid = () => pristine.validate();

//Блокировка submitButton

export const blockSubmitButton = (boolen) => {
  perviewFormSubmitButton.disabled = boolen;
};
const blockSubmit = () => {
  if (!isFormValid()) {
    blockSubmitButton(true);
  } else {
    blockSubmitButton(false);
  }
};
const addEventOnSubmitForm = () => {
  perviewForm.addEventListener('input', blockSubmit);
};


//Скрытие редактора загружаемого изображения
const perviewFormCloseButton = perviewForm.querySelector('#upload-cancel');
export const hideUploadOverlay = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const deleteUploadOverlayButtonsEvents = () => {
  perviewFormCloseButton.removeEventListener('click', closeUploadOverlayOnButton);
  document.removeEventListener('keydown', closeUploadOverlayOnEscape);
};

const isFieldsFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === descriptionField;
// На кнопку
function closeUploadOverlayOnButton () {
  hideUploadOverlay();
  deleteUploadOverlayButtonsEvents();
  deleteEventsOnScaleButtons();
  perviewForm.reset();
}
// На Escape
export function closeUploadOverlayOnEscape (evt) {
  if (evt.key === 'Escape' && isFieldsFocused()) {
    evt.target.blur();
  } else if (evt.key === 'Escape') {
    closeUploadOverlayOnButton();
  }
}

const addEventForUploadOverlay = () => {
  perviewFormCloseButton.addEventListener('click', closeUploadOverlayOnButton);
  document.addEventListener('keydown', closeUploadOverlayOnEscape);
};

//Показ редактора загружаемого изображенгия
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
export const openPreviewOverlay = function () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imageInContainer.classList.add('effects__preview--none');
  slider.classList.add('hidden');

  const file = this.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }

  addEventOnScaleButtons();
  addEventForUploadOverlay();
  addEventOnSubmitForm();
};

