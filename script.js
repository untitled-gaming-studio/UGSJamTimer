function getTimeRemaining(endtime) {
  var current = new Date();
  console.log("current : " + current +"\ndeadline : "+ deadline)

  const seconds = current.getSeconds() - deadline.getSeconds();
  const minutes = current.getMinutes() - deadline.getMinutes();
  const hours = deadline.getHours() - current.getHours();
  const days = deadline.getDay() - current.getDay();
  
  return {
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.UTC(2021,6,9,21,0,0));
initializeClock('clockdiv', deadline);