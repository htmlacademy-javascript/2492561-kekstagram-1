import { photosList } from './data-generator.js';
import {pictureRender} from './picture-render.js';
import { addEventListenerForCloseModal } from './full-picture.js';

//Отрисовка миниатюр
const pictures = document.querySelector('.pictures');
const picturesBox = document.createDocumentFragment();
photosList.forEach((photo) => {
  picturesBox.appendChild(pictureRender(photo));
});
pictures.appendChild(picturesBox);


addEventListenerForCloseModal();
