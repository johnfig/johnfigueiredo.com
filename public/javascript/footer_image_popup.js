$(window).scroll(function () { 
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 20) {
	   	$('.body').find('.footer_image_div')
		    .removeClass('noJS')
		    .delay('500').slideDown('normal');
   }
  //  else if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
		// $('.body').find('.footer_image_div')
		//    .show();
	 // }

   else {
	 		$('.body').find('.footer_image_div')
   			.slideUp('fast');
	 }
});
