'use strict';
var restartButton = document.querySelector('.restart');
var progressBar = document.querySelector('.progress-bar')

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

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
