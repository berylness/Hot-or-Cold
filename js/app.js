
$(document).ready(function(){
	
/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

/*--- Hide information modal box ---*/
  	$(".close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


/*--- Refresh Page and start fresh game upon page load or userclick on "new" text ---*/
	function newGame();

	$(".new").click(function(){
	newGame();
	});


/*--- Randomly Generate a new Secret Number for a new game---*/
	function secretNumber(){
    secretNumber = (Math.floor(Math.random()*100));
    secretNumber();
  });


/*--- Accept User Guess input ---*/
	$("form").submit(function(event) {
		event.preventDefault();

		var guess = $("#userGuess").val();
	}



/*--- Valiate User Guess input ---*/
		
		/*-- Is Guess a Number? --*/
		if(isNaN(userGuess)) {
			$("#feedback").text("Please enter an actual number");
			return true;
		}
		/*-- Is Guess Within Allowed Range? --*/
		else if(userGuess < 1 || userGuess > 100) {
			$("#feedback").text("Please enter a number bewteen 1 - 100");
			return true;
		}

		/*-- Is Guess a Whole Number? --*/
		else if(Math.floor(userGuess) != guess) {
			$("#feedback").text("Please enter a whole number");
			return true;		
		}
	
		/*-- Was a value input in the field? --*/
		else if(userGuess) === "") {
			$("#feedback").text("Please enter a guess");
			return true;		
		}

		else {
  			return false;
  		};
  		

/*--- Verify the number wasn't previously guessed ---*/



/*--- Display User Guesses in an Array ---*/
	 function pushToArray(userGuess) {
	   	guesses.push(guess);
	}

/*--- Display User Guesses Count and Increment ---*/
    function showCount(count) {
      $('#count').text(guessCount);
    }


/*--- Check temp of guess, display feedback ---*/
  	function checkTemp(guessDifference){
  		if (guessDifference == 0) {
  			setFeedback("Good Guess! You Won!");
  			won = true;
  			return false;
  		} else if (guessDifference < 10) {
  			setFeedback("Very hot!");
  			return true;
  		} else if (guessDifference >= 10 && guessDifference <= 19) {
  			setFeedback("Getting hotter!");
  			return true;
  		} else if (guessDifference >= 20 && guessDifference <= 29) {
  			setFeedback("Warm-ish!");
  			return true;
  		} else if (guessDifference >= 30 && guessDifference <= 39) {
  			setFeedback("Cold!");
  			return true;
  		} else {
  			setFeedback("Ice Cold!");
  			return true;
  		}
  	}


