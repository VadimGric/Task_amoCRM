const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    
    
    let startCountdown = 
    setInterval(function() {  
      
      
      
      
      
    let secCountdown = '00'
    
    let minCountdown = '00'
    
    let  hourCountdown = '00'
   
      if (seconds < 60 ) {
         secCountdown = seconds
       } 
       if  (seconds > 59 && seconds < 3600) {
         minCountdown = Math.floor(seconds / 60)
         secCountdown = seconds - (minCountdown*60)
         
          
       }
        
       if (seconds > 3600 && seconds < 86400) {
         hourCountdown = Math.floor(seconds / 3600)
         
         minCountdown = Math.floor((seconds - (hourCountdown*3600))/60)
         secCountdown = seconds - ((hourCountdown*3600) + (minCountdown*60))
        
       }
       seconds--;
       
     if (seconds == 0) {
        clearInterval(startCountdown)
      } else {seconds}
      
    
    
    
    timerEl.innerHTML = `${hourCountdown}:${minCountdown}:${secCountdown}` 
    
  

    
    
}, 1000);};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
