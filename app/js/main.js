$(function() {

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