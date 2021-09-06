$('.button-responsive').click(function(){
    $('.header-buttons').slideToggle();
})

const buttonIns = document.getElementById( "#ins" );

  $('#ins').click(function(){
    $('.inscribete-form').slideToggle();
})
$('#login-button-responsive').click(function(){
  $(".cont-grad").fadeIn();
  $('#login-button').fadeOut("slow",function(){
   $("#cont").fadeIn();
   TweenMax.from("#cont", .4, {scale: 0, ease:Sine.easeInOut});
   TweenMax.to("#cont", .4, {scale: 1, ease:Sine.easeInOut});
  });
});

$('#login-button').click(function(){
  $(".cont-grad").fadeIn();

  $('#login-button').fadeOut("slow",function(){
   $("#cont").fadeIn();
   TweenMax.from("#cont", .4, {scale: 0, ease:Sine.easeInOut});
   TweenMax.to("#cont", .4, {scale: 1, ease:Sine.easeInOut});
  });
});

$(".close-btn").click(function(){
  TweenMax.from("#cont", .4, {scale: 1, ease:Sine.easeInOut});
  TweenMax.to("#cont", .4, {left:"0px", scale: 0, ease:Sine.easeInOut});
  $(".cont-grad").fadeOut(800);
  $("#cont, #forgotten-container").fadeOut(800, function(){
    $("#login-button").fadeIn(800);
  });
});

let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
      rotate: 0,
  },
})

