'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var userCoat = setupWindow.querySelector('.setup-wizard .wizard-coat');
  var userEyes = setupWindow.querySelector('.setup-wizard .wizard-eyes');
  var userFireball = setupWindow.querySelector('.setup-fireball-wrap');

  // сменить цвет пальто
  var changeCoatColor = function () {
    return window.util.changeColor(userCoat, window.data.COAT_COLORS);
  };

  // сменить цвет глаз
  var changeEyesColor = function () {
    return window.util.changeColor(userEyes, window.data.EYE_COLORS);
  };

  // сменить цвет фаерболла
  var changeFireballColor = function () {
    userFireball.style.backgroundColor = window.data.FIREBALL_COLORS[window.util.getRandomNumber(0, window.data.FIREBALL_COLORS.length)];
    return userFireball;
  };

  userCoat.addEventListener('click', changeCoatColor);
  userEyes.addEventListener('click', changeEyesColor);
  userFireball.addEventListener('click', changeFireballColor);
})();
