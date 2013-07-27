$(window).scroll(function () { 
   if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
	   	$('.body').find('.footer_image_div')
		    .removeClass('noJS')
		    .delay('500').slideDown('normal');
   }
   else {
	 		$('.body').find('.footer_image_div')
   			.slideUp('normal');
	 }
});
