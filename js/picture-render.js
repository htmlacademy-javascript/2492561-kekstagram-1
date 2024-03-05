export const pictureRender = (url, comCount, likeCount) => {
  const pictureFragment = document.createDocumentFragment();
  const pictureTemplate = document.querySelector('#picture').content.cloneNode(true);
  const neNewPicture = pictureTemplate.querySelector('.picture');
  neNewPicture.querySelector('img').src = url;
  const comment = neNewPicture.querySelector('.picture__comments');
  const like = neNewPicture.querySelector('.picture__likes');
  comment.textContent = comCount;
  like.textContent = likeCount;
  pictureFragment.appendChild(neNewPicture);
  return pictureFragment;
};
