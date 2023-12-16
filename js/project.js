const slideValue = document.querySelector('.slider__span');
const inputSlider = document.querySelector('.slider__input');
const inputBg = document.querySelector(".slider__bg-1")
const dateSlider = document.querySelector(".stages__date-block-slider")
const stageSlider = document.querySelector(".stages__stage-title-slider")
const stageAddedEl = document.querySelector(".stages__block-added-el")
const stageDesc = document.querySelector(".stages__description")
let stagesToNum = stages.map(Number)

// doing when sliding
window.addEventListener('input', function (e) {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value) + "%";
  inputBg.style.width = (value) + "%";

  dateSlider.classList.remove('first', 'second', 'third', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten');
  stageSlider.classList.remove('first', 'second', 'third', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten');
  
  document.querySelector(".stages__block-added-el.first").classList.remove('opacity');
  document.querySelector(".stages__description.first").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.second").classList.remove('opacity');
  document.querySelector(".stages__description.second").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.third").classList.remove('opacity');
  document.querySelector(".stages__description.third").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.four").classList.remove('opacity');
  document.querySelector(".stages__description.four").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.five").classList.remove('opacity');
  document.querySelector(".stages__description.five").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.six").classList.remove('opacity');
  document.querySelector(".stages__description.six").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.seven").classList.remove('opacity');
  document.querySelector(".stages__description.seven").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.eight").classList.remove('opacity');
  document.querySelector(".stages__description.eight").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.nine").classList.remove('opacity');
  document.querySelector(".stages__description.nine").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.ten").classList.remove('opacity');
  document.querySelector(".stages__description.ten").classList.remove('opacity');
  document.querySelector(".stages__block-added-el.eleven").classList.remove('opacity');
  document.querySelector(".stages__description.eleven").classList.remove('opacity');

  setTimeout(() => {
    document.querySelector(".stages__block-added-el.first").classList.remove('active');
    document.querySelector(".stages__description.first").classList.remove('active');
    document.querySelector(".stages__block-added-el.second").classList.remove('active');
    document.querySelector(".stages__description.second").classList.remove('active');
    document.querySelector(".stages__block-added-el.third").classList.remove('active');
    document.querySelector(".stages__description.third").classList.remove('active');
    document.querySelector(".stages__block-added-el.four").classList.remove('active');
    document.querySelector(".stages__description.four").classList.remove('active');
    document.querySelector(".stages__block-added-el.five").classList.remove('active');
    document.querySelector(".stages__description.five").classList.remove('active');
    document.querySelector(".stages__block-added-el.six").classList.remove('active');
    document.querySelector(".stages__description.six").classList.remove('active');
    document.querySelector(".stages__block-added-el.seven").classList.remove('active');
    document.querySelector(".stages__description.seven").classList.remove('active');
    document.querySelector(".stages__block-added-el.eight").classList.remove('active');
    document.querySelector(".stages__description.eight").classList.remove('active');
    document.querySelector(".stages__block-added-el.nine").classList.remove('active');
    document.querySelector(".stages__description.nine").classList.remove('active');
    document.querySelector(".stages__block-added-el.ten").classList.remove('active');
    document.querySelector(".stages__description.ten").classList.remove('active');
    document.querySelector(".stages__block-added-el.eleven").classList.remove('active');
    document.querySelector(".stages__description.eleven").classList.remove('active');
  }, 150);
  
  var iframeWebsite = document.querySelector(".view__iframe-website");
  iframeWebsite.contentWindow.postMessage(value, 'https://evil-lev.tech')
  
  if (value == 0) {
    if (stages.includes(value)) {
      dateSlider.classList.add('first');
      stageSlider.classList.add('first');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.first").classList.add('active');
        document.querySelector(".stages__description.first").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.first").classList.add('opacity');
        document.querySelector(".stages__description.first").classList.add('opacity');
      }, 300);
      // action on screan
        document.querySelector(".view__iframe-website.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.add('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 10;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 10) {
    if (stages.includes(value)) {
      dateSlider.classList.add('second');
      stageSlider.classList.add('second');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.second").classList.add('active');
        document.querySelector(".stages__description.second").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.second").classList.add('opacity');
        document.querySelector(".stages__description.second").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.add('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 20;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 20) {
    if (stages.includes(value)) {
      dateSlider.classList.add('third');
      stageSlider.classList.add('third');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.third").classList.add('active');
        document.querySelector(".stages__description.third").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.third").classList.add('opacity');
        document.querySelector(".stages__description.third").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 30;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 30) {
    if (stages.includes(value)) {
      dateSlider.classList.add('four');
      stageSlider.classList.add('four');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.four").classList.add('active');
        document.querySelector(".stages__description.four").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.four").classList.add('opacity');
        document.querySelector(".stages__description.four").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 40;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 40) {
    if (stages.includes(value)) {
      dateSlider.classList.add('five');
      stageSlider.classList.add('five');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.five").classList.add('active');
        document.querySelector(".stages__description.five").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.five").classList.add('opacity');
        document.querySelector(".stages__description.five").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 50;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 50) {
    if (stages.includes(value)) {
      dateSlider.classList.add('six');
      stageSlider.classList.add('six');
      document.querySelector(".stages__block-added-el.six").classList.add('active');
      document.querySelector(".stages__description.six").classList.add('active');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.six").classList.add('active');
        document.querySelector(".stages__description.six").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.six").classList.add('opacity');
        document.querySelector(".stages__description.six").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 60;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 60) {
    if (stages.includes(value)) {
      dateSlider.classList.add('seven');
      stageSlider.classList.add('seven');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.seven").classList.add('active');
        document.querySelector(".stages__description.seven").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.seven").classList.add('opacity');
        document.querySelector(".stages__description.seven").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 70;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 70) {
    if (stages.includes(value)) {
      dateSlider.classList.add('eight');
      stageSlider.classList.add('eight');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.eight").classList.add('active');
        document.querySelector(".stages__description.eight").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.eight").classList.add('opacity');
        document.querySelector(".stages__description.eight").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 80;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 80) {
    if (stages.includes(value)) {
      dateSlider.classList.add('nine');
      stageSlider.classList.add('nine');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.nine").classList.add('active');
        document.querySelector(".stages__description.nine").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.nine").classList.add('opacity');
        document.querySelector(".stages__description.nine").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 90;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 90) {
    if (stages.includes(value)) {
      dateSlider.classList.add('ten');
      stageSlider.classList.add('ten');
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.ten").classList.add('active');
        document.querySelector(".stages__description.ten").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.ten").classList.add('opacity');
        document.querySelector(".stages__description.ten").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 100;
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 100) {
    if (stages.includes(value)) {
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.eleven").classList.add('active');
        document.querySelector(".stages__description.eleven").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.eleven").classList.add('opacity');
        document.querySelector(".stages__description.eleven").classList.add('opacity');
      }, 300);
      // action on screan
      document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
      document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = Math.max(...stagesToNum);
      var event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  }
}, false);

// loading webpage iframe
const iframePc = document.querySelector(".view__block-pc");
const iframePhone = document.querySelector(".view__block-mobile");
loadIframe = function() {
  const iframeUrlPc = iframePc.dataset.srcWebsite;
  const iframeUrlPhone = iframePhone.dataset.srcWebsite;
  if (iframeUrlPc) {
    iframePc.insertAdjacentHTML(
      "beforeend",
      '<iframe class="view__pc-iframe view__iframe-website pc onscrean" src="' + iframeUrlPc + '"></iframe>'
    )
  }

  if (iframeUrlPhone) {
    iframePhone.insertAdjacentHTML(
      "beforeend",
      '<iframe class="view__iphone-iframe view__iframe-website phone onscrean" src="' + iframeUrlPhone + '"></iframe>'
    )
  }
}

// loading figma
loadFigmaIframe = function() {
  const iframeUrlFigmaPc = iframePc.dataset.srcFigma;
  const iframeUrlFigmaPhone = iframePhone.dataset.srcFigma;
  if (iframeUrlFigmaPc) {
    iframePc.insertAdjacentHTML(
      "beforeend",
      '<iframe class="view__iframe-figma pc" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="' + iframeUrlFigmaPc + '" allowfullscreen></iframe>'
    )
  }

  if (iframeUrlFigmaPhone) {
    iframePhone.insertAdjacentHTML(
      "beforeend",
      '<iframe class="view__iframe-figma phone" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="' + iframeUrlFigmaPhone + '" allowfullscreen></iframe>'
    )
  }
}

// loading background
$(window).on('load', function () {
  whenPageIsLoaded = function() {
    loadIframe()
    loadFigmaIframe()
  }
  setTimeout(whenPageIsLoaded, 100);
})

// full screen
$('.view__btn-full-screen-pc,.view__bg-shadow').click(function(){
  $('.view__block-pc,.view__btn-full-screen-pc,.view__container,.view__bg-shadow').toggleClass('active');
})
$('.view__animated-iland,.view__bg-shadow1').click(function(){
  $('.view__block-mobile,.view__img-iphone,.view__bg-shadow1').toggleClass('active');
})