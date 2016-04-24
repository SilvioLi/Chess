
	
	function check_Piece()
	{

		for(var i =0; i < names.length; i++)
		{								
			if(names[i][2] == check_get)
			{	
				return name_Piece(names[i][0]);
			}
		}
	}
	
		
	function check_start_colour()
	{

		for(var i =0; i < names.length; i++)
		{								
			if(names[i][2] == check_get)
			{	
				return names[i][1];
			}
		}
	}
	
	function name_Piece(piece)
	{
		switch(piece)
		{
			case "pawn":
					return pawn_check();
					break;
			case "knight":
					return knight_check();
					break;
			case "bishop":
					return bishop_check();
					break;
			case "king":
					return king_check();
					break;
			case "queen":
					return queen_check();
					break;
			case "rook":
			        return rook_check();
					break;	
			default:
					return false;

		}
	}
	