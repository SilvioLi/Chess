
	function rook_check()
	{
		if(cell_set_row == cell_get_row &&(cell_get_col > cell_set_col || cell_get_col < cell_set_col)) //sideways
	   	   {
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
			}		
		   }
		  else if(cell_set_col == cell_get_col && (cell_get_row > cell_set_row || cell_get_row < cell_set_row)) //vertically
		   {
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
				}
			}
	}
	
	function check_if_travel_is_empty_sideways()
	{
		var count_not_empty = 0;
		var column = cell_get_col; //destination
		var distance = Math.abs(cell_set_col - cell_get_col) -1;//-1 ignore the destination cell
		//prompt("yolo");
		if(cell_set_col > cell_get_col)
		{
			for(var i = 0; i < distance; i++) 
			{
			  column++;
			  var temp = cell[cell_get_row][column];
		 	  var content = temp.textContent;
		 	  	//prompt(content);
		 	  	if(content == String.fromCharCode(160))
				{
					//does nothing
				}
				else
				{
					count_not_empty++;
				}

			}
		}
		else
		{
			for(var i = 0; i < distance; i++)
			{
			  column--;
			  var temp = cell[cell_get_row][column];
		 	  var content = temp.textContent;
		 	  //prompt(content);
		 	  	if(content == String.fromCharCode(160))
				{
					//does nothing
				}
				else
				{
					count_not_empty++;
				}			
			}
		}
		
		//prompt("yolo");
		if(count_not_empty > 0)
		{
			//prompt("not empty");
			return false;
		}
		else
		{
			//prompt("empty");
			return true;
		}

	}
	
	function check_if_travel_is_empty_vertical()
	{
		var count_not_empty = 0;
		var row = cell_get_row; //destination
		var distance = Math.abs(cell_set_row - cell_get_row) -1;//-1 ignore the destination cell
		//prompt("yolo");
		if(cell_set_row > cell_get_row)
		{
			for(var i = 0; i < distance; i++) 
			{
			  row++;
			  var temp = cell[row][cell_get_col];
		 	  var content = temp.textContent;
		 	  	//prompt(content);
		 	  	if(content == String.fromCharCode(160))
				{
					//does nothing
				}
				else
				{
					//prompt("not empty");
					count_not_empty++;
				}

			}
		}
		else
		{
			for(var i = 0; i < distance; i++)
			{
			  row--;
			  var temp = cell[row][cell_get_col];
		 	  var content = temp.textContent;
		 	  //prompt(content);
		 	  	if(content == String.fromCharCode(160))
				{
					//does nothing
				}
				else
				{
					count_not_empty++;
				}			
			}
		}
		
		//prompt("yolo");
		if(count_not_empty > 0)
		{
			//prompt("not empty");
			return false;
		}
		else
		{
			//prompt("empty");
			return true;
		}
	}