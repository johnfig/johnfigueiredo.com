// This function scrolls to anchor points using jQuery 
$('nav.sticky > a:first > div').click(function(){
    $("html, body").animate({ scrollTop: 603 }, 1500);
    return false;
 });

$('#Software').click(function(){
    $("html, body").animate({ scrollTop: 833 }, 1500);
    return false;
 });

$('#Work').click(function(){
    $("html, body").animate({ scrollTop: 1143 }, 1500);
    return false;
 });

$('#Education').click(function(){
    $("html, body").animate({ scrollTop: 1473 }, 1500);
    return false;
 });
