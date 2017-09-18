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
    prevArrow:"<img class='a-left control-c prev slick-prev left slick-prev slick-arrow' src='img/left-arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='img/right-arrow.png'>",
    // arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0
    // autoplay: true
});

