// var $item = $('.carousel .item');
// $item.eq(0).addClass('active');
// // $('.carousel .circle').remove();
// // // $('.carousel ').addClass('contain-courousel');
//
// $('.carousel ').remove('.circle');
// $('.carousel').carousel({
//     interval: 6000,
//     pause: "false"
// });
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    // autoplay: true
});
