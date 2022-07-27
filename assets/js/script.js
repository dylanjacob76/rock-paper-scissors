function startGame() {
    var ties = 0;
    var wins = 0;
    var losses = 0;
    var rps = ["R", "P", "S"];
    var userChoice = prompt("Enter R, P, or S:");

    if (!userChoice) {
        alert("Refresh the page if you change your mind!");
    }

    userChoice = userChoice.toUpperCase();

    var computerChoice = rps[Math.floor(rps.length * Math.random())];

    if (userChoice === computerChoice) {
        alert("The computer chose " + computerChoice + ". It's a TIE!");
        ties++;
    } else if (userChoice === "R" && computerChoice === "S") {
        alert("The computer chose " + computerChoice + ". You WON!")
        wins++;
    } else if (userChoice === "R" && computerChoice === "P") {
        alert("The computer chose " + computerChoice + ". You LOST!")
        losses++;
    } else if (userChoice === "P" && computerChoice === "R") {
        alert("The computer chose " + computerChoice + ". You WON!")
        wins++;
    } else if (userChoice === "P" && computerChoice === "S") {
        alert("The computer chose " + computerChoice + ". You LOST!")
        losses++;
    } else if (userChoice === "S" && computerChoice === "P") {
        alert("The computer chose " + computerChoice + ". You WON!")
        wins++;
    } else if (userChoice === "S" && computerChoice === "R") {
        alert("The computer chose " + computerChoice + ". You LOST!")
        losses++;
    } else {
        alert("Stop trying to cheat the system & enter a valid choice 😐");
        startGame();
    }

    alert("\nUser Stats" + "\n\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    var playAgain = confirm("Would you like to play again?");

    if (playAgain) {
        startGame();
    } else {
        alert("Refresh the page if you change your mind!");
    }
}

startGame();