const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');  
var on = false; 

function animatePanels() {
  if (!on) {
    leftPanel.classList.add('move-right'); 
    rightPanel.classList.add('move-left'); 
    leftPanel.classList.remove('return-left'); 
    rightPanel.classList.remove('return-right'); 
    on = true; 
  } else {
    leftPanel.classList.add('return-left'); 
    rightPanel.classList.add('return-right'); 
    leftPanel.classList.remove('move-right'); 
    rightPanel.classList.remove('move-left'); 
    on = false; 
  }
}

leftPanel.addEventListener('click', animatePanels); 
rightPanel.addEventListener('click', animatePanels); 