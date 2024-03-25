$('path').click(function(){
  $('.all-team__block-name').addClass('none');
  $('.all-team__left-blocks,.all-team__projects').addClass('active');
})
$('.circles-choose__img').click(function(){
  $('.all-team__block-name').addClass('none');
  $('.all-team__left-blocks,.all-team__projects').addClass('active');
})
$('path.people1,.circles-choose__img.first').mouseover(function(){
  $('.circle').addClass('active')
  $('.circles-choose__img.first,path.people1').addClass('hover')
  $('.all-team__block-description').addClass('opacity')
  setTimeout(function () {
    $('.all-team__block-description').addClass('none')
    $('.people1name').addClass('active')
    setTimeout(() => {
      $('.people1name').addClass('opacity')
    }, 20);
  }, 150);
})
$('path.people1,.circles-choose__img.first').mouseleave(function(){
  $('.circle').removeClass('active')
  $('.circles-choose__img.first,path.people1').removeClass('hover')
  $('.people1name').removeClass('opacity')
  setTimeout(function () {
    $('.people1name').removeClass('active')
    $('.all-team__block-description').removeClass('none')
    setTimeout(() => {
      $('.all-team__block-description').removeClass('opacity')
    }, 50);
  }, 150);
})
$('.circles-choose__img.first').mouseover(function(){
  $('path.people1,.circles-choose__img.first').addClass('hover')
})
$('.circles-choose__img.first').mouseleave(function(){
  $('path.people1,.circles-choose__img.first').removeClass('hover')
})
$('path.people1').click(function(){
  $('.circles-choose__img.first').click();
})
$('path.people2,.circles-choose__img.second').mouseover(function(){
  $('.circle').addClass('active')
  $('.circles-choose__img.second,path.people2').addClass('hover')
  $('.all-team__block-description').addClass('opacity')
  setTimeout(function () {
    $('.all-team__block-description').addClass('none')
    $('.people2name').addClass('active')
    setTimeout(() => {
      $('.people2name').addClass('opacity')
    }, 20);
  }, 150);
})
$('path.people2,.circles-choose__img.second').mouseleave(function(){
  $('.circle').removeClass('active')
  $('.circles-choose__img.second,path.people2').removeClass('hover')
  $('.people2name').removeClass('opacity')
  setTimeout(function () {
    $('.people2name').removeClass('active')
    $('.all-team__block-description').removeClass('none')
    setTimeout(() => {
      $('.all-team__block-description').removeClass('opacity')
    }, 50);
  }, 150);
})
$('.circles-choose__img.second').mouseover(function(){
  $('path.people2,.circles-choose__img.second').addClass('hover')
})
$('.circles-choose__img.second').mouseleave(function(){
  $('path.people2,.circles-choose__img.second').removeClass('hover')
})
$('path.people2').click(function(){
  $('.circles-choose__img.second').click();
})
$('path.people3,.circles-choose__img.third').mouseover(function(){
  $('.circle').addClass('active')
  $('.circles-choose__img.third,path.people3').addClass('hover')
  $('.all-team__block-description').addClass('opacity')
  setTimeout(function () {
    $('.all-team__block-description').addClass('none')
    $('.people3name').addClass('active')
    setTimeout(() => {
      $('.people3name').addClass('opacity')
    }, 20);
  }, 150);
})
$('path.people3,.circles-choose__img.third').mouseleave(function(){
  $('.circle').removeClass('active')
  $('.circles-choose__img.third,path.people3').removeClass('hover')
  $('.people3name').removeClass('opacity')
  setTimeout(function () {
    $('.people3name').removeClass('active')
    $('.all-team__block-description').removeClass('none')
    setTimeout(() => {
      $('.all-team__block-description').removeClass('opacity')
    }, 50);
  }, 150);
})
$('.circles-choose__img.third').mouseover(function(){
  $('path.people3,.circles-choose__img.third').addClass('hover')
})
$('.circles-choose__img.third').mouseleave(function(){
  $('path.people3,.circles-choose__img.third').removeClass('hover')
})
$('path.people3').click(function(){
  $('.circles-choose__img.third').click();
})
$('path.people4,.circles-choose__img.fourth').mouseover(function(){
  $('.circle').addClass('active')
  $('.circles-choose__img.fourth,path.people4').addClass('hover')
  $('.all-team__block-description').addClass('opacity')
  setTimeout(function () {
    $('.all-team__block-description').addClass('none')
    $('.people4name').addClass('active')
    setTimeout(() => {
      $('.people4name').addClass('opacity')
    }, 20);
  }, 150);
})
$('path.people4,.circles-choose__img.fourth').mouseleave(function(){
  $('.circle').removeClass('active')
  $('.circles-choose__img.fourth,path.people4').removeClass('hover')
  $('.people4name').removeClass('opacity')
  setTimeout(function () {
    $('.people4name').removeClass('active')
    $('.all-team__block-description').removeClass('none')
    setTimeout(() => {
      $('.all-team__block-description').removeClass('opacity')
    }, 50);
  }, 150);
})
$('.circles-choose__img.fourth').mouseover(function(){
  $('path.people4,.circles-choose__img.fourth').addClass('hover')
})
$('.circles-choose__img.fourth').mouseleave(function(){
  $('path.people4,.circles-choose__img.fourth').removeClass('hover')
})
$('path.people4').click(function(){
  $('.circles-choose__img.fourth').click();
})

let circle = $('.circle');
function moveCircle(e) {
	TweenLite.to(circle, 0.1, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}
funcMoveCircleNearMouse = function() {}
$(window).on('mousemove', moveCircle);

$('.circles-choose__img.first').click(function(event){
  $('.circles-choose__img,path.people1,path.people2,path.people3,path.people4').removeClass('active');
  $('.circles-choose__img.first,path.people1').addClass('active');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').removeClass('first second third fourth');
})
$('.circles-choose__img.second').click(function(event){
  $('.circles-choose__img,path.people1,path.people2,path.people3,path.people4').removeClass('active');
  $('.circles-choose__img.second,path.people2').addClass('active');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').removeClass('first second third fourth');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').addClass('second');
})
$('.circles-choose__img.third').click(function(event){
  $('.circles-choose__img,path.people1,path.people2,path.people3,path.people4').removeClass('active');
  $('.circles-choose__img.third,path.people3').addClass('active');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').removeClass('first second third fourth');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').addClass('third');
})
$('.circles-choose__img.fourth').click(function(event){
  $('.circles-choose__img,path.people1,path.people2,path.people3,path.people4').removeClass('active');
  $('.circles-choose__img.fourth,path.people4').addClass('active');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').removeClass('first second third fourth');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').addClass('fourth');
})


$('.skills__subtitle').click(function(event){
  $('.projects').removeClass('open');
  $('.skills').toggleClass('open');
  if ($('.skills').hasClass('open') || $('.projects').hasClass('open')) {
    $('.all-team__left-blocks').addClass('open');
  } else {
    $('.all-team__left-blocks').removeClass('open');
  }
})
$('.projects__subtitle').click(function(event){
  $('.skills').removeClass('open');
  $('.projects').toggleClass('open');
  if ($('.skills').hasClass('open') || $('.projects').hasClass('open')) {
    $('.all-team__left-blocks').addClass('open');
  } else {
    $('.all-team__left-blocks').removeClass('open');
  }
})

screen.orientation.lock("portrait");
