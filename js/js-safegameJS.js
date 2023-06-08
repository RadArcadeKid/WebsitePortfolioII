//for the final JS project
//all code by Jake Henson, 2021



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
			alert("You lose! Go back or refresh to try again!")
            timer = duration;
        }
    }, 1000);
}


window.onload = function () {
	console.log("window log");
	var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
	generateRandomSolution();
};



//generatoes a random integer bettween 1 and 9
function randIntGenerator() 
{
    var min=0; 
    var max=9;  
    var randInt = Math.floor(Math.random() * (max - min + 1) ) + min; //runs a random number, INCLUDES both max and min 
    //Learned a bit more about the math.random from: https://www.geeksforgeeks.org/javascript-math-random-function/

    return randInt; //return this random number for later!
}


//checks if the userNum (user input) matches the target number (pin)
//passes in these two as arguments
function numCheck(userNum, targetNum)
{ 		
  var audio = new Audio('media/buttonWin.mp3');
  if(userNum < targetNum) //if the user's entry was too low
  {
  	//document.getElementById("demo").innerHTML = "> ERROR - input too high"; //tell the user if their input is too low

  	//update - players found just randomly guessing less fun, so I added more error-handling cases to tell how close the user is 

  		  if(userNum == targetNum-1) //if you're one off, the game will tell you 
  		  {
  	  		document.getElementById("demo").innerHTML = "> ERROR - slightly too low - try guessing 1 number higher..."; 	
  		  }
  		  if((userNum == targetNum-2) || (userNum == targetNum-3) || (userNum == targetNum-4)) //if you're one off, the game will tell you 
  		  {
  	  		document.getElementById("demo").innerHTML = "> ERROR - input a bit too low - try guessing a bit higher..."; 	
  		  }
  		  if((userNum <= targetNum-5)) //if you're far too off, the game will let you know this 
  		  {
  		  	document.getElementById("demo").innerHTML = "> ERROR - input FAR too low - guess way higher!"; 	
  		  }


  		  if(userNum < 0) //if user enters negative number 
  		  {
  		  	  	document.getElementById("demo").innerHTML = "> INVALID ENTRY - ONLY POSITIVE NUMBERS ACCEPTED"; 
  		  }	
  	return false;
  }
  
  if(userNum > targetNum) //if the user's entry was too high
  {
  	//document.getElementById("demo").innerHTML = "> ERROR - input too high"; //tell the user if their input is too high

  	//update - players found just randomly guessing less fun, so I added more error-handling cases to tell how close the user is 

  		if(userNum == targetNum+1)
  		{
  	  		document.getElementById("demo").innerHTML = "> ERROR - just slightly too high - try guessing 1 number lower..."; 	
  		}
  		if((userNum == targetNum+2) || (userNum == targetNum+3) || (userNum == targetNum+4)) //if you're one off, the game will tell you 
  		{
  	  		document.getElementById("demo").innerHTML = "> ERROR - input a bit too high - try guessing a bit lower..."; 	
  		}
  		if((userNum >= targetNum+5))
  		{
  		  	document.getElementById("demo").innerHTML = "> ERROR - input FAR too high - guess way lower!"; 	
  		}

  		if(userNum >= 10) //if the user's entry exceeded a 1 digit number
  		{
  			document.getElementById("demo").innerHTML = "> INVALID ENTRY - ONLY 1 DIGIT NUMBERS ACCEPTED"; 
  		}

  	return false;		
  }
  
  if(userNum == targetNum) //if the user's number matched the target number 
  {
  	document.getElementById("demo").innerHTML = "> PIN MATCH FOUND - ADDING DIGIT...";
	audio.play();
  	return true; 
  } 
}

function handleClick(){

	var audio = new Audio('media/safeLocked.mp3'); //play the safe locked audio 
	audio.play(); 
}


//ondocumentload run generate Random solution array - "global" window variable
function generateRandomSolution()
{
	var pinArray = [0,0,0,0,0,0,0,0]; 	//generate 8 digit number pin array
	var i = 0;

	for(i; i <= 7; i++) //run a for loop to populate each index of the pinArray
	{
		temp = randIntGenerator(); //generate each pin originally, set to temp
		pinArray[i] = temp; //set temp value equal to the pinArray at that specific index
		//console.log(pinArray[i]); 

		//then do it again...until the 8 digit pin array is full of random numbers
	}
	window.solutionArray = pinArray; //save the pinArray into the window as a 'global' variable so it can be accessed later 
}

