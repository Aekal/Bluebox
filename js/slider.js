var slide_nr = 1;
var speed = 500;

$(".btn-arrowR").click(function() {
  removeElements();
  slide_nr++;
  changeSlide();
});

$(".btn-arrowL").click(function(){
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
      class: 'slider-container element-none',
    }).appendTo('.slider-wrapper');
    // Adding container's heading
    jQuery('<div/>', {
      class: 'slider-heading'
    }).appendTo('.slider-container');
    // Adding heading title
    jQuery('<h1/>', {
      class: 'heading-title',
      text: title
    }).appendTo('.slider-heading');
    // Adding heading button
    jQuery('<button/>', {
      type: 'button',
      class: 'btn-more',
      text: 'Learn More'
    }).appendTo('.slider-heading');
    // Adding image
    jQuery('<img/>', {
      src: img_src,
      class: 'img-laptop'
    }).appendTo('.slider-container');

  }, speed);

  setTimeout(function(){
    $(".slider-container").fadeIn(speed);
  }, speed);
}

function removeElements() {
  $(".slider-container").fadeOut(speed);
  setTimeout(function(){
    $(".slider-container").remove();
  },speed);
}
