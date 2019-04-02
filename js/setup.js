'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupWindowWizards = setupWindow.querySelector('.setup-similar');
  var setupWindowWizardsList = setupWindow.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
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

  // module5-task2
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.preventDefault();
    if (evt.target.tagName.toLowerCase() !== 'img') {
      evt.target.style.backgroundColor = '';
      var clonedArtifact = draggedItem.cloneNode(true);
      clonedArtifact.setAttribute('draggable', false);
      evt.target.appendChild(clonedArtifact);
    }
    artifactsElement.style.outline = 'none';
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    if (evt.target.tagName.toLowerCase() !== 'img' && !evt.target.hasChildNodes()) {
      evt.target.style.backgroundColor = 'yellow';
    }
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

  createWizards(wizards, wizardsQuantity);
  insertWizards(wizards, setupWindowWizardsList);
  showSimilarWizardsWindow();
})();
