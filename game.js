var wins = 0
var losses = 0
var score = 0
var targetNumber = 0


//Generate a random target number between 19 and 120.
function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(120-19+1)+19);
    $("#targetNumber").html("<h1>targetNumber</h1>");    
}

//Generate random value called crystalValue for each crystal button.
function randomIntFromInterval(min,max) {
	return Math.floor(Math.random()*(12-1+1)+1);
}

function game (){
//Add value of button to score if button is clicked.
$(".btn").on("click", function() {
var crystalValue = ($(this).attr("crystalValue"));
crystalValue = parseInt(crystalValue);
score += crystalValue;
})


//Set up the winning scenario where your score is the same as the target.

if (score === targetNumber) {
	wins++;
	$("#last-result").html("<h2>Winner!</h2>");
    $("#wins").html("<p>" + wins + "</p>");
    //Reset targetNumber, crystalValue and score to play again.
    	function randomIntFromInterval(min,max) {
    	return Math.floor(Math.random()*(120-19+1)+19);
    	$("#targetNumber").html("<h1>targetNumber</h1>")};

    	function randomIntFromInterval(min,max) {
		return Math.floor(Math.random()*(12-1+1)+1)};

		score = 0;
}


//Set up the losing scenario where your score is higher than the target.

 else if (score >= targetNumber) {
	losses++;
	$("#last-result").html("<h2>You lost!</h2>");
    $("#losses").html("<p>" + losses + "</p>");
    //Reset targetNumber, crystalValue and score to play again.
    	function randomIntFromInterval(min,max) {
    	return Math.floor(Math.random()*(120-19+1)+19);
    	$("#targetNumber").html("<h1>targetNumber</h1>")};

    	function randomIntFromInterval(min,max) {
		return Math.floor(Math.random()*(12-1+1)+1)};

		score = 0;
}


}