const fullPictureModal = document.querySelector('.big-picture');
//Открытие модального окна
export const openModal = () => {
  document.body.classList.add('modal-open');
  fullPictureModal.querySelector('.social__comment-count').classList.add('hidden');
  fullPictureModal.querySelector('.comments-loader').classList.add('hidden');
  fullPictureModal.classList.remove('hidden');
};

//Закрытие модального окна при клике на кнопку и нажатия Esc
export const closeModal = function () {
  fullPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  this.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModal);
};


