'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupWindowWizards = setupWindow.querySelector('.setup-similar');
  var setupWindowWizardsList = setupWindow.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var userCoat = setupWindow.querySelector('.setup-wizard .wizard-coat');
  var userEyes = setupWindow.querySelector('.setup-wizard .wizard-eyes');
  var userFireball = setupWindow.querySelector('.setup-fireball-wrap');
  var wizardsQuantity = 4;
  var wizards = new Array(wizardsQuantity);

  // создание магов
  var createWizards = function (wizardsArray, number) {
    for (var i = 0; i < number; i++) {
      wizardsArray[i] = {
        name: window.data.WIZARD_NAMES[window.util.getRandomNumber(0, window.data.WIZARD_NAMES.length - 1)],
        surname: window.data.WIZARD_SURNAMES[window.util.getRandomNumber(0, window.data.WIZARD_SURNAMES.length - 1)],
        coatColor: window.data.COAT_COLORS[window.util.getRandomNumber(0, window.data.COAT_COLORS.length - 1)],
        eyesColor: window.data.EYE_COLORS[window.util.getRandomNumber(0, window.data.EYE_COLORS.length - 1)]
      };
    }

    return wizardsArray;
  };

  // отрисовка магов
  var renderWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // вставка отрисованных магов в шаблон
  var insertWizards = function (wizardsArray, insertElement) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < wizardsArray.length; j++) {
      fragment.appendChild(renderWizard(wizardsArray[j]));
    }
    return insertElement.appendChild(fragment);
  };

  // показ похожих магов
  var showSimilarWizardsWindow = function () {
    window.util.openPopup();
    setupWindowWizards.classList.remove('hidden');
  };

  createWizards(wizards, wizardsQuantity);
  insertWizards(wizards, setupWindowWizardsList);
  showSimilarWizardsWindow();

  // кастомизация цветов волшебника (глаза, плащ, фаербол)
  window.colorizeElement.colorizeElement(userCoat, window.data.COAT_COLORS, window.util.fillElement);
  window.colorizeElement.colorizeElement(userEyes, window.data.EYE_COLORS, window.util.fillElement);
  window.colorizeElement.colorizeElement(userFireball, window.data.FIREBALL_COLORS, window.util.changeElementBackground);
})();
