import {fillThumbnail} from './thumbnail-contant.js';
import { getTenRandomPhotos } from './utilities.js';


const filtersBlock = document.querySelector('.img-filters');
const pictures = document.querySelector('.pictures');

const ChosenButton = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const getCommentsCount = (photo) => {
  const commentCount = photo.comments.length;
  return commentCount;
};

const sortingByCommentsCount = (photoA, photoB) => {
  const commentsA = getCommentsCount(photoA);
  const commentsB = getCommentsCount(photoB);
  return commentsB - commentsA;
};

export const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export const showUpFiltersBlock = () => {
  filtersBlock.classList.remove('img-filters--inactive');
};

let checkButton = '';
export const setButtonsClick = (cb) => {
  filtersBlock.addEventListener('click', (evt) => {
    const chosenButton = evt.target.closest('.img-filters__button');
    if (chosenButton) {
      document.querySelectorAll('.img-filters__button').forEach((button) => button.classList.remove('img-filters__button--active'));
      chosenButton.classList.add('img-filters__button--active');
      checkButton = chosenButton.getAttribute('id');
      cb();
    }
  });
};

export const renderWithFilters = (photos) => {
  while(pictures.children.length > 2) {
    pictures.removeChild(pictures.lastChild);
  }
  switch (checkButton){
    case ChosenButton.DEFAULT:
      fillThumbnail(photos);
      break;
    case ChosenButton.RANDOM:
      fillThumbnail(getTenRandomPhotos(photos));
      break;
    case ChosenButton.DISCUSSED:
      fillThumbnail(photos.slice().sort(sortingByCommentsCount).slice(0, 10));
      break;
  }
};
