if (window.location.href.indexOf('contact') > -1 || window.location.href.indexOf('terms') > -1) {
    $('nav').addClass('active');
} else {
    // Set what happens when the page scrolls.
    $(window).on('scroll', () => {
        // Change header styling when page scrolls.
        if ($(this).scrollTop() > 100 && !$('nav').hasClass('open')) {
            $('nav').addClass('active');
        } else if ($(this).scrollTop() <= 100) {
            $('nav').removeClass('active');
        }
    });
}