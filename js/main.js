$(document).ready(function() {

  // Menu toggle - mobile
  $(".hamburger").click(function() {
    $(".menu__list").toggleClass("menu__list--visible");
    $(".form-search").removeClass("form-search--visible");
  });

  // Search toggle - mobile
  $(".btn-search-mobile").click(function() {
    $(".form-search").toggleClass("form-search--visible");
    $(".menu__list").removeClass("menu__list--visible");
    $(".form-search__field").focus();
  });

  // Scroll to top button toggle - mobile
  $(window).scroll(function() {
    var targetY = $(".main-header").height();
    if ( $(window).width() < 640 ) {
      var currentY = $(window).scrollTop();
      if ( currentY >= targetY ) {
        $(".scroll-arrow").addClass("scroll-arrow--active");
      } else {
        $(".scroll-arrow").removeClass("scroll-arrow--active");
      }
    }
  });

  // Scroll to top action
  $(".scroll-arrow").on("click", function() {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
  });

  // Scroll to sections with animate - site Works
  (function() {
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
  })();


  // SLIDER ANIMATION
  (function() {
    var slideIndex = 1;
    var speed = 300;

    $(".slider__btn-arrow--right").click(function() {
      removeElements();
      slideIndex++;
      changeSlide();
    });

    $(".slider__btn-arrow--left").click(function() {
      removeElements();
      slideIndex--;
      changeSlide();
    });

    function changeSlide() {
      if (slideIndex > 3) {
        slideIndex = 1;
        changeSlide();
      } else if (slideIndex < 1) {
        slideIndex = 3;
        changeSlide();
      } else {
        switch(slideIndex) {
          case 1: createSlide(slideIndex, "We are a Creative Digital Agency", "img/slider/mac-yellow.png"); break;
          case 2: createSlide(slideIndex, "We are a Happy Digital Agency", "img/slider/mac-blue.png"); break;
          case 3: createSlide(slideIndex, "We provide best solutions", "img/slider/mac-green.png"); break;
        }
      }
    }

    function createSlide(slideIndex, title, img_src) {
      setTimeout(function(){
        // Adding container
        jQuery('<div/>', {
          class: 'slider__container slider__container--hidden'
        }).appendTo('.slider__wrapper');
        // Adding container's heading
        jQuery('<div/>', {
          class: 'slider__heading'
        }).appendTo('.slider__container');
        // Adding heading title
        jQuery('<h1/>', {
          class: 'slider__title',
          text: title
        }).appendTo('.slider__heading');
        // Adding heading button
        jQuery('<a/>', {
          href: '#',
          class: 'slider__btn-more',
          text: 'Learn More'
        }).appendTo('.slider__heading');
        // Adding image
        jQuery('<img/>', {
          src: img_src,
          class: 'slider__img'
        }).appendTo('.slider__container');
      }, speed);

      setTimeout(function(){
        $(".slider__container").fadeIn(speed);
      }, speed);
    }

    function removeElements() {
      $(".slider__container").fadeOut(speed);
      setTimeout(function(){
        $(".slider__container").remove();
      }, speed);
    }
  })();


  // CLIENTS - CAROUSEL
  (function() {
    var itemWidth = $(".clients__item").width();
    setInterval(move, 2000);  // Animate carousel every 2s
    var isMoving = true;

    $(".clients__list").mouseover(function(){
      isMoving = false;
    });
    $(".clients__list").mouseout(function(){
      isMoving = true;
    });

    function move() {
      if (($(window).width() > 640) && (isMoving === true)) {
        var $first = $(".clients__item:first");
        $first.animate({"margin-left": "-" + itemWidth + "px"}, 700, function(){
          $first.remove().css({"margin-left": "0px"});
          $(".clients__item:last").after($first);
        });
      }
    }
  })();

});

// Contact map - from GMaps API
function initMap() {
  var myLatLng = {lat: 51.51, lng: -0.126667};
  var mapDiv = document.querySelector('.map__google');
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 11
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
