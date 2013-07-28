// $(function(){
// $('#coolMenu').find('> li').click(function(){
// 	        $(this).find('ul')
// 	        .removeClass('noJS')
// 	        .stop(true, false).slideToggle('fast');
// 	    });
// 	});

$(window).scroll(function () { 
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 750) {
	   	$('.body').find('.noJS')
		    .slideDown('fast');
   }

   else {
	 		$('.body').find('.noJS')
   			.slideUp('fast');
	 }
});