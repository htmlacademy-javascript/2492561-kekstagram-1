export const fillThumbnail = (photo) => {
  const pictureFragment = document.createDocumentFragment();
  const pictureTemplate = document.querySelector('#picture').content.cloneNode(true);

  const thumbnailElement = pictureTemplate.querySelector('.picture');
  thumbnailElement.setAttribute('id', String(photo.id));
  thumbnailElement.querySelector('img').src = photo.url;
  const comment = thumbnailElement.querySelector('.picture__comments');
  const like = thumbnailElement.querySelector('.picture__likes');
  comment.textContent = photo.comments.length;
  like.textContent = photo.likes;
  pictureFragment.appendChild(thumbnailElement);
  return pictureFragment;
};
