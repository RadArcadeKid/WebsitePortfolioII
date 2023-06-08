//Jake Henson, 2019

var albumImage = document.getElementById("photo");
var albumDescription = document.getElementById("description");
var i = 0; //index for keeping track of where I am 

var albumImg = [
			'img/cave1.png', 
			'img/cavelights2.png', 
			'img/CoffeeShop4.png', 
			'img/cube1_3.png', 
			'img/cubism.jpg', 
			'img/FrozenShip_5.png',
			'img/hallway4.png',
			'img/Impossibility_2.png',
			'img/MyComputer.png', 
			'img/ShiningElevator.png',
			];

var descriptions = [
			"My first real MagicaVoxel render, known as <i>The Cave</i>",
			"An abstract cave full of lights. Known as <i>Abstract Light Cave</i>",
			"My personal favorite render called <i>Fall Coffee Shop</i>. This piece was also hanging in the ATLS building!",
			"One of my first renders, it's just a pretty abstract cube I call <i>Blue</i>",
			"Another version of the <i>Abstract Light Cave</i>, made for my album <i>Cubism</i>",
			"Probably my favorite render of all time, <i>Frozen Ship</i>",
			"One of my first experiements with lighting, called <i>Sci-Fi Hallway</i>",
			"A piece on frustation and apathy. I call it <i>Impossibility</i>",
			"A 3d render of the old Windows-95 My Computer icon, apptly titled <i>My Computer</i>",
			"A recreation of the famous elevator scene from the 1980 movie <i>The Shining</i>",																								
				];

function createGallery(){

	var numImages = document.getElementById("userSelection").value;
	var i = 0; 

	for(i; i<=numImages-1; i++) //use numImages-1 because arrays start at 0 
	{
		console.log("Index: " + i + "Image: " + (i+1) );	
		document.getElementById("photo").innerHTML += "<img src='" + albumImg[i] + "'   style='" + "width:500px" + "'> <br> <div>" + descriptions[i] + "</div><br>" ; //add image + caption
	}


	numImages = 0; 
	i = 0;
}