AOS.init();

const myForm = document.querySelector(".form_1");
const submitBtn1 = document.getElementById("submit_button");
const ignGame = document.getElementById("player-ign");

function submitBtn(){

    const chooseGame = document.getElementById("choose-game");
    const error = document.querySelector(".error");
    let inGameName = document.getElementById("input_name").value;

    inGameName = inGameName.toUpperCase();

    if(inGameName){
        myForm.classList.add("forms");
        chooseGame.classList.add("games");
        ignGame.innerHTML = `Hey ${inGameName}! May your adventures be legendary!`; 
    }
    else if(inGameName === ""){
        error.classList.add("errorText");
    }
}
   


const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    let inGameName2 = document.getElementById("input_name").value;
    inGameName2 = inGameName2.toUpperCase();

    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = '';

    if(playerChoice === computerChoice){
        result = "❗ IT'S A TIE ❗";
    }
    else {
        switch(playerChoice){
            case 'rock':
                result = computerChoice === 'scissors' ? '🎉 YOU WIN 🎉' : '💔 YOU LOSE 💔';
                break;
            case 'paper':
                result = computerChoice === 'rock' ? '🎉 YOU WIN 🎉' : '💔 YOU LOSE 💔';
                break;
            case 'scissors':
                result = computerChoice === 'paper' ? '🎉 YOU WIN 🎉' : '💔 YOU LOSE 💔';
                break;    
        }
    }

    playerDisplay.textContent = `${inGameName2}: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText');

    switch(result){
        case '🎉 YOU WIN 🎉':
            resultDisplay.classList.add('greenText');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case '💔 YOU LOSE 💔':
            resultDisplay.classList.add('redText');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

function rpc(){

    const myChooseGame = document.getElementById("choose-game");
    const myGame1Btn = document.getElementById("my-game-1-btn");
    const myGame1 = document.querySelector(".my-game-1");
    const rpsTitle = document.querySelector(".rock-paper-scissor");
    const ignGame2 = document.getElementById("player-ign");

    if(myGame1Btn){
        myChooseGame.classList.remove("games");
        ignGame2.innerHTML = "";
        myGame1.classList.add("rps");
        rpsTitle.classList.add("rpsTitle");
    }
}

function rpc2(){

    const myChooseGame2 = document.getElementById("choose-game");
    const ignGame3 = document.getElementById("player-ign");
    const myGame2Btn = document.getElementById("my-game-2-btn");
    const gntTitle = document.querySelector(".guess-number-title");
    const gntBox1 = document.querySelector(".guess-number-box");

    if(myGame2Btn){
        gntTitle.classList.add("gtnTitle");
        gntBox1.classList.add("gtnBox");
        myChooseGame2.classList.remove("games");
        ignGame3.innerHTML = "";
    }

}


const minNum = 1;
const maxNum = 100;
let attemps = 0;
let running = true;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

function gtnBtn(){

    const attempsText = document.getElementById("attemps");
    const resultText = document.getElementById("result-text");
    let typeBox1 = document.querySelector(".type-box-1").value;
    let error2 = document.getElementById("label1");
    typeBox1 = Number(typeBox1);


    console.log(answer);

    while(running){

        if(isNaN(typeBox1)){
            error2.classList.add("gtnError");
            break;
        }
        else if(typeBox1 <= minNum || typeBox1 >= maxNum){
            error2.classList.add("gtnError");
            break;
        }
            if(typeBox1 > answer){
                resultText.innerHTML = `❌ TOO HIGH! PLEASE TRY AGAIN ❌`;
                attemps++;
                error2.classList.remove("gtnError");
                attempsText.innerHTML = `Attemps: ${attemps}`
                break;
            }
            else if(typeBox1 < answer){
                resultText.innerHTML = `❌ TOO LOW! PLEASE TRY AGAIN ❌`;
                attemps++;
                attempsText.innerHTML = `Attemps: ${attemps}`
                error2.classList.remove("gtnError");
                break;
            }
            else if(typeBox1 == answer){
                resultText.innerHTML = `🎉 CORRECT! The answer is ${answer} 🎉`;
                running = false;
                error2.classList.remove("gtnError");
                attempsText.innerHTML = `Attemps: ${attemps}`
                break;
            }
    }
}