import { blockSubmitButton, perviewForm } from './preview-form.js';
import { sendDataResult, resultOfSend, showDownloadOverlay, hideDownloadOverlay } from './utilities.js';
const Route = {
  GET_DATA: 'https://28.javascript.htmlacademy.pro/kekstagram/data',
  POST_DATA: 'https://28.javascript.htmlacademy.pro/kekstagram'
};
const Method = {
  GET_DATA: 'GET',
  POST_DATA: 'POST'
};
const ErrorText = {
  GET_DATA: 'Ошибка при загрузке данных.\nПопробуйте перезагрузить страницу.',
  POST_DATA: 'Ошибка отправки формы.\nПроверьте данные и попробуйте снова'
};
//Запрос данных с сервера для отрисовки миниатюр

function FetchWrapper() {
  const cache = {};

  return async (route, errorText, method = Method.GET_DATA, body = null, noCache = false) => {
    if (cache[route] && !noCache) {
      return cache[route];
    }

    return fetch(route, { method, body })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((response) => {
        if (!noCache) {
          cache[route] = response;
        }
        return response;
      })
      .catch(() => {
        throw new Error(errorText);
      });
  };
}
const fetchConfig = new FetchWrapper();

export const getData = () => fetchConfig(Route.GET_DATA, ErrorText.GET_DATA);
export const sendData = (body) => fetchConfig(Route.POST_DATA, ErrorText.POST_DATA , Method.POST_DATA, body);

//Реализация отправки данных из формы на сервер

export const formSubmit = (onSuccess) => {
  perviewForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton(true);
    showDownloadOverlay();
    sendData(new FormData(evt.target))
      .then(() => {
        onSuccess();
        sendDataResult(resultOfSend.Success);
        perviewForm.reset();
      })
      .catch(() => {
        sendDataResult(resultOfSend.Error);
      })
      .finally(() => {
        blockSubmitButton(false);
        hideDownloadOverlay();
      });
  });
};
