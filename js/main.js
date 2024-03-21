import { photosList } from './data-generator.js';
import {fillThumbnail} from './thumbnail-contant.js';
import { openModal, closeModal } from './modal-events.js';
import { fillModal } from './modal-contant.js';

//Отрисовка миниатюр
const pictures = document.querySelector('.pictures');
const picturesBox = document.createDocumentFragment();
photosList.forEach((photo) => {
  picturesBox.appendChild(fillThumbnail(photo));
});
pictures.appendChild(picturesBox);

//Обработчик клика на миниатюру
const closeModalButton = document.querySelector('.big-picture__cancel');
const formattedPictures = photosList.reduce((acc, val) => {
  acc.push([String(val.id), val]);
  return acc;
}, []);
const picturesMap = new Map(formattedPictures);
const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', (event) => {
  const element = event.target.closest('.picture');
  if(element) {
    closeModalButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModal);
    const elementId = element.getAttribute('id');
    const photoObject = picturesMap.get(elementId);
    fillModal(photoObject);
    openModal(photoObject);
  }
});


