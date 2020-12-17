window.onload = function() {
  
  // Consts
  const firstAnimationMsDuration = 4250;
  const backdrop = document.querySelector('div.backdrop');

  // When first animation ends...we must remove backdrop
  setTimeout(function() {
    backdrop.parentNode.removeChild(backdrop);
  }, firstAnimationMsDuration);
  
};