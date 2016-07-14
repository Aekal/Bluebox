$(".hamburger").click(function() {
  $(".nav-list").toggleClass("showing");
  $(".searchbox").removeClass("showing");
});

$(".btn-search-mobile").click(function() {
  $(".searchbox").toggleClass("showing");
  $(".nav-list").removeClass("showing");
});
