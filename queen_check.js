
	function queen_check()
	{
		if(cell_set_row == cell_get_row &&(cell_get_col > cell_set_col || cell_get_col < cell_set_col)) //sideways
	   	{
		   //prompt("sideways");
		   	if(check_if_travel_is_empty_sideways())
		   	{
				if(check_if_destination_is_opposite_color())
				{
					eat();	
				}
				else if(check_destination())
				{
					swap();
				}
				else
				{
					invalid_move();
				}
			}
			else
			{
				invalid_move();
			}
			
		 }
		 else if(cell_set_col == cell_get_col && (cell_get_row > cell_set_row || cell_get_row < cell_set_row)) //vertically
		 {
		   		//prompt("vertical");
		   	if(check_if_travel_is_empty_vertical())
		   	{
				if(check_if_destination_is_opposite_color())
				{
					eat();
				}
				else if(check_destination()) //is empty
				{
					swap();			
				}
				else
				{
					invalid_move();
				}
			}
			else
			{
				invalid_move();
			}	 
		  }
		  else if(bishop_moves())
		  {
			if(check_if_travel_is_empty())
			{
				if(check_destination()) // is empty
				{
					swap();	
				}
				else if(check_if_destination_is_opposite_color())
				{
					eat();
				}
				else
				{
					invalid_move();					
				}
			}
			else
			{
				invalid_move();
			}
		}
		else
		{
			invalid_move();
		}
	}
