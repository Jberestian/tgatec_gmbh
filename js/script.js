// "use strict";

jQuery(document).ready(function() {

  /*
      Fullscreen Background
  */
// $.backstretch(src="./img/jahnstr/jahnstr_main.jpg");

/*
    Open / Close Menu 
*/
$('.hamburger-button button').on('click', function(){
  $('.top-menu').toggleClass('active');
  $(this).toggleClass('menu-closed');
});



});

/* 
  Next Prev function
*/
$(function() {
  var $message = $('.message');

  $('.yourFlickgalWrap').flickGal({
    'infinitCarousel': true
  })
    .on('fg_flickstart', function(e, index) {
      $message.html('The event <b>fg_flickstart</b> is dispatched.');
    })
    .on('fg_flickend', function(e, index) {
      $message.html('The event <b>fg_flickend</b> is dispatched.');
    })
    .on('fg_change', function(e, index) {
      $message.html('The event <b>fg_change</b> is dispatched.');
    });
});