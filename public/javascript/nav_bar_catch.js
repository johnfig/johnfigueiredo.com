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
