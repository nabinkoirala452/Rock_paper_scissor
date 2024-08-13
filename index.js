let compImg = document.querySelector(".comp-img");
let startBtn = document.querySelector(".start");
let userimg = document.querySelectorAll(".user img");
let winrMsg = document.querySelector(".winr-msg");
let winc = document.querySelector(".winOfcomp");
let winu = document.querySelector(".winOfuser");

var images = ['./images/scissors.png', './images/paper.png', './images/rock.png'];
var intervalId;
var randomIndex;
let winofcomp = 0;
let winofuser = 0;
let gameActive = false; // Flag to track if the game is active

// Add event listeners to images
userimg.forEach((img, index) => {
    img.addEventListener("click", () => {
        if (gameActive) {
            choose(index);
        }
    });
});

function choose(index) {
    stopGame();
    let winr = false;
    if (randomIndex == index) {
        winrMsg.innerText = "Draw";
    } else if (index == 0 && randomIndex == 1) {
        winr = true;
    } else if (index == 1 && randomIndex == 2) {
        winr = true;
    } else if (index == 2 && randomIndex == 0) {
        winr = true;
    } else {
        winrMsg.innerText = "Computer won";
        winofcomp++;
        winc.innerText = `win:${winofcomp}`;
    }
    if (winr) {
        winrMsg.innerText = "You won";
        winofuser++;
        winu.innerText = `win:${winofuser}`;
    }
    gameActive = false; // Deactivate the game
}

startBtn.addEventListener("click", startGame);

function startGame() {
    gameActive = true; // Activate the game
    intervalId = setInterval(changeImage, 0.5);
}

function changeImage() {
    randomIndex = Math.floor(Math.random() * images.length);
    compImg.src = images[randomIndex];
}

function stopGame() {
    clearInterval(intervalId);
}

document.querySelector(".reset").addEventListener("click", () => {
    location.reload();
});
