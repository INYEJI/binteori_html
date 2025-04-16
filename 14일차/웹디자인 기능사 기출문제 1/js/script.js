$(function(){
   $('.gnb > li').mouseover(function(){
   	$('.sub').stop().fadeOut();
   	$(this).children('.sub').stop().fadeIn();
   }).mouseout(function(){
   	$('.sub').stop().fadeOut();
   });


   function slideshow(){
      $('.slide').animate({marginLeft:-800}, 800, function(){
      	$('.slide li:first').appendTo('.slide');
      	$('.slide').css('margin-left',0)
      })
   }
   setInterval(slideshow, 3000);

   $('table tr:first').mouseover(function(){
         $(this).css('text-decoration','underline');
      }).click(function(){
         $('.modalWrap').stop().fadeIn();;
    });
   $('.close').click(function(){
      $('.modalWrap').fadeOut();
   });

   
});