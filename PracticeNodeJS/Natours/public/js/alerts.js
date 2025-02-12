const body = document.querySelector('body');

export const hideAlert = function () {
  const el = document.querySelector('.alert');

  if (el) {
    el.parentElement.removeChild(el);
  }
};

// type is 'success' or 'error'
export const showAlert = function (type, message) {
  hideAlert();

  const markup = `<div class="alert alert--${type}">${message}</div>`;
  body.insertAdjacentHTML('afterBegin', markup);

  window.setTimeout(hideAlert, 5000);
};
