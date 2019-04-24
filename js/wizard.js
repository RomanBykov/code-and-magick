'use strict';

(function () {
  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  window.wizard = {
    onEyesChange: function (color) {
      eyesColor = color;
      updateWizards();
    },
    onCoatChange: function (color) {
      coatColor: color;
      updateWizards();
    }
  };
})();
