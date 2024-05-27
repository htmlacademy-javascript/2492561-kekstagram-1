export const fullPictureModal = document.querySelector('.big-picture');
const commentList = fullPictureModal.querySelector('.social__comments');


export const fillModal = (photo) => {
  //Наполнение модального окна
  fullPictureModal.querySelector('img').src = photo.url;
  fullPictureModal.querySelector('.likes-count').textContent = photo.likes;
  fullPictureModal.querySelector('.social__caption').textContent = photo.description;

  //Наполнение блока комментариев
  commentList.innerHTML = '';
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
  commentList.appendChild(commentsContainer);

  //Счетчик комментариев
  const commentListNodes = fullPictureModal.querySelectorAll('.social__comment');
  const commentListLength = commentListNodes.length;
  const portionOfComment = 5;
  if (commentListLength <= portionOfComment) {
    fullPictureModal.querySelector('.social__comment-count').textContent = `${commentListLength} из ${commentListLength} комментариев`;
    fullPictureModal.querySelector('.comments-loader').classList.add('hidden');
    commentListNodes.forEach((comment) => comment.classList.remove('hidden'));
  } else {
    fullPictureModal.querySelector('.social__comment-count').textContent = `5 из ${commentListLength} комментариев`;
    for (let i = 0; i < portionOfComment; i++) {
      commentListNodes[i].classList.remove('hidden');
    }
    fullPictureModal.querySelector('.comments-loader').classList.remove('hidden');
  }
};


