'use strict';
var restartButton = document.querySelector('.restart');
var progressBar = document.querySelector('.progress-bar')
var templateCarousel = document.getElementById('template-carousel').innerHTML;
var carousel = document.querySelector('.main-carousel');
var listData = '';

Mustache.parse(templateCarousel);

for(var i = 0; i < carouselData.length; i++){
	listData = Mustache.render(templateCarousel, carouselData[i]);
  carousel.insertAdjacentHTML('beforeend', listData);
}

var flkty = new Flickity( carousel, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,
});

restartButton.addEventListener( 'click', function() {
  flkty.selectCell('#malbork');
});

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
