var item_width = $(".clients__item").width();
var clients = $(".clients__item").length;

var seeclients = setInterval(move, 2000);

function move() {
  if ($(window).width() > 640) {
    var $first = $(".clients__item:first");
    $first.animate({"margin-left": "-"+item_width+"px"}, 700, function(){
      $first.remove().css({"margin-left": "0px"});
      $(".clients__item:last").after($first);
    });
  }
}
