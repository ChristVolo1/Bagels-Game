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
    computerChoice1 = getRandomNumber();
    do {
        computerChoice1 = getRandomNumber();
        computerChoice2 = getRandomNumber();
        computerChoice3 = getRandomNumber();
    } while (computerChoice1 === computerChoice2 || computerChoice1 === computerChoice3 || computerChoice2 === computerChoice3);

    function getUserGuess() {
        guessDigit1 = document.getElementById("guess1").value;
        guessDigit2 = document.getElementById("guess2").value;
        guessDigit3 = document.getElementById("guess3").value;
    }

    //document.getElementById("guessButton").addEventListener("click", function);
    //getUserGuess();
    //matchGuess();

    function compareUsVsComp() {
        var return response = '';
        if (guessDigit1 == computerChoice1) return "pico";
        else if (guessDigit1 == computerChoice2 || guessDigit1 == computerChoice3) return "fermi";

        if (guessDigit2 == computerChoice2) return += "pico";
        else if (guessDigit2 == computerChoice1 || guessDigit2 == computerChoice3) return += "fermi";

        if (guessDigit3 == computerChoice3) return += "pico";
        else if (guessDigit3 == computerChoice1 || guessDigit3 == computerChoice2) return += "fermi";

        if(guessDigit1 != computerChoice1 && guessDigit2 != computerChoice2 && guessDigit3 != computerChoice3) response = "bagels";

        return response;
    }


startGame();
var computerNumbers = [computerChoice1, computerChoice2, computerChoice3];
alert(computerNumbers);
