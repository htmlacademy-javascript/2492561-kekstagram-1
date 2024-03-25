export const fullPictureModal = document.querySelector('.big-picture');
export const commentList = fullPictureModal.querySelector('.social__comments');

export const fillModal = (photo) => {
  //Наполнение модального окна
  fullPictureModal.querySelector('img').src = photo.url;
  fullPictureModal.querySelector('.likes-count').textContent = photo.likes;
  fullPictureModal.querySelector('.social__caption').textContent = photo.description;

  //Наполнение блока комментариев
  const commentsList = fullPictureModal.querySelector('.social__comments');
  commentsList.innerHTML = '';
  const commentsContainer = document.createDocumentFragment();
  photo.comments.forEach((comment) => {
    const commentUnit = document.createElement('li');
    commentUnit.classList.add('social__comment');
    commentUnit.classList.add('hidden');

    //Создание аватарки комменратрия
    const commentAvatar = document.createElement('img');
    commentAvatar.classList.add('social__picture');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentAvatar.width = '35';
    commentAvatar.height = '35';
    commentUnit.appendChild(commentAvatar);

    //Создание текста комментария
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;
    commentUnit.appendChild(commentText);
    commentsContainer.appendChild(commentUnit);
  });
  commentsList.appendChild(commentsContainer);

  //Счетчик комментариев
  const commentListLength = commentList.querySelectorAll('.social__comment').length;
  if (commentListLength <= 5) {
    fullPictureModal.querySelector('.social__comment-count').textContent = `${commentListLength} из ${commentListLength} комментариев`;
    fullPictureModal.querySelector('.comments-loader').classList.add('hidden');
    commentList.querySelectorAll('.social__comment').forEach((comment) => comment.classList.remove('hidden'));
  } else {
    fullPictureModal.querySelector('.social__comment-count').textContent = `5 из ${commentListLength} комментариев`;
    for (let i = 0; i < 5; i++) {
      commentList.querySelectorAll('.social__comment')[i].classList.remove('hidden');
    }
    fullPictureModal.querySelector('.comments-loader').classList.remove('hidden');
  }
};


