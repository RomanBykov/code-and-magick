'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupWindowUserPic = setupWindow.querySelector('.setup-user-pic');
  var shopElement = setupWindow.querySelector('.setup-artifacts-shop');
  var artifactsElement = setupWindow.querySelector('.setup-artifacts');
  var draggedItem = null;

  // перетаскивание окна настройки волшебника
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

  // перетаскивание копии артифакта из магазина в сумку волшебника
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

  setupWindowUserPic.addEventListener('mousedown', dialogMoveHandler);
})();
