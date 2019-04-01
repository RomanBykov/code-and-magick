'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  var getRandomNumber = function (minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  };

  var onPopupEscPress = function (evt) {
    if (!evt.target.classList.contains('setup-user-name') && evt.keyCode === ESC_KEY) {
      setupWindow.classList.add('hidden');
    }
  };

  var closePopup = function () {
    setupWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var openPopup = function () {
    setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var changeColor = function (itemToChange, colorsArray) {
    itemToChange.style.fill = colorsArray[window.util.getRandomNumber(0, colorsArray.length)];
    return itemToChange;
  };

  window.util = {
    getRandomNumber: getRandomNumber,
    openPopup: openPopup,
    closePopup: closePopup,
    changeColor: changeColor,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY
  };
})();
