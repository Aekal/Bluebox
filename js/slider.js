var slide_nr = 1;
var speed = 500;

$(".slider__btn-arrow--right").click(function() {
  removeElements();
  slide_nr++;
  changeSlide();
});

$(".slider__btn-arrow--left").click(function(){
  removeElements();
  slide_nr--;
  changeSlide();
})

function changeSlide() {
  if (slide_nr > 3) {
    slide_nr = 1;
    changeSlide();
  } else if (slide_nr < 1){
    slide_nr = 3;
    changeSlide();
  } else {
    switch(slide_nr) {
      case 1: createSlide(slide_nr, "We are a Creative Digital Agency", "img/slider/mac-yellow.png"); break;
      case 2: createSlide(slide_nr, "We are a Happy Digital Agency", "img/slider/mac-blue.png"); break;
      case 3: createSlide(slide_nr, "We!", "img/slider/mac-green.png"); break;
    };
  }
}

function createSlide(slide_nr, title, img_src) {
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
  },speed);
}
