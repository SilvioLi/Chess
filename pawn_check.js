
	
	function pawn_check()
	{ 
		bool = false;
		if(check_pawn_white()) //pawn is white
		{
			
	   		if(first_move_white())
	   		{
	   			bool = true;
	   		}
	   
	  		 if(bool == true)
	   		{																 //needs to check empty spaces for all cells 																					in between source and destination
	   				if((cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col && check_destination() ) || 
	   					(cell_set_row == cell_get_row +2 && cell_get_col == cell_set_col && check_destination() && check_jump_spot_for_white_pawn()))
	   				{	   			
						swap();
	   				}
	  		 }
	   		//after first move
	  		 else if((cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col && check_destination() ))
	   			{ 
			   swap();
	   			}
	  		 //diagonal
	  		 else
	  		 {
	  		 	diagonal_white();
	  		 }

	  			 	
	    }
	    else //pawn is black
	    {
			if(first_move_black())
			{
				bool = true;
			}	
	   
	  		 if(bool == true)
	   		{																 //needs to check empty spaces for all cells 																					in between source and destination
	   				if((cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col && check_destination() ) || 
	   					(cell_set_row == cell_get_row -2 && cell_get_col == cell_set_col && check_destination() && check_jump_spot_for_black_pawn()))
	   				{	   			
						swap();
	   				}
	   			    else
	   			    {
	   			    	diagonal_black()
	   			    }
	  			    	
	  		 }
	   		//after first move
	  		 else if((cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col && check_destination() ))
	   			{ 
			     swap();
	   			}
	  		 //diagonal
	  		 else
	  		 {
	  		 	diagonal_black();  		 
	  		 }  					
		}
	  
	}
	
	function diagonal_white()
	{
			if((cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col -1 
	           	&& !check_destination() && !check_if_white()) || 
	   		    (cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col +1 
	   		   	&& !check_destination() && !check_if_white()))
	   		    {
					eat();
				}
	}
	
	function diagonal_black()
	{
			 if((cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col +1 
	           	&& !check_destination() && check_if_white()) || 
	   		  	(cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col -1 
	   		   	&& !check_destination() && check_if_white()))
	  		{
				eat();
	   		}	
	}
	
	function check_jump_spot_for_white_pawn()
	{
		  var temp_pawn = cell[cell_set_row -1][cell_set_col];
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
	
	function check_jump_spot_for_black_pawn()
	{
		  var temp_pawn = cell[cell_set_row +1][cell_set_col];
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
	

	
	function first_move_white() //check if its the first move, if yes return true, else false
	{
		var cell_id = cell[cell_get_row][cell_get_col].id;
		switch(cell_id)
		{
			case "cell10":
			case "cell11":
			case "cell12":
			case "cell13":
			case "cell14":
			case "cell15":
			case "cell16":
			case "cell17":
					return true;
			default:
					return false;
		}
	}
	
	function first_move_black() //check if its the first move, if yes return true, else false
	{
		var cell_id = cell[cell_get_row][cell_get_col].id;
		switch(cell_id)
		{
			case "cell60":
			case "cell61":
			case "cell62":
			case "cell63":
			case "cell64":
			case "cell65":
			case "cell66":
			case "cell67":
					return true;
			default:
					return false;
		}	
	}
	
	function check_pawn_white()
	{
		var b = cell[cell_get_row][cell_get_col];
		var content = b.textContent; //get text of cell clicked
		var c = content.charCodeAt(0);

		switch(c)
		{
			case 9817:
					return true;
			default:
				    return false;	
		}
	}
	
	

