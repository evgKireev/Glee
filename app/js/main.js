$(function() {

  $('.related__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: $('.related__button-next'),
    prevArrow: $('.related__button-prev'),


  });




  $('.one-product-tabs__link').on('click', function(e) {
    e.preventDefault();

    $('.one-product-tabs__link').removeClass('one-product-tabs__link--active');
    $(this).addClass('one-product-tabs__link--active');
    $('.one-product-tabs__content-item').removeClass('one-product-tabs__content-item--active');
    $($(this).attr('href')).addClass('one-product-tabs__content-item--active');
  });




  $('.one-product__input').styler();

  $('.one-product__img-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slide__img-smoll'

  });

  $('.product-slide__img-smoll').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.one-product__img-big',
    centerMode: true,
    focusOnSelect: true,
    vertical: true,

  });



  $('.filter-recent__star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px"
  });


  $('.product-2-content__star').rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "12px"
  });



  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function(data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function(data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });



  $('.slider-top__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000

  })

  var mixer = mixitup('.product__itams');


  var mixer = mixitup('.new-product__items');

});