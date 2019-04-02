'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupWindowUserPic = setupWindow.querySelector('.setup-user-pic');

  var dialogMoveHandler = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var setNewCoords = function (horizontal) {
        var result = setupWindow.offsetTop - shift.y;
        if (horizontal) {
          result = setupWindow.offsetLeft - shift.x;
        }
        return result + 'px';
      };


      setupWindow.style.top = setNewCoords();
      setupWindow.style.left = setNewCoords(true);
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  setupWindowUserPic.addEventListener('mousedown', dialogMoveHandler);
})();
