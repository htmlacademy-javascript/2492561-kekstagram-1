import { usersPfotoDescriptions,ACCEPTABLE_NUMBER_OF_ID } from './data-generator.js';
import {pictureRender} from './picture-render.js';

const photosList = Array.from({length: ACCEPTABLE_NUMBER_OF_ID}, usersPfotoDescriptions);

const pictures = document.querySelector('.pictures');
photosList.forEach((photo) => {
  pictures.appendChild(pictureRender(photo.url, photo.comments.length, photo.likes));
});
