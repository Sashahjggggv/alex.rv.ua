$('.header__contacts-show').click(function(event){
  $('.header__burger-show,.header__burger-hide,.blur,.header__btn-burger,.header__burger-active,.menu').removeClass('active');
  $('.header__contacts-show,.header__contacts-hide,.header__contacts,.header__contacts-active,.blur,.contacts-block').addClass('active');
})
$('.header__burger-show').click(function(event){
  $('.header__contacts-show,.header__contacts-hide,.header__contacts,.header__contacts-active,.contacts-block,.blur').removeClass('active');
  $('.header__burger-show,.header__burger-hide,.header__btn-burger,.header__burger-active,.blur,.menu').addClass('active')
})
$('.header__contacts-hide,.header__burger-hide,.blur').click(function(event){
  $('.header__contacts-show,.header__contacts-hide,.header__burger-show,.header__burger-hide,.header__contacts,.header__contacts-active,.blur,.contacts-block,.header__btn-burger,.header__burger-active,.menu').removeClass('active');
})

// функція ховання, показу хедера при скролі
var st = $(window).scrollTop();
var navheight = $('.header').height() + 30;
$(window).scroll(function() {
	var nst = $(window).scrollTop();
	var subio = nst < st;
	var bajo = nst - 40 > st;
	
	if (subio) {
		$('.header').addClass('sticky');
		st = nst;
	} if (st == 0 || st < 0) {
		$('.header').addClass('sticky');
		st = nst;
	} else if(bajo) {
		$('.header').removeClass('sticky');
		st = nst;
	}
});