//More or less, this is the main function of how the game actually works
//
//This function will, upon a click of the button...
// 1. Get the element "userInput" 
// 2. Get the current userInput from that element
// 3. Get the current index value of the slot from the element (whatever slot the user is currently trying to solve, 0-7) 
// 4. Get the solution to that particular slot using the randomly generated array from earlier (solutionVal)
// 5. Check to see if the user's input matches that solution using numCheck
//  -  If the input was correct (If NUMCHECK returns true) -
// 			-Change the image at the currentIndexValue slot to the correct pinNumber that the user has guessed
//          -set the new currentIndexValue slot to +1, so that the user can try on the next one! 
// 
// Otherwise, the function won't do anything else. This means the user will have to try another number, and check that 
//	
function buttonClick()
{
	var el = document.getElementById("userInput");
	var xInput = el.value; //get's the user's value they typed in 

	var currentIndexValue = Number( el.getAttribute("data-currentIndexValue") ); //note - this does NOT get the user input - it get's the index of the current place STORED elsewhere
	//Had to convert the string to a number using: https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
	var solutionVal = solutionArray[currentIndexValue]; //get the solution value from the pinArray at the index of the image the user is currently on 	

	if(numCheck(xInput, solutionVal) == true) //if the numCheck (user's input checked against the solution) returns true, then the user will get to move on to the next number 
	{
		populateImage(currentIndexValue, solutionVal); //change the image on the board to the populate image function 
		console.log("PIN found - Updating image...");

		currentIndexValue = currentIndexValue + 1; 
		el.setAttribute("data-currentIndexValue", currentIndexValue); //set currentIndexValue up 1, so that the index will move on 
		document.getElementById("indexDisplay").innerHTML = "> Hacking pin slot: " + (currentIndexValue+1); //tell the user to which pin slot the user is hacking

		el.value = ""; //Reset the value for the user's input after, so they have a feedback and can enter a new number 
	}
	//else, do nothing. The user got their input wrong 

	if(currentIndexValue == 8)
	{
		gameWin(); 
	}

}

//trigger the "check num" with enter, instead of having to click the button every single time 
//I learned this line of code from: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
//I also understand how it works 
document.getElementById("userInput").addEventListener("keyup", function(enterEvent)  //get the userInput function 
{
    enterEvent.preventDefault(); //prevent the default 
    if (enterEvent.keyCode === 13) //the enter key 
    {
        document.getElementById("button").click(); //this will transfer the "onclick" function in the button later 
    }
});


//This function runs once the player has one the game! 
function gameWin()
{
	var audio = new Audio('media/safeUnlock.mp3'); //get safe unlock sound
	audio.play(); //play safe unlock sound

	//play sound of door unlocking
	document.getElementById("endLink").href = "jsSafeGameWin.html";
	document.getElementById("handle").src = "img/numbers/handleUnlocked.png";
}

//This function runs whe the player loads into the winning page! 
function wonGame(){
	var audio = new Audio('media/win.mp3'); //get win sound 
	audio.play(); //play win sound 
}

//changes the currentIndexValue's image to the specific number in targetValue
function populateImage(currentIndexValue, targetValue)
{

	var ledPinNum = //an array of all of the source attributes that should corrospond to each image 
	[
			"img/numbers/0.png", 
			"img/numbers/1.png", 
			"img/numbers/2.png", 
			"img/numbers/3.png", 
			"img/numbers/4.png",
			"img/numbers/5.png",  
			"img/numbers/6.png", 
			"img/numbers/7.png", 
			"img/numbers/8.png", 
			"img/numbers/9.png", 
	];

	var imgselector = "slot" + currentIndexValue; //set a variable for the div tag's current slot number (it's named like an array so getting each index is just the currentIndexValue)
	//console.log(imgselector);

	var targetImage = document.getElementById(imgselector); //target image is the one from imgselector

	targetImage.src = ledPinNum[targetValue];	//change the attribute source to the actual image of the number 
	targetImage.alt = targetValue; //change the alt tag to the correct number. Used the .toString() function, to change the alt tag to something valid. 
	//I  learned about this function here https://www.geeksforgeeks.org/javascript-tostring-function/

	//I suppose that changing the alt tag isn't entirely neccessary, but hey, why not 				
}
