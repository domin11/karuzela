'use strict';
var restartButton = document.getElementById('restart');

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false
});

restartButton.addEventListener( 'click', function() {
  flkty.selectCell('#malbork');
});
