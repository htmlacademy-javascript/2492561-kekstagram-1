import { addEventListenerforOpenModal } from './full-picture.js';

export const pictureRender = (photo) => {
  const pictureFragment = document.createDocumentFragment();
  const pictureTemplate = document.querySelector('#picture').content.cloneNode(true);
  const neNewPicture = pictureTemplate.querySelector('.picture');
  neNewPicture.querySelector('img').src = photo.url;
  const comment = neNewPicture.querySelector('.picture__comments');
  const like = neNewPicture.querySelector('.picture__likes');
  comment.textContent = photo.comments.length;
  like.textContent = photo.likes;

  neNewPicture.addEventListener('click', () =>{
    addEventListenerforOpenModal(photo);
  });
  pictureFragment.appendChild(neNewPicture);
  return pictureFragment;
};
