$(function () {
 
    $('.header-nav li:has(ul)').addClass('has-children');
  
    if ($(window).width() > 992) {
      $('.has-children').hover(function () {
        clearTimeout($.data(this,'timer'));
  
        $('ul',this).stop(true,true).slideDown(400);
          }, 
        function () {
          $.data(this,'timer', setTimeout($.proxy(function() {
            $('ul',this).stop(true,true).slideUp(400);
          }, this), 100));
          });
    }
    $('.post-wrap-overlay').mouseenter(function() {
      $(this).css('opacity', '1');
    });
    $('.post-wrap-overlay').mouseleave(function() {
      $(this).css('opacity', '0');
    });

    $('.question-wrap-title').on('click', f_acc);
    function f_acc(){
      if ($(this).hasClass('question-wrap-title-active')) {
        $(this).next().slideUp(600);
        $(this).removeClass('question-wrap-title-active');
        } 
      else {
      $('.question-wrap-text').not($(this).next()).slideUp(600);
      $(this).next().slideDown(600);
      $(this).addClass('question-wrap-title-active');
      $('.question-wrap-title').not(this).removeClass('question-wrap-title-active');
        }
  }
  $('.toggle').on('click', function() {
    $('.toggle').toggleClass('toggle-active');
    $('.header-nav').toggleClass('header-nav-active');
    
  });

  $('.price-wrap-item:first-child').addClass('price-show');
  $('.price-wrap-item:nth-child(2)').addClass('price-show');
  $('.price-wrap-item:nth-child(3)').addClass('price-show');
  $('.price-wrap-item:nth-child(4)').addClass('price-show');

  $('.delete').addClass('price-show');



  $('.post-wrap:first-child').addClass('post-show');
  $('.post-wrap:nth-child(2)').addClass('post-show');
  $('.post-wrap:nth-child(3)').addClass('post-show');
  $('.post-wrap:nth-child(4)').addClass('post-show');
    
  $('.call').on('click', function() {

    $('.popup-callback').addClass('popup-callback-active');
    $('.overlay').addClass('overlay-active');
    
  });
  $('.call-price').on('click', function() {

    $('.popup-callback2').addClass('popup-callback2-active');
    $('.overlay').addClass('overlay-active');
    
  });
  $('.popup-callback-close').on('click', function() {
    $('.popup-callback').removeClass('popup-callback-active');
    $('.popup-callback2').removeClass('popup-callback2-active');
    $('.overlay').removeClass('overlay-active');
  });
  $('.overlay').on('click', function() {
    $('.popup-callback').removeClass('popup-callback-active');
    $('.popup-callback2').removeClass('popup-callback2-active');
    $('.overlay').removeClass('overlay-active');
  });
  /*  
  $('.about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplayspeed: 3000,
      speed: 500
    }); */
    $('.toggle-about').on('click', function () { 
      $('.item_1').addClass('item-active');
      $('.item_2').addClass('item-active');
      $('.slider-buttons:nth-child(2)').addClass('about-active');
     });
    $('.toggle2').on('click', function () { 
      $('.item_2').addClass('item-active2');
      $('.item_3').addClass('item-active2');
      $('.slider-buttons:nth-child(3)').addClass('about-active');

     });
    $('.toggle3').on('click', function () { 
      $('.item_3').addClass('item-active3');
      $('.item_4').addClass('item-active3');
      $('.slider-buttons:nth-child(4)').addClass('about-active');

     });
    $('.toggle4').on('click', function () { 
      $('.item_4').addClass('item-active4');
      $('.item_5').addClass('item-active4');
      $('.slider-buttons:nth-child(5)').addClass('about-active');

     });
    $('.reset').on('click', function () { 
      $('.about-slider-item').removeClass('item-active');
      $('.about-slider-item').removeClass('item-active3');
      $('.about-slider-item').removeClass('item-active4');
      $('.about-slider-item').removeClass('item-active1');
      $('.about-slider-item').removeClass('item-active2');
      $('.slider-buttons').removeClass('about-active');
      $('.slider-buttons:first-child').addClass('about-active');

     });
});