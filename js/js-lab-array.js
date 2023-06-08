//js for the JS dom lab 4/4/2019
//Jake Henson, 2019

var albumLink = document.getElementById("album-link");
var albumImage = document.getElementById("album-photo");
var albumDescription = document.getElementById("album-description");
var i = 1; //index for keeping track of where I am 

var albumImg = [
			'img/harddrive.jpg', 
			'img/spaceexplore.jpg', 
			'img/bepis.jpg', 
			'img/digitaldimensions.jpg', 
			'img/neontracer.jpg', 
			'img/cubism.jpg', 
			'img/artOS.jpg', 
			];

var links = [
			'https://deaddiskdrive.bandcamp.com/album/expedition-of-corrupted-hard-drive',
			'https://deaddiskdrive.bandcamp.com/album/declassified-space-exploration',
			'https://deaddiskdrive.bandcamp.com/album/bepis',
			'https://deaddiskdrive.bandcamp.com/album/digital-dimensions',
			'https://deaddiskdrive.bandcamp.com/album/neon-tracer',
			'https://deaddiskdrive.bandcamp.com/album/cubism',
			'https://deaddiskdrive.bandcamp.com/album/artificial-os',
			];

var descriptions = [
			"Expedition of Corrupted Hard Drive - this is my first album, it is an ambient/harsh-noise album that primarily focuses on dark emotions and glitchy soundscapes. Released in mid-2017 as Dead Disk Drive",
			"Declassified Space Exploration - this is my second album, it is an ambient mellow album that focuses on a spaceship that takes a journey accross the solar system. Released in early 2018 as Dead Disk Drive",
			"Crystal Bepis - this is my third album, released under a new alias. It is a vaporwave/vaportrap album with a faster temp, an emphasis on drums, and aquatic synths. Released in mid-2018 as Corrupted Data Corp",
			"Digital Dimensions - this is my fourth album, inspired by 80's soundtracks, retro technology, and a heavier emphasis on emotional synthesizer-driven pads and notes. Released in mid-2018 as Dead Disk Drive",
			"Neon Tracer - this is my fifth album, which draws heavily from the Blade Runner soundtrack and other cyberpunk media. It is designed to be the soundtrack for a non-existant film. Released in mid-2018 as Dead Disk Drive",
			"Cubism - this is my sixth album, (more of an EP). It was an experimental ambient project, which focuses on long emotional pad-synths and glitchy electronica rhythms. Released in late 2018 as Dead Disk Drive",
			"Artificial OS - this is my seventh album, under my other alias Corrupted Data Corp. It's a vaporwave/vaportrap album, similar to Bepis, stylized with an old 90's PC operating system. Released in early 2019 as Corrupted Data Corp.",
				];

function changePictureForward(){
	if(i < 7)
	{
		albumLink.href = links[i];
		albumImage.src = albumImg[i];
		albumDescription.innerHTML = descriptions[i];
		i++;
	}
	else
	{
		i = 0;
		albumLink.href = links[i];
		albumImage.src = albumImg[i];
		albumDescription.innerHTML = descriptions[i];
	}
}

function changePictureBackward(){
	if(i > 0)
	{
		i--;
		albumLink.href = links[i];
		albumImage.src = albumImg[i];
		albumDescription.innerHTML = descriptions[i];
	}
	else
	{
		i = 6;
		albumLink.href = links[i];
		albumImage.src = albumImg[i];
		albumDescription.innerHTML = descriptions[i];
	}
}