'use strict';

(function () {
  var setupOpenButton = document.querySelector('.setup-open-icon');
  var setupCloseButton = document.querySelector('.setup-close');

  // открытие попапа по клику на аватарку
  var openButtonClickHandler = function () {
    window.util.openPopup();
  };

  // открытие попапа по нажатию с клавиатуры на аватарку
  var openButtonPressHandler = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEY) {
      window.util.openPopup();
    }
  };

  // закрытие попапа по клику на крестик
  var closeButtonClickHandler = function () {
    window.util.closePopup();
  };

  // закрытие попапа по нажатию с клавиатуры на крестик
  var closeButtonPressHandler = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEY) {
      window.util.closePopup();
    }
  };

  setupOpenButton.addEventListener('keydown', openButtonPressHandler);
  setupOpenButton.addEventListener('click', openButtonClickHandler);
  setupCloseButton.addEventListener('keydown', closeButtonPressHandler);
  setupCloseButton.addEventListener('click', closeButtonClickHandler);
})();
