const slideContainer = document.querySelector('.slide-container'); 
const eraser = document.querySelector('.eraser'); 
const intervalTime = 7500; 
const eraserTime = 1000; 
const left = document.querySelector('button#left'); 
const right = document.querySelector('button#right'); 

const slides = [...document.querySelectorAll('.slide')]; 

function changeSlide() {
  let currentActive = slides.filter(s => s.classList.contains('active'))[0]; 
  let currentIndex = slides.indexOf(currentActive); 
  // activate eraser
  eraser.classList.add('active'); 
  setTimeout(() => {
    // remove active class from current slide, add active class to next slide, then remove eraser
    currentActive.classList.remove('active'); 
    let nextIndex = (currentIndex + 1 == slides.length) ? 0 : currentIndex+1; 
    slides[nextIndex].classList.add('active'); 
    eraser.classList.remove('active'); 
  }, eraserTime); 
}

function previous() {
  // clear interval 
  window.clearInterval(sliderInterval); 
  // identify current active slide 
  let currentActive = slides.filter(s => s.classList.contains('active'))[0]; 
  let currentIndex = slides.indexOf(currentActive); 
  // activate eraser
  eraser.classList.add('active'); 
  setTimeout(() => {
    // remove active class from current slide, add active class to previous slide, then remove eraser
    currentActive.classList.remove('active'); 
    let previousIndex = (currentIndex == 0) ? (slides.length -1) : currentIndex-1; 
    slides[previousIndex].classList.add('active'); 
    eraser.classList.remove('active'); 
  }, eraserTime); 
  // reset interval 
  sliderInterval = window.setInterval(changeSlide, intervalTime);
}

function next() {
  // clear interval 
  window.clearInterval(sliderInterval); 
  // identify current active slide 
  let currentActive = slides.filter(s => s.classList.contains('active'))[0]; 
  let currentIndex = slides.indexOf(currentActive); 
  // activate eraser
  eraser.classList.add('active'); 
  setTimeout(() => {
    // remove active class from current slide, add active class to next slide, then remove eraser
    currentActive.classList.remove('active'); 
    let nextIndex = (currentIndex + 1 == slides.length) ? 0 : currentIndex+1; 
    slides[nextIndex].classList.add('active'); 
    eraser.classList.remove('active'); 
  }, eraserTime); 
  // reset interval 
  sliderInterval = window.setInterval(changeSlide, intervalTime); 
}




var sliderInterval = window.setInterval(changeSlide, intervalTime); 
left.addEventListener('click', previous); 
right.addEventListener('click', next); 