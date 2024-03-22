const fullPictureModal = document.querySelector('.big-picture');
const closeModalButton = document.querySelector('.big-picture__cancel');
//Открытие модального окна
export const openModal = () => {
  document.body.classList.add('modal-open');
  fullPictureModal.querySelector('.social__comment-count').classList.add('hidden');
  fullPictureModal.querySelector('.comments-loader').classList.add('hidden');
  fullPictureModal.classList.remove('hidden');
};

//Закрытие модального окна при клике на кнопку и нажатия Esc
const closeModal = function () {
  fullPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeModalButton.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModal);
};

export const addEventListenerForModal = () => {
  closeModalButton.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);
};
