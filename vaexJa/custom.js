$(document).ready(function(){


  // header, footer불러오기
  $("#headers").load("/vaexJa/header/header(ja).html");
    $("#footers").load("/vaexJa/footer/footer(ja).html");

    
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
    
  });
  
