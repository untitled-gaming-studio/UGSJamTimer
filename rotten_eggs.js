// Why are you looking here???? (DM UserDave#1337 with the phrase rotten_eggs for ego boosting)

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

var possible_prompts = ["Welcome to gamejam",
    "Be flexable with your plan",
    "Errors will compile",
    "The logs will be vile",
    "Bring your head to your desk and slam",
    "May the odds be ever in your favor",
    "May the jam be with you",
    "Good luck and have fun",
    "A bug is a feature"]

var prompt_element = document.getElementById("random_prompt");
prompt_element.innerHTML = randomChoice(possible_prompts)

var rot = 360;

title_spinner = document.getElementById("title_thingy")
title_spinner.addEventListener("click", function() {
    console.log("click")
    title_spinner.style = 'transform: rotate(' + rot + 'deg)';
  rot += 360;
});