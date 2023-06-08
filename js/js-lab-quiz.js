//Jake Henson, 2019

var seventiesScore = 0; 
var eightiesScore = 0; 
var nintiesScore = 0; 
var thousandsScore = 0; 

function quizcheck() {

	var answer1 = document.getElementById("question1").value;
	console.log("Answer 1: " + answer1);

	var answer2 = document.getElementById("question2").value;
	console.log("Answer 2: " + answer2);

	var answer3 = document.getElementById("question3").value;
	console.log("Answer 3: " + answer3);

	var answer4 = document.getElementById("question4").value;
	console.log("Answer 4: " + answer4);

	var answer5 = document.getElementById("question5").value;
	console.log("Answer 5: " + answer5);


	 if(answer1==0 || answer2==0 || answer3==0 || answer4 ==0 || answer5==0){ 
	 	alert("Looks like you didn't answer every question! Go back and select your answers!");
	 } 

	if(answer1 > 0 && answer2 > 0 && answer3 > 0 && answer4 > 0 && answer5 > 0){
	
		///////////////////////////////////
		if (answer1==1){
			seventiesScore++;
		}

		if (answer1==2){
			eightiesScore++;
		}

		if (answer1==3){
			nintiesScore++;
		}
		if (answer1==4){
			thousandsScore++;
		}

		///////////////////////////////////
		if (answer2==1){
			seventiesScore++;
		}

		if (answer2==2){
			eightiesScore++;
		}

		if (answer2==3){
			nintiesScore++;
		}
		if (answer2==4){
			thousandsScore++;
		}

		///////////////////////////////////
		if (answer3==1){
			seventiesScore++;
		}

		if (answer3==2){
			eightiesScore++;
		}

		if (answer3==3){
			nintiesScore++;
		}
		if (answer3==4){
			thousandsScore++;
		}

		///////////////////////////////////
		if (answer4==1){
			seventiesScore++;
		}

		if (answer4==2){
			eightiesScore++;
		}

		if (answer4==3){
			nintiesScore++;
		}

		if (answer4==4){
			thousandsScore++;
		}

		///////////////////////////////////
		if (answer5==1){
			seventiesScore++;
		}

		if (answer5==2){
			eightiesScore++;
		}

		if (answer5==3){
			nintiesScore++;
		}

		if (answer5==4){
			thousandsScore++;
		}



		document.getElementById("seventiesdisplay").innerHTML = "70's Score: "+seventiesScore;
		document.getElementById("eightiesdisplay").innerHTML = "80's Score: "+eightiesScore;
		document.getElementById("nintiesdisplay").innerHTML = "90's Score: "+nintiesScore;
		document.getElementById("twothousandsdisplay").innerHTML = "2010's Score: "+thousandsScore;


		if( (seventiesScore>eightiesScore) && (seventiesScore>nintiesScore) && (seventiesScore>thousandsScore) ){ //70's
			document.getElementById("result").innerHTML = "Your decade is the 70's! You'd fit perfectly in the 1970's. Welcome to a time of long hair, mustaches, chillin out, and heavy music, man!";
		}

		if( (eightiesScore>seventiesScore) && (eightiesScore>nintiesScore) && (eightiesScore>thousandsScore) ){ //80's
			document.getElementById("result").innerHTML = "Your decade is the 80's! You'd fit perfectly in the radical 1980's! Enjoy crackin' open a Tab, playing some old arcade games, and listening to Tears for Fears!";
		}

		if( (nintiesScore>seventiesScore) && (nintiesScore>eightiesScore) && (nintiesScore>thousandsScore) ){ //90's
			document.getElementById("result").innerHTML = "Your decade is the 90's! You'd fit perfectly in the tubular time of 1990's! You really dig grunge, flannels, being loud, and heavy attitudes, yo!";
		}

		if( (thousandsScore>seventiesScore) && (thousandsScore>eightiesScore) && (thousandsScore>nintiesScore) ){ //2010's
			document.getElementById("result").innerHTML = "Your decade is the 2010's! You're right at home here! This is the awesome age of tech, modern lifestyles, tons of great streaming media, and memes!";
		}



	seventiesScore = 0; 
	eightiesScore = 0; 
	nintiesScore = 0; 
	thousandsScore = 0; 

	}
}