$(window).scroll(function() {
  var targetY = $(".header").height();
  if ( $(window).width() < 640 ) {
    var currentY = $(window).scrollTop();
    if ( currentY >= targetY ) {
      $(".scroll-arrow").addClass("scroll-arrow--active");
    } else {
      $(".scroll-arrow").removeClass("scroll-arrow--active");
    }
  }
});

$(".scroll-arrow").on("click", function(){
  $("html, body").animate({
    scrollTop: 0
  }, 700);
})
