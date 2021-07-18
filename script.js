function annouce_end()
{
  var clock = document.getElementById("clockdiv");
  clock.innerHTML= "";
  var title = document.getElementById("title")
  title.innerHTML = '<img src="./GameJamLogo-100.svg" style="height: 2em; padding-right:0.2em ;">';
  title.innerHTML += 'GAME JAM HAS ENDED!';
  title.innerHTML += '<img src="./GameJamLogo-100.svg" style="height: 2em; padding-right:0.2em ;">';
  var submit_button = document.getElementById("submit_button");
  submit_button.innerHTML = "";
}

function getTimeRemaining(endtime) {
  var d = new Date();

  var localTime = d.getTime();

  var localOffset = 0;

  var utc = localTime + localOffset;

  var current = new Date(utc)
  const total = Date.parse(endtime) - Date.parse(current);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  if (seconds < 0)
  {
    annouce_end();
  }
  return {
    total,
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

var deadline = new Date(Date.UTC(2021,6,18,20,0,0));
var seconds_left = getTimeRemaining(deadline).seconds;

if(seconds_left > 0)
{
  initializeClock('clockdiv', deadline);
}
else{
  annouce_end();
}