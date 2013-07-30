// $(function(){
// $('#coolMenu').find('> li').click(function(){
// 	        $(this).find('ul')
// 	        .removeClass('noJS')
// 	        .stop(true, false).slideToggle('fast');
// 	    });
// 	});

// This function chooses when drop down menu occurs with jQuery
$(window).scroll(function () { 
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - 650) {
	   	$('.body').find('.noJS')
		    .slideDown('fast');
   }

   else {
	 		$('.body').find('.noJS')
   			.slideUp('fast');
	 }
});