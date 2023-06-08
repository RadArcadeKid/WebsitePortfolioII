//js for the JS dom lab 4/4/2019
//Jake Henson, 2019

function whiteForest(){
	 document.body.style.fontFamily = "'Reenie Beanie', cursive";
	 document.getElementById("heading").style.fontFamily = "'Nothing You Could Do', cursive";
	document.getElementById("heading").innerHTML = "The White Forest";
	document.body.style.backgroundColor = "rgb(200,200,200)";
	document.body.style.color = "rgb(0,0,0)";
	document.body.style.fontSize = "2em";

	document.getElementById("image").src = "img/whiteForest.jpg";
	document.getElementById("image").style.width = "500px";
	document.getElementById("image").alt = "A picture of The White Forest";
	document.getElementById("description").innerHTML = "The white forest is quiet, full of snow, and but there's something sort-of unsettling about it all. An overcast highlights the glimmery snow accross your path. The trees are frozen with ice crystals. It's dead silent. You feel the ice crunch under your feet, but it almost feels like you're gliding. There's an eerie stillnesss to the place you can't quite seem to accept...Regardless, it's tranquil here. You're at peace, but it's a little sad here. Where else can you go?";
}

function greenForest(){
	document.body.style.fontFamily = "'Archivo Narrow', sans-serif";
	document.getElementById("heading").style.fontFamily = "'Merienda', cursive";
	document.getElementById("heading").style.fontSize = "1em";
	document.getElementById("heading").innerHTML = "The Green Forest";
	document.body.style.backgroundColor = "rgb(5,94,14)";
	document.body.style.color = "rgb(158,255,157)";
	document.body.style.fontSize = "3em";

	document.getElementById("image").src = "img/greenForest.jpeg";
	document.getElementById("image").style.width = "500px";
	document.getElementById("image").alt = "A picture of The Green Forest";
	document.getElementById("description").innerHTML = "The green forest is full of birds and life. It's incredibly peaceful here. Wind blows through the trees. It almost feels...artificial. There's a vibrance and a livelyhood to this place as sunlight streaks through the leaves. I wonder where else I can explore?";
}

function blueForest(){
	document.body.style.fontFamily = "'VT323', monospace";
	document.getElementById("heading").style.fontFamily = "'Righteous', cursive";
	document.getElementById("heading").style.fontSize = "2.1em";
	document.getElementById("heading").innerHTML = "The Blue Forest";
	document.body.style.backgroundColor = "rgb(39, 151, 173)";
	document.body.style.color = "rgb(0,0,0)";
	document.body.style.fontSize = "2em";

	document.getElementById("image").src = "img/blueForest.jpg";
	document.getElementById("image").style.width = "500px";
	document.getElementById("image").alt = "A picture of The Blue Forest";
	document.getElementById("description").innerHTML = "The blue forest is overrun with ancient technology and archaic complex machines. These were once giant creatures in the world. It's loud and tense here. Machines buried in the ground are slowly coming to life. The air is thick. You can hear the ships fly overhead in the distance. It might be time to leave...";
}

function redForest(){
	document.body.style.fontFamily = "'Walter Turncoat', cursive";
	document.getElementById("heading").style.fontFamily = "'Rock Salt', cursive";
	document.getElementById("heading").style.fontSize = "3.5em";
	document.getElementById("heading").innerHTML = "The Red Forest";
	document.body.style.backgroundColor = "rgb(17, 0, 0)";
	document.body.style.color = "rgb(214, 28, 25)";
	document.body.style.fontSize = "1.5em";

	document.getElementById("image").src = "img/redForest.jpg";
	document.getElementById("image").style.width = "500px";
	document.getElementById("image").alt = "A picture of The Red Forest";
	document.getElementById("description").innerHTML = "The red forest is horrifying....  You feel tense and afraid as you step on the mushy ground.... Your scene twists around you.... almost as if reality itself was bending.....You know that there are some dark and evil forces deep within this forest....You need to get out of here.....You need to run.";
}
