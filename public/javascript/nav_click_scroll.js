// This function scrolls to anchor points using jQuery 
$('nav.sticky > a:first > div').click(function(){
    $("html, body").animate({ scrollTop: 642 }, 600);
    return false;
 });

$('#Software').click(function(){
    $("html, body").animate({ scrollTop: 870 }, 600);
    return false;
 });

$('#Work').click(function(){
    $("html, body").animate({ scrollTop: 1180 }, 600);
    return false;
 });

$('#Education').click(function(){
    $("html, body").animate({ scrollTop: 1500 }, 600);
    return false;
 });
