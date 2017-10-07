var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var youWin= 0;

var youLose= 0;

var guessesLeft, guessedLetters, letterToGuess;

resetGame();
display();


// document.onkeyup = function(event) {
// 	var yourGuess = event.key;
// 	guessedLetters.push(yourGuess);
// 	var psychicAns = letter[Math.floor(Math.random() * letter.length)];

// 	if (yourGuess === psychicAns) {
// 		youWin++;
// 		guessesLeft = 10;
// 	}

// 	else {
// 		guessesLeft--;
// 	}

// 	if (guessesLeft === 0) {
// 		youLose++;
// 		guessesLeft = 10;
// 	}

// 	var html = "<p>Guess what letter I'm thinking of:</p>" + 
// 	"<p>Wins: " + youWin + "</p>" +
// 	"<p>Loses: " + youLose + "</p>" +
// 	"<p>Guesses Left: " + guessedLetters + "</p>" +
// 	"<p>Your Guesses so far: " + guessedLetters.join(" ") + "</p>";

// 	document.getElementbyId("#psychic").innerHTML = html;

// }
// console.log(event);

document.onkeyup = function(event) {
	var guess = event.key;
		if (guess === letterToGuess) {
			win();
		} 
		else if (guessesLeft - 1 === 0) {
			lost();
		} 
		else {
			fail(guess);
		}

	display();
}

	function display() {
		var youWinP = document.getElementById("wins");
		var youLoseP = document.getElementById("loses");
		var guessLeft = document.getElementById("guesses");
		var letterGuessed = document.getElementById("guesses-left");
		youWinP.innerHTML = youWin;
		youLoseP.innerHTML = youLose;
		guessLeft.innerHTML = guessesLeft;
		letterGuessed.innerHTML = guessedLetters.join(", ");
	}

		function win() {
			resetGame();
			wins++;
		}

		function lost() {
			loses++;
			resetGame();
		}

		function fail(letter) {
			guessesLeft--;
			guessedLetters.push(letter);
		}

		function resetGame() {
			guessesLeft = 11;
			guessedLetters = [];
			letterToGuess = letter[Math.floor(Math.random() * letter.length)];
			console.log("Letter to guess: " + letterToGuess);
		}

//Getting my wins and losses to increase