'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var setupWindow = document.querySelector('.setup');
var setupWindowWizards = setupWindow.querySelector('.setup-similar');
var setupWindowWizardsList = setupWindow.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsQuantity = 4;
var wizards = new Array(wizardsQuantity);

var getRandomNumber = function (minNumber, maxNumber) {
  return Math.round(Math.random() * (maxNumber - minNumber));
};

var createWizards = function (wizardsArray, number) {
  for (var i = 0; i < number; i++) {
    wizardsArray[i] = {
      name: WIZARDS_NAMES[getRandomNumber(0, WIZARDS_NAMES.length - 1)],
      surname: WIZARDS_SURNAMES[getRandomNumber(0, WIZARDS_SURNAMES.length - 1)],
      coatColor: COATS_COLORS[getRandomNumber(0, COATS_COLORS.length - 1)],
      eyesColor: EYES_COLORS[getRandomNumber(0, EYES_COLORS.length - 1)]
    };
  }

  return wizardsArray;
};

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var insertWizards = function (wizardsArray, insertElement) {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizardsArray.length; j++) {
    fragment.appendChild(renderWizard(wizardsArray[j]));
  }

  return insertElement.appendChild(fragment);
};

var showSimilarWizardsWindow = function () {
  setupWindow.classList.remove('hidden');
  setupWindowWizards.classList.remove('hidden');
};

createWizards(wizards, wizardsQuantity);
insertWizards(wizards, setupWindowWizardsList);
showSimilarWizardsWindow();

// module4-task1
var setupOpenButton = document.querySelector('.setup-open-icon');
var setupCloseButton = document.querySelector('.setup-close');
var ESC_KEY = 27;
var ENTER_KEY = 13;

var onPopupEscPress = function (evt) {
  debugger;
  // var clickedElement = evt.currentTarget;
  if (evt.keyCode === ESC_KEY/* && clickedElement.classList.contains('setup-user-name')*/) {
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

setupOpenButton.addEventListener('click', function () {
  openPopup();
});

setupOpenButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY) {
    openPopup();
  }
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY) {
    closePopup();
  }
});

setupCloseButton.addEventListener('click', function () {
  closePopup();
});
