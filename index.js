$(document).ready(function(){
    // QR코드 hide/show
    $('.qr01').click(function(){
      $(this).addClass('active');
      $('.qr02').removeClass('active');
      $('.app-android').addClass('active'); 
      $('.app-ios').removeClass('active');
    });
    $('.qr02').click(function(){
      $(this).addClass('active');
      $('.qr01').removeClass('active');
      $('.app-android').removeClass('active'); 
      $('.app-ios').addClass('active');
    });


  var intervalId = window.setInterval(function(){   
    $('.main-m').addClass('ch');
    }, 5000);
  });
  
