$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 350) {
      $('#scrollup').fadeIn();
    } else {
      $('#scrollup').fadeOut();
    }
  });
  $('#scrollup').click(function() {
    $('body,html').animate({scrollTop:0}, 900);
  });
});
