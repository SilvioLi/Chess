	function process() 
	{
          $.post("score_data.php", {"someNumber":Math.random()}, handleServerResponseScore);
    }

    function handleServerResponseScore(data, theStatus) 
    {
          if (theStatus == "success")
          $("#score").html(data);
    }

	function player_win_store(winner,moves,time)
	{
		  $.post("winner_data.php", { "player":winner,
                                      "moves": moves,
                                      "time": time,
									 "someNumber":Math.random()}, handleServerResponse);	
	}
	
	function handleServerResponse(data, theStatus) 
    {
    	if (theStatus == "success")
			process();
    }
    
    function player_show_placing(winner,moves,time)
	{
		$.post("standings_data.php", { "player":winner,
                                      "moves": moves,
                                      "time": time,
									 "someNumber":Math.random()}, handleServerResponse2);	
	}
	
	function handleServerResponse2(data, theStatus) 
    {
    	if (theStatus == "success")
			$("#score2").html(data);
    }