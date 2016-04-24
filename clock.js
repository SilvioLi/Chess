
var white_timer;
var White_seconds = 0;
var White_minutes =0;
var White_hours =0;
var white_total_time =0;

var Black_timer;
var Black_seconds = 0;
var Black_minutes =0;
var Black_hours =0;
var black_total_time = 0;
var countdown;
var countdown_sec = 0;
var countdown_min = 5;
var change_color;
var change_color_bool = 0;
var countd = "";


function set_white_time()
{
	white_timer = setInterval("white_time()",1000);
}

function white_time()
{
	var seconds = 0;
	var minutes =0;
	var hours = 0;
	White_seconds++;
	
	if(White_seconds == 60)
	{
		White_seconds = 0;
		White_minutes++;
	}	
	
	if(White_minutes == 60)
	{
		White_minutes = 0;
		White_hours++;
	}
	
	if(White_seconds < 10)
	{
		 seconds = "0" + White_seconds;
	}
	else
	{
		seconds = White_seconds;
	}
	if(White_minutes < 10)
	{
		minutes = "0" + White_minutes;
	}
	else
	{
		minutes = White_minutes;
	}
	if(White_hours < 10)
	{
		hours = "0" + White_hours; 
	}
	else
	{
		hours = White_hours;
	}
	
	white_total_time = hours + ":" + minutes + ":" + seconds; 
	
	document.getElementById("p1time").innerHTML = white_total_time;
}

function stop_white_time()
{
	clearInterval(white_timer);
}

function set_black_time()
{
	Black_timer = setInterval("black_time()",1000);
}

function black_time()
{
	
	var seconds = 0;
	var minutes =0;
	var hours = 0;
	Black_seconds++;
	
	if(Black_seconds == 60)
	{
		Black_seconds = 0;
		Black_minutes++;
	}	
	
	if(Black_minutes == 60)
	{
		Black_minutes = 0;
		Black_hours++;
	}
	
	if(Black_seconds < 10)
	{
		 seconds = "0" + Black_seconds;
	}
	else
	{
		seconds = Black_seconds;
	}
	if(Black_minutes < 10)
	{
		minutes = "0" + Black_minutes;
	}
	else
	{
		minutes = Black_minutes;
	}
	if(Black_hours < 10)
	{
		hours = "0" + Black_hours; 
	}
	else
	{
		hours = Black_hours;
	}
	
	black_total_time = hours + ":" + minutes + ":" + seconds; 
	
	document.getElementById("p2time").innerHTML = black_total_time;
}

function stop_black_time()
{
	clearInterval(Black_timer);
}

function set_countdown()
{	
	countdown = setInterval("count_down()",1000);
}
function stop_countdown()
{
	countdown_min = 5;
	countdown_sec = 0;
	clearInterval(countdown);
}

function count_down()
{
	var sec;
	var mins;
	if(countdown_sec == 0)
	{
		countdown_min--;
		countdown_sec = 59;
	}
	else
	{
		countdown_sec--;
	}
	
	if(countdown_sec <10)
	{
		sec = "0" + countdown_sec;
	}
	else
	{
		sec = countdown_sec;
	}
	if(countdown_min <10)
	{
		mins = "0" + countdown_min;
	}
	else
	{
		mins = countdown_min;
	}
	countd = mins + ":" +  sec;
	
	if(countd == "00:30")
	{
		change_color = setInterval("change_countdown_color_yellow()",500);
	}
	if(countd == "00:20")
	{
		clearInterval(change_color);
		change_color = setInterval("change_countdown_color_orange()",500);
	}
	if(countd == "00:10")
	{
		clearInterval(change_color);
		change_color = setInterval("change_countdown_color_red()",500);
	}
	if(countd == "00:00")
	{
		clearInterval(change_color);
		document.getElementById(player_countdown).style.color = "white";
	}
	
	if(countd == "00:00")
	{
		if(player_countdown == "p1Countdown")
		{
				var winner = document.getElementById("p1name").value;
				var moves = player1_count;
				player_win_store(winner, moves, black_total_time);
				player_show_placing(winner, moves, white_time);
				disable();
				fireworks_interval();	
				status =0;	
				clearInterval(countdown);
				clearInterval(Black_timer);
				clearInterval(white_timer);
		}
		else
		{
				var winner = document.getElementById("p2name").value;
				var moves = player2_count;
				player_win_store(winner, moves, black_total_time);
				player_show_placing(winner, moves, black_time);
				disable();
				fireworks_interval();
				status =0;
				clearInterval(countdown);
				clearInterval(Black_timer);
				clearInterval(white_timer);
		}
	}
	countd = "Countdown: " +  mins + ":" +  sec;
	document.getElementById(player_countdown).innerHTML = countd;
}

function change_countdown_color_yellow()
{	
	if(change_color_bool == 0)
	{
		document.getElementById(player_countdown).style.color = "yellow";
		change_color_bool ^= 1;
	}
	else
	{
		document.getElementById(player_countdown).style.color = "white";
		change_color_bool ^= 1;
	}

}
function change_countdown_color_orange()
{	
	if(change_color_bool == 0)
	{
		document.getElementById(player_countdown).style.color = "orange";
		change_color_bool ^= 1;
	}
	else
	{
		document.getElementById(player_countdown).style.color = "white";
		change_color_bool ^= 1;
	}
}
function change_countdown_color_red()
{	
	if(change_color_bool == 0)
	{
		document.getElementById(player_countdown).style.color = "red";
		change_color_bool ^= 1;
	}
	else
	{
		document.getElementById(player_countdown).style.color = "white";
		change_color_bool ^= 1;
	}
}


