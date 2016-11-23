//create a random number for the computer's decision
//pull our guesses from input fields
//validate against what computer is thinking of
//give us a response according to which digits we have correct

var computerChoice1, computerChoice2, computerChoice3;
var guessDigit1, guessDigit2, guessDigit3;

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function startGame() {
    //choose 3 unique numbers    
    do {
        computerChoice1 = getRandomNumber();
        computerChoice2 = getRandomNumber();
        computerChoice3 = getRandomNumber();
    } while (computerChoice1 === computerChoice2 || computerChoice1 === computerChoice3 || computerChoice2 === computerChoice3);
}

function compareUsVsComp() {
    var response = "";
    if (guessDigit1 == computerChoice1) response = "pico ";
    else if (guessDigit1 == computerChoice2 || guessDigit1 == computerChoice3) response = "fermi ";

    if (guessDigit2 == computerChoice2) response += "pico ";
    else if (guessDigit2 == computerChoice1 || guessDigit2 == computerChoice3) response += "fermi ";

    if (guessDigit3 == computerChoice3) response += "pico ";
    else if (guessDigit3 == computerChoice1 || guessDigit3 == computerChoice2) response += "fermi ";

    else if (response == "") return ("bagels");

    return response;
    console.log(response);
}



document.getElementById("guessButton").addEventListener("click", function() {
    guessDigit1 = document.getElementById("guessDigit1").value;
    guessDigit2 = document.getElementById("guessDigit2").value;
    guessDigit3 = document.getElementById("guessDigit3").value;
compareUsVsComp();
});

startGame();
var computerNumbers = [computerChoice1, computerChoice2, computerChoice3];
alert(computerNumbers);
