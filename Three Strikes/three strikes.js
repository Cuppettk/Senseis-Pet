//images
const monPic ="https://i.imgur.com/7WRz8lc.png";
const tuePic ="https://i.imgur.com/gzwxG0W.png";
const wedPic ="https://i.imgur.com/um77BBj.png";
const thuPic ="https://i.imgur.com/wCPbEe8.png";
const friPic ="https://i.imgur.com/DQJY3OK.png";

//random global variables
let schoolSubjects = ['science', 'P.E.', 'math', 'music', 'arts & crafts', 'English', 'Japanese', 'social studies', 'moral education', 'calligraphy', 'home economics'];
const startButton = document.getElementById('startbutton');
const gameSquares = document.getElementById('gamesquare').row;


startButton.onclick = function() {
    gameSquares.style.backgroundColor = 'purple';
}