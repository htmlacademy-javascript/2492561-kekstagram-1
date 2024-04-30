export const fillThumbnail = (photos) => {
  const pictures = document.querySelector('.pictures');
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureTemplate = document.querySelector('#picture').content.cloneNode(true);
    const thumbnailElement = pictureTemplate.querySelector('.picture');

    thumbnailElement.setAttribute('id', String(photo.id));
    thumbnailElement.querySelector('img').src = photo.url;
    const comment = thumbnailElement.querySelector('.picture__comments');
    const like = thumbnailElement.querySelector('.picture__likes');
    comment.textContent = photo.comments.length;
    like.textContent = photo.likes;
    pictureFragment.appendChild(pictureTemplate);
  });
  pictures.appendChild(pictureFragment);
};
