
$(document).ready(function(){

    var guessCount = 0;

/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

/*--- Hide information modal box ---*/
  	$(".close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


/*--- Refresh Page and start new game ---*/
	function newGame(){
    secretNumber();
  };
   
/*--- Refresh Page if user clicks on "new" text ---*/   
	  $(".new").click(function(){
	     newGame();
     });
     
	  
/*--- Randomly Generate a new Secret Number for a new game---*/
	function secretNumber(){

    secretNumber = (Math.floor(Math.random()*100));
    };
    
    secretNumber();

  

/*--- Accept User Guess input (without refreshing the page)---*/
	  $("#guessForm").on('submit',function(event){
		event.preventDefault();

    pushToArray();

/*--- Increments Guess Counter Display---*/
    guessCount=guessCount+1;
    showCount();

/*---Calculates Guess's Distance from Secret Number---*/
    var guess = $("#userGuess").val();
    var choice = numberValidate(guess);
    if(choice){
        var guessDifference = Math.abs(guess - secretNumber);
        checkTemp(guessDifference);
     } else{
      $("#userGuess").val("");
     }

/*--- Clears out each new guess after its input ---*/
    var guess = $("#guessForm")[0].reset();


/*--- Displays the Guessed Numbers in an Array ---*/
  function pushToArray() {
      $("#guessList").append("<li>" + $('#userGuess').val() + "</li>");
  };

});



/*--- Display User Guesses Count and Increment ---*/
  function showCount() {
      $("#count").text(guessCount);
  };




/*--- Valiate User Guess input ---*/
	function numberValidate(userGuess){

		/*-- Is Guess a Number? --*/
		if(isNaN(userGuess)) {
			$("#feedback").text("Please enter an actual number");
			return false;
		}
		/*-- Is Guess Within Allowed Range? --*/
		else if(userGuess < 1 || userGuess > 100) {
			$("#feedback").text("Please enter a number bewteen 1 - 100");
			return false;
		}

		/*-- Is Guess a Whole Number? --*/
		else if(Math.floor(userGuess) != userGuess) {
			$("#feedback").text("Please enter a whole number");
			return false;		
		}
	
		/*-- Was a value input in the field? --*/
		else if(userGuess === "") {
			$("#feedback").text("Please enter a guess");
			return false;		
		}

		else {
  			return true;
  	}
  };





/*--- Check temp of guess, display feedback ---*/
 
  function checkTemp(guessDifference) {
  		if (guessDifference == 0) {
  			$("#feedback").text("Good Guess! You Won!");
  			won = true;
  			return false;
  		} else if (guessDifference < 10) {
  			$("#feedback").text("Very hot!");
  			return true;
  		} else if (guessDifference >= 10 && guessDifference <= 19) {
  			$("#feedback").text("Getting hotter!");
  			return true;
  		} else if (guessDifference >= 20 && guessDifference <= 29) {
  			$("#feedback").text("Warm-ish!");
  			return true;
  		} else if (guessDifference >= 30 && guessDifference <= 39) {
  			$("#feedback").text("Cold!");
  			return true;
  		} else {
  			$("#feedback").text("Ice Cold!");
  			return true;
  		}
  }
});


