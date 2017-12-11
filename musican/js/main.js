$(document).ready(function () {
    $('.slider-music').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        ltr: true,
        arrows: false,
        // autoplay:true,
        // autoplaySpeed:1500
    });
    // var Slider =  $('.slider-music').slick('slickCurrentSlide');
    $('#prev-btn').click(function(){

        $('.slider-music').slick('slickPrev');
    });
    $('#next-btn').click(function(){

        $('.slider-music').slick('slickNext');
    });


});





