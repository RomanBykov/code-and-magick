'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var userCoat = setupWindow.querySelector('.setup-wizard .wizard-coat');
  var userEyes = setupWindow.querySelector('.setup-wizard .wizard-eyes');
  var userFireball = setupWindow.querySelector('.setup-fireball-wrap');
  var form = document.querySelector('.setup-wizard-form');
  var wizards = [];
  var eyesColor;
  var coatColor;

  // вставка похожих персонажей, которые были получены с сервера, в диалоговое окно
  var succesHandler = function (data) {
    wizards = data;
    window.render(wizards);
  };

  // обработка ошибок
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'position: absolute; z-index: 100; left: 0; right: 0; margin: 0 auto; font-size: 30px; text-align: center; background-color: red;';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // отправка данных формы на сервер и скрытие окна настройки персонажа
  var formSubmitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      setupWindow.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  };

  // var fillElement = function (element, color) {
  //   element.style.fill = color;
  // };

  var fillCoat = function (element, color) {
    element.style.fill = color;
    coatColor = color;
    console.log('coat: ' + coatColor);
  };

  var fillEyes = function (element, color) {
    element.style.fill = color;
    eyesColor = color;
    console.log('eyes: ' + eyesColor);
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  // кастомизация цветов волшебника (глаза, плащ, фаербол)
  window.colorizeElement(userCoat, window.data.COAT_COLORS, fillCoat);
  window.colorizeElement(userEyes, window.data.EYE_COLORS, fillEyes);
  window.colorizeElement(userFireball, window.data.FIREBALL_COLORS, changeElementBackground);


  // работа с сервером
  window.backend.load(succesHandler, errorHandler); // загрузка данных с сервера
  form.addEventListener('submit', formSubmitHandler); // отправка формы на сервер
})();
