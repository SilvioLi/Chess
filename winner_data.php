<?php
$con= mysqli_connect("ec2-52-5-252-78.compute-1.amazonaws.com","s_user17","s_user17","s_user17");
// Check connection
        if (mysqli_connect_errno()){
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
        } 
        else 
        {
        	    $player = $_POST["player"];
  				$moves = $_POST["moves"];
  				$time = $_POST["time"];
				
        		$count =1;
                $sql = "Insert into Players(name,moves,Time) values('".$player."',".$moves.",'".$time."')";
                $result = mysqli_query($con,$sql);
        }

?>