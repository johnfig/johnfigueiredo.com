$(window).scroll(function(){
		if ($(window).scrollTop() < 1 ) {
			$('#About').removeClass('About')
		}
		else if ($(window).scrollTop() < 749 && $(window).scrollTop() >= 1) {
			$('#About').addClass('About')
			$('#Software').removeClass('Software')
		}
    else if ($(window).scrollTop() < 1470 && $(window).scrollTop() >= 749) {
    	$('#About').removeClass('About')
   		$('#Software').addClass('Software')
   		$('#Work').removeClass('Work')
    }
    else if ($(window).scrollTop() < 2598 && $(window).scrollTop() >= 1470) {
    	$('#Software').removeClass('Software')
      $('#Work').addClass('Work')
      $('#Education').removeClass('Education')
    }
    else if ($(window).scrollTop() >= 2598) {
    	$('#Work').removeClass('Work')
      $('#Education').addClass('Education')
    }
});