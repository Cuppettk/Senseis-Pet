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
let schoolSubjects = ['P.E.', 'Science', 'Math', 'English', 'Social Studies', 'Japanese', 'Calligraphy', 'Moral Education', 'Home Economics', 'Arts & Crafts', 'Music']





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

let subjectColor = function(cell) {
    if (cell.innerHTML === 'Science') {
        cell.style.backgroundColor = "rgb(135, 215, 54, 0.4)";
    } else if (cell.innerHTML === 'P.E.') {
        cell.style.backgroundColor = "rgb(222, 68, 68, 0.4)";
    } else if (cell.innerHTML === 'English') {
        cell.style.backgroundColor = "rgb(68, 222, 222, 0.4)";
    } else if (cell.innerHTML === 'Math') {
        cell.style.backgroundColor = "rgb(145, 112, 178, 0.4)";
    } else if (cell.innerHTML === 'Social Studies') {
        cell.style.backgroundColor = "rgb(191, 63, 127, 0.4)";
    } else if (cell.innerHTML === 'Japanese') {
        cell.style.backgroundColor = "rgb(250, 240, 101, 0.4)";
    } else if (cell.innerHTML === 'Calligraphy') {
        cell.style.backgroundColor = "rgbrgb(0, 215, 219, 0.4)";
    } else if (cell.innerHTML === 'Moral Education') {
        cell.style.backgroundColor = "rgb(222, 68, 68, 0.4)";
    } else if (cell.innerHTML === 'Home Economics') {
        cell.style.backgroundColor = "rgb(222, 68, 68, 0.4)";
    } else if (cell.innerHTML === 'Arts & Crafts') {
        cell.style.backgroundColor = "rgb(222, 68, 68, 0.4)";
    }  else {
        cell.style.backgroundColor = "rgb(3, 0, 219, 0.4)";
    };
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
    subjectColor(row11);
    row12.innerHTML = chooseSubject();
    subjectColor(row12);
    row13.innerHTML = chooseSubject();
    subjectColor(row13);
    row14.innerHTML = chooseSubject();
    subjectColor(row14);
    row15.innerHTML = chooseSubject();
    subjectColor(row15);

    row21.innerHTML = chooseSubject();
    subjectColor(row21);
    row22.innerHTML = chooseSubject();
    subjectColor(row22);
    row23.innerHTML = chooseSubject();
    subjectColor(row23);
    row24.innerHTML = chooseSubject();
    subjectColor(row24);
    row25.innerHTML = chooseSubject();
    subjectColor(row25);

    row31.innerHTML = chooseSubject();
    subjectColor(row31);
    row32.innerHTML = chooseSubject();
    subjectColor(row32);
    row33.innerHTML = chooseSubject();
    subjectColor(row33);
    row34.innerHTML = chooseSubject();
    subjectColor(row34);
    row35.innerHTML = chooseSubject();
    subjectColor(row35);

    row41.innerHTML = chooseSubject();
    subjectColor(row41);
    row42.innerHTML = chooseSubject();
    subjectColor(row42);
    row43.innerHTML = chooseSubject();
    subjectColor(row43);
    row44.innerHTML = chooseSubject();
    subjectColor(row44);
    row45.innerHTML = chooseSubject();
    subjectColor(row45);

    row51.innerHTML = chooseSubject();
    subjectColor(row51);
    row52.innerHTML = chooseSubject();
    subjectColor(row52);
    row53.innerHTML = chooseSubject();
    subjectColor(row53);
    row54.innerHTML = chooseSubject();
    subjectColor(row54);
    row55.innerHTML = chooseSubject();
    subjectColor(row55);
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

