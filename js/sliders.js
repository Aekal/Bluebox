// SLIDER ANIMATION
(function(){
  var slideIndex = 1;
  var speed = 500;

  $(".slider__btn-arrow--right").click(function() {
    removeElements();
    slideIndex++;
    changeSlide();
  });

  $(".slider__btn-arrow--left").click(function(){
    removeElements();
    slideIndex--;
    changeSlide();
  });

  function changeSlide() {
    if (slideIndex > 3) {
      slideIndex = 1;
      changeSlide();
    } else if (slideIndex < 1){
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
      jQuery('<button/>', {
        type: 'button',
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
(function(){
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
