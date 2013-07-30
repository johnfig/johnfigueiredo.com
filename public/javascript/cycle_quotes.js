$(function() {
	var $img = $("#header-image > #quotes"), i = 0;
	var firstImage = $( $img[i] );
	firstImage.fadeIn(1200);
	window.setInterval(function() {
  	var currentImage = $( $img[i] );
  	currentImage.fadeOut(300);
  	i = ++i % $img.length; 

  	var nextImage    = $( $img[i] );
  	nextImage.fadeIn(1200);
  	// This is NOT smooth at all and looks like garbage. I need to customize something smooth.
  	// nextImage.animate({
  	// 	'marginLeft' : "+=5px"
  	// }, 200);
  }, 30000);
});

// This ONLY works at 600ms or lower. Need to figure out what conflict is occuring
// Once I call it in the console it works perfectly though. This has to be a dom loading error.
// FIXED Had to call the script TWICE in the index. Doesn't make the slightest bit of sense