function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
  $('article').children().each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('in-view')
    }
  });
});
