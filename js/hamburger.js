$(".hamburger").click(function() {
  $(".menu__list").toggleClass("menu__list--visible");
  $(".form-search").removeClass("form-search--visible");
});

$(".btn-search-mobile").click(function() {
  $(".form-search").toggleClass("form-search--visible");
  $(".menu__list").removeClass("menu__list--visible");
  document.querySelector(".form-search__field").focus();
});
