// "use strict";

jQuery(document).ready(function () {
  /*
      Fullscreen Background
  */
  // $.backstretch(src="./img/jahnstr/jahnstr_main.jpg");

  /*
    Open / Close Menu 
*/

  $(".hamburger-button button").on("click", function () {
    $(".top-menu").toggleClass("active");
    $(this).toggleClass("menu-closed");
  });
});

/* 
  for resize image  function
*/

$(function () {
  $(".minimized").click(function (event) {
    var i_path = $(this).attr("src");
    $("body").append(
      '<div id="overlay"></div><div id="magnify"><img src="' +
        i_path +
        '"><div id="close-popup"><i></i></div></div>'
    );
    $("#magnify").css({
      left: ($(document).width() - $("#magnify").outerWidth()) / 2,
      top: ($(window).height() - $("#magnify").outerHeight()) / 2,
    });
    $("#overlay, #magnify").fadeIn("fast");
  });

  $("body").on("click", "#close-popup, #overlay", function (event) {
    event.preventDefault();

    $("#overlay, #magnify").fadeOut("fast", function () {
      $("#close-popup, #magnify, #overlay").remove();
    });
  });
});
