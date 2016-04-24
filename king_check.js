

	function king_check()
	{
			if(moves_king() && check_destination())  //move is valid & dest is empty
			{
				swap();
			}
			else if(moves_king() && check_if_destination_is_opposite_color())  //move valid and dest is opponent
			{
				eat();
			}
	}
	
	function moves_king()
	{
		 var temp1 = cell[cell_set_row][cell_set_col];
		 
		 if((cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col) ||  	//D
			(cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col) || 	//U
			(cell_set_row == cell_get_row && cell_get_col == cell_set_col -1) ||  	//L
			(cell_set_row == cell_get_row && cell_get_col == cell_set_col +1) ||  	//R
			(cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col -1) ||  //Diagonal
			(cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col -1) ||  //Diagonal
			(cell_set_row == cell_get_row -1 && cell_get_col == cell_set_col +1) ||  //Diagonal
			(cell_set_row == cell_get_row +1 && cell_get_col == cell_set_col +1))    //Diagonal
			return true;
		else
			return false;		 
	}
