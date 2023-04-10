$(document).ready(function() {
    // set interval time (in milliseconds)
    var intervalTime = 5000;
    
    // set current slide to 1
    var currentSlide = 1;
    
    // show the first slide and hide the others
    $(".slider .slide1").show();
    $(".slider .slide2").hide();
    
    // function to switch slides
    function switchSlides() {
      if (currentSlide == 1) {
        $(".slider .slide1").hide();
        $(".slider .slide2").show();
        currentSlide = 2;
      } else {
        $(".slider .slide2").hide();
        $(".slider .slide1").show();
        currentSlide = 1;
      }
    }
    
    // set interval to switch slides
    setInterval(function() {
      switchSlides();
    }, intervalTime);


    $('.burger').on('click', function() {
      $('.sidenav').toggleClass('open');
    });
    
    $('.sidenav .closebtn').on('click', function() {
      $('.sidenav').removeClass('open');
    });
    
  });

  