$(document).ready(function(){

  // 햄버거
$('#line-wrapper').click(function(){
  /* 추가된 부분 */
  $('.line').removeClass('init');
  $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
  $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
  $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
  $('.menu-slide').toggleClass('active');
})

$('.main-title').click(function(){
  $(this).next('.sub-title').stop().slideToggle(300);
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).next('.sub-title').siblings('.sub-title').slideUp(300);
})

$('.langPack').hover(function() {
  $('.languages').css({top: '60px'})
}, function(){
  $('.languages').css({top: '-20px'})
})

});