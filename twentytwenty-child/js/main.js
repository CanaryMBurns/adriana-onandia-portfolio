window.onload = function() {
  
  // Consts
  const firstAnimationMsDuration = 4250;
  const body = document.querySelector('body');
  const backdrop = document.querySelector('div.backdrop');

  // When first animation ends...we must remove backdrop
  setTimeout(function() {
    body.style.overflowY = 'scroll';
    backdrop.parentNode.removeChild(backdrop);
  }, firstAnimationMsDuration);

};