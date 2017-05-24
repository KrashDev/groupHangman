$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var lives = 10;
function game() {
	var guessArray = ["eggrolls","frenchfries","chickennuggets","quesadilla","spaghetti","waffles"];

	var guessWord = guessArray[Math.floor(Math.random()*guessArray.length)];	
	console.log(guessWord);

	var dashes = guessWord.split("");
	for (var i = 0; i < guessWord.length; i++) {
		if (dashes[i] === guessWord[i]) {
			dashes[i] = "_";
		}
	// console.log(dashes);	
	}

	$("#guessWord").html(dashes.join(" "));
	document.onkeyup = function(event) {

	// var letter = event.key;
	// for (var z = 0; z < guessWord.length;z++)
	// if (letter[z] === guessWord[z]) {
	// 	dashes = guessWord[z];
		// lives = lives--;
		// $("#livesLeft").html(lives);
	// };

    var letter = event.key;
    var lettersGuessed = [];

    if (letter.length > 0) {
	    for ( var z = 0; z < guessWord.length; z++) {
			if (letter === guessWord[z]) {
	    	// 	dashes[z] = letter;
	    	}
	    	// else {
	     //    lives--;
	     //    console.log(lives);
	        // lettersGuessed.push(letter);
	     
	   		// } 
	    }
	}
   // lettersGuessed = letter.toString()
   //      $("#guessLetters").html(lettersGuessed);
	}; 

};

game();

    
});