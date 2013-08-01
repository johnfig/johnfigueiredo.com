$(window).scroll(function(){
		if ($(window).scrollTop() < 642 ) {
			$('#About').removeClass('About')
		}
		else if ($(window).scrollTop() < 870 && $(window).scrollTop() >= 642) {
			$('#About').addClass('About')
			$('#Software').removeClass('Software')
		}
    else if ($(window).scrollTop() < 1180 && $(window).scrollTop() >= 870) {
    	$('#About').removeClass('About')
   		$('#Software').addClass('Software')
   		$('#Work').removeClass('Work')
    }
    else if ($(window).scrollTop() < 1395 && $(window).scrollTop() >= 1180) {
    	$('#Software').removeClass('Software')
      $('#Work').addClass('Work')
      $('#Education').removeClass('Education')
    }
    else {
    	$('#Work').removeClass('Work')
      $('#Education').addClass('Education')
    }
});