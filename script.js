const container = document.getElementById("container");
//buttons
const GryffindorButton = document.getElementById("GryffindorButton");
const HufflepuffButton = document.getElementById("HufflepuffButton");
const RavenclawButton = document.getElementById("RavenclawButton");
const SlytherinButton = document.getElementById("SlytherinButton");
const body = document.querySelector('body');
const password = document.getElementById("password");
const conPassword = document.getElementById("con-password");
const error = document.querySelector('.error');
const passwords = document.querySelectorAll(".password")
const hidden = document.querySelector(".hidden");
// const firstname = document.getElementById("First-Name")
//defult values 
let currentHouse = "gryffindor";

// Event Listeners
function houseChanger(housename) {
    container.classList.remove(currentHouse);
    container.classList.add(housename);
    // body.classList.remove(currentHouse);
    // body.classList.add(housename);
    currentHouse = housename;
    hidden.value = housename;
}
GryffindorButton.addEventListener('mousedown', () => houseChanger("gryffindor"));
HufflepuffButton.addEventListener('mousedown', () => houseChanger('Hufflepuff'));
RavenclawButton.addEventListener('mousedown', () => houseChanger('ravinclaw'));
SlytherinButton.addEventListener('mousedown', () => houseChanger('Slytherin'));


passwords.forEach(function (element) {
    element.addEventListener('blur', () => {
        let ps1 = password.value;
        let ps2 = conPassword.value;
        let flag = 0;
        if (ps1.length != ps2.length) {
            console.log("broken");
            error.innerText = "PASSWORD MUST BE THE SAME LENGTH"
        }
        else {
            for (let i = 0; i < ps1.length; i++) {
                if (ps1[i] != ps2[i]) {
                    flag++;
                };
            };
            if (flag === 0) {
                console.log("works");
                error.innerText = ""

            }
            if (flag !== 0) {
                console.log("not the same")
                error.innerText = "PASSWORDS DON'T MATCH"

            }
        }
        console.log(ps1);
        console.log(ps2);
    })
})