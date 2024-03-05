import { usersPfotoDescriptions,ACCEPTABLE_NUMBER_OF_ID } from './data-generator.js';
import {pictureRender} from './picture-render.js';

const photosList = Array.from({length: ACCEPTABLE_NUMBER_OF_ID}, usersPfotoDescriptions);


const pictures = document.querySelector('.pictures');
const picturesBox = document.createDocumentFragment();
photosList.forEach((photo) => {
  picturesBox.appendChild(pictureRender(photo.url, photo.comments.length, photo.likes));
});
pictures.appendChild(picturesBox);
