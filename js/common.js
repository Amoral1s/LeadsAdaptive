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


  $('.post-wrap:first-child').addClass('post-show');
  $('.post-wrap:nth-child(2)').addClass('post-show');
  $('.post-wrap:nth-child(3)').addClass('post-show');
  $('.post-wrap:nth-child(4)').addClass('post-show');
    
  
   


});