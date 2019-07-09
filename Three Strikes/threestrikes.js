//day row divs
let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');

//buttons
let startButton = document.getElementById('start');

let DayColorChange = function() {
    mon.style.backgroundColor = 'gray';
    tue.style.backgroundColor = 'orange';
    wed.style.backgroundColor = 'blue';
    thu.style.backgroundColor = 'green';
    fri.style.backgroundColor = 'gold';
}

startButton.onmouseover = function() {
    startButton.style.backgroundColor = 'purple';
}

let startButtonTextChange = function() {
    startButton.innerHTML = "Fight!";
}

startButton.onclick = DayColorChange;

startButton.addEventListener('click', startButtonTextChange);


