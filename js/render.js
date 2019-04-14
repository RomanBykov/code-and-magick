'use strict';

(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupWindowWizards = document.querySelector('.setup-similar');
  var wizardsQuantity = 4;
  var setupWindowWizardsList = document.querySelector('.setup-similar-list');

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

  window.render = function (data) {
    var takeNumber = data.length > wizardsQuantity ? wizardsQuantity : data.length;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[window.util.getRandomNumber(0, data.length)]));
    }

    setupWindowWizardsList.appendChild(fragment);
    showSimilarWizardsWindow();
  };
})();
