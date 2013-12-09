$(window).scroll(function(){
		if ($(window).scrollTop() < 603 ) {
			$('#About').removeClass('About')
		}
		else if ($(window).scrollTop() < 833 && $(window).scrollTop() >= 603) {
			$('#About').addClass('About')
			$('#Software').removeClass('Software')
		}
    else if ($(window).scrollTop() < 1140 && $(window).scrollTop() >= 833) {
    	$('#About').removeClass('About')
   		$('#Software').addClass('Software')
   		$('#Work').removeClass('Work')
    }
    else if ($(window).scrollTop() < 1170 && $(window).scrollTop() >= 1140) {
    	$('#Software').removeClass('Software')
      $('#Work').addClass('Work')
      $('#Education').removeClass('Education')
    }
    else if ($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
    	$('#Work').removeClass('Work')
      $('#Education').addClass('Education')
    }
});