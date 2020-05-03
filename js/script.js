// "use strict";

jQuery(document).ready(function() {

  /*
      Fullscreen Background
  */
$.backstretch(src="https://lh3.googleusercontent.com/proxy/AsnpkbxqQEjzdyBaNt6vFc7azojjyhGz74koAu1yP0oVzIGMa6RRsR_3gpR3JRn2YsEtvHnWl0xy4ejbJOQpBD0kPP3y_fqqFXntkz9rYsdJ3pfxSHzvvQ");

/*
    Open / Close Menu 
*/
$('.hamburger-button button').on('click', function(){
  $('.top-menu').toggleClass('active');
  $(this).toggleClass('menu-closed');
});

});


