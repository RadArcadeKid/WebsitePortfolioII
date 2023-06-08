var timersImg = [
			'img/timers/timer1.png', 
			'img/timers/timer2.png', 
			'img/timers/timer3.png', 
			'img/timers/timer4.png', 
			'img/timers/timer5.png', 
			'img/timers/timer6.png',
			'img/timers/timer7.png',
			'img/timers/timer8.png',
			'img/timers/timer9.png', 
			'img/timers/timer10.png',
			];

function clock(){
    document.getElementById("year").innerHTML = "2016";

	var today;
	today = new Date();

	var year;
	year = today.getFullYear();
	//console.log(year);

	var month;
	month = today.getMonth();
	//console.log(month);

	var monthOfTheYear;
	monthOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var date;
	date = today.getDate();
	//console.log(date);

	var day;
	day = today.getDay();
	//console.log(day);

	var dayOfTheWeek;
	dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


	var hour;
	hour = today.getHours();
	//console.log(hour);

	var minute;
	minute = today.getMinutes();
	//console.log(minute);

	var second;
	second = today.getSeconds();
	//console.log(second);


	document.getElementById("year").innerHTML = year;
	document.getElementById("month").innerHTML = monthOfTheYear[month];
	document.getElementById("date").innerHTML = date;
	document.getElementById("day").innerHTML = dayOfTheWeek[day];

	
	var hourColor;
	hourColor = Math.round(hour * 11.086);
	//console.log(hourColor);


	if(hour >= 12){
			document.getElementById("meridiem").innerHTML = "pm";
	}
	else{
		document.getElementById("meridiem").innerHTML = "am";
	}

	if(hour > 12){
		hour = hour - 12;
	}

	

	if(minute < 10){
		minute = "0" + minute;
	}

	if(second < 10){
		second = "0" + second;	
	}

	document.getElementById("hour").innerHTML = hour;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;

	var minuteColor;
	minuteColor = Math.round(minute * 4.322);
	//console.log(minuteColor);

	var secondColor;
	secondColor = Math.round(second * 4.322);
	//console.log(secondColor);

	document.body.style.backgroundColor = "rgb(" + hourColor + "," + minuteColor + "," + secondColor + ")";
}

clock();
setInterval(clock, 10);


var timSet = document.getElementById("photos");
var i = 0; 

function test()
{
	if(i<=10)
	{
		console.log(i);
		timSet.src = timersImg[i];
		i++;
	}
	else 
	{
		i = 0;
	}
}




