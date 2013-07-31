// This catches the nav bar once it hits a certain poinat 
// to make it have position:fixed to scroll with screen
$(window).scroll(function(){
   if ($(window).scrollTop() >= 642) {
   		$("nav").removeClass("sticky");
      $("nav").addClass("fixed");
    }
    else {
      $("nav").removeClass("fixed"); 
      $("nav").addClass("sticky");
    }
});
