'use strict';

(function () {
  var colorizeElement = function (element, colors, callback) {
    element.addEventListener('click', function () {
      var resultColor = colors[window.util.getRandomNumber(0, colors.length)];

      if (typeof callback === 'function') {
        callback(element, resultColor);
      }
    });
  };

  window.colorizeElement = {
    colorizeElement: colorizeElement
  };
})();
