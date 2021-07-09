// Why are you looking here???? (DM UserDave#1337 with the phrase rotten_eggs for ego boosting)
// No prompt here


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


function handleClicks(count)
{
    console.log(click_count);
    var prompt_element = document.getElementById("random_prompt");
    if(click_count  === 1)
    {
        prompt_element.innerHTM= "Keep clicking and you will get the prompt!";
    }
    if(click_count === 3)
    {
        prompt_element.innerHTML="Keep going!";
    }
    if(click_count === 5)
    {
        prompt_element.innerHTML="You must really want to see the prompt...";
    }
    if(click_count === 8)
    {
        prompt_element.innerHTML="So close!!!";
    }
    if(click_count === 10)
    {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}

var click_count = 0
var rot = 360;
title_spinner = document.getElementById("title_thingy")
title_spinner.addEventListener("click", function() {
    click_count += 1;
    handleClicks(click_count);
    title_spinner.style = 'transform: rotate(' + rot + 'deg)';
  rot += 360;
});