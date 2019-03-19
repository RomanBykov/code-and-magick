'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 1);
  var barWidth = 40;
  var indent = 50;
  var histogramColor = 'rgba(255, 0, 0, 1)';
  var initialX = 150;
  var initialY = 240;
  var histogramMargin = 20;

  var getRandomNumber = function (minNumber, maxNumber) {
    return Math.random() * (maxNumber - minNumber);
  };

  for (var j = 0; j < times.length; j++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(Math.round(times[j]), initialX + barWidth * j + indent * j, initialY - histogramMargin / 2 - times[j] * step);

    if (names[j] === 'Вы') {
      ctx.fillStyle = histogramColor;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomNumber(0.1, 1) + ')';
    }
    ctx.fillRect(initialX + barWidth * j + indent * j, initialY, barWidth, times[j] * step * -1);

    ctx.fillStyle = '#000000';
    ctx.fillText(names[j], initialX + barWidth * j + indent * j, initialY + histogramMargin);
  }

};
