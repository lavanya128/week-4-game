//random number to guess.
// randomNumber();
// function randomNumber()
// {
	var noGuess=[77,45,62,99,57,34];
    var targetNumber=noGuess[Math.floor(Math.random()* noGuess.length)];

//images displayed
    var imageArr=['https://www.lightworkersworld.com/wp-content/uploads/2015/08/Crystal-Quartz.jpg','http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg','http://aquarianbookshop.com/wp-content/uploads/2012/01/crystals.jpg','http://www.scienceclarified.com/photos/crystal-3107.jpg'];
    $("#number-to-guess").text(targetNumber);

    var counter = 0;

  //random set of values for the images
    var numberOptions = [[10, 5, 3, 2],
                         [11, 6, 9, 3],
						 [7, 1, 14, 5],
						 [9, 10, 2, 4]];
    var ranNumber=numberOptions[Math.floor(Math.random() * numberOptions.length)];

//creating images dynamically and adding class and displaying values.
    for (var i = 0; i < ranNumber.length; i++) 
    {
		var imageCrystal = $("<img>");
		imageCrystal.addClass("crystal-image");
		imageCrystal.attr("src", imageArr[i]);
		imageCrystal.attr("data-crystalvalue", ranNumber[i]);
		$("#crystals").append(imageCrystal);
	}
//};

//on button click function display the new total score.
	$(".crystal-image").on("click", function() 
	{
		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;
		alert("New score: " + counter);
		$("#totalScore").html("<h1> Your Total score is : " + counter + "</h1>");
    	if (counter === targetNumber) 
    	{
      		alert("You win!");
      		$("#winloose").html("<h1> You win!!!!! </h1>");
      		//randomNumber();
    	}
    	else if (counter > targetNumber) 
    	{
      		alert("You lose!!");
      		$("#winloose").html("<h1> You Lose!!! </h1>");
    	}

  	});