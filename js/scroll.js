$(".a-design").on("click", function() {
  $("html, body").animate({
    scrollTop: $(".works--purple").offset().top
  }, 500);
});

$(".a-icons").on("click", function() {
  $("html, body").animate({
    scrollTop: $(".works--green").offset().top
  }, 500);
});

$(".a-illustrations").on("click", function() {
  $("html, body").animate({
    scrollTop: $(".works--red").offset().top
  }, 500);
});

$(".a-misc").on("click", function() {
  $("html, body").animate({
    scrollTop: $(".works--yellow").offset().top
  }, 500);
});
