
	
	function knight_check()
	{	
		if(knight_moves())
		{
			if(check_destination()) //if empty
			{
				swap();
			}
			else if(check_if_destination_is_opposite_color())
			{
				eat();
			}			
		}			   
	}
	
	function knight_moves()
	{
		 var temp1 = cell[cell_set_row][cell_set_col];
		 
		 if((cell_set_row == cell_get_row -2 && cell_get_col == cell_set_col -1) ||
			(cell_set_row == cell_get_row -2 && cell_get_col == cell_set_col +1) ||
			(cell_set_row == cell_get_row +2 && cell_get_col == cell_set_col -1) ||
			(cell_set_row == cell_get_row +2 && cell_get_col == cell_set_col +1) ||
			(cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col -2) ||
			(cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col -2) ||
			(cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col +2) ||
			(cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col +2))
			return true;
		else
			return false;		 
	}
	