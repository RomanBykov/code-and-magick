'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ENTER_KEY = 13;
var setupWindow = document.querySelector('.setup');
var setupWindowWizards = setupWindow.querySelector('.setup-similar');
var setupWindowWizardsList = setupWindow.querySelector('.setup-similar-list');
var userCoat = setupWindow.querySelector('.setup-wizard .wizard-coat');
var userEyes = setupWindow.querySelector('.setup-wizard .wizard-eyes');
var userFireball = setupWindow.querySelector('.setup-fireball-wrap');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupOpenButton = document.querySelector('.setup-open-icon');
var setupCloseButton = document.querySelector('.setup-close');
var wizardsQuantity = 4;
var wizards = new Array(wizardsQuantity);

// создаём магов
var createWizards = function (wizardsArray, number) {
  for (var i = 0; i < number; i++) {
    wizardsArray[i] = {
      name: WIZARD_NAMES[window.util.getRandomNumber(0, WIZARD_NAMES.length - 1)],
      surname: WIZARD_SURNAMES[window.util.getRandomNumber(0, WIZARD_SURNAMES.length - 1)],
      coatColor: COAT_COLORS[window.util.getRandomNumber(0, COAT_COLORS.length - 1)],
      eyesColor: EYE_COLORS[window.util.getRandomNumber(0, EYE_COLORS.length - 1)]
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
  window.util.openPopup();
  setupWindowWizards.classList.remove('hidden');
};

var changeCoatColor = function () {
  return window.util.changeColor(userCoat, COAT_COLORS);
};

var changeEyesColor = function () {
  return window.util.changeColor(userEyes, EYE_COLORS);
};

var changeFireballColor = function () {
  userFireball.style.backgroundColor = FIREBALL_COLORS[window.util.getRandomNumber(0, FIREBALL_COLORS.length)];
  return userFireball;
};

setupOpenButton.addEventListener('click', function () {
  window.util.openPopup();
});

setupOpenButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY) {
    window.util.openPopup();
  }
});

setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY) {
    window.util.closePopup();
  }
});

setupCloseButton.addEventListener('click', function () {
  window.util.closePopup();
});

userCoat.addEventListener('click', changeCoatColor);
userEyes.addEventListener('click', changeEyesColor);
userFireball.addEventListener('click', changeFireballColor);

createWizards(wizards, wizardsQuantity);
insertWizards(wizards, setupWindowWizardsList);
showSimilarWizardsWindow();
