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
    
    let minCountdown = '0'
    
    let  hourCountdown = '0'
   
      if (seconds < 60 ) {
         secCountdown = seconds
       } 
       if  (seconds > 59 && seconds < 3600) {
         minCountdown = Math.floor(seconds / 60)
         secCountdown = seconds - (minCountdown*60)
         
          
       }
        
       if (seconds > 3599 ) {
         hourCountdown = Math.floor(seconds / 3600)
         
         minCountdown = Math.floor((seconds - (hourCountdown*3600))/60)
         secCountdown = seconds - ((hourCountdown*3600) + (minCountdown*60))
        
       }
       seconds--;
       
     if (seconds == 0) {
        clearInterval(startCountdown)
      } else {seconds}
      
    
    
    timerEl.innerHTML = `${hourCountdown=(hourCountdown<10)? '0' + hourCountdown:hourCountdown}:${minCountdown=(minCountdown<10)? '0' + minCountdown:minCountdown}:${secCountdown=(secCountdown<10)? '0' + secCountdown:secCountdown}`
  
  

    
    
}, 1000);};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.split(/\D/).join('')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  
  animateTimer(seconds);
  
  

  inputEl.value = '';
});
