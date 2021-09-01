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
        "../../assets/images/location/banner-image-1.jpg",
        "../../assets/images/location/banner-image-2.png",
        "../../assets/images/location/banner-image-3.jpg",
        "../../assets/images/location/banner-image-4.jpg",
        "../../assets/images/location/banner-image-5.png"
    ]
    // Identify the banner element.
    var banner = document.getElementById("banner");
    // Execute the function with 10 second intervals.
    cycleImages(banner_images, banner, 5000);

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
$('#expand-attractions').click(() => {
    if ($('#more-attractions').hasClass('hidden')) {
        $('#more-attractions').removeClass('hidden');
        $('#expand-attractions').contents().filter(function () { return this.nodeType == 3; }).first().replaceWith("View less");
        $('#expand-attractions i').removeClass('fa-angle-double-down');
        $('#expand-attractions i').addClass('fa-angle-double-up');
    } else {
        $('#more-attractions').addClass('hidden');
        $('#expand-attractions').contents().filter(function () { return this.nodeType == 3; }).first().replaceWith("View more");
        $('#expand-attractions i').removeClass('fa-angle-double-up');
        $('#expand-attractions i').addClass('fa-angle-double-down');
    }
});