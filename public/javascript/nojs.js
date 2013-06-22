$(function(){
$('#coolMenu').find('> li').click(function(){
	        $(this).find('ul')
	        .removeClass('noJS')
	        .stop(true, false).slideToggle('fast');
	    });
	});