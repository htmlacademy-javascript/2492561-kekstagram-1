//Ошибка при загрузке данных с сервера
export const getloadDataAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.width = '700px';
  alertContainer.style.margin = 'auto';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'transparent';
  alertContainer.style.lineHeight = '1';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};


//Обработчик кнопок на оверлее сообщений отправки данных

export const resultOfSend = {
  Success: 'success',
  Error: 'error'
};

const eventButtonInSendOverlay = (succesOrError,) => {
  const okButton = document.querySelector(`.${succesOrError}__button`);
  const removedElement = document.querySelector(`section.${succesOrError}`);
  const alertField = removedElement.querySelector(`.${succesOrError}__inner`);
  okButton.addEventListener('click', () => {
    removedElement.remove();
  });
  removedElement.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      removedElement.remove();
      evt.stopPropagation();
    }
  });
  removedElement.addEventListener('click', (evt) => {
    if(!alertField.contains(evt.target)) {
      removedElement.remove();
    }
  });
};

//Уведомление при отправке данных формы
export const sendDataResult = (succesOrError) => {
  const sendErrorOverlay = document.createDocumentFragment();
  const sendErrorMessage = document.querySelector(`#${succesOrError}`).content.cloneNode(true);
  sendErrorOverlay.appendChild(sendErrorMessage);
  document.body.appendChild(sendErrorOverlay);
  eventButtonInSendOverlay(succesOrError);
};

//Экран загрузки
export const showDownloadOverlay = () => {
  const downloadOverlay = document.createDocumentFragment();
  const downloadOverlayTemplate = document.querySelector('#messages').content.cloneNode(true);
  downloadOverlay.appendChild(downloadOverlayTemplate);
  document.body.appendChild(downloadOverlay);
};

export const hideDownloadOverlay = () => {
  document.querySelector('.img-upload__message').remove();
};

//10 случайных фото
export const getTenRandomPhotos = (photos) => {
  const photoCount = 10;
  const randomPhotos = [];
  let i = 1;
  while (i <= photoCount) {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    if (!randomPhotos.includes(randomPhoto)) {
      randomPhotos.push(randomPhoto);
      i++;
    }
  }
  return randomPhotos;
};

