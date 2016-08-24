$(".hamburger").click(function() {
  $(".menu__row").toggleClass("menu__row--visible");
  $(".form-search").removeClass("form-search--visible");
});

$(".btn-search-mobile").click(function() {
  $(".form-search").toggleClass("form-search--visible");
  $(".menu__row").removeClass("menu__row--visible");
  document.querySelector(".form-search__field").focus();
});
