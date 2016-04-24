var left_up = false;
var left_down = false;
var right_up = false;
var right_down = false;

function bishop_check()
{
	
		if(bishop_moves())
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
			}
		}
}

function bishop_moves()
{
	left_up = false;
	left_down = false;
	right_up = false;
	right_down = false;

	if((cell_get_row > cell_set_row) && (cell_get_col > cell_set_col)) //left up
	{
		//prompt("left up");
		left_up = true;
	}
	else if ((cell_get_row > cell_set_row) && (cell_get_col < cell_set_col)) //right up
	{
		//prompt("right up first");
		right_up = true;	
	}
	else if((cell_get_row < cell_set_row) && (cell_get_col > cell_set_col)) //left down
	{
		//prompt("left down");
		left_down = true;
	}
	else if((cell_get_row < cell_set_row) && (cell_get_col < cell_set_col)) //right down
	{
		//prompt("right down");
		right_down = true;
	}
	
	if(left_down == true || left_up == true || right_down == true || right_up == true)
	{
		
		var r = Math.abs(cell_get_row - cell_set_row);
		var c = Math.abs(cell_get_col - cell_set_col);
			
		if(r == c) //diagonal move
		{
			//prompt("true");
			return true;
		}
		else
		{
			//show an X
			return false;
		}
	}
	else
	{
		//show an X
		return false;	
	}
}

function check_if_travel_is_empty()
{
	var count_not_empty = 0;
	var column = cell_get_col;
	var row = cell_get_row;
	var distance = Math.abs(cell_get_row - cell_set_row) -1;
	if(left_up == true)
	{
		//prompt("left up");
		for(var i = 0; i < distance; i++)
		{
			column--;
			row--;
			var temp_bishop = cell[row][column];
		 	var content = temp_bishop.textContent;
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
	else if(right_up == true)
	{
		//prompt("right up");
		for(var i = 0; i < distance; i++)
		{
			column++;
			row--;
			var temp_bishop = cell[row][column];
		 	var content = temp_bishop.textContent;
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
	else if(left_down == true)
	{
		//prompt("left down");
		for(var i = 0; i < distance; i++)
		{
			column--;
			row++;
			var temp_bishop = cell[row][column];
		 	var content = temp_bishop.textContent;
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
	else if(right_down == true)
	{
		//prompt("right down");
		for(var i = 0; i < distance; i++)
		{
			column++;
			row++;
			var temp_bishop = cell[row][column];
		 	var content = temp_bishop.textContent;
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
		return false;
	}
	
	if(count_not_empty > 0)
	{
		return false;
	}
	else
	{
		return true;
	}
	
	
}