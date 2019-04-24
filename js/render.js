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

  var removeNodeChilds = function (parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  };

  showSimilarWizardsWindow();

  window.render = function (data) {
    removeNodeChilds(setupWindowWizardsList);
    var takeNumber = data.length > wizardsQuantity ? wizardsQuantity : data.length;
    // setupWindowWizardsList.innerHTML = '';
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
      // setupWindowWizardsList.appendChild(renderWizard(data[i]));
    }

    setupWindowWizardsList.appendChild(fragment);
    // showSimilarWizardsWindow();
  };
})();
