"use strict";

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll(".slide-in");
// console.log(images);

function slide() {
  images.forEach((slideimages) => {
    const slideImage =
      window.scrollY + window.innerHeight - slideimages.height / 2;
    // console.log(slideImage);
    const bottomOfImage = slideimages.offsetTop + slideimages.height;
    // console.log(bottomOfImage);
    const isImageShown = slideImage > slideimages.offsetTop;
    const notScrolled = window.scrollY < bottomOfImage;
    if (isImageShown && notScrolled) {
      slideimages.classList.add("active");
    } else {
      slideimages.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(slide));
