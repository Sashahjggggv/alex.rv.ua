$('g').click(function(){
  $('.team-members')[0].scrollIntoView({behavior: "smooth"});
})
$('g.people1').mouseover(function(){
  $('.circle').addClass('active')
  $('.all-team__block-description').addClass('opacity')
  setTimeout(function () {
    $('.all-team__block-description').addClass('none')
    $('.people1name').addClass('active')
    setTimeout(() => {
      $('.people1name').addClass('opacity')
    }, 20);
  }, 150);
})
$('g.people1').mouseleave(function(){
  $('.circle').removeClass('active')
  $('.people1name').removeClass('opacity')
  setTimeout(function () {
    $('.people1name').removeClass('active')
    $('.all-team__block-description').removeClass('none')
    setTimeout(() => {
      $('.all-team__block-description').removeClass('opacity')
    }, 50);
  }, 150);
})
$('g.people1').click(function(){
  $('.circles-choose__img.first').click();
})
$('g.people2').mouseover(function(){
  $('.circle').addClass('active')
  $('.all-team__block-description').addClass('opacity')
  setTimeout(function () {
    $('.all-team__block-description').addClass('none')
    $('.people2name').addClass('active')
    setTimeout(() => {
      $('.people2name').addClass('opacity')
    }, 20);
  }, 150);
})
$('g.people2').mouseleave(function(){
  $('.circle').removeClass('active')
  $('.people2name').removeClass('opacity')
  setTimeout(function () {
    $('.people2name').removeClass('active')
    $('.all-team__block-description').removeClass('none')
    setTimeout(() => {
      $('.all-team__block-description').removeClass('opacity')
    }, 50);
  }, 150);
})
$('g.people2').click(function(){
  $('.circles-choose__img.second').click();
})
$('g.people3').mouseover(function(){
  $('.circle').addClass('active')
  $('.all-team__block-description').addClass('opacity')
  setTimeout(function () {
    $('.all-team__block-description').addClass('none')
    $('.people3name').addClass('active')
    setTimeout(() => {
      $('.people3name').addClass('opacity')
    }, 20);
  }, 150);
})
$('g.people3').mouseleave(function(){
  $('.circle').removeClass('active')
  $('.people3name').removeClass('opacity')
  setTimeout(function () {
    $('.people3name').removeClass('active')
    $('.all-team__block-description').removeClass('none')
    setTimeout(() => {
      $('.all-team__block-description').removeClass('opacity')
    }, 50);
  }, 150);
})
$('g.people3').click(function(){
  $('.circles-choose__img.third').click();
})
$('g.people4').mouseover(function(){
  $('.circle').addClass('active')
  $('.all-team__block-description').addClass('opacity')
  setTimeout(function () {
    $('.all-team__block-description').addClass('none')
    $('.people4name').addClass('active')
    setTimeout(() => {
      $('.people4name').addClass('opacity')
    }, 20);
  }, 150);
})
$('g.people4').mouseleave(function(){
  $('.circle').removeClass('active')
  $('.people4name').removeClass('opacity')
  setTimeout(function () {
    $('.people4name').removeClass('active')
    $('.all-team__block-description').removeClass('none')
    setTimeout(() => {
      $('.all-team__block-description').removeClass('opacity')
    }, 50);
  }, 150);
})
$('g.people4').click(function(){
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
  $('.circles-choose__img').removeClass('active');
  $('.circles-choose__img.first').addClass('active');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').removeClass('first second third fourth');
})
$('.circles-choose__img.second').click(function(event){
  $('.circles-choose__img').removeClass('active');
  $('.circles-choose__img.second').addClass('active');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').removeClass('first second third fourth');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').addClass('second');
})
$('.circles-choose__img.third').click(function(event){
  $('.circles-choose__img').removeClass('active');
  $('.circles-choose__img.third').addClass('active');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').removeClass('first second third fourth');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').addClass('third');
})
$('.circles-choose__img.fourth').click(function(event){
  $('.circles-choose__img').removeClass('active');
  $('.circles-choose__img.fourth').addClass('active');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').removeClass('first second third fourth');
  $('.team-members__imgs,.skills__slider,.account__slider-logos,.account__slider-names,.profession__slider,.projects__slider').addClass('fourth');
})


$('.skills__subtitle').click(function(event){
  $('.projects').removeClass('active');
  $('.skills').toggleClass('active');
})
$('.projects__subtitle').click(function(event){
  $('.skills').removeClass('active');
  $('.projects').toggleClass('active');
})