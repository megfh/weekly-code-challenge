var signin = true; 

const signinForm = document.getElementById("signinForm"); 
const signupForm = document.getElementById("signupForm"); 
const signinOverlay = document.getElementById("signinOverlay"); 
const signupOverlay = document.getElementById("signupOverlay"); 
const signinButton = document.querySelector("#signinOverlay button"); 
const signupButton = document.querySelector("#signupOverlay button"); 
const overlayContainer = document.querySelector('.overlay-container'); 
const formContainer = document.querySelector('.form-container'); 

function signUp(e) {
  // remove initial hidden class
  signinOverlay.classList.remove("hidden"); 
  signupForm.classList.remove("hidden"); 
  // remove previous animations
  signinForm.classList.remove('show'); 
  signupForm.classList.remove('hide'); 
  signupOverlay.classList.remove('show'); 
  signinOverlay.classList.remove('hide'); 
  overlayContainer.classList.remove('return-right'); 
  formContainer.classList.remove('return-left'); 

  // add new animations
  signinForm.classList.add('hide'); 
  signupForm.classList.add('show'); 
  signupOverlay.classList.add('hide'); 
  signinOverlay.classList.add('show'); 
  overlayContainer.classList.add('move-left'); 
  formContainer.classList.add('move-right'); 
}

function signIn(e) {
  // remove previous animations
  signinForm.classList.remove('hide'); 
  signupForm.classList.remove('show'); 
  signupOverlay.classList.remove('hide'); 
  signinOverlay.classList.remove('show'); 
  overlayContainer.classList.remove('move-left'); 
  formContainer.classList.remove('move-right'); 
  // add current animations 
  signinForm.classList.add('show'); 
  signupForm.classList.add('hide'); 
  signupOverlay.classList.add('show'); 
  signinOverlay.classList.add('hide'); 
  overlayContainer.classList.add('return-right'); 
  formContainer.classList.add('return-left'); 
}

signinButton.addEventListener("click", signIn); 
signupButton.addEventListener("click", signUp); 

