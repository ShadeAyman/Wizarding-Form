const container = document.getElementById("container");
//buttons
const GryffindorButton = document.getElementById("GryffindorButton");
const HufflepuffButton = document.getElementById("HufflepuffButton");
const RavenclawButton = document.getElementById("RavenclawButton");
const SlytherinButton = document.getElementById("SlytherinButton");


//defult values 
let currentHouse = "gryffindor";



// Event Listeners

// HufflepuffButton.addEventListener('click', () => container.setAttribute('class', 'Hufflepuff'))
GryffindorButton.addEventListener('mousedown', () => {
    container.classList.remove(currentHouse);
    container.classList.add('gryffindor');
    currentHouse = 'gryffindor';
});
HufflepuffButton.addEventListener('mousedown', () => {
    container.classList.remove(currentHouse);
    container.classList.add('Hufflepuff');
    currentHouse = 'Hufflepuff';
});
RavenclawButton.addEventListener('mousedown', () => {
    container.classList.remove(currentHouse);
    container.classList.add('ravinclaw');
    currentHouse = 'ravinclaw';
});
SlytherinButton.addEventListener('mousedown', () => {
    container.classList.remove(currentHouse);
    container.classList.add('Slytherin');
    currentHouse = 'Slytherin';
});

// container.addEventListener('transitionend', function (e) {
//     console.log('Look I didz a transition!!!111');
// });


//you can make a currentHouse var that disaple the old class and gets updated with eatch click 