// This catches the nav bar once it hits a certain poinat 
// to make it have position:fixed to scroll with screen
$(window).scroll(function(){
   if ($(window).scrollTop() >= 0) {
      $("div#nav-wrapper-fixed").addClass("nav-wrapper-fixed");
   		$("nav").removeClass("sticky");
      $("nav").addClass("fixed");
    }
    else {
    	$("div#nav-wrapper-fixed").removeClass("nav-wrapper-fixed"); 
      $("nav").removeClass("fixed"); 
      $("nav").addClass("sticky");
    }
});
