'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupWindowWizards = setupWindow.querySelector('.setup-similar');
  var setupWindowWizardsList = setupWindow.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var userCoat = setupWindow.querySelector('.setup-wizard .wizard-coat');
  var userEyes = setupWindow.querySelector('.setup-wizard .wizard-eyes');
  var userFireball = setupWindow.querySelector('.setup-fireball-wrap');
  var form = document.querySelector('.setup-wizard-form');
  var wizardsQuantity = 4;

  // отрисовка магов
  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // показ похожих магов
  var showSimilarWizardsWindow = function () {
    window.util.openPopup();
    setupWindowWizards.classList.remove('hidden');
  };

  // вставка похожих персонажей, которые были получены с сервера, в диалоговое окно
  var succesHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsQuantity; i++) {
      fragment.appendChild(renderWizard(wizards[window.util.getRandomNumber(0, wizards.length)]));
    }

    setupWindowWizardsList.appendChild(fragment);
    showSimilarWizardsWindow();
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

  // кастомизация цветов волшебника (глаза, плащ, фаербол)
  window.colorizeElement.colorizeElement(userCoat, window.data.COAT_COLORS, window.util.fillElement);
  window.colorizeElement.colorizeElement(userEyes, window.data.EYE_COLORS, window.util.fillElement);
  window.colorizeElement.colorizeElement(userFireball, window.data.FIREBALL_COLORS, window.util.changeElementBackground);

  // работа с сервером
  window.backend.load(succesHandler, errorHandler); // загрузка данных с сервера
  form.addEventListener('submit', formSubmitHandler); // отправка формы на сервер
})();
