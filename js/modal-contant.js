const fullPictureModal = document.querySelector('.big-picture');

export const fillModal = (photo) => {
  //Наполнение модального окна
  fullPictureModal.querySelector('img').src = photo.url;
  fullPictureModal.querySelector('.likes-count').textContent = photo.likes;
  fullPictureModal.querySelector('.comments-count').textContent = photo.comments.length;
  fullPictureModal.querySelector('.social__caption').textContent = photo.description;

  //Наполнение блока комментариев
  const commentsList = fullPictureModal.querySelector('.social__comments');
  commentsList.innerHTML = '';
  const commentsContainer = document.createDocumentFragment();
  photo.comments.forEach((comment) => {
    const commentUnit = document.createElement('li');
    commentUnit.classList.add('social__comment');

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
};


