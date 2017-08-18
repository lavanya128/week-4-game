var targetNumber=77;
//var targetNumber = 47;

var imageArr=['https://www.lightworkersworld.com/wp-content/uploads/2015/08/Crystal-Quartz.jpg','http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg','http://aquarianbookshop.com/wp-content/uploads/2012/01/crystals.jpg','http://www.scienceclarified.com/photos/crystal-3107.jpg'];
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
var numberOptions = [10, 5, 3, 2];
 for (var i = 0; i < numberOptions.length; i++) 
 {
var imageCrystal = $("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src", imageArr[i]);
imageCrystal.attr("data-crystalvalue", numberOptions[i]);
$("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() 
{
var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
alert("New score: " + counter);
$("#totalScore").html("<h1> Your Total score is : " + counter + "</h1>");
    if (counter === targetNumber) {
      alert("You win!");
      $("#winloose").html("<h1> You win!!!!! </h1>");
    }

    else if (counter > targetNumber) {
      alert("You lose!!");
      $("#winloose").html("<h1> You Lose!!! </h1>");
    }

  });