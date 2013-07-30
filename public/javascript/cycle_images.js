$(function() {
	var $img = $("#header-image > #background-image"), i = 0;
	
	window.setInterval(function() {
  	var currentImage = $( $img[i] );
  	currentImage.fadeOut(600);

  	i = ++i % $img.length; 

  	var nextImage    = $( $img[i] );
  	nextImage.fadeIn(600);
  }, 8000);
});

// This ONLY works at 600ms or lower. Need to figure out what conflict is occuring
// Once I call it in the console it works perfectly though. This has to be a dom loading error.
// FIXED Had to call the script TWICE in the index. Doesn't make the slightest bit of sense