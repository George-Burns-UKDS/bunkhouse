$(document).ready(function () {
    AOS.init();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider({
        indicators: false
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    setInterval(function () {
        $('.carousel').carousel('next');
    }, 10000);
});

// Provide smooth scrolling when navigating the anchor links.
$('.anchor-link').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});