
function Player_Info()
{
	var p1 = document.getElementById("p1name").value;
	p1 = p1.trim();
	var p2 = document.getElementById("p2name").value;
	p2 = p2.trim();
	var p1_check = true;
	var p2_check = true;
	
	if(p2 == "")
	{
		document.getElementById("p2name").value = "";
		p2_check = false;
		$("#p2name").focus();
		var error2 = "Enter a name";
		error2 = error2.fontcolor("red");
		document.getElementById("error2").innerHTML = error2;
	}
	else
	{
		document.getElementById("error2").innerHTML = "&nbsp;";
	}
	
	if(p1 == "")
	{
		document.getElementById("p1name").value = "";
		p1_check = false;	
    	$("#p1name").focus();
    	var error1 = "Enter a name";
		error1 = error1.fontcolor("red");
		document.getElementById("error1").innerHTML = error1;
		
	}
	else
	{
		document.getElementById("error1").innerHTML = "&nbsp;";
	}
	
	if(p1_check == true && p2_check == true)
	{
		document.getElementById("p1name").disabled = true;
		document.getElementById("p2name").disabled = true;
		document.getElementById("start").disabled = true;
		setup();
	}
}