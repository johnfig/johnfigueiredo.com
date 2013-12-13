// This function scrolls to anchor points using jQuery 
$('nav.sticky > a:first > div').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
 });

$('#Software').click(function(){
    $("html, body").animate({ scrollTop: 750 }, 1500);
    return false;
 });

$('#Work').click(function(){
    $("html, body").animate({ scrollTop: 1471 }, 1500);
    return false;
 });

$('#Education').click(function(){
    $("html, body").animate({ scrollTop: 2598 }, 1500);
    return false;
 });
