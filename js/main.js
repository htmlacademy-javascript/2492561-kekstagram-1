import {fillThumbnail} from './thumbnail-contant.js';
import { openModal, addEventForModal, addEventForLoadMoar } from './modal-events.js';
import { fillModal } from './modal-contant.js';
import { uploadFileInput, openPreviewOverlay , hideUploadOverlay } from './preview-form.js';
import { getloadDataAlert } from './utilities.js';
import { getData, formSubmit } from './api.js';
import { showUpFiltersBlock, debounce, setButtonsClick, renderWithFilters } from './filters.js';
//Отрисовка миниатюр
getData()
  .then((photos) => {
    fillThumbnail(photos);
    showUpFiltersBlock();
    setButtonsClick(debounce(
      () => renderWithFilters(photos),
      500
    ));
  })
  .catch(
    (err) => {
      getloadDataAlert(err.message);
    }
  );

//Обработчик клика на миниатюру
const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', (event) => {
  const element = event.target.closest('.picture');
  if(element) {
    addEventForModal();
    addEventForLoadMoar();
    getData().then((photo) => {
      fillModal(photo[element.getAttribute('id')]);
    });
    openModal();
  }
});

//Показ редактора загружаемого изображения
uploadFileInput.addEventListener('change', openPreviewOverlay);
//Отправка данных форм
formSubmit(hideUploadOverlay);


