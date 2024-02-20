function activateButton(button) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  function iniciarCronometro() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      document.getElementById("contador").innerHTML = formatTime(elapsedTime);
    }, 5);
  }
  
  function pausarCronometro() {
    clearInterval(timerInterval);
  }
  
  function resetarCronometro() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("contador").innerHTML = "00:00:00";
  }
  
  function formatTime(time) {
    let hours = Math.floor(time / 3600000).toString().padStart(2, "0");
    let minutes = Math.floor((time / 60000) % 60).toString().padStart(2, "0");
    let seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  