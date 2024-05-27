import { fullPictureModal } from './modal-content.js';
import {closeUploadOverlayOnEscape} from './preview-form.js';

export const RESULT_OF_SEND = {
  Success: 'success',
  Error: 'error'
};
//Ошибка при загрузке данных с сервера
export const getloadDataAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.width = '700px';
  alertContainer.style.margin = 'auto';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'transparent';
  alertContainer.style.lineHeight = '1';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

const closeModalButton = document.querySelector('.big-picture__cancel');
const loadMoarButton = fullPictureModal.querySelector('.social__comments-loader');
let startIndex = 5;
const loadMore = () => {
  const commentListNodes = fullPictureModal.querySelectorAll('.social__comment');
  const commentListLength = commentListNodes.length;
  const commentPortion = 5;
  if (startIndex + commentPortion >= commentListLength) {
    for (let i = startIndex; i < commentListLength; i++) {
      commentListNodes[i].classList.remove('hidden');
    }
    fullPictureModal.querySelector('.social__comment-count').textContent = `${commentListLength} из ${commentListLength} комментариев`;
    fullPictureModal.querySelector('.comments-loader').classList.add('hidden');
  } else {
    for (let i = startIndex; i < startIndex + commentPortion; i++) {
      commentListNodes[i].classList.remove('hidden');
    }
    startIndex += commentPortion;
    fullPictureModal.querySelector('.social__comment-count').textContent = `${startIndex} из ${commentListLength} комментариев`;
  }
};
export const addEventForLoadMoar = () => {
  loadMoarButton.addEventListener('click', loadMore);
};


//Открытие модального окна
export const openModal = () => {
  document.body.classList.add('modal-open');
  fullPictureModal.classList.remove('hidden');
};

//Закрытие модального окна при:
//клике на кнопку
const closeModalOnButton = () => {
  fullPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeModalButton.removeEventListener('click', closeModalOnButton);
  document.removeEventListener('keydown', closeModalOnEscape);
  loadMoarButton.removeEventListener('click', loadMore);
  startIndex = 5;
};
// и нажатии Esc
export function closeModalOnEscape (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalOnButton();
  }
}


export const addEventForModal = () => {
  closeModalButton.addEventListener('click', closeModalOnButton);
  document.addEventListener('keydown', closeModalOnEscape);
};


//Обработчик кнопок на оверлее сообщений отправки данных


const eventButtonInSendOverlay = (succesOrError) => {
  const okButton = document.querySelector(`.${succesOrError}__button`);
  const removedElement = document.querySelector(`section.${succesOrError}`);
  const alertField = removedElement.querySelector(`.${succesOrError}__inner`);
  document.removeEventListener('keydown', closeUploadOverlayOnEscape);
  document.addEventListener('keydown' , (evt) => {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      removedElement.remove();
      document.addEventListener('keydown', closeUploadOverlayOnEscape);
    }
  });
  okButton.addEventListener('click', () => {
    removedElement.remove();
  });
  removedElement.addEventListener('click', (evt) => {
    if(!alertField.contains(evt.target)) {
      removedElement.remove();
    }
  });
};

//Уведомление при отправке данных формы
export const sendDataResult = (succesOrError) => {
  const sendErrorOverlay = document.createDocumentFragment();
  const sendErrorMessage = document.querySelector(`#${succesOrError}`).content.cloneNode(true);
  sendErrorOverlay.appendChild(sendErrorMessage);
  document.body.appendChild(sendErrorOverlay);
  eventButtonInSendOverlay(succesOrError);
};

//Экран загрузки
export const showDownloadOverlay = () => {
  const downloadOverlay = document.createDocumentFragment();
  const downloadOverlayTemplate = document.querySelector('#messages').content.cloneNode(true);
  downloadOverlay.appendChild(downloadOverlayTemplate);
  document.body.appendChild(downloadOverlay);
};

export const hideDownloadOverlay = () => {
  document.querySelector('.img-upload__message').remove();
};

//10 случайных фото
export const getTenRandomPhotos = (photos) => {
  const photoCount = 10;
  const randomPhotos = [];
  let i = 1;
  while (i <= photoCount) {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    if (!randomPhotos.includes(randomPhoto)) {
      randomPhotos.push(randomPhoto);
      i++;
    }
  }
  return randomPhotos;
};

