//day row divs
let mon = document.getElementById('mon');
let tue = document.getElementById('tue');
let wed = document.getElementById('wed');
let thu = document.getElementById('thu');
let fri = document.getElementById('fri');

//individual cell divs
let row11 = document.getElementById('row-one-one');
let row12 = document.getElementById('row-one-two');
let row13 = document.getElementById('row-one-three');
let row14 = document.getElementById('row-one-four');
let row15 = document.getElementById('row-one-five');

let row21 = document.getElementById('row-two-one');
let row22 = document.getElementById('row-two-two');
let row23 = document.getElementById('row-two-three');
let row24 = document.getElementById('row-two-four');
let row25 = document.getElementById('row-two-five');

let row31 = document.getElementById('row-three-one');
let row32 = document.getElementById('row-three-two');
let row33 = document.getElementById('row-three-three');
let row34 = document.getElementById('row-three-four');
let row35 = document.getElementById('row-three-five');

let row41 = document.getElementById('row-four-one');
let row42 = document.getElementById('row-four-two');
let row43 = document.getElementById('row-four-three');
let row44 = document.getElementById('row-four-four');
let row45 = document.getElementById('row-four-five');

let row51 = document.getElementById('row-five-one');
let row52 = document.getElementById('row-five-two');
let row53 = document.getElementById('row-five-three');
let row54 = document.getElementById('row-five-four');
let row55 = document.getElementById('row-five-five');


//buttons
let startButton = document.getElementById('start');



//global variables
let schoolSubjects = ['P.E', 'Science', 'Math', 'English', 'Social Studies', 'Japanese', 'Calligraphy', 'Moral Education', 'Home Economics', 'Arts & Crafts', 'Music']





//event functions
let randomNumber = function() {
    number = Math.floor(Math.random() * 11)
    return number;
};

let chooseSubject = function() {
    let subject = schoolSubjects[randomNumber()];
    return subject;
};

let DayColorChange = function() {
    mon.style.backgroundColor = 'gray';
    tue.style.backgroundColor = 'orange';
    wed.style.backgroundColor = 'blue';
    thu.style.backgroundColor = 'green';
    fri.style.backgroundColor = 'gold';
}



//button hover experiment
const buttonColorChange = function(button) {
    button.onmouseover = function(x) {
    x.target.style.backgroundColor = 'purple';
    }
};

const buttonReturn = function(button) {
    button.onmouseleave = function(x) {
    x.target.style.backgroundColor = 'teal';
    }
};

const hoverOverButton = function(button) {
    buttonColorChange(button);
    buttonReturn(button);
}

hoverOverButton(startButton);




//start button click 
startButton.onclick = DayColorChange;

startButton.addEventListener('click', function() {

    row11.innerHTML = chooseSubject();
    row12.innerHTML = chooseSubject();
    row13.innerHTML = chooseSubject();
    row14.innerHTML = chooseSubject();
    row15.innerHTML = chooseSubject();

    row21.innerHTML = chooseSubject();
    row22.innerHTML = chooseSubject();
    row23.innerHTML = chooseSubject();
    row24.innerHTML = chooseSubject();
    row25.innerHTML = chooseSubject();

    row31.innerHTML = chooseSubject();
    row32.innerHTML = chooseSubject();
    row33.innerHTML = chooseSubject();
    row34.innerHTML = chooseSubject();
    row35.innerHTML = chooseSubject();

    row41.innerHTML = chooseSubject();
    row42.innerHTML = chooseSubject();
    row43.innerHTML = chooseSubject();
    row44.innerHTML = chooseSubject();
    row45.innerHTML = chooseSubject();

    row51.innerHTML = chooseSubject();
    row52.innerHTML = chooseSubject();
    row53.innerHTML = chooseSubject();
    row54.innerHTML = chooseSubject();
    row55.innerHTML = chooseSubject();
});

//jquery experiment
$(document).ready(() => {
    const $theGame = $("#the-game");
    const $startButton = $("#start");
    const $row11 = ("#row-one-one");

    $theGame.hide();

    $startButton.on('click', () => {
        $theGame.show();
        $startButton.text('Again?');
    })
})

