$(document).ready(function(){
   
    $(window).scroll(function(){
        
        if ($(window).scrollTop() > 709) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        if ($(window).scrollTop() < 720) {
            $('.navbar').removeClass('navbar-fixed-top');
        }
        
    });  
});
/* Smooth scrolling function */
$(".navbar-dark ul li a[href^='#']").on('click', function(e) {
	e.preventDefault();
	var hash=this.hash;
	$('html,body').animate({
		scrollTop: $(hash).offset().top
	}, 300, function() {
		window.location.hash = hash;
	});
});

$(".footer .scroll-to-top-button a[href^='#']").on('click', function(e) {
	e.preventDefault();
	var hash=this.hash;
	$('html,body').animate({
		scrollTop: $(hash).offset().top
	}, 900, function() {
		window.location.hash = hash;
	});
});



$('.js-wp-1').waypoint(function(direction)
{
 $('.js-wp-1').addClass('animated fadeInDown');
} , {
	offset:'66%'
});

$('.js-wp-2').waypoint(function(direction)
{
	$('.js-wp-2').addClass('animated fadeInLeft');
}, {
		offset:'66%'
});
$('.js-wp-3').waypoint(function(direction)
{
	$('.js-wp-3').addClass('animated fadeInUp');
}, {
	offset:'66%'
});
$('.js-wp-4').waypoint(function(direction)
{
	$('.js-wp-4').addClass('animated fadeInRight');
}, {
	offset:'66%'
});

$('.js-wp-5').waypoint(function(direction)
{
 $('.js-wp-5').addClass('animated fadeInDown');
} , {
	offset:'66%'
});