import { fullPictureModal } from './modal-contant.js';
const closeModalButton = document.querySelector('.big-picture__cancel');
const loadMoarButton = fullPictureModal.querySelector('.social__comments-loader');

//Открытие модального окна
export const openModal = () => {
  document.body.classList.add('modal-open');
  fullPictureModal.classList.remove('hidden');
};

//Реализация кнопки "Загрузить еще"
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
function closeModalOnEscape (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalOnButton();
  }
}

export const addEventForModal = () => {
  closeModalButton.addEventListener('click', closeModalOnButton);
  document.addEventListener('keydown', closeModalOnEscape);
};
