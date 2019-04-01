// Update clock from 1-clock.html

// 5.Use setInterval to refresh the elements 
window.setInterval(() => {

  // 0. Create a date element with the current time
  const currentTime = new Date();

  // Change the DOM element hour
  // 1. Get the hours element and push it to the DOM
  const hour = document.getElementById('hours');
  const currentHour = currentTime.getHours()
  if (parseInt(hour.innerHTML) !== currentHour){
    hour.innerHTML = currentHour;
    console.log('hours updated')
  };

  // 2. Get the minutes element and push it to the DOM
  const minutes = document.getElementById('minutes');
  console.l
  const currentMinutes = fillZero(currentTime.getMinutes());
  if (parseInt(minutes.innerHTML) !== currentMinutes){
    minutes.innerHTML = currentMinutes;
    console.log('minutes updated')
  };

  // 3. Get the minutes element and push it to the DOM
  const seconds = document.getElementById('seconds');
  const currentSeconds = fillZero(currentTime.getSeconds());
  if (parseInt(seconds.innerHTML) !== currentSeconds){
    seconds.innerHTML = currentSeconds;
    console.log('seconds updated')
  }

  // 4. Function to fill up with 0s
  function fillZero(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number;
    }
  }
}, 1000)
