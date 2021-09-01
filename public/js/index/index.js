// Function to cycle through the images.
var cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
        setTimeout(() => {
            container.style.backgroundImage = `url(${image})`
        }, step * (index + 1))
    ))
    setTimeout(() => cycleImages(images, container, step), step * images.length)
}

$(document).ready(function () {

    // Array of images to cycle through on the home page.
    var banner_images = [
        "../../assets/images/index/banner-image-1.jpg",
        "../../assets/images/index/banner-image-2.jpg",
        "../../assets/images/index/banner-image-3.jpg"
    ]
    // Identify the banner element.
    var banner = document.getElementById("banner");
    // Execute the function with 10 second intervals.
    cycleImages(banner_images, banner, 5000);

});

// Provide smooth scrolling when navigating the anchor links.
$('.anchor-link').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});

// Add the break between reviews at medium screen width.
$(window).on('resize', function () {
    if ($(window).width() < 992) {
        $('#review-break').removeClass('hidden');
    } else {
        $('#review-break').addClass('hidden');
    }
});

// Hide and show about more details.
$('#expand').click(() => {
    if ($('#about-more').css('display') == 'block') {
        $('#about-more').css('display', 'none');
        $('#expand i').removeClass('fa-angle-double-up');
        $('#expand i').addClass('fa-angle-double-down');
    } else {
        $('#about-more').css('display', 'block');
        $('#expand i').removeClass('fa-angle-double-down');
        $('#expand i').addClass('fa-angle-double-up');
    }
});