const slideValue = document.querySelector('.slider__span');
const inputSlider = document.querySelector('.slider__input');
const inputBg = document.querySelector(".slider__bg-1")
const dateSlider = document.querySelector(".stages__date-block-slider")
const stageSlider = document.querySelector(".stages__stage-title-slider")
const stageAddedEl = document.querySelector(".stages__block-added-el")
const stageDesc = document.querySelector(".stages__description")
let iframeWebsite = ""
let value = todayStage;
let stagesToNum = stages.map(Number)

let iframeWebpageLoaded = false
let iframeFigmaLoaded = false
// loading webpage iframe
const iframePc = document.querySelector(".view__block-pc");
const iframePhone = document.querySelector(".view__block-mobile");
loadIframe = function() {
  const iframeUrlPc = iframePc.dataset.srcWebsite;
  const iframeUrlPhone = iframePhone.dataset.srcWebsite;
  if (iframeUrlPc) {
    iframePc.insertAdjacentHTML(
      "beforeend",
      '<iframe class="view__pc-iframe view__iframe-website pc" src="' + iframeUrlPc + '"></iframe>'
    )
  }
  if (iframeUrlPhone) {
    iframePhone.insertAdjacentHTML(
      "beforeend",
      '<iframe class="view__iphone-iframe view__iframe-website phone" src="' + iframeUrlPhone + '"></iframe>'
    )
  }
  iframeWebpageLoaded = true
  iframeWebsite = document.querySelector(".view__iframe-website");
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
  iframeFigmaLoaded = true
}

// now stage to screen
inputSlider.value = todayStage;
slideValue.textContent = todayStage;
slideValue.style.left = (todayStage) + "%";
inputBg.style.width = (todayStage) + "%";
inputSlider.value = todayStage;

if (todayStage == 0) {
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.remove('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.add('onscrean');
  }
} if (todayStage == 10) {
  if (!iframeFigmaLoaded) {loadFigmaIframe()}
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.remove('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.phone").classList.add('onscrean');
    document.querySelector(".view__iframe-figma.pc").classList.add('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 20) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 30) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 40) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 50) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 60) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 70) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 80) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 90) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
} if (todayStage == 100) {
  if (!iframeWebpageLoaded) {loadIframe()}
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
  setTimeout(() => {
    document.querySelector(".stages__block-added-el.eleven").classList.add('active');
    document.querySelector(".stages__description.eleven").classList.add('active');
  }, 151);
  setTimeout(() => {
    document.querySelector(".stages__block-added-el.eleven").classList.add('opacity');
    document.querySelector(".stages__description.eleven").classList.add('opacity');
  }, 300);
  // action on screens
  if (iframeWebpageLoaded) {
    document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
    document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
  }
  if (iframeFigmaLoaded) {
    document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
  }
  if (true) {
    document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
    document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
  }
}

// adding stages dots to slider
if (stagesToNum.includes(0)) {
  $('.slider__dot.first').addClass('active')
} 
if (stagesToNum.includes(10)) {
  $('.slider__dot.second').addClass('active')
} 
if (stagesToNum.includes(20)) {
  $('.slider__dot.third').addClass('active')
} 
if (stagesToNum.includes(30)) {
  $('.slider__dot.four').addClass('active')
} 
if (stagesToNum.includes(40)) {
  $('.slider__dot.five').addClass('active')
} 
if (stagesToNum.includes(50)) {
  $('.slider__dot.six').addClass('active')
} 
if (stagesToNum.includes(60)) {
  $('.slider__dot.seven').addClass('active')
} 
if (stagesToNum.includes(70)) {
  $('.slider__dot.eight').addClass('active')
} 
if (stagesToNum.includes(80)) {
  $('.slider__dot.nine').addClass('active')
} 
if (stagesToNum.includes(90)) {
  $('.slider__dot.ten').addClass('active')
} 
if (stagesToNum.includes(100)) {
  $('.slider__dot.eleven').addClass('active')
}

if (todayStage == 0) {
  $('.slider__dot.first').addClass('now')
} if (todayStage == 10) {
  $('.slider__dot.second').addClass('now')
} if (todayStage == 20) {
  $('.slider__dot.third').addClass('now')
} if (todayStage == 30) {
  $('.slider__dot.four').addClass('now')
} if (todayStage == 40) {
  $('.slider__dot.five').addClass('now')
} if (todayStage == 50) {
  $('.slider__dot.six').addClass('now')
} if (todayStage == 60) {
  $('.slider__dot.seven').addClass('now')
} if (todayStage == 70) {
  $('.slider__dot.eight').addClass('now')
} if (todayStage == 80) {
  $('.slider__dot.nine').addClass('now')
} if (todayStage == 90) {
  $('.slider__dot.ten').addClass('now')
} if (todayStage == 100) {
  $('.slider__dot.eleven').addClass('now')
}

// doing when sliding
window.addEventListener('input', function (e) {
  value = inputSlider.value;
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.remove('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.add('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 10;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 10) {
    if (stages.includes(value)) {
      if (!iframeFigmaLoaded) {loadFigmaIframe()}
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.remove('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.phone").classList.add('onscrean');
        document.querySelector(".view__iframe-figma.pc").classList.add('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 20;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 20) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 30;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 30) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 40;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 40) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 50;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 50) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 60;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 60) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 70;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 70) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 80;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 80) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 90;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 90) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
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
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = 100;
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  } if (value == 100) {
    if (stages.includes(value)) {
      if (!iframeWebpageLoaded) {loadIframe()}
      iframeWebsite.contentWindow.postMessage(value, thisDomain)
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.eleven").classList.add('active');
        document.querySelector(".stages__description.eleven").classList.add('active');
      }, 151);
      setTimeout(() => {
        document.querySelector(".stages__block-added-el.eleven").classList.add('opacity');
        document.querySelector(".stages__description.eleven").classList.add('opacity');
      }, 300);
      // action on screens
      if (iframeWebpageLoaded) {
        document.querySelector(".view__iframe-website.pc").classList.add('onscrean');
        document.querySelector(".view__iframe-website.phone").classList.add('onscrean');
      }
      if (iframeFigmaLoaded) {
        document.querySelector(".view__iframe-figma.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-figma.phone").classList.remove('onscrean');
      }
      if (true) {
        document.querySelector(".view__iframe-briefing.pc").classList.remove('onscrean');
        document.querySelector(".view__iframe-briefing.phone").classList.remove('onscrean');
      }
    } else {
      // chenge value to next when this value is NOT using
      inputSlider.value = Math.max(...stagesToNum);
      const event = new MouseEvent("input", {
        bubbles: true,
        cancelable: true,
      });
      inputSlider.dispatchEvent(event);
    }
  }
}, false);

// sending value every 0.5s
function postMessageToIframe() {
  iframeWebsite.contentWindow.postMessage(value, thisDomain)
}
setInterval(postMessageToIframe, 500);

// loading background
$(window).on('load', function () {
  whenPageIsLoaded = function() {
    if (!iframeWebpageLoaded) {loadIframe()}
    if (!iframeFigmaLoaded) {loadFigmaIframe()}
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