$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    navigation: true,
    navigationPosition:'right',
    sectionSelector:'.section',
    slideSelector:'.slide',
    slideNavigation: true,
    scrollingSpeed:800
	});

  $('.tabMenu p').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })
  $('.tm01').click(function(){
    $('.tab-01').addClass('active');
    $('.tab-02').removeClass('active');
    $('.tab-03').removeClass('active');
  })
  $('.tm02').click(function(){
    $('.tab-02').addClass('active');
    $('.tab-01').removeClass('active');
    $('.tab-03').removeClass('active');
  })
  $('.tm03').click(function(){
    $('.tab-03').addClass('active');
    $('.tab-01').removeClass('active');
    $('.tab-02').removeClass('active');
  })

});