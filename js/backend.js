'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  var upload = function (data, onSucces) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSucces(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    upload: upload
  };
})();
