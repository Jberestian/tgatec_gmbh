// "use strict";

jQuery(document).ready(function() {

  /*
      Fullscreen Background
  */
$.backstretch(src="./img/jahnstr/jahnstr_main.jpg");

/*
    Open / Close Menu 
*/
$('.hamburger-button button').on('click', function(){
  $('.top-menu').toggleClass('active');
  $(this).toggleClass('menu-closed');
});

});


