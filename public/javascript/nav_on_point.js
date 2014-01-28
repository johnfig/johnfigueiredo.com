$(window).scroll(function(){
		if ($(window).scrollTop() < 1 ) {
			$('#About').removeClass('About')
		}
		else if ($(window).scrollTop() < 749 && $(window).scrollTop() >= 1) {
			$('#About').addClass('About')
			$('#Software').removeClass('Software')
		}
    else if ($(window).scrollTop() < 1471 && $(window).scrollTop() >= 749) {
    	$('#About').removeClass('About')
   		$('#Software').addClass('Software')
   		$('#Work').removeClass('Work')
    }
    else if ($(window).scrollTop() < 2493 && $(window).scrollTop() >= 1471) {
    	$('#Software').removeClass('Software')
      $('#Work').addClass('Work')
      $('#Education').removeClass('Education')
    }
    else if ($(window).scrollTop() >= 2493) {
    	$('#Work').removeClass('Work')
      $('#Education').addClass('Education')
    }
});