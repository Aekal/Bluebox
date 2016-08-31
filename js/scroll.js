var speed = 700;

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
