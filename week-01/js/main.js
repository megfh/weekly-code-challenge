var signin = true; 

const signinForm = document.getElementById("signinForm"); 
const signupForm = document.getElementById("signupForm"); 
const signinOverlay = document.getElementById("signinOverlay"); 
const signupOverlay = document.getElementById("signupOverlay"); 
const signinButton = document.querySelector("#signinOverlay button"); 
const signupButton = document.querySelector("#signupOverlay button"); 

function signUp(e) {
  signinForm.classList.add("hidden"); 
  signinOverlay.classList.remove("hidden"); 
  signupForm.classList.remove("hidden"); 
  signupOverlay.classList.add("hidden"); 
  console.log("animating");
  
  // signinForm.classList.add("animateSignInForm"); 
  // signupOverlay.classList.add("animateSignUpOverlay"); 
}

function signIn(e) {
  signinForm.classList.remove("hidden"); 
  signinOverlay.classList.add("hidden"); 
  signupForm.classList.add("hidden"); 
  signupOverlay.classList.remove("hidden"); 
}

signinButton.addEventListener("click", signIn); 
signupButton.addEventListener("click", signUp); 

