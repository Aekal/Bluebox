var speed = 700;

$(window).scroll(function() {
  var target = $(".works--purple").offset().top;
  if ( $(window).width() < 640 ) {
    var current = $(window).scrollTop();
    if ( current >= target ) {
      $(".scroll-arrow").addClass("scroll-arrow--active");
    } else {
      $(".scroll-arrow").removeClass("scroll-arrow--active");
    }
  }
});

$(".scroll-arrow").on("click", function(){
  $("html, body").animate({
    scrollTop: 0
  }, speed);
})

$(".a-design").on("click", function() {
  $("html, body").animate({
    scrollTop: $(".works--purple").offset().top
  }, speed);
});

$(".a-icons").on("click", function() {
  $("html, body").animate({
    scrollTop: $(".works--green").offset().top
  }, speed);
});

$(".a-illustrations").on("click", function() {
  $("html, body").animate({
    scrollTop: $(".works--red").offset().top
  }, speed);
});

$(".a-misc").on("click", function() {
  $("html, body").animate({
    scrollTop: $(".works--yellow").offset().top
  }, speed);
});
