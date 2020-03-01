$(document).ready(function () {

     // $('.mc-dropdown').click(function(){
     //      if($(this).children('div').is(':visible')){
     //      $(this).children('div').slideUp(500);
     //      }
     //      else{
     //      $(this).children('div').toggle();
     //      }
     // })

     $('.mc-dropdown').click(function(){
          if($('div').hasClass('mc-active')) {
          $(this).children('div').removeClass('mc-active');
          $(this).children('a').removeClass('ruota');
          $('.mc-dropdown2').children('div').removeClass('mc-active2');
          } else {
          $(this).children('div').addClass('mc-active');
          $(this).children('a').addClass('ruota');
          $('.mc-dropdown2').children('div').removeClass('mc-active2');
          }

     })

     $('.mc-dropdown2').click(function(){
          if($('div').hasClass('mc-active2')) {
          $(this).children('div').removeClass('mc-active2');
          $(this).children('a').removeClass('ruota');
          } else  {
          $(this).children('div').addClass('mc-active2');
          $(this).children('a').addClass('ruota');
          $('.mc-dropdown').children('div').removeClass('mc-active');
          }

     })






})
