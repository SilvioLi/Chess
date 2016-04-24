	function check_destination() //checks if the destination is empty or not
	{
		var temp_pawn = cell[cell_set_row][cell_set_col];
		var content = temp_pawn.textContent;

		if(content == String.fromCharCode(160))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	function check_if_black(row,col)
	{
		var b = cell[row][col];

		var content = b.textContent; //get text of cell clicked
		var c = content.charCodeAt(0);
		  
		switch(c)
		{
			case 9818:
			case 9819:
			case 9820:
			case 9821:
			case 9822:
			case 9823:
					return true;
			default:
				    return false;	
		}
	}
	
	function check_if_white()
	{
		var b = cell[cell_set_row][cell_set_col];

		var content = b.textContent; //get text of cell clicked
		var c = content.charCodeAt(0);
		  
		switch(c)
		{
			case 9812:
			case 9813:
			case 9814:
			case 9815:
			case 9816:
			case 9817:
					return true;
			default:
				    return false;	
		}
	}

	
	function check_if_destination_is_opposite_color()
	{
			  var get_color = "";
			  var set_color = "";

			  //get
			  if(check_if_black(cell_get_row,cell_get_col))
			  {				  	
			  	get_color = "black";
			  }
			  else
			  {
			  	get_color = "white";
			  }
			  //set
			  if(check_if_black(cell_set_row,cell_set_col))
			  {
			  	set_color = "black";
			  }
			  else
			  {
			  	set_color = "white";
			  }
			  
			  if(get_color == set_color)
			  {
			  	return false;
			  }
			  else
			  {
			  	return true;
			  }
	}
	
	function swap() //destination is empty;
	{
		temp = cell[cell_set_row][cell_set_col];	
		piece_set = temp.textContent;
		cell[cell_get_row][cell_get_col].innerHTML = piece_set;
		cell[cell_set_row][cell_set_col].innerHTML = piece_get;
		count = count ^ 1;
		cell[cell_get_row][cell_get_col].style.backgroundColor = store_color;
		count_moves();
	}

	function eat()
	{
		var temp = cell[cell_set_row][cell_set_col];	
		piece_set = temp.textContent;	
		cell[cell_get_row][cell_get_col].innerHTML = "&nbsp;";
		cell[cell_set_row][cell_set_col].innerHTML = piece_get;
		cell[cell_get_row][cell_get_col].style.backgroundColor = store_color;
		count_moves();	
		win_check(piece_set);
		count = count ^ 1;

	}
	
	function count_moves()
	{
		if(player_black == 1)
		{
			player2_count++;
			document.getElementById("p2Color").style.color = "white";
			document.getElementById("p1Color").style.color = "#FFD700";
			document.getElementById("p2count").textContent = "Count: " + player2_count;
			stop_black_time();
			set_white_time();
			document.getElementById(player_countdown).innerHTML = "Countdown: 05:00";
			document.getElementById(player_countdown).style.color = "white";
			clearInterval(change_color);
			stop_countdown();
			player_countdown = "p1Countdown";
			set_countdown();

			
		}
		if(player_white == 1)
		{
			player1_count++;
			document.getElementById("p2Color").style.color = "#FFD700";
			document.getElementById("p1Color").style.color = "white";
			document.getElementById("p1count").textContent = "Count: " + player1_count;	
			stop_white_time();
			set_black_time();
			document.getElementById(player_countdown).innerHTML = "Countdown: 05:00";
			document.getElementById(player_countdown).style.color = "white";
			clearInterval(change_color);
			stop_countdown();
			player_countdown = "p2Countdown";
			set_countdown();
		}
	}
	
	function win_check(piece)
	{
		piece = piece.charCodeAt(0);
			if(piece == "9813")
			{
				var winner = document.getElementById("p2name").value;
				var moves = player2_count;
				player_win_store(winner, moves, black_total_time);
				player_show_placing(winner, moves, black_total_time);
				disable();
				fireworks_interval();
				status =0;
				clearInterval(countdown);
				clearInterval(Black_timer);
				clearInterval(white_timer);
			}
			if(piece == "9819")
			{
				var winner = document.getElementById("p2name").value;
				var moves = player2_count;
				player_win_store(winner, moves, white_total_time);
				player_show_placing(winner, moves, white_total_time);
				disable();
				fireworks_interval();
				status =0;
				clearInterval(countdown);
				clearInterval(Black_timer);
				clearInterval(white_timer);		
			}	
	}
	var stop=0;
	function fireworks_interval()
	{
		myFW.start();
		stop = setInterval("fireworks_stop()",6000);
	}
	
	function fireworks_stop()
	{
		myFW.stop();
		clearInterval(stop);
	}
	
	
	function disable()
	{
		$(document).ready(function(){ $('.white').removeAttr('onclick');});
		$(document).ready(function(){ $('.black').removeAttr('onclick');});
	}
	

	
