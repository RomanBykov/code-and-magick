'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var ESC_KEY = 27;
  var ENTER_KEY = 13;
  var START_COORD_X = getComputedStyle(setupWindow).getPropertyValue('left');
  var START_COORD_Y = getComputedStyle(setupWindow).getPropertyValue('top');

  var getRandomNumber = function (minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  };

  var onPopupEscPress = function (evt) {
    if (!evt.target.classList.contains('setup-user-name') && evt.keyCode === ESC_KEY) {
      closePopup();
    }
  };

  var getStartWindowCoords = function () {
    setupWindow.style.top = START_COORD_Y;
    setupWindow.style.left = START_COORD_X;
  };

  var closePopup = function () {
    setupWindow.classList.add('hidden');
    getStartWindowCoords();
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var openPopup = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  window.util = {
    getRandomNumber: getRandomNumber,
    openPopup: openPopup,
    closePopup: closePopup,
    fillElement: fillElement,
    changeElementBackground: changeElementBackground,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY
  };
})();
